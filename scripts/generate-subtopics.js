const fs = require('fs-extra');
const path = require('path');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt({ html: true, breaks: true });

const articlesDir = path.join(__dirname, '../src/articles');
const outputFile = path.join(__dirname, '../data/subtopics.js');

console.log('🚀 Generating new subtopics from Markdown...\n');

// Read existing subtopics.js
let existingSubtopics = {};
let existingFileText = '';

try {
  existingFileText = fs.readFileSync(outputFile, 'utf-8');
  
  // Extract the entire object - match from opening { to closing };
  // Your file format: const subtopics = { ... };
  const startMatch = existingFileText.indexOf('const subtopics = {');
  
  if (startMatch !== -1) {
    // Find the matching closing brace
    let braceCount = 0;
    let inString = false;
    let stringChar = null;
    let escaped = false;
    let objectStart = existingFileText.indexOf('{', startMatch);
    let objectEnd = -1;
    
    for (let i = objectStart; i < existingFileText.length; i++) {
      const char = existingFileText[i];
      
      // Handle string escaping
      if (escaped) {
        escaped = false;
        continue;
      }
      
      if (char === '\\') {
        escaped = true;
        continue;
      }
      
      // Track if we're inside a string
      if (char === '"' || char === "'" || char === '`') {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (char === stringChar) {
          inString = false;
          stringChar = null;
        }
        continue;
      }
      
      // Only count braces outside of strings
      if (!inString) {
        if (char === '{') braceCount++;
        if (char === '}') {
          braceCount--;
          if (braceCount === 0) {
            objectEnd = i;
            break;
          }
        }
      }
    }
    
    if (objectEnd !== -1) {
      const objectString = existingFileText.substring(objectStart, objectEnd + 1);
      
      // Use Function instead of eval (safer)
      try {
        existingSubtopics = (new Function('return ' + objectString))();
        console.log(`✓ Successfully loaded ${Object.keys(existingSubtopics).length} existing subtopic(s)`);
      } catch (parseError) {
        console.log(`⚠️  Error parsing existing file: ${parseError.message}`);
        console.log(`⚠️  Will create backup and proceed with caution`);
      }
    }
  }
} catch (err) {
  console.log(`⚠️  Error reading existing file: ${err.message}`);
}

// Create backup
if (fs.existsSync(outputFile) && Object.keys(existingSubtopics).length > 0) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFile = `${outputFile}.backup-${timestamp}`;
  fs.copyFileSync(outputFile, backupFile);
  console.log(`✓ Created backup: ${path.basename(backupFile)}\n`);
}

// Process Markdown files
if (!fs.existsSync(articlesDir)) {
  console.log(`\n❌ Articles directory not found: ${articlesDir}`);
  console.log(`   Create it with: mkdir -p src/articles`);
  process.exit(1);
}

const mdFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'));
console.log(`Found ${mdFiles.length} Markdown article(s)\n`);

const newSubtopics = {};

mdFiles.forEach(file => {
  console.log(`Processing: ${file}`);
  const filePath = path.join(articlesDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    console.log(`  ⚠️  Skipping - no frontmatter\n`);
    return;
  }
  
  const [, frontmatter, content] = match;
  
  const metadata = {};
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      metadata[key] = value;
    }
  });
  
  if (metadata.subid) {
    newSubtopics[metadata.subid] = {
      title: metadata.title || 'Untitled',
      content: md.render(content)
    };
    console.log(`  ✓ Converted to HTML`);
    console.log(`  ✓ Will add/update: "${metadata.subid}"\n`);
  }
});

// MERGE
const mergedSubtopics = {
  ...existingSubtopics,
  ...newSubtopics
};

console.log(`📊 Summary:`);
console.log(`   Existing entries preserved: ${Object.keys(existingSubtopics).length}`);
console.log(`   New/updated from Markdown: ${Object.keys(newSubtopics).length}`);
console.log(`   Total in output: ${Object.keys(mergedSubtopics).length}\n`);

// Check if we're about to lose data
if (Object.keys(existingSubtopics).length > 50 && Object.keys(mergedSubtopics).length < Object.keys(existingSubtopics).length) {
  console.log(`\n⚠️  WARNING: Output has FEWER entries than original!`);
  console.log(`   Original: ${Object.keys(existingSubtopics).length}`);
  console.log(`   Output: ${Object.keys(mergedSubtopics).length}`);
  console.log(`\n❌ ABORTING - This would lose data!`);
  console.log(`   Check the backup file and try again.\n`);
  process.exit(1);
}

// Format function
function formatSubtopics(obj) {
  const entries = [];
  
  Object.keys(obj).forEach(key => {
    const { title, content } = obj[key];
    
    function escapeForTemplate(str) {
      return str
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$');
    }
    
    function escapeForDoubleQuotes(str) {
      return str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');
    }
    
    const safeTitle = escapeForDoubleQuotes(title);
    
    // SMART INDENTATION PRESERVATION
    const contentLines = content.split('\n');
    
    // Find minimum indentation (ignore empty lines)
    let minIndent = Infinity;
    contentLines.forEach(line => {
      if (line.trim().length > 0) {
        const leadingSpaces = line.match(/^(\s*)/)[1].length;
        minIndent = Math.min(minIndent, leadingSpaces);
      }
    });
    
    if (minIndent === Infinity) minIndent = 0;
    
    // Remove common indentation, then add our base indent (6 spaces)
    const formattedContent = contentLines
      .map(line => {
        if (line.trim().length === 0) return ''; // Empty line
        
        // Remove the common indent, keep the rest
        const relativeIndent = line.substring(minIndent);
        
        // Add base 6-space indent + preserved relative indent
        return `      ${escapeForTemplate(relativeIndent)}`;
      })
      .filter((line, index, arr) => {
        // Remove leading/trailing empty lines
        if (index === 0 || index === arr.length - 1) {
          return line.trim().length > 0;
        }
        return true;
      })
      .join('\n');
    
    // Build entry
    const entry = `  "${key}": {
    title: "${safeTitle}",
    content: \`
${formattedContent}
    \`
  }`;
    
    entries.push(entry);
  });
  
  return '{\n' + entries.join(',\n\n') + '\n}';
}



// Generate file
const fileContent = `// AUTO-GENERATED FILE - Contains ${Object.keys(mergedSubtopics).length} subtopics
// Generated: ${new Date().toISOString()}
// Run 'npm run generate' to regenerate
//
// This file contains:
//   - ${Object.keys(existingSubtopics).length} existing hand-written entries
//   - ${Object.keys(newSubtopics).length} Markdown-generated entries

const subtopics = ${formatSubtopics(mergedSubtopics)};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { subtopics };
}
`;

fs.writeFileSync(outputFile, fileContent, 'utf-8');

console.log(`✨ Success! Written to: data/subtopics.js`);
console.log(`   Total entries: ${Object.keys(mergedSubtopics).length}\n`);

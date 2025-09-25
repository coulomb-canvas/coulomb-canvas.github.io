function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const topicId = getQueryParam("topic");
const topic = topics.find(t => t.id === topicId);

if (!topic || topic.id == "e-m" || topic.id == "quantum1" || topic.id == "quantum2" || topic.id == "astro") {
  document.getElementById("topic-title").textContent = "Sorry m8, I ain't done with this one yet...";
} else {
  document.getElementById("topic-title").textContent = topic.title.toUpperCase();

    const subtopicList = document.getElementById("subtopic-list");

    topic.subtopics.forEach((subtopic) => {
      const link = document.createElement("a");
      link.href = `subtopic.html?subid=${subtopic.subid}&topic=${topic.id}`;
      link.classList.add("subtopic-image-link");

      const img = document.createElement("img");
      img.src = `images/Avatar/Topics 1/${topic.id} subtopics/${subtopic.subid}.png` ? `images/Avatar/Topics 1/${topic.id} subtopics/${subtopic.subid}.png` : "images/Avatar/Topics 1/Placeholder.png"; // fallback
      img.alt = subtopic.title;
      img.classList.add("subtopic-image");

      link.appendChild(img);
      subtopicList.appendChild(link);
    });
  }











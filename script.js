function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const topicId = getQueryParam("topic");
const topic = topics.find(t => t.id === topicId);

// || topic.id == "quantum2" || topic.id = "e-m"
if (!topic  || topic.id == "quantum2" || topic.id == "astro") {
  document.getElementById("topic-title").textContent = "Sorry m8, I ain't done with this one yet...";
} else {
  document.getElementById("topic-title").textContent = topic.title.toUpperCase();

    const subtopicList = document.getElementById("subtopic-list");

    topic.subtopics.forEach((subtopic) => {
      const link = document.createElement("a");
      link.href = `subtopic.html?subid=${subtopic.subid}&topic=${topic.id}&year=${topic.subyear}`;
      link.classList.add("subtopic-image-link");

      const img = document.createElement("img");
      img.src = `images/Avatar/Topics ${topic.subyear}/${topic.id} subtopics/${subtopic.subid}.png` ? `images/Avatar/Topics ${topic.subyear}/${topic.id} subtopics/${subtopic.subid}.png` : "images/Avatar/Topics 1/Placeholder.png"; // fallback
      img.alt = subtopic.title;
      img.classList.add("subtopic-image");

      link.appendChild(img);
      subtopicList.appendChild(link);
    });
  }











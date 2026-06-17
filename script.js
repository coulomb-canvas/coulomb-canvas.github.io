function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const topicId = getQueryParam("topic");
const topic = topics.find(t => t.id === topicId);

// || topic.id == "quantum2" || topic.id = "e-m"|| topic.id == "quantum2"
if (!topic) {
  document.getElementById("topic-title").textContent = "Sorry m8, I ain't done with this one yet...";
} else {
  document.getElementById("topic-title").textContent = topic.title.toUpperCase();

    const subtopicList = document.getElementById("subtopic-list");
    const overlay = document.getElementById("page-transition");
    const transitionText = document.querySelector(".transition-text");

    const topicMessages = {
    maths2: [
      "Heating things up...",
      "Consulting the laws of thermodynamics...",
      "Entropy is increasing..."
    ],
    stat: [
      "Counting accessible states...",
      "Preparing the Boltzmann factors...",
      "Asking the particles nicely..."
    ],
    qaia1: [
      "Normalising the wavefunction...",
      "Diagonalising the operator...",
      "Please remain in your eigenstate..."
    ]
  };

  function getRandomMessage(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

    topic.subtopics.forEach((subtopic) => {
      const link = document.createElement("a");
      link.href = `subtopic.html?subid=${subtopic.subid}&topic=${topic.id}&year=${topic.subyear}`;
      link.classList.add("subtopic-image-link");

      link.addEventListener("click", (e) => {
        e.preventDefault();

        const chosenSet = topicMessages[topic.id] || ["Loading subtopic..."];
        transitionText.textContent = getRandomMessage(chosenSet);

        overlay.classList.add("active");

        setTimeout(() => {
          window.location.href = link.href;
        }, 1000);
      });

      const img = document.createElement("img");
      img.src = `images/Avatar/Topics ${topic.subyear}/${topic.id} subtopics/${subtopic.subid}.png` ? `images/Avatar/Topics ${topic.subyear}/${topic.id} subtopics/${subtopic.subid}.png` : "images/Avatar/Topics 1/Placeholder.png"; // fallback
      img.alt = subtopic.title;
      img.classList.add("subtopic-image");

      link.appendChild(img);
      subtopicList.appendChild(link);
    });
  }











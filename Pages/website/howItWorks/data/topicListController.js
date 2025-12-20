/* =====================================================
   IMPORT REAL TOPIC DATA
===================================================== */

// Class VIII
import { topics_VIII_mathematics } from "./topics/VIII/topicsVIIImathematics.js";
import { topics_VIII_science } from "./topics/VIII/topicsVIIIscience.js";
import { topics_VIII_social_science } from "./topics/VIII/topicsVIIIsocialScience.js";

// Class X
import { topics_X_mathematics } from "./topics/X/topicsXmathematics.js";
import { topics_X_science } from "./topics/X/topicsXscience.js";
import { topics_X_social_science } from "./topics/X/topicsXsocialScience.js";

/* =====================================================
   DOM REFERENCES
===================================================== */

const classSelect = document.getElementById("classSelect");
const subjectSelect = document.getElementById("subjectSelect");
const chapterSelect = document.getElementById("chapterSelect");

const topicListEl = document.getElementById("topicListDesktop");
const topicContentEl = document.getElementById("topicContentDesktop");

/* =====================================================
   TOPIC REGISTRY (Explicit & Readable)
===================================================== */

const TOPIC_MAP = {
  VIII: {
    mathematics: topics_VIII_mathematics,
    science: topics_VIII_science,
    "social-science": topics_VIII_social_science,
  },
  X: {
    mathematics: topics_X_mathematics,
    science: topics_X_science,
    "social-science": topics_X_social_science,
  },
};

/* =====================================================
   HELPERS
===================================================== */

function clearTopics() {
  topicListEl.innerHTML = "";
  topicContentEl.innerHTML = "";
}

function renderTopicList(topicObject) {
  clearTopics();

  Object.keys(topicObject).forEach((chapterName) => {
    const item = document.createElement("div");
    item.className = "form-check mb-2";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    checkbox.checked = true;

    const label = document.createElement("label");
    label.className = "form-check-label fw-semibold";
    label.textContent = chapterName;

    item.appendChild(checkbox);
    item.appendChild(label);
    topicListEl.appendChild(item);

    // Render content immediately (single-topic model for now)
    renderTopicContent(topicObject[chapterName]);
  });
}

function renderTopicContent(blocks) {
  blocks.forEach((block) => {
    if (block.type === "heading") {
      const h = document.createElement("h6");
      h.className = "fw-bold mt-3";
      h.textContent = block.text;
      topicContentEl.appendChild(h);
    }

    if (block.type === "description") {
      const p = document.createElement("p");
      p.className = "small text-muted";
      p.textContent = block.text;
      topicContentEl.appendChild(p);
    }
  });
}

/* =====================================================
   CHAPTER SELECTION HANDLER
===================================================== */

chapterSelect.addEventListener("change", () => {
  const selectedClass = classSelect.value;
  const selectedSubject = subjectSelect.value;
  const selectedChapter = chapterSelect.value;

  clearTopics();

  if (!TOPIC_MAP[selectedClass] || !TOPIC_MAP[selectedClass][selectedSubject])
    return;

  const topicData = TOPIC_MAP[selectedClass][selectedSubject];

  if (!topicData[selectedChapter]) return;

  // Render ONLY the selected chapter
  renderTopicList({ [selectedChapter]: topicData[selectedChapter] });
});

/* =====================================================
   HOW IT WORKS — MAIN PAGE CONTROLLER (Matched to your HTML)
   Depends on:
   - syllabusData (from howItworksSyllabusData.js)
   - explanationData (from howItWorksExplanations.js)
===================================================== */

/* =====================================================
   1) STATE (never rely on dropdown button text)
===================================================== */

const currentSelection = {
  subject: null,
  book: null,
  chapter: null,
  topic: null,
};

/* =====================================================
   2) DOM REFERENCES
===================================================== */

// Dropdowns
const subjectMenu = document.getElementById("subjectMenu");
const subjectDropdown = document.getElementById("subjectDropdown");

const bookMenu = document.getElementById("bookMenu");
const bookDropdown = document.getElementById("bookDropdown");

const chapterMenu = document.getElementById("chapterMenu");
const chapterDropdown = document.getElementById("chapterDropdown");

// Topics lists
const topicsListMobile = document.getElementById("topicsListMobile");
const topicsListDesktop = document.getElementById("topicsListDesktop");

// Textbook panels
const textbookTitleMobile = document.getElementById("textbookTitleMobile");
const textbookContentMobile = document.getElementById("textbookContentMobile");

const textbookTitleDesktop = document.getElementById("textbookTitleDesktop");
const textbookContentDesktop = document.getElementById(
  "textbookContentDesktop"
);

// Explanation panels (separate IDs in your HTML)
const explanationContentMobile = document.getElementById(
  "explanationContentMobile"
);
const explanationContentDesktop = document.getElementById(
  "explanationContentDesktop"
);

// Micro explanation cards
const microCardMobile = document.getElementById("microExplanationCardMobile");
const microCardDesktop = document.getElementById("microExplanationCardDesktop");

// Feedback containers (separate in your HTML)
const feedbackMobile = document.getElementById("explanationFeedbackMobile");
const feedbackDesktop = document.getElementById("explanationFeedbackDesktop");

// Desktop-only info alert (exists in your HTML)
const explanationInfo = document.getElementById("explanationInfo");

// Chat UI (you have one in mobile + one in desktop; we’ll target both)
const mobileExplainPane = document.getElementById("m-explain");
const desktopExplainCard = document.getElementById("explanationCardDesktop");

const chatInputMobile = mobileExplainPane?.querySelector(".input-group input");
const chatSendBtnMobile = mobileExplainPane?.querySelector(
  ".input-group button"
);

const chatInputDesktop =
  desktopExplainCard?.querySelector(".card-footer .form-control") ||
  document.querySelector(".card-footer .form-control");
const chatSendBtnDesktop =
  desktopExplainCard?.querySelector(".card-footer .btn-primary") ||
  document.querySelector(".card-footer .btn-primary");

/* =====================================================
   3) SMALL HELPERS
===================================================== */

function setDropdownLabel(el, text) {
  if (el) el.textContent = text;
}

function clearEl(el) {
  if (el) el.innerHTML = "";
}

function showEl(el) {
  if (el) el.classList.remove("d-none");
}

function hideEl(el) {
  if (el) el.classList.add("d-none");
}

function setTextbook(topicTitle, html) {
  // Title
  if (textbookTitleMobile)
    textbookTitleMobile.textContent = topicTitle || "Textbook";
  if (textbookTitleDesktop)
    textbookTitleDesktop.textContent = topicTitle || "Textbook";

  // Body (HTML allowed because you paste <p>, <img>, etc.)
  if (textbookContentMobile) textbookContentMobile.innerHTML = html || "";
  if (textbookContentDesktop) textbookContentDesktop.innerHTML = html || "";
}

function setExplanationHtml(html) {
  // Explanation content is HTML (micro highlights, etc.)
  if (explanationContentMobile) explanationContentMobile.innerHTML = html || "";
  if (explanationContentDesktop)
    explanationContentDesktop.innerHTML = html || "";
}

function clearMicroCards() {
  hideEl(microCardMobile);
  hideEl(microCardDesktop);
  if (microCardMobile) {
    const body = microCardMobile.querySelector(".card-body");
    if (body) body.innerHTML = "";
  }
  if (microCardDesktop) {
    const body = microCardDesktop.querySelector(".card-body");
    if (body) body.innerHTML = "";
  }
}

function resetExplanationArea() {
  setExplanationHtml("");
  clearMicroCards();
  hideEl(feedbackMobile);
  hideEl(feedbackDesktop);
  // Also ensure desktop info alert is hidden unless needed
  hideEl(explanationInfo);
}

function resetDownstreamFromSubject() {
  currentSelection.book = null;
  currentSelection.chapter = null;
  currentSelection.topic = null;

  setDropdownLabel(bookDropdown, "Select Book");
  setDropdownLabel(chapterDropdown, "Select Chapter");

  clearEl(bookMenu);
  clearEl(chapterMenu);

  clearEl(topicsListMobile);
  clearEl(topicsListDesktop);

  setTextbook("Textbook", "Original NCERT syllabus content will appear here.");
  resetExplanationArea();
}

function resetDownstreamFromBook() {
  currentSelection.chapter = null;
  currentSelection.topic = null;

  setDropdownLabel(chapterDropdown, "Select Chapter");
  clearEl(chapterMenu);

  clearEl(topicsListMobile);
  clearEl(topicsListDesktop);

  setTextbook("Textbook", "Original NCERT syllabus content will appear here.");
  resetExplanationArea();
}

function resetDownstreamFromChapter() {
  currentSelection.topic = null;

  clearEl(topicsListMobile);
  clearEl(topicsListDesktop);

  setTextbook("Textbook", "Original NCERT syllabus content will appear here.");
  resetExplanationArea();
}

function renderBooks(subject) {
  clearEl(bookMenu);
  if (!subject || !syllabusData?.[subject]) return;

  Object.keys(syllabusData[subject]).forEach((book) => {
    bookMenu.insertAdjacentHTML(
      "beforeend",
      `<li><a class="dropdown-item" href="#" data-book="${book}">${book}</a></li>`
    );
  });
}

function renderChapters(subject, book) {
  clearEl(chapterMenu);
  if (!subject || !book || !syllabusData?.[subject]?.[book]) return;

  Object.keys(syllabusData[subject][book]).forEach((chapter) => {
    chapterMenu.insertAdjacentHTML(
      "beforeend",
      `<li><a class="dropdown-item" href="#" data-chapter="${chapter}">${chapter}</a></li>`
    );
  });
}

function renderTopics(topicsObj) {
  clearEl(topicsListMobile);
  clearEl(topicsListDesktop);

  if (!topicsObj) return;

  Object.keys(topicsObj).forEach((topic) => {
    const li = `
      <li class="list-group-item d-flex align-items-start gap-2 topic-item"
          data-topic="${topic}" role="button">
        <input class="form-check-input mt-1" type="checkbox" tabindex="-1" />
        <span>${topic}</span>
      </li>
    `;
    topicsListMobile?.insertAdjacentHTML("beforeend", li);
    topicsListDesktop?.insertAdjacentHTML("beforeend", li);
  });
}

/* Check if current topic is what the textbook panel is showing */
function isTopicVisibleInTextbook(topic) {
  const desktopTitle = textbookTitleDesktop?.textContent || "";
  const mobileTitle = textbookTitleMobile?.textContent || "";
  return desktopTitle === topic || mobileTitle === topic;
}

/* =====================================================
   4) CHAT SIMULATION (mobile + desktop)
===================================================== */

function simulateTyping(inputEl, text, callback) {
  if (!inputEl) {
    if (callback) callback();
    return;
  }

  inputEl.value = "";
  let i = 0;

  const interval = setInterval(() => {
    inputEl.value += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 20);
}

function simulateSendClick(btnEl) {
  if (!btnEl) return;
  btnEl.classList.add("active");
  setTimeout(() => btnEl.classList.remove("active"), 180);
}

function appendChat(container, html) {
  if (!container) return;
  container.insertAdjacentHTML("beforeend", html);
}

function clearChat() {
  if (explanationContentMobile) explanationContentMobile.innerHTML = "";
  if (explanationContentDesktop) explanationContentDesktop.innerHTML = "";
}

/* =====================================================
   5) FEEDBACK UI (rebuild every time explanation loads)
===================================================== */

function renderFeedback(containerEl) {
  if (!containerEl) return;

  containerEl.innerHTML = `
    <div class="d-flex align-items-center gap-2 small">
      <span class="text-muted">Was this explanation helpful?</span>

      <div class="btn-group btn-group-sm" role="group">
        <button type="button" class="btn btn-outline-danger" data-feedback="too-hard">Too Hard</button>
        <button type="button" class="btn btn-outline-success" data-feedback="just-right">Just Right</button>
        <button type="button" class="btn btn-outline-secondary" data-feedback="too-easy">Too Easy</button>
      </div>
    </div>

    <div class="text-success small d-none mt-2" data-thanks>
      Thanks for your feedback 👍
    </div>
  `;

  showEl(containerEl);
}

function wireFeedback(containerEl) {
  if (!containerEl) return;

  containerEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-feedback]");
    if (!btn) return;

    // Hide buttons row + show thank you message
    const buttonsRow = containerEl.querySelector(".d-flex");
    const thanks = containerEl.querySelector("[data-thanks]");

    if (buttonsRow) buttonsRow.classList.add("d-none");
    if (thanks) thanks.classList.remove("d-none");

    // Demo-only log
    console.log("Feedback:", btn.dataset.feedback);
  });
}

/* Wire feedback once (listeners are static) */
wireFeedback(feedbackMobile);
wireFeedback(feedbackDesktop);

/* =====================================================
   6) EXPLANATION LOADING
===================================================== */

function loadExplanation(studentType) {
  const { subject, book, chapter, topic } = currentSelection;

  // Must have a topic selected
  if (!subject || !book || !chapter || !topic) {
    setExplanationHtml(
      "<p class='text-muted'>Please select a topic first.</p>"
    );
    hideEl(feedbackMobile);
    hideEl(feedbackDesktop);
    return;
  }

  // Must be the topic currently visible in textbook
  if (!isTopicVisibleInTextbook(topic)) {
    setExplanationHtml(
      "<p class='text-muted'>Please view the topic in the textbook first.</p>"
    );
    hideEl(feedbackMobile);
    hideEl(feedbackDesktop);
    return;
  }

  const topicData = explanationData?.[subject]?.[book]?.[chapter]?.[topic];
  if (!topicData) {
    setExplanationHtml(
      "<p class='text-muted'>Explanation not available for this topic.</p>"
    );
    hideEl(feedbackMobile);
    hideEl(feedbackDesktop);
    return;
  }

  const explanationHtml =
    studentType === "student1"
      ? topicData.explanation1
      : topicData.explanation2;

  if (!explanationHtml) {
    setExplanationHtml(
      "<p class='text-muted'>Explanation not available for this topic.</p>"
    );
    hideEl(feedbackMobile);
    hideEl(feedbackDesktop);
    return;
  }

  // Show explanation
  // setExplanationHtml(explanationHtml);
  const systemBubble = `
  <div class="chat-msg system">
    ${explanationHtml}
  </div>
`;

  appendChat(explanationContentMobile, systemBubble);
  appendChat(explanationContentDesktop, systemBubble);

  // IMPORTANT: rebuild feedback every time (so buttons reappear again)
  renderFeedback(feedbackMobile);
  renderFeedback(feedbackDesktop);
}

/* When student is clicked, run simulated flow then load explanation */
function handleStudentExplanation(studentType) {
  const { subject, book, chapter, topic } = currentSelection;

  // No topic selected → show a small message (desktop alert + mobile content)
  if (
    !subject ||
    !book ||
    !chapter ||
    !topic ||
    !isTopicVisibleInTextbook(topic)
  ) {
    if (explanationInfo) {
      showEl(explanationInfo);
      setTimeout(() => hideEl(explanationInfo), 2000);
    }
    // Mobile also needs a hint (no alert in your mobile HTML)
    if (explanationContentMobile && !topic) {
      explanationContentMobile.innerHTML =
        "<p class='text-muted'>Select a topic first to see explanations.</p>";
    }
    return;
  }

  hideEl(explanationInfo);
  const studentBubble = `
  <div class="chat-msg student">
    Explain this topic to me
  </div>
`;

  appendChat(explanationContentMobile, studentBubble);
  appendChat(explanationContentDesktop, studentBubble);

  // Simulate chat in BOTH layouts (whichever exists on screen will be visible)
  simulateTyping(chatInputMobile, "Explain this topic to me", () => {
    simulateSendClick(chatSendBtnMobile);
  });

  simulateTyping(chatInputDesktop, "Explain this topic to me", () => {
    simulateSendClick(chatSendBtnDesktop);
  });

  // Then load explanation
  setTimeout(() => loadExplanation(studentType), 1000);
}

/* Student buttons exist in both layouts with class ".btn-student" */
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn-student");
  if (!btn) return;

  const studentType = btn.dataset.student;
  if (!studentType) return;

  handleStudentExplanation(studentType);
});

/* =====================================================
   7) MICRO EXPLANATION (hover/tap on dotted text)
===================================================== */

function handleMicroExplanation(e) {
  const highlightEl = e.target.closest(".explain-highlight");
  if (!highlightEl) return;

  const microKey = highlightEl.dataset.micro;
  if (!microKey) return;

  const { subject, book, chapter, topic } = currentSelection;
  const topicData = explanationData?.[subject]?.[book]?.[chapter]?.[topic];

  const microHtml = topicData?.microExplanations?.[microKey];
  if (!microHtml) return;

  // Show the right card depending on layout
  // (Safe to update both; only one is visible)
  if (microCardMobile) {
    microCardMobile.querySelector(".card-body").innerHTML = microHtml;
    showEl(microCardMobile);
  }
  if (microCardDesktop) {
    microCardDesktop.querySelector(".card-body").innerHTML = microHtml;
    showEl(microCardDesktop);
  }
}

function hideMicroExplanation() {
  clearMicroCards();
}

/* Attach to BOTH explanation containers */
explanationContentMobile?.addEventListener("mouseover", handleMicroExplanation);
explanationContentMobile?.addEventListener("click", handleMicroExplanation);

explanationContentDesktop?.addEventListener(
  "mouseover",
  handleMicroExplanation
);
explanationContentDesktop?.addEventListener("click", handleMicroExplanation);

// Hide when mouse leaves (desktop mainly)
explanationContentMobile?.addEventListener("mouseleave", hideMicroExplanation);
explanationContentDesktop?.addEventListener("mouseleave", hideMicroExplanation);

/* =====================================================
   8) DROPDOWN FLOW
===================================================== */

// Subject → Books
subjectMenu?.addEventListener("click", (e) => {
  const subject = e.target.dataset.subject;
  if (!subject) return;

  currentSelection.subject = subject;
  setDropdownLabel(subjectDropdown, subject);

  resetDownstreamFromSubject();
  renderBooks(subject);
});

// Book → Chapters
bookMenu?.addEventListener("click", (e) => {
  const book = e.target.dataset.book;
  if (!book) return;

  const subject = currentSelection.subject;
  if (!subject || !syllabusData?.[subject]?.[book]) return;

  currentSelection.book = book;
  setDropdownLabel(bookDropdown, book);

  resetDownstreamFromBook();
  renderChapters(subject, book);
});

// Chapter → Topics
chapterMenu?.addEventListener("click", (e) => {
  const chapter = e.target.dataset.chapter;
  if (!chapter) return;

  const { subject, book } = currentSelection;
  if (!subject || !book || !syllabusData?.[subject]?.[book]?.[chapter]) return;

  currentSelection.chapter = chapter;
  setDropdownLabel(chapterDropdown, chapter);

  resetDownstreamFromChapter();

  const topicsObj = syllabusData[subject][book][chapter].topics;
  renderTopics(topicsObj);
});

/* =====================================================
   9) TOPIC CLICK (single select + allow deselect)
===================================================== */

function handleTopicClick(e) {
  const topicItem = e.target.closest(".topic-item");
  if (!topicItem) return;

  const clickedTopic = topicItem.dataset.topic;
  if (!clickedTopic) return;

  const isAlreadySelected = currentSelection.topic === clickedTopic;

  // Uncheck all checkboxes first
  document
    .querySelectorAll(".topic-item .form-check-input")
    .forEach((cb) => (cb.checked = false));

  // If clicking the same topic again → treat as "deselect"
  if (isAlreadySelected) {
    currentSelection.topic = null;
    setTextbook(
      "Textbook",
      "Original NCERT syllabus content will appear here."
    );
    resetExplanationArea();
    return;
  }

  // Select new topic
  const checkbox = topicItem.querySelector(".form-check-input");
  if (checkbox) checkbox.checked = true;

  const { subject, book, chapter } = currentSelection;

  const topicHtml =
    syllabusData?.[subject]?.[book]?.[chapter]?.topics?.[clickedTopic] ||
    "Content will be added here.";

  currentSelection.topic = clickedTopic;

  setTextbook(clickedTopic, topicHtml);

  // When topic changes, clear explanation + feedback
  resetExplanationArea();
}

topicsListMobile?.addEventListener("click", handleTopicClick);
topicsListDesktop?.addEventListener("click", handleTopicClick);

/* =====================================================
   10) INITIAL CLEAN STATE ON PAGE LOAD
===================================================== */

(function init() {
  // Keep everything neutral on load
  setDropdownLabel(subjectDropdown, "Select Subject");
  setDropdownLabel(bookDropdown, "Select Book");
  setDropdownLabel(chapterDropdown, "Select Chapter");

  setTextbook("Textbook", "Original NCERT syllabus content will appear here.");
  resetExplanationArea();
})();

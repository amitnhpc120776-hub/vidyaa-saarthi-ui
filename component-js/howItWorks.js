/* =====================================================
   HOW IT WORKS — MAIN PAGE CONTROLLER (Matched to your HTML)
   Depends on:
   - syllabusData (from howItworksSyllabusData.js)
   - explanationData (from howItWorksExplanations.js)
===================================================== */

/* =====================================================
   STATE
===================================================== */

const currentSelection = {
  subject: null,
  book: null,
  chapter: null,
  topic: null,
  topicId: null,
};

// Holds backend structure if present
let structureData = null;
let currentTopicsPage = 1;
let topicsHasNext = false;
let topicsLoading = false;

/* =====================================================
   DOM REFERENCES
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

// Explanation areas
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

// Desktop info alert
const explanationInfo = document.getElementById("explanationInfo");

// Chat inputs (mobile + Desktop)
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

// Selected-text explain demo
const explainSelectionBtn = document.getElementById("explainSelectionBtn");

/* =====================================================
   GENERIC HELPERS
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

function showLoadingIn(container) {
  if (!container) return;
  const spinner = document.createElement('div');
  spinner.className = 'd-flex justify-content-center my-2 topic-spinner';
  spinner.innerHTML = `<div class="spinner-border spinner-border-sm" role="status"><span class="visually-hidden">Loading...</span></div>`;
  container.appendChild(spinner);
}

function hideLoadingIn(container) {
  if (!container) return;
  const s = container.querySelector('.topic-spinner');
  if (s) s.remove();
}

/* =====================================================
   UI RESET HELPERS
===================================================== */

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

/* =====================================================
   RENDERING HELPERS
===================================================== */

function renderTopics(topicsData, append = false) {
  if (!append) {
    clearEl(topicsListMobile);
    clearEl(topicsListDesktop);
  }

  if (!topicsData) return;

  // If the API returned a paginated response ({ results: [...] })
  let topics = [];
  if (Array.isArray(topicsData)) {
    topics = topicsData;
    topicsHasNext = false;
  } else if (topicsData.results) {
    topics = topicsData.results;
    topicsHasNext = !!topicsData.next;
  } else if (typeof topicsData === 'object') {
    // fallback for topic map (static)
    topics = Object.keys(topicsData).map((t) => ({ topic_title: t }));
    topicsHasNext = false;
  }

  topics.forEach((t) => {
    const title = t.topic_title || t.topic_title;
    const id = t.topic_id || t.topicId || '';
    const li = `
      <li class="list-group-item d-flex align-items-start gap-2 topic-item"
          data-topic="${title}" data-topic-id="${id}" role="button">
        <input class="form-check-input mt-1" type="checkbox" tabindex="-1" />
        <span>${title}</span>
      </li>
    `;
    topicsListMobile?.insertAdjacentHTML("beforeend", li);
    topicsListDesktop?.insertAdjacentHTML("beforeend", li);
  });

  // Load more button
  renderTopicsLoadMore();
}

function renderTopicsLoadMore() {
  // Remove existing load more
  const existingMobile = topicsListMobile?.querySelector('#topicsLoadMore');
  const existingDesktop = topicsListDesktop?.querySelector('#topicsLoadMore');
  if (existingMobile) existingMobile.remove();
  if (existingDesktop) existingDesktop.remove();

  if (!topicsHasNext) return;

  const li = `<li id="topicsLoadMore" class="list-group-item text-center"><button class="btn btn-sm btn-outline-primary" id="topicsLoadMoreBtn">Load more</button></li>`;
  topicsListMobile?.insertAdjacentHTML('beforeend', li);
  topicsListDesktop?.insertAdjacentHTML('beforeend', li);
}


/* Check if current topic is what the textbook panel is showing */
function isTopicVisibleInTextbook(topic) {
  const desktopTitle = textbookTitleDesktop?.textContent || "";
  const mobileTitle = textbookTitleMobile?.textContent || "";
  return desktopTitle === topic || mobileTitle === topic;
}

/* =====================================================
   CHAT SIMULATION
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
  container.scrollTop = container.scrollHeight;
}

function clearChat() {
  if (explanationContentMobile) explanationContentMobile.innerHTML = "";
  if (explanationContentDesktop) explanationContentDesktop.innerHTML = "";
}
function getSelectedText() {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return "";
  return selection.toString().trim();
}

/* =====================================================
   FEEDBACK
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
   EXPLANATION LOADING
===================================================== */

async function loadExplanation(studentType) {
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

  const topicId = currentSelection.topicId;

  // Try to generate personalized explanation via demo endpoint (preferred)
  if (topicId && window.howItWorksApi) {
    const demoLearnerEl = document.getElementById('demoLearnerId');
    const learnerId = demoLearnerEl?.dataset?.learnerId || null;
    try {
      // show loading and disable student buttons
      document.querySelectorAll('.btn-student').forEach(btn => btn.disabled = true);
      showLoadingIn(explanationContentDesktop);
      showLoadingIn(explanationContentMobile);

      const resp = await howItWorksApi.generatePersonalized({ learner_id: learnerId, topic_id: topicId });
      const personalizedHtml = resp.personalized_html || resp.personalized_text || "<p class='text-muted'>No personalized explanation available.</p>";
      const systemBubble = `<div class="chat-msg system">${personalizedHtml}</div>`;
      appendChat(explanationContentMobile, systemBubble);
      appendChat(explanationContentDesktop, systemBubble);

      renderFeedback(feedbackMobile);
      renderFeedback(feedbackDesktop);
      return;
    } catch (err) {
      // fallback to static explanation dataset
      console.warn('Personalization generation failed, falling back', err);
    } finally {
      // hide loading and enable buttons
      hideLoadingIn(explanationContentDesktop);
      hideLoadingIn(explanationContentMobile);
      document.querySelectorAll('.btn-student').forEach(btn => btn.disabled = false);
    }
  }

  // Fallback: use static explanationData if present
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
   MICRO-EXPLANATIONS
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
   DROPDOWN FLOW
===================================================== */

// Subject → Books
subjectMenu?.addEventListener("click", (e) => {
  const subject = e.target.dataset.subject;
  const subjectId = e.target.dataset.subjectId;
  if (!subject) return;

  currentSelection.subject = subject;
  currentSelection.subjectId = subjectId || null;
  setDropdownLabel(subjectDropdown, subject);

  resetDownstreamFromSubject();
  renderBooks(subject);
});


function populateStructureToMenus(structure) {
  // Build subjectMenu from backend structure
  clearEl(subjectMenu);
  structure.forEach((s) => {
    subjectMenu.insertAdjacentHTML(
      'beforeend',
      `<li><a class="dropdown-item" href="#" data-subject="${s.subject_name}" data-subject-id="${s.subject_id}">${s.subject_name}</a></li>`
    );
  });
}

function renderBooks(subject) {
  clearEl(bookMenu);
  // If backend structure is present, prefer it
  if (structureData) {
    const subj = structureData.find((s) => s.subject_name === subject);
    if (!subj) return;
    subj.books.forEach((b) => {
      bookMenu.insertAdjacentHTML(
        "beforeend",
        `<li><a class="dropdown-item" href="#" data-book="${b.book_title}" data-book-id="${b.book_id}">${b.book_title}</a></li>`
      );
    });
    return;
  }

  // Fallback to static syllabusData
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
  // If backend structure present, use it (we expect book title match)
  if (structureData) {
    const subj = structureData.find((s) => s.subject_name === subject);
    if (!subj) return;
    const bk = subj.books.find((b) => b.book_title === book || b.book_id === book);
    if (!bk) return;
    bk.chapters.forEach((c) => {
      chapterMenu.insertAdjacentHTML(
        "beforeend",
        `<li><a class="dropdown-item" href="#" data-chapter="${c.chapter_title}" data-chapter-id="${c.chapter_id}">${c.chapter_title}</a></li>`
      );
    });
    return;
  }

  // Fallback to static
  if (!subject || !book || !syllabusData?.[subject]?.[book]) return;

  Object.keys(syllabusData[subject][book]).forEach((chapter) => {
    chapterMenu.insertAdjacentHTML(
      "beforeend",
      `<li><a class="dropdown-item" href="#" data-chapter="${chapter}">${chapter}</a></li>`
    );
  });
}

// Book → Chapters
bookMenu?.addEventListener("click", (e) => {
  const book = e.target.dataset.book;
  const bookId = e.target.dataset.bookId;
  if (!book) return;

  const subject = currentSelection.subject;
  currentSelection.book = book;
  currentSelection.bookId = bookId || null;
  setDropdownLabel(bookDropdown, book);

  resetDownstreamFromBook();
  renderChapters(subject, book);
});

// Chapter → Topics
chapterMenu?.addEventListener("click", async (e) => {
  const chapter = e.target.dataset.chapter;
  const chapterId = e.target.dataset.chapterId;
  if (!chapter) return;

  const { subject, book } = currentSelection;

  currentSelection.chapter = chapter;
  currentSelection.chapterId = chapterId || null;
  setDropdownLabel(chapterDropdown, chapter);

  resetDownstreamFromChapter();

  // If we have a backend chapter id, fetch topics via API (paginated)
  if (chapterId && window.howItWorksApi) {
    try {
      const topicsResp = await howItWorksApi.fetchTopics({ chapter: chapterId });
      renderTopics(topicsResp);
    } catch (err) {
      console.warn('Failed to fetch topics:', err);
      // fallback to static content if available
      const topicsObj = syllabusData?.[subject]?.[book]?.[chapter]?.topics;
      renderTopics(topicsObj);
    }
    return;
  }

  // Fallback to static syllabusData
  const topicsObj = syllabusData[subject][book][chapter].topics;
  renderTopics(topicsObj);
});

/* =====================================================
   TOPIC SELECTION
===================================================== */

async function handleTopicClick(e) {
  const topicItem = e.target.closest(".topic-item");
  if (!topicItem) return;

  const clickedTopic = topicItem.dataset.topic;
  const topicId = topicItem.dataset.topicId;
  if (!clickedTopic) return;

  const isAlreadySelected = currentSelection.topic === clickedTopic;

  // Uncheck all checkboxes first
  document
    .querySelectorAll(".topic-item .form-check-input")
    .forEach((cb) => (cb.checked = false));

  // If clicking the same topic again → treat as "deselect"
  if (isAlreadySelected) {
    currentSelection.topic = null;
    currentSelection.topicId = null;
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

  currentSelection.topic = clickedTopic;
  currentSelection.topicId = topicId || null;

  // Show loading placeholder while fetching
  setTextbook(clickedTopic, "<p class='text-muted'>Loading content…</p>");

  // If we have a topicId and API is available, fetch detail
  if (currentSelection.topicId && window.howItWorksApi) {
    try {
      const detail = await howItWorksApi.fetchTopicDetail({ topic: currentSelection.topicId });
      const firstCU = detail.content_units?.[0];
      const html = firstCU?.content_html || firstCU?.content_text || "Content will be added here.";
      setTextbook(clickedTopic, html);
    } catch (err) {
      console.warn('Failed to fetch topic detail', err);
      const topicHtml = syllabusData?.[subject]?.[book]?.[chapter]?.topics?.[clickedTopic] || "Content will be added here.";
      setTextbook(clickedTopic, topicHtml);
    }
  } else {
    // Fallback to static content
    const topicHtml =
      syllabusData?.[subject]?.[book]?.[chapter]?.topics?.[clickedTopic] ||
      "Content will be added here.";

    setTextbook(clickedTopic, topicHtml);
  }

  // When topic changes, clear explanation + feedback
  resetExplanationArea();
}


topicsListMobile?.addEventListener("click", handleTopicClick);
topicsListDesktop?.addEventListener("click", handleTopicClick);

// Load more topics handler (delegated)
document.addEventListener('click', async (e) => {
  const btn = e.target.closest('#topicsLoadMoreBtn');
  if (!btn) return;
  if (topicsLoading) return;
  if (!currentSelection.chapterId) return;

  topicsLoading = true;
  currentTopicsPage += 1;
  showLoadingIn(topicsListDesktop);
  showLoadingIn(topicsListMobile);

  try {
    const resp = await howItWorksApi.fetchTopics({ chapter: currentSelection.chapterId, page: currentTopicsPage });
    renderTopics(resp, true);
  } catch (err) {
    console.warn('Failed to load more topics', err);
  } finally {
    topicsLoading = false;
    hideLoadingIn(topicsListDesktop);
    hideLoadingIn(topicsListMobile);
  }
});

/* =====================================================
   TEXT-SELECTION EXPLAIN DEMO
===================================================== */

document.addEventListener("selectionchange", () => {
  const selectedText = getSelectedText();
  if (!selectedText || selectedText.length < 5) {
    explainSelectionBtn.classList.add("d-none");
    return;
  }

  // MOBILE → keep floating bottom-right
  if (!isDesktopView()) {
    explainSelectionBtn.style.position = "fixed";
    explainSelectionBtn.style.bottom = "20px";
    explainSelectionBtn.style.right = "20px";
    explainSelectionBtn.classList.remove("d-none");
    return;
  }

  // DESKTOP → place near selection
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();

  explainSelectionBtn.style.position = "absolute";
  explainSelectionBtn.style.top = `${window.scrollY + rect.bottom + 6}px`;
  explainSelectionBtn.style.left = `${window.scrollX + rect.right + 6}px`;

  explainSelectionBtn.classList.remove("d-none");
});

explainSelectionBtn.addEventListener("click", () => {
  const selectedText = getSelectedText();
  if (!selectedText) return;

  explainSelectionBtn.classList.add("d-none");

  const studentBubble = `
    <div class="mb-2 text-end">
      <span class="badge bg-success-subtle text-success p-2">
        Explain this part:<br>${selectedText}
      </span>
    </div>
  `;

  const aiBubble = `
    <div class="mb-2 text-start">
      <span class="badge bg-primary-subtle text-primary p-2">
        Our AI algorithm will explain according to your needs.
      </span>
    </div>
  `;

  // Mobile
  appendChat(explanationContentMobile, studentBubble);
  setTimeout(() => {
    appendChat(explanationContentMobile, aiBubble);
  }, 600);

  // Desktop
  appendChat(explanationContentDesktop, studentBubble);
  setTimeout(() => {
    appendChat(explanationContentDesktop, aiBubble);
  }, 600);
});

function isDesktopView() {
  return window.innerWidth >= 992;
}

/* =====================================================
   INIT
===================================================== */

(function init() {
  // Keep everything neutral on load
  setDropdownLabel(subjectDropdown, "Select Subject");
  setDropdownLabel(bookDropdown, "Select Book");
  setDropdownLabel(chapterDropdown, "Select Chapter");

  setTextbook("Textbook", "Original NCERT syllabus content will appear here.");
  resetExplanationArea();

  // Try to load backend structure (non-blocking)
  if (window.howItWorksApi && howItWorksApi.fetchStructure) {
    setDropdownLabel(subjectDropdown, 'Loading...');
    howItWorksApi.fetchStructure().then((res) => {
      if (res && res.structure) {
        structureData = res.structure;
        populateStructureToMenus(structureData);
        setDropdownLabel(subjectDropdown, 'Select Subject');
      }
    }).catch((err) => {
      console.warn('Failed to fetch structure', err);
      setDropdownLabel(subjectDropdown, 'Select Subject');
    });
  }
})();

/* ============================================================
   Dropdown Controller
   Page: How It Works (Product Display)
   Responsibility:
   - Manage Class → Subject → Book → Chapter dropdown flow
   - Enforce product rules (enabled classes only)
   - Maintain clean selection state
   ============================================================ */

/* ===================== IMPORT DATA ===================== */
import { classes } from "../data/meta/classes.js";
import { subjectsByClass } from "../data/meta/subjectsByClass.js";
import { booksByClassSubject } from "../data/meta/booksByClassSubject.js";
import { chaptersByBook } from "../data/meta/chaptersByBook.js";

/* ===================== CONFIGURATION ===================== */

// Product rule: only these classes are selectable
const ENABLED_CLASSES = ["VIII", "X", "XII"];

// Placeholder labels (UI only)
const PLACEHOLDERS = {
  class: "Select Class",
  subject: "Select Subject",
  book: "Select Book",
  chapter: "Select Chapter",
};

/* ===================== STATE ===================== */

// Single source of truth for current selection
const selectionState = {
  class: null,
  subject: null,
  book: null,
  chapter: null,
};

/* ===================== DOM HELPERS ===================== */

/**
 * Returns dropdowns in document order.
 * Assumes the page has exactly 4 selects for:
 * Class → Subject → Book → Chapter
 */
function getDropdowns() {
  const byAttr = {
    classSelect: document.querySelector('[data-vs-dropdown="class"]'),
    subjectSelect: document.querySelector('[data-vs-dropdown="subject"]'),
    bookSelect: document.querySelector('[data-vs-dropdown="book"]'),
    chapterSelect: document.querySelector('[data-vs-dropdown="chapter"]'),
  };

  if (
    byAttr.classSelect &&
    byAttr.subjectSelect &&
    byAttr.bookSelect &&
    byAttr.chapterSelect
  ) {
    return byAttr;
  }

  // Back-compat fallback (brittle): first 4 selects on the page
  const selects = Array.from(document.querySelectorAll("select"));
  return {
    classSelect: selects[0] || null,
    subjectSelect: selects[1] || null,
    bookSelect: selects[2] || null,
    chapterSelect: selects[3] || null,
  };
}

/**
 * Clears dropdown and sets placeholder
 */
function resetDropdown(selectEl, placeholderText) {
  selectEl.innerHTML = "";
  const option = document.createElement("option");
  option.textContent = placeholderText;
  option.value = "";
  option.disabled = true;
  option.selected = true;
  selectEl.appendChild(option);
}

/**
 * Completely resets downstream dropdowns + state
 */
function resetStateFrom(level, dropdowns) {
  if (level === "class") {
    selectionState.subject = null;
    selectionState.book = null;
    selectionState.chapter = null;
    resetDropdown(dropdowns.subjectSelect, PLACEHOLDERS.subject);
    resetDropdown(dropdowns.bookSelect, PLACEHOLDERS.book);
    resetDropdown(dropdowns.chapterSelect, PLACEHOLDERS.chapter);
  }

  if (level === "subject") {
    selectionState.book = null;
    selectionState.chapter = null;
    resetDropdown(dropdowns.bookSelect, PLACEHOLDERS.book);
    resetDropdown(dropdowns.chapterSelect, PLACEHOLDERS.chapter);
  }

  if (level === "book") {
    selectionState.chapter = null;
    resetDropdown(dropdowns.chapterSelect, PLACEHOLDERS.chapter);
  }
}

/* ===================== POPULATION LOGIC ===================== */

function populateClassDropdown(selectEl) {
  resetDropdown(selectEl, PLACEHOLDERS.class);

  classes.forEach(({ id, label }) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = label;

    if (!ENABLED_CLASSES.includes(id)) {
      option.disabled = true;
    }

    selectEl.appendChild(option);
  });
}

function populateSubjectDropdown(selectEl, selectedClass) {
  resetDropdown(selectEl, PLACEHOLDERS.subject);

  const subjects = subjectsByClass[selectedClass];
  if (!subjects) return;

  subjects.forEach(({ id, label }) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = label;
    selectEl.appendChild(option);
  });
}

function populateBookDropdown(selectEl, selectedClass, selectedSubject) {
  resetDropdown(selectEl, PLACEHOLDERS.book);

  const books = booksByClassSubject?.[selectedClass]?.[selectedSubject];

  if (!books) return;

  books.forEach((bookName) => {
    const option = document.createElement("option");
    option.value = bookName;
    option.textContent = bookName;
    selectEl.appendChild(option);
  });
}

function populateChapterDropdown(selectEl, selectedClass, selectedBook) {
  resetDropdown(selectEl, PLACEHOLDERS.chapter);

  const chapters = chaptersByBook?.[selectedClass]?.[selectedBook];

  if (!chapters) return;

  chapters.forEach((chapterName) => {
    const option = document.createElement("option");
    option.value = chapterName;
    option.textContent = chapterName;
    selectEl.appendChild(option);
  });
}

/* ===================== EVENT BINDING ===================== */

function bindEvents(dropdowns) {
  dropdowns.classSelect.addEventListener("change", (e) => {
    const selectedClass = e.target.value;

    if (!ENABLED_CLASSES.includes(selectedClass)) return;

    selectionState.class = selectedClass;
    resetStateFrom("class", dropdowns);
    populateSubjectDropdown(dropdowns.subjectSelect, selectedClass);
  });

  dropdowns.subjectSelect.addEventListener("change", (e) => {
    const subject = e.target.value;
    if (!selectionState.class) return;

    selectionState.subject = subject;
    resetStateFrom("subject", dropdowns);
    populateBookDropdown(dropdowns.bookSelect, selectionState.class, subject);
  });

  dropdowns.bookSelect.addEventListener("change", (e) => {
    const book = e.target.value;
    if (!selectionState.subject) return;

    selectionState.book = book;
    resetStateFrom("book", dropdowns);
    populateChapterDropdown(
      dropdowns.chapterSelect,
      selectionState.class,
      book
    );
  });

  dropdowns.chapterSelect.addEventListener("change", (e) => {
    selectionState.chapter = e.target.value;
  });
}

/* ===================== PUBLIC API ===================== */

export function getCurrentSelection() {
  return { ...selectionState };
}

/* ===================== INITIALIZATION ===================== */

export function initDropdownController() {
  const dropdowns = getDropdowns();

  if (
    !dropdowns.classSelect ||
    !dropdowns.subjectSelect ||
    !dropdowns.bookSelect ||
    !dropdowns.chapterSelect
  ) {
    return;
  }

  populateClassDropdown(dropdowns.classSelect);

  resetDropdown(dropdowns.subjectSelect, PLACEHOLDERS.subject);
  resetDropdown(dropdowns.bookSelect, PLACEHOLDERS.book);
  resetDropdown(dropdowns.chapterSelect, PLACEHOLDERS.chapter);

  bindEvents(dropdowns);
}

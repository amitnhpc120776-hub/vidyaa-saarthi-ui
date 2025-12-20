import { classes } from "./meta/classes.js";
import { subjectsByClass } from "./meta/subjectsByClass.js";
import { booksByClassSubject } from "./meta/booksByClassSubject.js";
import { chaptersByBook } from "./meta/chaptersByBook.js";

/* -------------------------------------------------
   DOM REFERENCES
------------------------------------------------- */
const classSelect = document.getElementById("classSelect");
const subjectSelect = document.getElementById("subjectSelect");
const bookSelect = document.getElementById("bookSelect");
const chapterSelect = document.getElementById("chapterSelect");

/* -------------------------------------------------
   HELPERS
------------------------------------------------- */
function resetSelect(select, placeholder) {
  select.innerHTML = `<option value="">${placeholder}</option>`;
}

function addOption(select, value, label = value) {
  const opt = document.createElement("option");
  opt.value = value;
  opt.textContent = label;
  select.appendChild(opt);
}

/* -------------------------------------------------
   INIT: CLASSES
------------------------------------------------- */
const ENABLED_CLASSES = ["VIII", "X", "XII"];

resetSelect(classSelect, "Select Class");

classes.forEach(({ id, label }) => {
  const option = document.createElement("option");
  option.value = id;
  option.textContent = label;

  if (!ENABLED_CLASSES.includes(id)) {
    option.disabled = true;
  }

  classSelect.appendChild(option);
});

/* -------------------------------------------------
   CLASS → SUBJECT
------------------------------------------------- */
classSelect.addEventListener("change", () => {
  const classId = classSelect.value;

  resetSelect(subjectSelect, "Select Subject");
  resetSelect(bookSelect, "Select Book");
  resetSelect(chapterSelect, "Select Chapter");

  if (!subjectsByClass[classId]) return;

  subjectsByClass[classId].forEach(({ id, label }) => {
    addOption(subjectSelect, id, label);
  });
});

/* -------------------------------------------------
   SUBJECT → BOOK
------------------------------------------------- */
subjectSelect.addEventListener("change", () => {
  const classId = classSelect.value;
  const subjectId = subjectSelect.value;

  resetSelect(bookSelect, "Select Book");
  resetSelect(chapterSelect, "Select Chapter");

  if (!booksByClassSubject[classId] || !booksByClassSubject[classId][subjectId])
    return;

  booksByClassSubject[classId][subjectId].forEach((book) => {
    addOption(bookSelect, book);
  });
});

/* -------------------------------------------------
   BOOK → CHAPTER
------------------------------------------------- */
bookSelect.addEventListener("change", () => {
  const classId = classSelect.value;
  const book = bookSelect.value;

  resetSelect(chapterSelect, "Select Chapter");

  if (!chaptersByBook[classId] || !chaptersByBook[classId][book]) return;

  chaptersByBook[classId][book].forEach((chapter) => {
    addOption(chapterSelect, chapter);
  });
});

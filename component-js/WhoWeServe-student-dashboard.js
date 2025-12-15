document.addEventListener("DOMContentLoaded", function () {
  /* =========================
       DOM REFERENCES
    ========================== */

  const subjectButtons = document.querySelectorAll("[data-subject]");
  const chapterButtons = document.querySelectorAll("[data-chapter]");

  const subjectPlaceholder = document.getElementById(
    "placeholder-select-subject"
  );
  const chapterPlaceholder = document.getElementById(
    "placeholder-select-chapter"
  );

  const chapterBlocks = document.querySelectorAll('[id^="chapters-"]');
  const topicBlocks = document.querySelectorAll('[id^="topics-"]');

  /* =========================
       HELPER FUNCTIONS
    ========================== */

  function hideAllChapters() {
    chapterBlocks.forEach((block) => (block.style.display = "none"));
  }

  function hideAllTopics() {
    topicBlocks.forEach((block) => (block.style.display = "none"));
  }

  function showSubjectPlaceholder() {
    if (subjectPlaceholder) subjectPlaceholder.style.display = "block";
  }

  function hideSubjectPlaceholder() {
    if (subjectPlaceholder) subjectPlaceholder.style.display = "none";
  }

  function showChapterPlaceholder() {
    if (chapterPlaceholder) chapterPlaceholder.style.display = "block";
  }

  function hideChapterPlaceholder() {
    if (chapterPlaceholder) chapterPlaceholder.style.display = "none";
  }

  /* =========================
       INITIAL STATE (PAGE LOAD)
    ========================== */

  hideAllChapters();
  hideAllTopics();
  showSubjectPlaceholder();
  hideChapterPlaceholder();

  /* =========================
       SUBJECT CLICK HANDLER
    ========================== */

  subjectButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const subjectId = btn.dataset.subject;

      hideSubjectPlaceholder();
      hideAllChapters();
      hideAllTopics();

      const chapterBlock = document.getElementById(`chapters-${subjectId}`);
      if (chapterBlock) chapterBlock.style.display = "block";

      showChapterPlaceholder();
    });
  });

  /* =========================
       CHAPTER CLICK HANDLER
    ========================== */

  chapterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const chapterId = btn.dataset.chapter;

      hideChapterPlaceholder();
      hideAllTopics();

      const topicBlock = document.getElementById(`topics-${chapterId}`);
      if (topicBlock) topicBlock.style.display = "block";
    });
  });
});

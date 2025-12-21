/* =====================================================
   Matrix Reasoning — Shared Core Engine
   -----------------------------------------------------
   Used by:
   - matrixReasoningPractice.html
   - matrixReasoningTest.html

   Responsibilities:
   - Render matrix & options
   - Handle option selection
   - Manage timer
   - Handle confirm
   - Handle timeout
   - Lock / unlock UI
   - Reset between trials

   NO feedback text
   NO navigation
   NO backend calls
===================================================== */

(function (global) {
  "use strict";

  /* =====================================================
     CORE FACTORY
  ===================================================== */

  function createMatrixReasoningCore(config) {
    if (!config || !Array.isArray(config.questions)) {
      throw new Error("MatrixReasoningCore: questions array required");
    }

    /* =====================================================
       STATE
    ===================================================== */

    let currentIndex = 0;
    let selectedOption = null;
    let isLocked = false;

    let timerInterval = null;
    let timeRemaining = config.timeLimit || 60;

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const optionButtons = Array.from(
      document.querySelectorAll("[data-mr-option]")
    );
    const confirmBtn = document.querySelector("[data-mr-confirm]");
    const timerEl = document.querySelector(".mr-timer__value");
    const timerWrap = document.querySelector(".mr-timer");

    /* =====================================================
       RENDERING
    ===================================================== */

    function loadQuestion(index) {
      const q = config.questions[index];
      if (!q) return;

      /* Matrix (1–8) */
      const matrixImgs = document.querySelectorAll(
        ".mr-matrix .mr-cell:not(.mr-cell--missing) .mr-cell__img"
      );

      matrixImgs.forEach((img, i) => {
        img.src = `${q.basePath}${i + 1}.svg`;
      });

      /* Options (a–d) */
      const optionKeys = ["a", "b", "c", "d"];
      optionButtons.forEach((btn, i) => {
        const img = btn.querySelector("img");
        if (img) img.src = `${q.basePath}${optionKeys[i]}.svg`;
      });

      resetUI();
      startTimer();

      config.onRender?.(q, index);
    }

    /* =====================================================
       TIMER
    ===================================================== */

    function startTimer() {
      stopTimer();
      timeRemaining = config.timeLimit || 60;
      updateTimerUI();

      timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerUI();

        if (timeRemaining <= 0) {
          stopTimer();
          handleTimeout();
        }
      }, 1000);
    }

    function stopTimer() {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }

    function updateTimerUI() {
      if (!timerEl) return;

      timerEl.textContent = timeRemaining;

      if (!timerWrap) return;
      timerWrap.classList.remove("is-warning", "is-danger");

      if (timeRemaining <= 5) {
        timerWrap.classList.add("is-danger");
      } else if (timeRemaining <= 10) {
        timerWrap.classList.add("is-warning");
      }
    }

    /* =====================================================
       OPTION SELECTION
    ===================================================== */

    optionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (isLocked) return;

        optionButtons.forEach((b) => {
          b.classList.remove("is-selected");
          b.setAttribute("aria-pressed", "false");
        });

        btn.classList.add("is-selected");
        btn.setAttribute("aria-pressed", "true");

        selectedOption = btn.dataset.mrOption;
        confirmBtn.disabled = false;

        config.onSelect?.(selectedOption);
      });
    });

    /* Keyboard support (1–4) */
    document.addEventListener("keydown", (e) => {
      if (isLocked) return;
      if (!/^[1-4]$/.test(e.key)) return;

      const idx = Number(e.key) - 1;
      const btn = optionButtons[idx];
      if (!btn) return;

      e.preventDefault();
      btn.click();
      btn.focus();
    });

    /* =====================================================
       CONFIRM
    ===================================================== */

    confirmBtn.addEventListener("click", () => {
      if (isLocked || !selectedOption) return;

      lockUI();
      stopTimer();

      const q = config.questions[currentIndex];

      config.onConfirm?.({
        question: q,
        index: currentIndex,
        selectedOption,
        timeRemaining,
      });
    });

    /* =====================================================
       TIMEOUT
    ===================================================== */

    function handleTimeout() {
      if (isLocked) return;

      lockUI();

      const q = config.questions[currentIndex];

      config.onTimeout?.({
        question: q,
        index: currentIndex,
        timeRemaining: 0,
      });
    }

    /* =====================================================
       UI STATE
    ===================================================== */

    function lockUI() {
      isLocked = true;
      confirmBtn.disabled = true;

      optionButtons.forEach((btn) => {
        btn.disabled = true;
        btn.style.pointerEvents = "none";
      });
    }

    function resetUI() {
      isLocked = false;
      selectedOption = null;

      optionButtons.forEach((btn) => {
        btn.classList.remove("is-selected");
        btn.setAttribute("aria-pressed", "false");
        btn.disabled = false;
        btn.style.pointerEvents = "";
      });

      confirmBtn.disabled = true;
    }

    /* =====================================================
       NAVIGATION CONTROL (EXPOSED)
    ===================================================== */

    function nextQuestion() {
      currentIndex++;

      if (currentIndex < config.questions.length) {
        loadQuestion(currentIndex);
      } else {
        stopTimer();
        config.onComplete?.();
      }
    }

    /* =====================================================
       PUBLIC API
    ===================================================== */

    return {
      start() {
        loadQuestion(0);
      },
      next: nextQuestion,
      getState() {
        return {
          currentIndex,
          selectedOption,
          timeRemaining,
          isLocked,
        };
      },
    };
  }

  /* =====================================================
     EXPORT
  ===================================================== */

  global.MatrixReasoningCore = { create: createMatrixReasoningCore };
})(window);

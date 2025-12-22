/* =====================================================
   SYMBOL SEARCH — CORE ENGINE
===================================================== */

const SymbolSearchCore = (() => {
  const DEFAULTS = {
    sessionDuration: 120,
    trialDuration: 5,
    autoAdvance: true, // 🔑 NEW
  };

  function create(config = {}) {
    const {
      trials = [],
      sessionDuration = DEFAULTS.sessionDuration,
      trialDuration = DEFAULTS.trialDuration,
      autoAdvance = DEFAULTS.autoAdvance,

      onTrialStart = () => {},
      onSelect = () => {},
      onTimeout = () => {},
      onComplete = () => {},
    } = config;

    if (!Array.isArray(trials)) {
      throw new Error("SymbolSearchCore: trials must be an array");
    }

    /* ================= STATE ================= */
    let currentIndex = 0;
    let sessionTimeLeft = sessionDuration;
    let trialTimeLeft = trialDuration;

    let sessionTimerId = null;
    let trialTimerId = null;

    let isLocked = false;
    let isRunning = false;

    const optionButtons = document.querySelectorAll(".ss-option");

    /* ================= HELPERS ================= */

    function formatMMSS(seconds) {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m}:${s.toString().padStart(2, "0")}`;
    }

    function updateSessionUI() {
      const el = document.getElementById("sessionTimer");
      if (el) el.textContent = formatMMSS(sessionTimeLeft);
    }

    function updateTrialUI() {
      const el = document.getElementById("trialTimer");
      if (el) el.textContent = trialTimeLeft;
    }

    function lock() {
      isLocked = true;
    }

    function unlock() {
      isLocked = false;
    }

    function clearTimers() {
      clearInterval(sessionTimerId);
      clearInterval(trialTimerId);
    }

    /* ================= SESSION TIMER ================= */

    function startSessionTimer() {
      updateSessionUI();

      sessionTimerId = setInterval(() => {
        sessionTimeLeft--;
        updateSessionUI();

        if (sessionTimeLeft <= 0) {
          clearTimers();
          finish();
        }
      }, 1000);
    }

    /* ================= TRIAL TIMER ================= */

    function startTrialTimer() {
      clearInterval(trialTimerId);

      trialTimeLeft = trialDuration;
      updateTrialUI();
      unlock();

      trialTimerId = setInterval(() => {
        trialTimeLeft--;
        updateTrialUI();

        if (trialTimeLeft <= 0) {
          clearInterval(trialTimerId);
          lock();

          onTimeout({
            index: currentIndex,
            trial: trials[currentIndex],
            timeRemaining: 0,
          });

          if (autoAdvance) next();
        }
      }, 1000);
    }

    /* ================= TRIAL FLOW ================= */

    function startTrial() {
      if (currentIndex >= trials.length) {
        finish();
        return;
      }

      onTrialStart({
        index: currentIndex,
        trial: trials[currentIndex],
      });

      startTrialTimer();
    }

    function next() {
      clearInterval(trialTimerId);
      currentIndex++;
      startTrial();
    }

    function finish() {
      clearTimers();
      isRunning = false;

      onComplete({
        totalTrials: trials.length,
        sessionDuration,
      });
    }

    /* ================= OPTION HANDLING ================= */

    function handleOptionClick(event) {
      if (!isRunning || isLocked) return;

      const button = event.currentTarget;
      const selected = button.dataset.option || button.textContent.trim();

      lock();

      onSelect({
        index: currentIndex,
        trial: trials[currentIndex],
        selected,
        timeRemaining: trialTimeLeft,
      });

      if (autoAdvance) next();
    }

    function attachOptionHandlers() {
      optionButtons.forEach((btn) =>
        btn.addEventListener("click", handleOptionClick)
      );
    }

    /* ================= PUBLIC API ================= */

    function start() {
      if (isRunning) return;

      isRunning = true;
      currentIndex = 0;
      sessionTimeLeft = sessionDuration;

      attachOptionHandlers();
      startSessionTimer();
      startTrial();
    }

    return {
      start,
      next, // 🔑 NEW: practice-controlled progression
    };
  }

  return { create };
})();

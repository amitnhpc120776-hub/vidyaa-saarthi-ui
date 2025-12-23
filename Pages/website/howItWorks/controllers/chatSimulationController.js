/* ============================================================
   Chat Simulation Controller
   Page: howItWorks.html (Desktop + Mobile)
   Responsibility:
   - Deterministic chat simulation based on:
     Class → Subject → Book → Chapter → Topic → Student Persona
   - Clears chat on ANY upstream change
   - Simulates typing → send → thinking → explanation
   ============================================================ */

import { getCurrentSelection } from "./dropdownController.js";

/* ===================== CONFIG ===================== */

const TYPED_PROMPT = "Explain this topic to me";
const THINKING_DELAY_MS = 1000;
const TYPING_INTERVAL_MS = 35;
const FEEDBACK_OPTIONS = [
  { id: "too-hard", label: "Too Hard" },
  { id: "just-right", label: "Just Right" },
  { id: "too-easy", label: "Too Easy" },
];
const FEEDBACK_THANK_YOU_TEXT = "Thank you for your feedback.";

/* ---------------- Explanation module registry ---------------- */
const EXPLANATION_MODULES = {
  VIII: {
    mathematics: "../data/explanations/VIII/explanationVIIImathematics.js",
    science: "../data/explanations/VIII/explanationVIIIscience.js",
    "social-science":
      "../data/explanations/VIII/explanationVIIIsocialScience.js",
  },
  X: {
    mathematics: "../data/explanations/X/explanationXmathematics.js",
    science: "../data/explanations/X/explanationXscience.js",
    "social-science": "../data/explanations/X/explanationXsocialScience.js",
  },
  XII: {
    accountancy: "../data/explanations/XII/explanationXIIaccountancy.js",
    biology: "../data/explanations/XII/explanationXIIBiology.js",
    chemistry: "../data/explanations/XII/explanationXIIchemistry.js",
    economics: "../data/explanations/XII/explanationXIIeconomics.js",
    mathematics: "../data/explanations/XII/explanationXIImathematics.js",
    physics: "../data/explanations/XII/explanationXIIphysics.js",
  },
};

/* ===================== STATE ===================== */

const chatState = {
  contextKey: null,
  activeTopic: null,
  activeStudent: null, // "student_1" | "student_2"
  phase: "idle",
  simulationId: 0,
  typingTimer: null,
  typingResolve: null,
  feedbackStatus: "idle", // "idle" | "pending" | "submitted"
  feedbackChoice: null, // one of FEEDBACK_OPTIONS ids
};

function emitHowItWorksChatPhase() {
  document.dispatchEvent(
    new CustomEvent("vsHowItWorksChatPhase", {
      detail: { phase: chatState.phase },
    })
  );
}

/* ===================== DOM DISCOVERY ===================== */

function findChatTargets() {
  const panels = Array.from(document.querySelectorAll(".vs-panel"));

  let chatBodies = [];
  let inputFields = [];
  let sendButtons = [];
  let studentButtons = [];

  panels.forEach((panel) => {
    const header = panel.querySelector(".vs-panel-header");
    const body = panel.querySelector(".vs-panel-body");
    if (!header || !body) return;

    const title = header.textContent.toLowerCase();

    if (title.includes("ask")) {
      chatBodies.push(body);

      const buttons = header.querySelectorAll("button");
      buttons.forEach((btn) => {
        const txt = btn.textContent.toLowerCase();
        if (txt.includes("student 1"))
          studentButtons.push({ btn, id: "student_1" });
        if (txt.includes("student 2"))
          studentButtons.push({ btn, id: "student_2" });
      });

      const input = panel.querySelector("input");
      const send = panel.querySelector("button[aria-label='Send']");
      if (input) inputFields.push(input);
      if (send) sendButtons.push(send);
    }
  });

  return { chatBodies, inputFields, sendButtons, studentButtons };
}

/* ===================== HELPERS ===================== */

function clearChat(targets) {
  // Cancels any in-flight typing simulation
  chatState.simulationId += 1;
  if (chatState.typingTimer) clearInterval(chatState.typingTimer);
  chatState.typingTimer = null;
  if (chatState.typingResolve) chatState.typingResolve();
  chatState.typingResolve = null;

  chatState.phase = "idle";
  chatState.activeStudent = null;
  chatState.feedbackStatus = "idle";
  chatState.feedbackChoice = null;
  emitHowItWorksChatPhase();

  targets.chatBodies.forEach((b) => (b.innerHTML = ""));
  targets.inputFields.forEach((i) => (i.value = ""));
}

function makeContextKey(sel, topic) {
  return JSON.stringify({
    class: sel.class,
    subject: sel.subject,
    book: sel.book,
    chapter: sel.chapter,
    topic: topic || null,
  });
}

function appendBubble(body, text, role = "student") {
  const row = document.createElement("div");
  row.className = `chat-row chat-row--${role}`;

  const avatar = document.createElement("div");
  avatar.className = "chat-avatar";
  avatar.textContent = role === "student" ? "S" : "AI";

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble chat-bubble--${role}`;
  bubble.textContent = text;

  if (role === "student") {
    row.appendChild(avatar);
    row.appendChild(bubble);
  } else {
    row.appendChild(bubble);
    row.appendChild(avatar);
  }

  body.appendChild(row);
}

function escapeHTML(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getFirstNWords(text, n) {
  const words = String(text || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return words.slice(0, n).join(" ");
}

function appendExplainSelectionBubble(body, selectedText) {
  const preview = getFirstNWords(selectedText, 10) || "this text";
  const safePreview = escapeHTML(preview);

  const row = document.createElement("div");
  row.className = "chat-row chat-row--student";

  const avatar = document.createElement("div");
  avatar.className = "chat-avatar";
  avatar.textContent = "S";

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble chat-bubble--student";
  bubble.innerHTML = `Explain: <span class="text-primary fw-semibold">${safePreview}</span> : to me`;

  row.appendChild(avatar);
  row.appendChild(bubble);
  body.appendChild(row);
}

function appendSpinner(body) {
  const spinner = document.createElement("div");
  spinner.className = "spinner-border spinner-border-sm my-2";
  spinner.setAttribute("role", "status");
  body.appendChild(spinner);
  return spinner;
}

async function typesetMathIn(elements) {
  const mj = globalThis.MathJax;
  if (!mj || typeof mj.typesetPromise !== "function") return;

  const els = Array.isArray(elements) ? elements.filter(Boolean) : [elements];
  if (!els.length) return;

  try {
    if (typeof mj.typesetClear === "function") mj.typesetClear(els);
    await mj.typesetPromise(els);
  } catch {
    // no-op: math rendering should never break the demo
  }
}

function appendAITable(chatBody, tableSpec) {
  const row = document.createElement("div");
  row.className = "chat-row chat-row--ai";

  const avatar = document.createElement("div");
  avatar.className = "chat-avatar";
  avatar.textContent = "AI";

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble chat-bubble--ai";

  if (tableSpec?.title) {
    const title = document.createElement("div");
    title.className = "fw-semibold mb-2";
    title.textContent = tableSpec.title;
    bubble.appendChild(title);
  }

  const tableWrap = document.createElement("div");
  tableWrap.className = "table-responsive";

  const table = document.createElement("table");
  table.className = "table table-sm table-bordered align-middle mb-0";

  if (Array.isArray(tableSpec?.headers)) {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    tableSpec.headers.forEach((hText) => {
      const th = document.createElement("th");
      th.textContent = hText;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);
  }

  if (Array.isArray(tableSpec?.rows)) {
    const tbody = document.createElement("tbody");
    tableSpec.rows.forEach((r) => {
      const tr = document.createElement("tr");
      (r || []).forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  }

  tableWrap.appendChild(table);
  bubble.appendChild(tableWrap);

  row.appendChild(bubble);
  row.appendChild(avatar);
  chatBody.appendChild(row);
}

/* ===================== EXPLANATION LOADER ===================== */

async function loadExplanation(sel, topic, studentKey) {
  const path = EXPLANATION_MODULES?.[sel.class]?.[sel.subject];
  if (!path) return null;

  const mod = await import(path);
  const data = Object.values(mod)[0];
  if (!data) return null;

  const passageId = (data.passageId || "").trim().toLowerCase();
  const candidates = [
    topic != null ? String(topic) : "",
    sel?.chapter != null ? String(sel.chapter) : "",
  ]
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);

  // Strict match against topic first, then chapter as fallback.
  if (!passageId || !candidates.some((c) => c === passageId)) return null;

  return data.explanationsByProfile?.[studentKey] || null;
}

function normalizeExplanationBlocks(explanation) {
  const raw = explanation?.["adapted*explanation"];
  if (!raw) return [];
  if (Array.isArray(raw)) return raw;
  return [raw];
}

function removeFeedbackBars(targets) {
  targets.chatBodies.forEach((chatBody) => {
    chatBody
      .querySelectorAll('[data-vs-chat-feedback="bar"]')
      .forEach((el) => el.remove());
  });
}

function appendFeedbackBar(chatBody, onSelect) {
  const row = document.createElement("div");
  row.className = "chat-row chat-row--ai";
  row.setAttribute("data-vs-chat-feedback", "bar");

  const avatar = document.createElement("div");
  avatar.className = "chat-avatar";
  avatar.textContent = "AI";

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble chat-bubble--ai";

  const wrap = document.createElement("div");
  wrap.className = "d-flex flex-wrap gap-2 justify-content-end";

  FEEDBACK_OPTIONS.forEach(({ id, label }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-outline-secondary btn-sm";
    btn.textContent = label;
    btn.setAttribute("data-vs-chat-feedback-choice", id);
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      onSelect(id);
    });
    wrap.appendChild(btn);
  });

  bubble.appendChild(wrap);
  row.appendChild(bubble);
  row.appendChild(avatar);
  chatBody.appendChild(row);
}

function showFeedbackUI(targets) {
  removeFeedbackBars(targets);
  chatState.feedbackStatus = "pending";
  chatState.feedbackChoice = null;

  const onSelect = (choiceId) => {
    if (chatState.feedbackStatus !== "pending") return;
    chatState.feedbackStatus = "submitted";
    chatState.feedbackChoice = choiceId;

    removeFeedbackBars(targets);
    targets.chatBodies.forEach((chatBody) => {
      appendAIBubble(chatBody, FEEDBACK_THANK_YOU_TEXT);
    });
  };

  targets.chatBodies.forEach((chatBody) => appendFeedbackBar(chatBody, onSelect));
}

/* ===================== SIMULATION ===================== */

async function runSimulation(targets, studentKey) {
  const sel = getCurrentSelection();
  if (!chatState.activeTopic) return;

  clearChat(targets);
  const simulationId = (chatState.simulationId += 1);
  chatState.activeStudent = studentKey;
  chatState.phase = "typing";
  emitHowItWorksChatPhase();

  /* Step A - Typing */
  let idx = 0;
  targets.inputFields.forEach((input) => (input.value = ""));

  await new Promise((resolve) => {
    chatState.typingResolve = resolve;
    chatState.typingTimer = setInterval(() => {
      if (simulationId !== chatState.simulationId) {
        clearInterval(chatState.typingTimer);
        chatState.typingTimer = null;
        chatState.typingResolve = null;
        resolve();
        return;
      }

      const next = TYPED_PROMPT.slice(0, idx + 1);
      targets.inputFields.forEach((input) => (input.value = next));
      idx++;
      if (idx >= TYPED_PROMPT.length) {
        clearInterval(chatState.typingTimer);
        chatState.typingTimer = null;
        chatState.typingResolve = null;
        resolve();
      }
    }, TYPING_INTERVAL_MS);
  });

  if (simulationId !== chatState.simulationId) return;

  /* Step B - Send */
  chatState.phase = "sent";

  /* Step C — Student bubble */
  targets.chatBodies.forEach((chatBody) => {
    appendBubble(chatBody, TYPED_PROMPT, "student");
  });

  /* Step D — Thinking */
  chatState.phase = "thinking";
  const spinners = targets.chatBodies.map((b) => appendSpinner(b));

  await new Promise((r) => setTimeout(r, THINKING_DELAY_MS));
  spinners.forEach((s) => s.remove());

  if (simulationId !== chatState.simulationId) return;

  /* Step E - Explanation */
  let explanation = null;
  try {
    explanation = await loadExplanation(sel, chatState.activeTopic, studentKey);
  } catch {
    explanation = null;
  }

  if (simulationId !== chatState.simulationId) return;

  if (!explanation) {
    targets.chatBodies.forEach((chatBody) => {
      appendAIBubble(chatBody, "Explanation unavailable for this selection.");
    });
    chatState.phase = "done";
    emitHowItWorksChatPhase();
    if (simulationId !== chatState.simulationId) return;
    showFeedbackUI(targets);
    return;
  }

  const textBlocks = normalizeExplanationBlocks(explanation);
  targets.chatBodies.forEach((chatBody) => {
    textBlocks.forEach((explanationText) => {
      appendAIBubble(chatBody, explanationText);
    });
  });

  const rich = explanation?.rich_content;
  if (rich) {
    const equations = Array.isArray(rich.equations) ? rich.equations : [];
    const tables = Array.isArray(rich.tables) ? rich.tables : [];

    if (equations.length) {
      targets.chatBodies.forEach((chatBody) => {
        equations.forEach(({ label, latex }) => {
          if (!latex) return;
          const blocks = [];
          if (label) blocks.push(`**${label}**`);
          blocks.push(latex);
          appendAIBubble(chatBody, blocks);
        });
      });
    }

    if (tables.length) {
      targets.chatBodies.forEach((chatBody) => {
        tables.forEach((t) => appendAITable(chatBody, t));
      });
    }
  }

  await typesetMathIn(targets.chatBodies);
  if (simulationId !== chatState.simulationId) return;

  chatState.phase = "done";
  emitHowItWorksChatPhase();
  if (simulationId !== chatState.simulationId) return;
  showFeedbackUI(targets);
}

/* ===================== BINDINGS ===================== */

function bindStudentButtons(targets) {
  targets.studentButtons.forEach(({ btn, id }) => {
    btn.addEventListener("click", () => {
      if (!chatState.activeTopic) return;
      runSimulation(targets, id);
    });
  });
}

function bindResets(targets) {
  document.querySelectorAll("select").forEach((s) => {
    s.addEventListener("change", () => clearChatOnTopicChange(targets));
  });
}

/* ===================== PUBLIC API ===================== */

export function setActiveTopicForChat(topicTitle) {
  const sel = getCurrentSelection();
  const newKey = makeContextKey(sel, topicTitle);

  if (chatState.contextKey !== newKey || chatState.activeTopic !== topicTitle) {
    chatState.contextKey = newKey;
    chatState.activeTopic = topicTitle;
    chatState.activeStudent = null;
  }
}

export function clearChatOnTopicChange(targets) {
  chatState.activeTopic = null;
  chatState.activeStudent = null;
  chatState.contextKey = null;
  chatState.phase = "idle";
  emitHowItWorksChatPhase();

  const resolvedTargets = targets || findChatTargets();
  if (resolvedTargets.chatBodies.length) {
    clearChat(resolvedTargets);
    return;
  }

  // If the page doesn't have chat panels, still cancel any in-flight typing.
  chatState.simulationId += 1;
  if (chatState.typingTimer) clearInterval(chatState.typingTimer);
  chatState.typingTimer = null;
  if (chatState.typingResolve) chatState.typingResolve();
  chatState.typingResolve = null;
}

/* ===================== INIT ===================== */

export function initChatSimulationController() {
  const targets = findChatTargets();
  if (!targets.chatBodies.length) return;

  clearChat(targets);
  bindStudentButtons(targets);
  bindResets(targets);
  // Listen for text-selection "Explain This" requests and render a fixed chat
  document.addEventListener("explainText", (event) => {
    if (chatState.phase !== "done") return;
    const selectedText = event?.detail?.text || "";
    targets.chatBodies.forEach((chatBody) => {
      appendExplainSelectionBubble(chatBody, selectedText);
      appendAIBubble(chatBody, "Our AI will explain the selected text");
    });
  });
}

function appendThinkingBubble(body) {
  const row = document.createElement("div");
  row.className = "chat-row chat-row--ai";

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble chat-bubble--ai";
  bubble.innerHTML = `<span class="spinner-border spinner-border-sm"></span>`;

  const avatar = document.createElement("div");
  avatar.className = "chat-avatar";
  avatar.textContent = "AI";

  row.appendChild(bubble);
  row.appendChild(avatar);
  body.appendChild(row);

  return row;
}
function formatInlineText(text) {
  if (!text) return "";

  // Convert **bold** syntax to <strong>
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
}

function appendAIBubble(chatBody, explanationText) {
  const row = document.createElement("div");
  row.className = "chat-row chat-row--ai";

  const avatar = document.createElement("div");
  avatar.className = "chat-avatar";
  avatar.textContent = "AI";

  const bubble = document.createElement("div");
  bubble.className = "chat-bubble chat-bubble--ai";

  // Normalize explanation into paragraphs
  const paragraphs = Array.isArray(explanationText)
    ? explanationText
    : explanationText.split(/\n\s*\n/);

  paragraphs.forEach((para) => {
    if (!para.trim()) return;
    const p = document.createElement("p");
    p.innerHTML = formatInlineText(para.trim());
    bubble.appendChild(p);
  });

  row.appendChild(bubble);
  row.appendChild(avatar);
  chatBody.appendChild(row);
}

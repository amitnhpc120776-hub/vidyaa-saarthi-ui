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
};

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

function appendSpinner(body) {
  const spinner = document.createElement("div");
  spinner.className = "spinner-border spinner-border-sm my-2";
  spinner.setAttribute("role", "status");
  body.appendChild(spinner);
  return spinner;
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

/* ===================== SIMULATION ===================== */

async function runSimulation(targets, studentKey) {
  const sel = getCurrentSelection();
  if (!chatState.activeTopic) return;

  clearChat(targets);
  const simulationId = (chatState.simulationId += 1);
  chatState.activeStudent = studentKey;
  chatState.phase = "typing";

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
    return;
  }

  const textBlocks = normalizeExplanationBlocks(explanation);
  targets.chatBodies.forEach((chatBody) => {
    textBlocks.forEach((explanationText) => {
      appendAIBubble(chatBody, explanationText);
    });
  });

  chatState.phase = "done";
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

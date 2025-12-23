/* ============================================================
   Topic Controller (Topic List + Topic Description)
   Page: howItWorks.html (Desktop + Mobile)
   Responsibilities:
   - Clear topic list + description on any Class/Subject/Book/Chapter change
   - Load topics only when a valid Chapter is selected
   - Show topic description only when a topic checkbox is checked
   - Keep desktop and mobile in sync (same active topic)
   ============================================================ */

import { getCurrentSelection } from "./dropdownController.js";
import {
  setActiveTopicForChat,
  clearChatOnTopicChange,
} from "./chatSimulationController.js";

/* -------------------- Topic module registry --------------------
   Maps (Class, Subject) -> topic file path (ES module)
   NOTE: Paths are relative to this controller file location:
   .../howItWorks/controllers/topicController.js
------------------------------------------------------------------ */
const TOPIC_MODULES = {
  VIII: {
    mathematics: "../data/topics/VIII/topicsVIIImathematics.js",
    science: "../data/topics/VIII/topicsVIIIscience.js",
    "social-science": "../data/topics/VIII/topicsVIIIsocialScience.js",
  },
  X: {
    mathematics: "../data/topics/X/topicsXmathematics.js",
    science: "../data/topics/X/topicsXscience.js",
    "social-science": "../data/topics/X/topicsXsocialScience.js",
  },
  XII: {
    accountancy: "../data/topics/XII/topicsXIIaccountancy.js",
    biology: "../data/topics/XII/topicsXIIbiology.js",
    chemistry: "../data/topics/XII/topicsXIIchemistry.js",
    economics: "../data/topics/XII/topicsXIIeconomics.js",
    mathematics: "../data/topics/XII/topicsXIImathematics.js",
    physics: "../data/topics/XII/topicsXIIphysics.js",
  },
};

/* -------------------- Internal state -------------------- */
const topicState = {
  contextKey: null, // signature of current (class, subject, book, chapter)
  topics: [], // [{ title, blocks }]
  activeIndex: null, // number | null
};

/* -------------------- DOM discovery (no IDs) -------------------- */
function findPanelsByHeaderText(root) {
  const panels = Array.from(root.querySelectorAll(".vs-panel"));
  const byHeader = new Map();

  panels.forEach((panel) => {
    const headerEl = panel.querySelector(".vs-panel-header");
    const bodyEl = panel.querySelector(".vs-panel-body");
    if (!headerEl || !bodyEl) return;

    const headerText = headerEl.textContent.trim().toLowerCase();
    if (!byHeader.has(headerText)) byHeader.set(headerText, []);
    byHeader.get(headerText).push({ panel, headerEl, bodyEl });
  });

  return byHeader;
}

function getTopicTargets() {
  // Desktop section: visible >= md
  const desktopRoot = document.querySelector(".d-none.d-md-block");
  // Mobile section: visible < md
  const mobileRoot = document.querySelector(".d-block.d-md-none");

  const desktopMap = desktopRoot
    ? findPanelsByHeaderText(desktopRoot)
    : new Map();
  const mobileMap = mobileRoot ? findPanelsByHeaderText(mobileRoot) : new Map();

  // We identify by panel header labels used in HTML
  const desktopTopicList =
    (desktopMap.get("topic list") || [])[0]?.bodyEl || null;
  const desktopTopicDesc =
    (desktopMap.get("topic description") || [])[0]?.bodyEl || null;

  const mobileTopicList =
    (mobileMap.get("topic list") || [])[0]?.bodyEl || null;
  const mobileTopicDesc =
    (mobileMap.get("topic description") || [])[0]?.bodyEl || null;

  return {
    topicListBodies: [desktopTopicList, mobileTopicList].filter(Boolean),
    topicDescBodies: [desktopTopicDesc, mobileTopicDesc].filter(Boolean),
  };
}

/* -------------------- Utilities -------------------- */
function makeContextKey(sel) {
  return JSON.stringify({
    class: sel.class || null,
    subject: sel.subject || null,
    book: sel.book || null,
    chapter: sel.chapter || null,
  });
}

function clearElement(el) {
  el.innerHTML = "";
}

function renderMuted(el, text) {
  el.innerHTML = `<p class="small text-muted mb-0">${text}</p>`;
}

function typesetMathIn(element) {
  const mj = globalThis.MathJax;
  if (!mj || typeof mj.typesetPromise !== "function") return;

  try {
    if (typeof mj.typesetClear === "function") mj.typesetClear([element]);
    mj.typesetPromise([element]).catch(() => {});
  } catch {
    // no-op
  }
}

/* Finds chapter key in a case-insensitive way (handles ATOMS vs Atoms etc.) */
function findChapterBlocks(topicsMap, chapterName) {
  if (!topicsMap || !chapterName) return null;

  // Fast paths
  if (topicsMap[chapterName]) return topicsMap[chapterName];
  const upper = chapterName.toUpperCase();
  if (topicsMap[upper]) return topicsMap[upper];

  // Case-insensitive match
  const target = chapterName.trim().toLowerCase();
  const foundKey = Object.keys(topicsMap).find(
    (k) => k.trim().toLowerCase() === target
  );
  return foundKey ? topicsMap[foundKey] : null;
}

/* Split chapter blocks into topics.
   Rule:
   - If there are "heading" blocks, each heading starts a new topic
   - Otherwise, single topic = chapter name
*/
function splitBlocksIntoTopics(blocks, chapterName) {
  if (!Array.isArray(blocks) || blocks.length === 0) return [];

  const hasHeading = blocks.some((b) => b?.type === "heading");
  if (!hasHeading) {
    return [{ title: chapterName, blocks: blocks.slice() }];
  }

  const topics = [];
  let current = null;

  blocks.forEach((b) => {
    if (b?.type === "heading") {
      if (current) topics.push(current);
      current = { title: b.text || "Untitled Topic", blocks: [] };
      return;
    }

    if (!current) {
      // If first item isn't a heading, start a default topic
      current = { title: chapterName, blocks: [] };
    }
    current.blocks.push(b);
  });

  if (current) topics.push(current);
  return topics;
}

/* -------------------- Rendering -------------------- */
function renderTopicLists(topics, targets) {
  targets.topicListBodies.forEach((body) => {
    clearElement(body);

    if (!topics || topics.length === 0) {
      renderMuted(body, "No topics available for this chapter");
      return;
    }

    // Container wrapper for event delegation
    const wrap = document.createElement("div");
    wrap.className = "vs-topic-list";

    topics.forEach((t, idx) => {
      const row = document.createElement("div");
      row.className = "form-check mb-2";

      const input = document.createElement("input");
      input.className = "form-check-input";
      input.type = "checkbox";
      input.setAttribute("data-topic-index", String(idx));
      input.checked = topicState.activeIndex === idx;

      const label = document.createElement("label");
      label.className = "form-check-label";
      label.textContent = t.title || "Untitled Topic";

      row.appendChild(input);
      row.appendChild(label);
      wrap.appendChild(row);
    });

    body.appendChild(wrap);
  });
}

function renderTopicDescription(activeTopic, targets) {
  targets.topicDescBodies.forEach((body) => {
    clearElement(body);

    if (!activeTopic) {
      renderMuted(body, "Select a topic to view its description");
      typesetMathIn(body);
      return;
    }

    // Title (kept simple; can be removed later if you prefer)
    const titleEl = document.createElement("div");
    titleEl.className = "fw-semibold mb-2";
    titleEl.textContent = activeTopic.title || "Topic";
    body.appendChild(titleEl);

    // Render blocks
    (activeTopic.blocks || []).forEach((b) => {
      if (!b || !b.type) return;

      // Text blocks
      if (b.type === "description" || b.type === "definition") {
        const p = document.createElement("p");
        p.className = "mb-2";
        p.style.whiteSpace = "pre-line";
        p.textContent = b.text || "";
        body.appendChild(p);
        return;
      }

      if (b.type === "formula" || b.type === "equation") {
        const pre = document.createElement("pre");
        pre.className = "p-2 border rounded mb-2";
        pre.style.whiteSpace = "pre-wrap";
        pre.textContent = b.text || "";
        body.appendChild(pre);
        return;
      }

      if (b.type === "heading") {
        const h = document.createElement("div");
        h.className = "fw-semibold mt-3 mb-2";
        h.textContent = b.text || "";
        body.appendChild(h);
        return;
      }

      // Table block
      if (b.type === "table") {
        const tableWrap = document.createElement("div");
        tableWrap.className = "table-responsive mb-3";

        const table = document.createElement("table");
        table.className = "table table-sm table-bordered align-middle mb-0";

        if (Array.isArray(b.headers)) {
          const thead = document.createElement("thead");
          const tr = document.createElement("tr");
          b.headers.forEach((hText) => {
            const th = document.createElement("th");
            th.textContent = hText;
            tr.appendChild(th);
          });
          thead.appendChild(tr);
          table.appendChild(thead);
        }

        if (Array.isArray(b.rows)) {
          const tbody = document.createElement("tbody");
          b.rows.forEach((row) => {
            const tr = document.createElement("tr");
            (row || []).forEach((cell) => {
              const td = document.createElement("td");
              td.textContent = cell;
              tr.appendChild(td);
            });
            tbody.appendChild(tr);
          });
          table.appendChild(tbody);
        }

        tableWrap.appendChild(table);
        body.appendChild(tableWrap);
        return;
      }

      // Image block
      if (b.type === "image") {
        const figure = document.createElement("figure");
        figure.className = "mb-3";

        const img = document.createElement("img");
        img.className = "img-fluid border rounded";
        img.src = b.src || "";
        img.alt = b.alt || "Topic image";

        figure.appendChild(img);

        if (b.caption) {
          const cap = document.createElement("figcaption");
          cap.className = "small text-muted mt-1";
          cap.textContent = b.caption;
          figure.appendChild(cap);
        }

        body.appendChild(figure);
        return;
      }
    });

    typesetMathIn(body);
  });
}

/* -------------------- Data loading -------------------- */
async function loadTopicsForSelection(sel) {
  const classId = sel.class;
  const subjectId = sel.subject;
  const chapterName = sel.chapter;

  const modulePath = TOPIC_MODULES?.[classId]?.[subjectId];
  if (!modulePath) return [];

  let mod = null;
  try {
    mod = await import(modulePath);
  } catch {
    return [];
  }

  // Each topic file exports a single object; grab the first export value safely.
  const exported = Object.values(mod)[0];
  if (!exported || typeof exported !== "object") return [];

  const chapterBlocks = findChapterBlocks(exported, chapterName);
  if (!chapterBlocks) return [];

  return splitBlocksIntoTopics(chapterBlocks, chapterName);
}

/* -------------------- Reset rules -------------------- */
function hardResetTopics(targets) {
  topicState.topics = [];
  topicState.activeIndex = null;

  targets.topicListBodies.forEach((b) => {
    clearElement(b);
    renderMuted(b, "Topics will appear here");
  });

  targets.topicDescBodies.forEach((b) => {
    clearElement(b);
    renderMuted(b, "Select a topic to view its description");
  });

  clearChatOnTopicChange();
}

/* -------------------- Sync selection (desktop + mobile) -------------------- */
function setActiveTopicIndex(newIndex, targets) {
  // If toggling off active topic
  if (topicState.activeIndex === newIndex) {
    topicState.activeIndex = null;
    // Uncheck all
    targets.topicListBodies.forEach((body) => {
      body
        .querySelectorAll('input[type="checkbox"][data-topic-index]')
        .forEach((cb) => {
          cb.checked = false;
        });
    });
    renderTopicDescription(null, targets);
    // Clear chat when topic is unchecked
    clearChatOnTopicChange();
    return;
  }

  topicState.activeIndex = newIndex;

  // Check only one across all views
  targets.topicListBodies.forEach((body) => {
    body
      .querySelectorAll('input[type="checkbox"][data-topic-index]')
      .forEach((cb) => {
        cb.checked = cb.getAttribute("data-topic-index") === String(newIndex);
      });
  });

  const active = topicState.topics[newIndex] || null;
  renderTopicDescription(active, targets);
  // Enable chat for the newly selected topic
  const sel = getCurrentSelection();
  setActiveTopicForChat(active?.title || sel.chapter);
}

/* -------------------- Event wiring -------------------- */
function bindTopicListEvents(targets) {
  // Delegate checkbox toggles inside each list container
  targets.topicListBodies.forEach((body) => {
    body.addEventListener("change", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (target.type !== "checkbox") return;

      const idx = target.getAttribute("data-topic-index");
      if (idx == null) return;

      const num = Number(idx);
      if (!Number.isFinite(num)) return;

      if (target.checked) {
        setActiveTopicIndex(num, targets);
      } else {
        // Unchecking active topic clears description
        if (topicState.activeIndex === num) {
          setActiveTopicIndex(num, targets); // toggles off
        }
      }
    });
  });
}

function bindDropdownChangeResets(targets) {
  const selects = Array.from(document.querySelectorAll("select"));

  // Any change in any dropdown triggers context re-evaluation
  selects.forEach((selEl) => {
    selEl.addEventListener("change", async () => {
      await handleContextChange(targets);
    });
  });
}

/* -------------------- Context orchestration -------------------- */
async function handleContextChange(targets) {
  const sel = getCurrentSelection();
  const key = makeContextKey(sel);

  // If anything changed in Class/Subject/Book/Chapter -> clear topics + description
  if (topicState.contextKey !== key) {
    topicState.contextKey = key;
    hardResetTopics(targets);

    // Load topics only when a valid chapter exists AND class/subject/book exist
    if (sel.class && sel.subject && sel.book && sel.chapter) {
      const requestedKey = key;
      const topics = await loadTopicsForSelection(sel);
      if (topicState.contextKey !== requestedKey) return;

      topicState.topics = topics;
      topicState.activeIndex = null;

      renderTopicLists(topics, targets);
      renderTopicDescription(null, targets);
      clearChatOnTopicChange();
    }
  }
}

/* -------------------- Public init -------------------- */
export function initTopicController() {
  const targets = getTopicTargets();

  // If panels not found, fail silently (page might not have those sections)
  if (!targets.topicListBodies.length && !targets.topicDescBodies.length)
    return;

  // Initial placeholders
  hardResetTopics(targets);

  // Bind events
  bindTopicListEvents(targets);
  bindDropdownChangeResets(targets);

  // Initial evaluation (in case dropdowns are pre-set later)
  handleContextChange(targets);
}

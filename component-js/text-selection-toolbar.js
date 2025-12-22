/**
 * TEXT SELECTION TOOLBAR
 * Floating contextual toolbar that appears when users select text
 * Integrates with Ask VidyaaSaarthi chatbot
 */

(function () {
    'use strict';

    let toolbar = null;
    let selectedText = '';
    let selectionTimeout = null;

    /**
     * Initialize the text selection toolbar
     */
    function init() {
        // Create toolbar element
        createToolbar();

        // Add event listeners
        document.addEventListener('mouseup', handleTextSelection);
        document.addEventListener('touchend', handleTextSelection);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
    }

    /**
     * Create the toolbar DOM element
     */
    function createToolbar() {
        toolbar = document.createElement('div');
        toolbar.className = 'text-selection-toolbar';
        toolbar.setAttribute('role', 'tooltip');
        toolbar.setAttribute('aria-label', 'Text explanation toolbar');

        const button = document.createElement('button');
        button.className = 'text-selection-toolbar-btn';
        button.textContent = 'Explain This';
        button.setAttribute('aria-label', 'Explain selected text');
        button.addEventListener('click', handleExplainClick);

        toolbar.appendChild(button);
        document.body.appendChild(toolbar);
    }

    /**
     * Handle text selection
     */
    function handleTextSelection(e) {
        // Clear any existing timeout
        if (selectionTimeout) {
            clearTimeout(selectionTimeout);
        }

        // Debounce to avoid excessive calls
        selectionTimeout = setTimeout(() => {
            const selection = window.getSelection();
            const text = selection.toString().trim();

            // Only show toolbar if text is selected and within learning content area
            if (text.length > 0 && isWithinLearningContent(selection)) {
                selectedText = text;
                showToolbar(selection);
            } else {
                hideToolbar();
            }
        }, 100);
    }

    /**
     * Check if selection is within learning content area
     */
    function isWithinLearningContent(selection) {
        if (!selection.rangeCount) return false;

        const range = selection.getRangeAt(0);
        const container = range.commonAncestorContainer;
        const element = container.nodeType === 3 ? container.parentElement : container;

        // Check if selection is within topic content or description areas
        return element.closest('#topicContentDesktop') ||
            element.closest('.vs-panel-body') ||
            element.closest('[data-selectable="true"]');
    }

    /**
     * Show the toolbar near the selection
     */
    function showToolbar(selection) {
        if (!selection.rangeCount) return;

        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Calculate position
        const toolbarWidth = 150; // Approximate width
        const toolbarHeight = 45; // Approximate height
        const spacing = 10;

        let left = rect.left + (rect.width / 2) - (toolbarWidth / 2);
        let top = rect.top - toolbarHeight - spacing + window.scrollY;

        // Ensure toolbar stays within viewport
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Adjust horizontal position
        if (left < spacing) {
            left = spacing;
        } else if (left + toolbarWidth > viewportWidth - spacing) {
            left = viewportWidth - toolbarWidth - spacing;
        }

        // Adjust vertical position (show below if not enough space above)
        if (rect.top < toolbarHeight + spacing * 2) {
            top = rect.bottom + spacing + window.scrollY;
            toolbar.style.setProperty('--arrow-position', 'top');
        } else {
            toolbar.style.setProperty('--arrow-position', 'bottom');
        }

        // Set position and show
        toolbar.style.left = `${left}px`;
        toolbar.style.top = `${top}px`;
        toolbar.classList.add('show');
    }

    /**
     * Hide the toolbar
     */
    function hideToolbar() {
        if (toolbar) {
            toolbar.classList.remove('show');
            selectedText = '';
        }
    }

    /**
     * Handle Explain button click
     */
    function handleExplainClick(e) {
        e.preventDefault();
        e.stopPropagation();

        if (selectedText) {
            // Dispatch custom event for Ask VidyaaSaarthi integration
            const event = new CustomEvent('explainText', {
                detail: { text: selectedText }
            });
            document.dispatchEvent(event);

            // Hide toolbar
            hideToolbar();

            // Clear selection
            window.getSelection().removeAllRanges();
        }
    }

    /**
     * Handle keyboard shortcuts
     */
    function handleKeyDown(e) {
        // Escape key to close toolbar
        if (e.key === 'Escape') {
            hideToolbar();
            window.getSelection().removeAllRanges();
        }
    }

    /**
     * Handle clicks outside toolbar
     */
    function handleClickOutside(e) {
        if (toolbar && !toolbar.contains(e.target)) {
            // Don't hide immediately - let selection handler decide
            setTimeout(() => {
                const selection = window.getSelection();
                if (!selection.toString().trim()) {
                    hideToolbar();
                }
            }, 50);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

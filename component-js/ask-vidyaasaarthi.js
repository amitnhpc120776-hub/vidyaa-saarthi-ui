/**
 * ASK VIDYAASAARTHI CHATBOT
 * Interactive chatbot interface for contextual learning support
 * Integrates with text selection toolbar
 */

(function () {
    'use strict';

    let chatContainer = null;
    let messagesArea = null;
    let inputField = null;
    let sendButton = null;
    let isDemoMode = false;

    /**
     * Initialize the chatbot
     */
    function init() {
        // Find chat elements
        chatContainer = document.getElementById('chatAreaDesktop');
        if (!chatContainer) return;

        // Setup chat UI
        setupChatUI();

        // Add event listeners
        document.addEventListener('explainText', handleExplainText);

        if (sendButton) {
            sendButton.addEventListener('click', handleSendMessage);
        }

        if (inputField) {
            inputField.addEventListener('keypress', handleKeyPress);
        }
    }

    /**
     * Setup the chat UI structure
     */
    function setupChatUI() {
        // Clear existing content
        chatContainer.innerHTML = '';

        // Create messages area
        messagesArea = document.createElement('div');
        messagesArea.className = 'vs-chat-messages';
        messagesArea.setAttribute('role', 'log');
        messagesArea.setAttribute('aria-live', 'polite');
        messagesArea.setAttribute('aria-label', 'Chat messages');

        // Add welcome message
        addWelcomeMessage();

        chatContainer.appendChild(messagesArea);

        // Update input area
        const inputArea = chatContainer.parentElement.querySelector('.chat-input-bar');
        if (inputArea) {
            // Keep existing input area logic
            inputField = inputArea.querySelector('input');
            sendButton = inputArea.querySelector('button'); // Assuming the last button is send or finding by class

            if (!inputField) {
                // Fallback if structure is different
                inputField = inputArea.querySelector('.vs-chat-input') || inputArea.querySelector('.form-control');
            }
            // Add class for selection if needed
            if (inputField) inputField.classList.add('vs-chat-input');

            // Send button might need better selection
            const buttons = inputArea.querySelectorAll('button');
            buttons.forEach(btn => {
                if (btn.textContent.trim().toLowerCase() === 'send') {
                    sendButton = btn;
                    sendButton.classList.add('vs-chat-send-btn');
                }
            });

            if (sendButton) sendButton.addEventListener('click', handleSendMessage);
            if (inputField) inputField.addEventListener('keypress', handleKeyPress);
        }
    }

    /**
     * Add welcome message
     */
    function addWelcomeMessage() {
        const welcome = document.createElement('div');
        welcome.className = 'vs-chat-welcome';
        welcome.innerHTML = `
      <div class="vs-chat-welcome-icon">🎓</div>
      <div class="vs-chat-welcome-text">
        <strong>Welcome to Ask VidyaaSaarthi!</strong><br>
        Select any text to get an explanation, or ask me questions about the topic.
      </div>
    `;
        messagesArea.appendChild(welcome);
    }

    /**
     * Clear chat messages
     */
    function clearChat() {
        if (messagesArea) {
            messagesArea.innerHTML = '';
        }
    }

    /**
     * Set demo mode
     */
    function setDemoMode(enabled) {
        isDemoMode = enabled;

        // Disable/enable input during demo
        if (inputField) {
            inputField.disabled = enabled;
        }
        if (sendButton) {
            sendButton.disabled = enabled;
        }
    }

    /**
     * Add user message (public for demo use)
     */
    function addUserMessage(text) {
        // Remove welcome message if present
        const welcome = messagesArea.querySelector('.vs-chat-welcome');
        if (welcome) welcome.remove();

        addMessage('user', text);
    }

    /**
     * Add bot message (public for demo use)
     */
    function addBotMessage(text) {
        addMessage('bot', text);
    }

    /**
     * Handle text explanation request from toolbar
     */
    /**
     * Handle text explanation request from toolbar
     */
    function handleExplainText(event) {
        const text = event.detail.text;

        // Add user message
        addUserMessage(`Explain: "${text}"`);

        // Show typing indicator
        showTypingIndicator();

        // Simulate bot response
        setTimeout(() => {
            hideTypingIndicator();

            if (isDemoMode) {
                // STRICT RULE FOR DEMO MODE
                addMessage('bot', "Further explanation will be given by our Bot");
                return;
            }

            // Normal mode logic
            // EXACT RESPONSE REQUIREMENT
            addMessage('bot', "Further explanation will be given by our Bot.");

            // Follow up with actual explanation content
            setTimeout(() => {
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    const explanation = generateExplanation(text);
                    addMessage('bot', explanation);
                }, 1000);
            }, 500);

        }, 1000);
    }

    /**
     * Handle send message button click
     */
    function handleSendMessage() {
        if (!inputField || isDemoMode) return;
        const message = inputField.value.trim();
        if (!message) return;

        // Add user message
        addUserMessage(message);

        // Clear input
        inputField.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Simulate bot response
        setTimeout(() => {
            hideTypingIndicator();
            const response = generateResponse(message);
            addMessage('bot', response);
        }, 1500);
    }

    /**
     * Handle Enter key press
     */
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    }

    /**
     * Add a message to the chat
     */
    function addMessage(type, text) {
        const messageDiv = document.createElement('div');
        // Use Bootstrap classes for alignment and spacing
        messageDiv.className = `d-flex w-100 mb-3 ${type === 'user' ? 'justify-content-end' : 'justify-content-start'}`;
        messageDiv.setAttribute('role', 'article');

        const avatar = document.createElement('div');
        // Simple avatar using badge styling
        avatar.className = `flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle ${type === 'user' ? 'bg-primary text-white' : 'bg-success text-white'}`;
        avatar.style.width = '32px';
        avatar.style.height = '32px';
        avatar.textContent = type === 'user' ? '👤' : '🎓';

        const bubble = document.createElement('div');
        // Bootstrap card-like formatting for bubbles
        bubble.className = `p-3 rounded-3 shadow-sm ${type === 'user' ? 'bg-primary text-white me-2' : 'bg-light text-dark ms-2'}`;
        bubble.style.maxWidth = '80%';
        bubble.innerHTML = text.replace(/\n/g, '<br>');

        if (type === 'user') {
            messageDiv.appendChild(bubble);
            messageDiv.appendChild(avatar);
        } else {
            messageDiv.appendChild(avatar);
            messageDiv.appendChild(bubble);
        }

        messagesArea.appendChild(messageDiv);

        // Scroll to bottom
        scrollToBottom();
    }

    /**
     * Show typing indicator
     */
    function showTypingIndicator() {
        // Don't duplicate
        if (document.getElementById('typing-indicator')) return;

        const indicator = document.createElement('div');
        indicator.className = 'd-flex w-100 mb-3 justify-content-start';
        indicator.id = 'typing-indicator';

        indicator.innerHTML = `
            <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 32px; height: 32px;">🎓</div>
            <div class="p-3 rounded-3 bg-light text-dark ms-2 shadow-sm">
                <div class="spinner-grow spinner-grow-sm text-secondary" role="status"></div>
                <div class="spinner-grow spinner-grow-sm text-secondary" role="status"></div>
                <div class="spinner-grow spinner-grow-sm text-secondary" role="status"></div>
            </div>
        `;
        messagesArea.appendChild(indicator);
        scrollToBottom();
    }

    /**
     * Hide typing indicator
     */
    function hideTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    /**
     * Scroll chat to bottom
     */
    function scrollToBottom() {
        if (messagesArea) {
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }
    }

    /**
     * Show Inline Feedback (Replaces Popup)
     */
    /**
     * Show Inline Feedback (Bootstrap Styled)
     */
    function showInlineFeedback() {
        // Create container for feedback
        const feedbackContainer = document.createElement('div');
        feedbackContainer.className = 'w-100 mt-4 mb-2';

        const card = document.createElement('div');
        card.className = 'card border-light shadow-sm bg-light';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body text-center p-3';

        const title = document.createElement('h6');
        title.className = 'card-title mb-3 text-muted';
        title.textContent = 'Was this demo helpful?';

        const buttonGroup = document.createElement('div');
        buttonGroup.className = 'btn-group';
        buttonGroup.setAttribute('role', 'group');
        buttonGroup.setAttribute('aria-label', 'Feedback options');

        const options = [
            { text: 'Yes', val: 'yes', icon: '👍' },
            { text: 'No', val: 'no', icon: '👎' },
            { text: 'Rate', val: 'rate', icon: '⭐' }
        ];

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'btn btn-outline-secondary btn-sm';
            btn.innerHTML = `<span class="me-1">${opt.icon}</span>${opt.text}`;
            btn.onclick = function () {
                // Disable all buttons in this group
                const btns = buttonGroup.querySelectorAll('.btn');
                btns.forEach(b => b.classList.add('disabled'));
                // Highlight selected
                this.classList.remove('btn-outline-secondary');
                this.classList.add('btn-success');
                this.classList.remove('disabled');
            };
            buttonGroup.appendChild(btn);
        });

        cardBody.appendChild(title);
        cardBody.appendChild(buttonGroup);
        card.appendChild(cardBody);
        feedbackContainer.appendChild(card);

        messagesArea.appendChild(feedbackContainer);
        scrollToBottom();
    }

    /**
     * Generate explanation for selected text (demo version)
     */
    function generateExplanation(text) {
        const explanations = {
            'Newton': 'Newton\'s laws describe the relationship between forces and motion. The Third Law states that for every action, there is an equal and opposite reaction.',
            'momentum': 'Momentum is the product of an object\'s mass and velocity (p = mv). It\'s a measure of how difficult it is to stop a moving object.',
            'conservation': 'The law of conservation of momentum states that in a closed system, the total momentum before and after an interaction remains constant.',
            'gravity': 'The force of gravity is the pull that Earth exerts on all objects. It\'s what makes things fall down when you drop them.',
            'larger area': '"Larger area" means more surface touching your shoulder. This reduces the pressure per square inch.'
        };

        for (const [key, explanation] of Object.entries(explanations)) {
            if (text.toLowerCase().includes(key.toLowerCase())) {
                return explanation;
            }
        }
        return `"${text}" is an important concept here. It relates to the core principles of physics we are discussing in this chapter.`;
    }

    /**
     * Generate response to user question (demo version)
     */
    function generateResponse(message) {
        const responses = {
            'what': 'That\'s a great question! Let me explain that concept in simpler terms...',
            'how': 'Here\'s how it works: The principle involves understanding the relationship between different variables...',
            'why': 'The reason for this is based on fundamental principles of physics...',
            'example': 'Sure! Here\'s a practical example: Imagine you\'re pushing a shopping cart...',
        };

        for (const [key, response] of Object.entries(responses)) {
            if (message.toLowerCase().includes(key)) {
                return response;
            }
        }
        return 'That\'s an interesting question! Based on the topic we\'re studying, I can help you understand this better. Could you be more specific about which part you\'d like me to explain?';
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose public interface
    window.VidyaaSaarthiChat = {
        addUserMessage,
        addBotMessage,
        showTypingIndicator,
        hideTypingIndicator,
        clearChat,
        setDemoMode,
        showInlineFeedback
    };
})();

/**
 * DEMO CONVERSATIONS FOR ASK VIDYAASAARTHI
 * Automated student conversations using real explanation data
 * Integrates with text selection "Explain This" feature
 */

import { explanations } from '../howItWorks/data/explanations/VIII/explanationVIIIscience.js';

(function () {
    'use strict';

    // Demo conversation configurations
    const DEMO_CONVERSATIONS = {
        student_1: {
            name: 'Student 1',
            messages: [
                {
                    role: 'user',
                    content: 'Can you explain why bags with broad straps feel more comfortable?',
                    delay: 1000
                },
                {
                    role: 'bot',
                    content: explanations.explanationsByProfile.student_1['adapted*explanation'][0],
                    delay: 2000
                },
                {
                    role: 'user',
                    content: 'I want to understand more about "force of gravity"',
                    delay: 1500,
                    // Trigger the explanation logic
                    explainTrigger: {
                        text: 'force of gravity',
                        shouldExplain: true
                    }
                },
                // The main chatbot will reply "Further explanation..."
                // Then we follow up with the actual content from the script:
                {
                    role: 'bot',
                    content: 'The force of gravity is the pull that Earth exerts on all objects. It\'s what makes things fall down when you drop them. When you carry a bag, gravity pulls it downward, and you feel that pull on your shoulders. The heavier the bag, the stronger the pull!',
                    delay: 3000 // Extended delay to allow "Further explanation..." to be read
                },
                {
                    role: 'user',
                    content: 'That makes sense! Can you give me the key points?',
                    delay: 1500
                },
                {
                    role: 'bot',
                    content: formatKeyPoints(explanations.explanationsByProfile.student_1.key_points),
                    delay: 1500
                }
            ]
        },
        student_2: {
            name: 'Student 2',
            messages: [
                {
                    role: 'user',
                    content: 'I read about Megha and Pawan\'s bags. Why does the strap width matter?',
                    delay: 1000
                },
                {
                    role: 'bot',
                    content: explanations.explanationsByProfile.student_2['adapted*explanation'][0],
                    delay: 2000
                },
                {
                    role: 'user',
                    content: 'Please explain what "larger area" means here',
                    delay: 1500,
                    explainTrigger: {
                        text: 'larger area',
                        shouldExplain: true
                    }
                },
                {
                    role: 'bot',
                    content: '"Larger area" means more surface touching your shoulder. Think of it like this: if you press a pencil point on your hand, it hurts because it touches only a tiny spot. But if you press your whole palm on your hand, it doesn\'t hurt because the pressure spreads across a bigger area. Same idea with bag straps!',
                    delay: 3000
                },
                {
                    role: 'user',
                    content: 'Great! What are the main points I should remember?',
                    delay: 1500
                },
                {
                    role: 'bot',
                    content: formatKeyPoints(explanations.explanationsByProfile.student_2.key_points),
                    delay: 1500
                }
            ]
        }
    };

    /**
     * Format key points as a bulleted list
     */
    function formatKeyPoints(points) {
        let formatted = '<strong>📝 Key Points to Remember:</strong><br>';
        points.forEach((point, index) => {
            formatted += `<br>${index + 1}. ${point}`;
        });
        return formatted;
    }

    /**
     * Demo conversation player
     */
    class DemoPlayer {
        constructor(conversationKey, chatInterface) {
            this.conversationKey = conversationKey;
            this.conversation = DEMO_CONVERSATIONS[conversationKey];
            this.chatInterface = chatInterface;
            this.currentIndex = 0;
            this.isPlaying = false;
            this.timeouts = [];
        }

        /**
         * Start playing the demo conversation
         */
        async play() {
            if (this.isPlaying) return;

            this.isPlaying = true;
            this.currentIndex = 0;
            this.playNextMessage();
        }

        /**
         * Play the next message in sequence
         */
        playNextMessage() {
            if (!this.isPlaying) return;

            if (this.currentIndex >= this.conversation.messages.length) {
                this.finishDemo();
                return;
            }

            const message = this.conversation.messages[this.currentIndex];

            const timeoutId = setTimeout(() => {
                if (!this.isPlaying) return;

                if (message.role === 'user') {
                    // User Message
                    this.chatInterface.addUserMessage(message.content);

                    if (message.explainTrigger && message.explainTrigger.shouldExplain) {
                        const explainDelay = setTimeout(() => {
                            if (!this.isPlaying) return;
                            // Trigger 'handleExplainText' -> shows "Further explanation..."
                            const event = new CustomEvent('explainText', {
                                detail: { text: message.explainTrigger.text }
                            });
                            document.dispatchEvent(event);

                            // Move to next message (Bot explanation)
                            this.currentIndex++;
                            // Longer delay handled by next message's 'delay' property
                            this.playNextMessage();

                        }, 1000);
                        this.timeouts.push(explainDelay);
                        return;
                    }
                } else {
                    // Bot Message
                    this.chatInterface.showTypingIndicator();

                    const typingDelay = setTimeout(() => {
                        if (!this.isPlaying) return;
                        this.chatInterface.hideTypingIndicator();
                        this.chatInterface.addBotMessage(message.content);

                        this.currentIndex++;
                        this.playNextMessage();
                    }, 1500);
                    this.timeouts.push(typingDelay);
                    return;
                }

                this.currentIndex++;
                this.playNextMessage();

            }, message.delay);

            this.timeouts.push(timeoutId);
        }

        finishDemo() {
            this.isPlaying = false;
            const feedbackDelay = setTimeout(() => {
                if (this.chatInterface.showInlineFeedback) {
                    this.chatInterface.showInlineFeedback();
                }
            }, 500);
            this.timeouts.push(feedbackDelay);
        }

        /**
         * Stop the demo and clear all timeouts
         */
        stop() {
            this.isPlaying = false;
            this.timeouts.forEach(timeout => clearTimeout(timeout));
            this.timeouts = [];
        }
    }

    /**
     * Initialize demo tabs
     */
    function initDemoTabs() {
        // Get chat interface
        const chatInterface = window.VidyaaSaarthiChat;
        if (!chatInterface) {
            // Retry if not ready
            setTimeout(initDemoTabs, 500);
            return;
        }

        let currentPlayer = null;

        // Find existing buttons in header
        const tabs = document.querySelectorAll('.vs-demo-btn');
        if (tabs.length === 0) return;

        // Helper to update header
        const updateHeader = (title) => {
            const header = document.querySelector('.vs-panel-header span');
            if (header) {
                header.textContent = title;
            }
        };

        // Add tab click handlers
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Toggle Button Styles (Bootstrap)
                tabs.forEach(t => {
                    t.classList.remove('active', 'btn-primary');
                    t.classList.add('btn-outline-primary');
                });
                tab.classList.remove('btn-outline-primary');
                tab.classList.add('active', 'btn-primary');

                // Stop current demo if playing
                if (currentPlayer) {
                    currentPlayer.stop();
                }

                // Start new demo
                const isStudent1 = tab.getAttribute('data-student') === '1';
                const demoKey = isStudent1 ? 'student_1' : 'student_2';
                const demoTitle = isStudent1 ? 'Ask Vidyaa Saarthi: Student 1 Demo' : 'Ask Vidyaa Saarthi: Student 2 Demo';

                // Update Header
                updateHeader(demoTitle);

                // Clear chat first
                chatInterface.clearChat();
                chatInterface.setDemoMode(true);

                currentPlayer = new DemoPlayer(demoKey, chatInterface);
                currentPlayer.play();
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDemoTabs);
    } else {
        initDemoTabs();
    }

    // Export for external access
    window.DemoConversations = {
        init: initDemoTabs
    };
})();

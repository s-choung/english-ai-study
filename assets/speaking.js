// Speaking Module - Updated with OpenAI TTS
class SpeakingModule {
    constructor() {
        this.isCallActive = false;
        this.currentTopic = 'restaurant';
        this.conversationHistory = [];
        this.recognition = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupSpeechRecognition();
        this.selectTopic(this.currentTopic);
    }

    setupEventListeners() {
        // Topic selection
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectTopic(e.target.dataset.topic);
            });
        });

        // Call toggle
        const callBtn = document.getElementById('callToggle');
        if (callBtn) {
            callBtn.addEventListener('click', () => this.toggleCall());
        }

        // End conversation
        const endBtn = document.getElementById('endConversation');
        if (endBtn) {
            endBtn.addEventListener('click', () => this.endConversation());
        }
    }

    setupSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.handleUserSpeech(transcript);
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.addChatMessage('system', 'Speech recognition error. Please try again.');
            };

            this.recognition.onend = () => {
                if (this.isCallActive) {
                    // Restart recognition if call is still active
                    setTimeout(() => {
                        if (this.isCallActive) {
                            this.recognition.start();
                        }
                    }, 100);
                }
            };
        }
    }

    selectTopic(topic) {
        this.currentTopic = topic;
        
        // Update UI
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-topic="${topic}"]`).classList.add('active');
        
        // Update topic display
        const topicDisplay = document.getElementById('currentTopic');
        if (topicDisplay) {
            topicDisplay.textContent = topic.charAt(0).toUpperCase() + topic.slice(1);
        }
        
        // Reset conversation
        this.conversationHistory = [];
        const chatLog = document.getElementById('chatLog');
        if (chatLog) {
            chatLog.innerHTML = '';
        }
        
        this.addChatMessage('system', `Topic changed to: ${topic.charAt(0).toUpperCase() + topic.slice(1)}`);
    }

    async toggleCall() {
        if (!window.app.requireApiKey()) return;

        const callBtn = document.getElementById('callToggle');
        const statusIndicator = document.querySelector('.status-indicator');

        if (!this.isCallActive) {
            // Start call
            this.isCallActive = true;
            callBtn.textContent = '🔴 End Call';
            callBtn.classList.add('active');
            statusIndicator.textContent = '🔴 Recording...';
            
            this.addChatMessage('system', 'Call started! Start speaking in English.');
            
            // Start speech recognition
            if (this.recognition) {
                this.recognition.start();
            }

            // Generate initial AI greeting
            await this.generateAIResponse();

        } else {
            // End call
            this.endCall();
        }
    }

    endCall() {
        this.isCallActive = false;
        const callBtn = document.getElementById('callToggle');
        const statusIndicator = document.querySelector('.status-indicator');
        
        callBtn.textContent = '🎤 Start Call';
        callBtn.classList.remove('active');
        statusIndicator.textContent = '⚪ Ready';
        
        if (this.recognition) {
            this.recognition.stop();
        }
        
        this.addChatMessage('system', 'Call ended.');
    }

    endConversation() {
        this.endCall();
        this.generateEvaluation();
    }

    async handleUserSpeech(transcript) {
        this.addChatMessage('user', transcript);
        
        // Add to conversation history
        this.conversationHistory.push({
            role: 'user',
            content: transcript
        });

        // Generate AI response
        await this.generateAIResponse();
    }

    async generateAIResponse() {
        try {
            const response = await window.openaiAPI.generateSpeakingResponse(
                this.currentTopic, 
                this.conversationHistory
            );

            this.addChatMessage('ai', response);
            
            // **NEW: Use OpenAI TTS instead of browser TTS**
            await this.speakWithOpenAI(response);
            
            this.conversationHistory.push({
                role: 'assistant',
                content: response
            });

        } catch (error) {
            console.error('Speaking response error:', error);
            this.addChatMessage('ai', 'I didn\'t catch that. Could you please try again?');
        }
    }

    // **NEW: OpenAI TTS function**
    async speakWithOpenAI(text) {
        try {
            const audioBlob = await window.openaiAPI.textToSpeech(text, 'alloy');
            await window.openaiAPI.playAudioBlob(audioBlob);
        } catch (error) {
            console.error('TTS error:', error);
            // Fallback to browser TTS
            this.speakWithBrowser(text);
        }
    }

    // Fallback browser TTS
    speakWithBrowser(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            speechSynthesis.speak(utterance);
        }
    }

    async generateEvaluation() {
        if (this.conversationHistory.length === 0) {
            this.addChatMessage('system', 'No conversation to evaluate.');
            return;
        }

        try {
            const evaluationPrompt = `Evaluate this English conversation practice session:
            Topic: ${this.currentTopic}
            Conversation: ${JSON.stringify(this.conversationHistory)}
            
            Provide feedback on:
            1. Grammar and vocabulary usage
            2. Conversation flow and engagement
            3. Areas for improvement
            4. Positive aspects
            
            Keep feedback encouraging and constructive.`;

            const response = await window.openaiAPI.makeRequest('/chat/completions', {
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: 'You are an encouraging English conversation teacher providing constructive feedback.'
                    },
                    {
                        role: 'user',
                        content: evaluationPrompt
                    }
                ],
                temperature: 0.7
            });

            const evaluation = response.choices[0].message.content;
            this.addChatMessage('system', `📝 Conversation Evaluation:\n${evaluation}`);

        } catch (error) {
            console.error('Evaluation error:', error);
            this.addChatMessage('system', 'Unable to generate evaluation at this time.');
        }
    }

    addChatMessage(sender, message) {
        const chatLog = document.getElementById('chatLog');
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}`;
        
        if (sender === 'system') {
            msgDiv.style.background = '#fff3cd';
            msgDiv.style.color = '#856404';
            msgDiv.style.textAlign = 'center';
            msgDiv.style.margin = '10px 0';
        }
        
        msgDiv.innerHTML = `<strong>${sender.toUpperCase()}:</strong> ${message.replace(/\n/g, '<br>')}`;
        chatLog.appendChild(msgDiv);
        chatLog.scrollTop = chatLog.scrollHeight;
    }
}

// Global functions
window.toggleCall = () => {
    if (window.speakingModule) {
        window.speakingModule.toggleCall();
    }
};

// Initialize speaking module when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('speaking.html')) {
        window.speakingModule = new SpeakingModule();
    }
});
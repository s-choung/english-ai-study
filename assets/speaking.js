// Speaking Module
class SpeakingModule {
    constructor() {
        this.isCallActive = false;
        this.conversationHistory = [];
        this.currentTopic = 'restaurant';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeChat();
    }

    setupEventListeners() {
        const callBtn = document.getElementById('callBtn');
        if (callBtn) {
            callBtn.addEventListener('click', () => this.toggleCall());
        }

        const topicSelector = document.getElementById('topicSelector');
        if (topicSelector) {
            topicSelector.addEventListener('change', (e) => {
                this.currentTopic = e.target.value;
            });
        }
    }

    initializeChat() {
        const chatLog = document.getElementById('chatLog');
        if (chatLog) {
            chatLog.innerHTML = `
                <div class="chat-message ai">
                    AI: 안녕하세요! Ready to practice speaking? Select a topic and click "Start Call".
                </div>
            `;
        }
    }

    async toggleCall() {
        if (!window.app.requireApiKey()) return;

        const callBtn = document.getElementById('callBtn');
        const chatLog = document.getElementById('chatLog');
        
        this.isCallActive = !this.isCallActive;
        
        if (this.isCallActive) {
            callBtn.textContent = 'End Call';
            callBtn.classList.add('active');
            
            // Start conversation
            await this.startConversation();
            
        } else {
            callBtn.textContent = 'Start Call';
            callBtn.classList.remove('active');
            
            // End conversation
            await this.endConversation();
        }
    }

    async startConversation() {
        const topicSelector = document.getElementById('topicSelector');
        this.currentTopic = topicSelector.value;
        
        this.conversationHistory = [
            {
                role: 'user',
                content: `I want to practice ${this.currentTopic} conversation in English.`
            }
        ];

        try {
            const response = await window.openaiAPI.generateSpeakingResponse(
                this.currentTopic, 
                this.conversationHistory
            );

            this.addChatMessage('ai', response);
            this.conversationHistory.push({
                role: 'assistant',
                content: response
            });

            // Start speech recognition if available
            this.startSpeechRecognition();

        } catch (error) {
            console.error('Speaking conversation error:', error);
            this.addChatMessage('ai', 'Sorry, there was an error starting the conversation. Please check your API key and try again.');
        }
    }

    async endConversation() {
        // Generate feedback
        try {
            const feedbackPrompt = `Based on this conversation about ${this.currentTopic}, provide brief feedback and suggestions for improvement.`;
            
            const feedbackHistory = [
                ...this.conversationHistory,
                { role: 'user', content: feedbackPrompt }
            ];

            const feedback = await window.openaiAPI.generateSpeakingResponse(
                'feedback', 
                feedbackHistory
            );

            this.addChatMessage('ai', `📊 Session Complete!\n\n${feedback}`);
            
        } catch (error) {
            this.addChatMessage('ai', 'Great practice session! Keep practicing to improve your English conversation skills.');
        }

        // Stop speech recognition
        this.stopSpeechRecognition();
        
        // Clear conversation history
        this.conversationHistory = [];
    }

    startSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = true;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';

            this.recognition.onresult = (event) => {
                const transcript = event.results[event.results.length - 1][0].transcript;
                this.handleUserSpeech(transcript);
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
            };

            this.recognition.start();
            
            // Add microphone indicator
            this.addChatMessage('system', '🎤 Listening... Speak in English!');
        } else {
            // Fallback to text input
            this.setupTextInput();
        }
    }

    stopSpeechRecognition() {
        if (this.recognition) {
            this.recognition.stop();
        }
    }

    setupTextInput() {
        const chatLog = document.getElementById('chatLog');
        const inputDiv = document.createElement('div');
        inputDiv.innerHTML = `
            <div style="margin-top: 10px; display: flex; gap: 10px;">
                <input type="text" id="speechInput" placeholder="Type your response..." style="flex: 1; padding: 8px; border: 1px solid #ddd; border-radius: 5px;">
                <button onclick="window.speakingModule.handleTextInput()" style="padding: 8px 15px; background: #4a90e2; color: white; border: none; border-radius: 5px;">Send</button>
            </div>
        `;
        chatLog.appendChild(inputDiv);

        // Allow Enter key to send
        document.getElementById('speechInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleTextInput();
            }
        });
    }

    handleTextInput() {
        const input = document.getElementById('speechInput');
        const text = input.value.trim();
        if (text) {
            this.handleUserSpeech(text);
            input.value = '';
        }
    }

    async handleUserSpeech(transcript) {
        this.addChatMessage('user', transcript);
        
        this.conversationHistory.push({
            role: 'user',
            content: transcript
        });

        try {
            const response = await window.openaiAPI.generateSpeakingResponse(
                this.currentTopic, 
                this.conversationHistory
            );

            this.addChatMessage('ai', response);
            this.conversationHistory.push({
                role: 'assistant',
                content: response
            });

        } catch (error) {
            console.error('Speaking response error:', error);
            this.addChatMessage('ai', 'I didn\'t catch that. Could you please try again?');
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

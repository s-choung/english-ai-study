// Enhanced Speaking Module with AI Speech Response and Dialogue Logging
class SpeakingModule {
    constructor() {
        this.isCallActive = false;
        this.currentTopic = 'restaurant';
        this.conversationHistory = [];
        this.dialogueLog = [];
        this.recognition = null;
        this.conversationStartTime = null;
        this.messageCount = 0;
        this.estimatedCost = 0;
        this.isProcessingResponse = false; // NEW: Prevent duplicate responses
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupSpeechRecognition();
        this.selectTopic(this.currentTopic);
        this.updateStats();
    }

    setupEventListeners() {
        // Topic selection
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectTopic(e.target.dataset.topic);
            });
        });

        // Call controls
        const callBtn = document.getElementById('callToggle');
        if (callBtn) {
            callBtn.addEventListener('click', () => this.toggleCall());
        }

        const endBtn = document.getElementById('endConversation');
        if (endBtn) {
            endBtn.addEventListener('click', () => this.endConversation());
        }

        // Dialogue log controls
        const saveLogBtn = document.getElementById('saveLog');
        if (saveLogBtn) {
            saveLogBtn.addEventListener('click', () => this.saveDialogueLog());
        }

        const clearLogBtn = document.getElementById('clearLog');
        if (clearLogBtn) {
            clearLogBtn.addEventListener('click', () => this.clearDialogueLog());
        }

        const exportLogBtn = document.getElementById('exportLog');
        if (exportLogBtn) {
            exportLogBtn.addEventListener('click', () => this.exportDialogueLog());
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
                console.log('Speech recognition result:', transcript);
                this.handleUserSpeech(transcript);
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                if (event.error !== 'no-speech') {
                    this.addChatMessage('system', `Speech recognition error: ${event.error}. Please try again.`);
                    this.logDialogue('system', `Speech recognition error: ${event.error}`);
                }
            };

            this.recognition.onend = () => {
                console.log('Speech recognition ended, isCallActive:', this.isCallActive);
                if (this.isCallActive && !this.isProcessingResponse) {
                    // Restart recognition if call is still active and not processing AI response
                    setTimeout(() => {
                        if (this.isCallActive && !this.isProcessingResponse) {
                            console.log('Restarting speech recognition...');
                            this.recognition.start();
                        }
                    }, 100);
                }
            };

            this.recognition.onstart = () => {
                console.log('Speech recognition started');
            };
        }
    }

    selectTopic(topic) {
        this.currentTopic = topic;
        
        // Update UI
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-topic="${topic}"]`)?.classList.add('active');
        
        // Update topic display
        const topicDisplay = document.getElementById('currentTopic');
        if (topicDisplay) {
            topicDisplay.textContent = topic.charAt(0).toUpperCase() + topic.slice(1);
        }
        
        // Reset conversation
        this.resetConversation();
        this.addChatMessage('system', `Topic changed to: ${topic.charAt(0).toUpperCase() + topic.slice(1)}`);
        this.logDialogue('system', `Topic changed to: ${topic.charAt(0).toUpperCase() + topic.slice(1)}`);
    }

    resetConversation() {
        this.conversationHistory = [];
        this.dialogueLog = [];
        this.messageCount = 0;
        this.estimatedCost = 0;
        this.conversationStartTime = null;
        this.isProcessingResponse = false;
        
        const chatLog = document.getElementById('chatLog');
        if (chatLog) {
            chatLog.innerHTML = '';
        }
        
        const dialogueLogEl = document.getElementById('dialogueLog');
        if (dialogueLogEl) {
            dialogueLogEl.innerHTML = '';
        }
        
        this.updateStats();
    }

    async toggleCall() {
        if (!window.app || !window.app.requireApiKey()) return;

        const callBtn = document.getElementById('callToggle');
        const statusIndicator = document.querySelector('.status-indicator');

        if (!this.isCallActive) {
            // Start call
            this.isCallActive = true;
            this.conversationStartTime = Date.now();
            this.isProcessingResponse = false;
            
            if (callBtn) {
                callBtn.textContent = '🔴 End Call';
                callBtn.classList.add('active');
            }
            if (statusIndicator) {
                statusIndicator.textContent = '🔴 Recording...';
            }
            
            this.addChatMessage('system', 'Call started! Start speaking in English.');
            this.logDialogue('system', 'Call started');
            
            // Generate initial AI greeting with speech FIRST
            await this.generateInitialGreeting();
            
            // THEN start speech recognition
            if (this.recognition && this.isCallActive) {
                setTimeout(() => {
                    if (this.isCallActive) {
                        console.log('Starting speech recognition after initial greeting...');
                        this.recognition.start();
                    }
                }, 1000); // Wait for AI speech to finish
            }

        } else {
            this.endCall();
        }
    }

    endCall() {
        console.log('Ending call...');
        this.isCallActive = false;
        this.isProcessingResponse = false;
        
        const callBtn = document.getElementById('callToggle');
        const statusIndicator = document.querySelector('.status-indicator');
        
        if (callBtn) {
            callBtn.textContent = '🎤 Start Call';
            callBtn.classList.remove('active');
        }
        if (statusIndicator) {
            statusIndicator.textContent = '⚪ Ready';
        }
        
        if (this.recognition) {
            this.recognition.stop();
        }
        
        // Only add "Call ended" message once
        if (this.conversationHistory.length > 0) {
            this.addChatMessage('system', 'Call ended.');
            this.logDialogue('system', 'Call ended');
        }
        this.updateStats();
    }

    endConversation() {
        this.endCall();
        setTimeout(() => {
            this.generateEvaluation();
        }, 500);
    }

    // NEW: Generate initial greeting
    async generateInitialGreeting() {
        this.isProcessingResponse = true;
        
        try {
            const greetingPrompt = `Generate a friendly greeting to start a conversation about ${this.currentTopic}. 
            Keep it simple, natural, and encouraging. Ask an opening question about the topic.
            Respond in English only, no Korean translations.`;

            const response = await window.openaiAPI.makeRequest('/chat/completions', {
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: `You are a friendly English conversation partner. Keep responses natural and encouraging. Topic: ${this.currentTopic}`
                    },
                    {
                        role: 'user',
                        content: greetingPrompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 100
            });

            const greeting = response.choices[0].message.content;
            
            this.messageCount++;
            this.estimatedCost += 0.002;
            
            this.addChatMessage('ai', greeting);
            this.logDialogue('ai', greeting);
            
            // Generate and play AI speech
            await this.speakAIResponse(greeting);
            
            this.conversationHistory.push({
                role: 'assistant',
                content: greeting
            });

            this.updateStats();

        } catch (error) {
            console.error('Initial greeting error:', error);
            const fallbackGreeting = `Hello! Let's practice English by talking about ${this.currentTopic}. How are you today?`;
            this.addChatMessage('ai', fallbackGreeting);
            this.logDialogue('ai', fallbackGreeting);
            await this.speakAIResponse(fallbackGreeting);
        } finally {
            this.isProcessingResponse = false;
        }
    }

    async handleUserSpeech(transcript) {
        if (this.isProcessingResponse) {
            console.log('Already processing response, ignoring user speech');
            return;
        }

        this.isProcessingResponse = true;
        this.messageCount++;
        this.estimatedCost += 0.001;
        
        this.addChatMessage('user', transcript);
        this.logDialogue('user', transcript);
        
        // Add to conversation history
        this.conversationHistory.push({
            role: 'user',
            content: transcript
        });

        this.updateStats();

        // Generate AI response with speech
        await this.generateAIResponseWithSpeech();
        
        this.isProcessingResponse = false;
    }

    async generateAIResponseWithSpeech() {
        try {
            // Generate text response - FIXED: Clean English-only response
            const response = await this.generateCleanEnglishResponse();

            this.messageCount++;
            this.estimatedCost += 0.002;
            
            this.addChatMessage('ai', response);
            this.logDialogue('ai', response);
            
            // **FIXED: Generate and play AI speech with proper error handling**
            await this.speakAIResponse(response);
            
            this.conversationHistory.push({
                role: 'assistant',
                content: response
            });

            this.updateStats();

        } catch (error) {
            console.error('Speaking response error:', error);
            const fallbackResponse = 'I didn\'t catch that. Could you please try again?';
            this.addChatMessage('ai', fallbackResponse);
            this.logDialogue('ai', fallbackResponse);
            await this.speakAIResponse(fallbackResponse);
        }
    }

    // NEW: Generate clean English-only response
    async generateCleanEnglishResponse() {
        const response = await window.openaiAPI.makeRequest('/chat/completions', {
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: 'system',
                    content: `You are a friendly English conversation partner helping a Korean speaker practice English. 
                    Topic: ${this.currentTopic}
                    IMPORTANT: Respond ONLY in English. Do NOT include Korean translations or explanations.
                    Keep responses natural, encouraging, and conversational.
                    Ask follow-up questions to keep the conversation flowing.`
                },
                ...this.conversationHistory
            ],
            temperature: 0.7,
            max_tokens: 150
        });

        return response.choices[0].message.content.trim();
    }

    // **FIXED: AI Speech Response Function with better error handling**
    async speakAIResponse(text) {
        console.log('Speaking AI response:', text.substring(0, 50) + '...');
        
        try {
            // Clean the text for TTS (remove any Korean or special characters)
            const cleanText = text.replace(/[^\x00-\x7F]/g, ' ').trim();
            
            if (!cleanText) {
                console.warn('Empty text after cleaning, using fallback');
                return;
            }

            // Estimate TTS cost
            this.estimatedCost += cleanText.length * 0.000015;
            
            console.log('Generating TTS for:', cleanText);
            const audioBlob = await window.openaiAPI.textToSpeech(cleanText, 'alloy');
            
            console.log('Playing audio blob...');
            await window.openaiAPI.playAudioBlob(audioBlob);
            
            console.log('Audio playback completed');
            this.logDialogue('system', `[AI Speech Generated: ${cleanText.length} characters]`);
            
        } catch (error) {
            console.error('AI TTS error:', error);
            this.logDialogue('system', `[AI Speech Failed: ${error.message}]`);
            
            // Fallback to browser TTS
            console.log('Falling back to browser TTS...');
            this.speakWithBrowser(text);
        }
    }

    speakWithBrowser(text) {
        if ('speechSynthesis' in window) {
            // Clean text for browser TTS
            const cleanText = text.replace(/[^\x00-\x7F]/g, ' ').trim();
            
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            utterance.pitch = 1.0;
            
            utterance.onstart = () => {
                console.log('Browser TTS started');
            };
            
            utterance.onend = () => {
                console.log('Browser TTS ended');
            };
            
            utterance.onerror = (error) => {
                console.error('Browser TTS error:', error);
            };
            
            speechSynthesis.speak(utterance);
            this.logDialogue('system', `[Browser TTS: ${cleanText.length} characters]`);
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
            Duration: ${this.getConversationDuration()}
            Messages: ${this.messageCount}
            Conversation: ${JSON.stringify(this.conversationHistory)}
            
            Provide detailed feedback on:
            1. Grammar and vocabulary usage (score 1-10)
            2. Conversation flow and engagement (score 1-10)
            3. Areas for improvement
            4. Positive aspects and strengths
            
            Keep feedback encouraging and constructive. Respond in English only.`;

            const response = await window.openaiAPI.makeRequest('/chat/completions', {
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'system',
                        content: 'You are an encouraging English conversation teacher providing detailed, constructive feedback. Respond in English only.'
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
            this.logDialogue('evaluation', evaluation);
            
            // Speak evaluation summary
            const summaryMatch = evaluation.match(/Grammar.*?(\d+).*?Conversation.*?(\d+)/);
            if (summaryMatch) {
                const summary = `Your conversation practice is complete. Grammar score: ${summaryMatch[1]} out of 10. Conversation flow: ${summaryMatch[2]} out of 10.`;
                await this.speakAIResponse(summary);
            }

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

    // Dialogue Logging Functions
    logDialogue(sender, message) {
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = {
            timestamp: timestamp,
            sender: sender,
            message: message,
            topic: this.currentTopic
        };
        
        this.dialogueLog.push(logEntry);
        
        // Update dialogue log display
        const dialogueLogEl = document.getElementById('dialogueLog');
        if (dialogueLogEl) {
            const logDiv = document.createElement('div');
            logDiv.className = `log-entry ${sender}`;
            logDiv.innerHTML = `
                <div class="log-timestamp">[${timestamp}] ${sender.toUpperCase()}</div>
                <div class="log-content">${message}</div>
            `;
            dialogueLogEl.appendChild(logDiv);
            dialogueLogEl.scrollTop = dialogueLogEl.scrollHeight;
        }
    }

    saveDialogueLog() {
        const logData = {
            topic: this.currentTopic,
            date: new Date().toISOString(),
            duration: this.getConversationDuration(),
            messageCount: this.messageCount,
            estimatedCost: this.estimatedCost,
            dialogue: this.dialogueLog
        };
        
        localStorage.setItem(`speaking_log_${Date.now()}`, JSON.stringify(logData));
        alert('Dialogue log saved to local storage!');
    }

    clearDialogueLog() {
        if (confirm('Are you sure you want to clear the dialogue log?')) {
            this.dialogueLog = [];
            const dialogueLogEl = document.getElementById('dialogueLog');
            if (dialogueLogEl) {
                dialogueLogEl.innerHTML = '<div class="log-entry system"><div class="log-timestamp">[System]</div><div class="log-content">Dialogue log cleared.</div></div>';
            }
        }
    }

    exportDialogueLog() {
        if (this.dialogueLog.length === 0) {
            alert('No dialogue to export!');
            return;
        }
        
        const logData = {
            topic: this.currentTopic,
            date: new Date().toISOString(),
            duration: this.getConversationDuration(),
            messageCount: this.messageCount,
            estimatedCost: this.estimatedCost.toFixed(4),
            dialogue: this.dialogueLog
        };
        
        const dataStr = JSON.stringify(logData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `speaking_practice_${this.currentTopic}_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }

    updateStats() {
        // Update conversation time
        const timeEl = document.getElementById('conversationTime');
        if (timeEl) {
            timeEl.textContent = this.getConversationDuration();
        }
        
        // Update message count
        const countEl = document.getElementById('messageCount');
        if (countEl) {
            countEl.textContent = `${this.messageCount} messages`;
        }
        
        // Update estimated cost
        const costEl = document.getElementById('estimatedCost');
        if (costEl) {
            costEl.textContent = `$${this.estimatedCost.toFixed(4)}`;
        }
    }

    getConversationDuration() {
        if (!this.conversationStartTime) return '00:00';
        
        const duration = Date.now() - this.conversationStartTime;
        const minutes = Math.floor(duration / 60000);
        const seconds = Math.floor((duration % 60000) / 1000);
        
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
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
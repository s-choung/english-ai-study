// Listening Module - Fixed API Integration
class ListeningModule {
    constructor() {
        this.currentContent = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.generateNewContent();
    }

    setupEventListeners() {
        const generateBtn = document.getElementById('generateContent');
        const playBtn = document.getElementById('playAudio');
        const submitBtn = document.getElementById('submitAnswer');

        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generateNewContent());
        }

        if (playBtn) {
            playBtn.addEventListener('click', () => this.playAudioWithOpenAI());
        }

        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitAnswer());
        }
    }

    async generateNewContent() {
        // **FIXED: Proper API key check**
        if (!window.app || !window.app.requireApiKey()) {
            console.log('API key required, showing demo content');
            this.showDemoContent();
            return;
        }

        const contentArea = document.getElementById('listeningContent');
        if (window.app) {
            window.app.showLoading(contentArea);
        }

        try {
            this.currentContent = await window.openaiAPI.generateListeningContent();
            
            contentArea.innerHTML = `
                <div class="listening-exercise">
                    <div class="audio-controls">
                        <button id="playAudio" class="play-btn">🔊 Play Audio</button>
                        <div class="audio-status" id="audioStatus">Ready to play</div>
                    </div>
                    <div class="question-section">
                        <h4>Question:</h4>
                        <p>${this.currentContent.question}</p>
                        <textarea id="userAnswer" placeholder="Type your answer here..." rows="3"></textarea>
                        <button id="submitAnswer" class="submit-btn">Submit Answer</button>
                    </div>
                </div>
            `;

            // **CRITICAL: Re-setup event listeners for new elements**
            this.setupDynamicEventListeners();

        } catch (error) {
            console.error('Content generation error:', error);
            this.showErrorContent(error.message);
        }
    }

    // **NEW: Setup event listeners for dynamically created elements**
    setupDynamicEventListeners() {
        const playBtn = document.getElementById('playAudio');
        const submitBtn = document.getElementById('submitAnswer');

        if (playBtn) {
            playBtn.addEventListener('click', () => this.playAudioWithOpenAI());
        }

        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitAnswer());
        }
    }

    // **FIXED: Proper OpenAI TTS implementation**
    async playAudioWithOpenAI() {
        if (!this.currentContent) {
            alert('No content available. Please generate content first.');
            return;
        }

        // **FIXED: Check API key before TTS**
        if (!window.app || !window.app.requireApiKey()) {
            console.log('API key not available, using browser TTS fallback');
            this.playAudioFallback();
            return;
        }

        const statusDiv = document.getElementById('audioStatus');
        const playBtn = document.getElementById('playAudio');

        try {
            if (statusDiv) statusDiv.textContent = 'Generating audio...';
            if (playBtn) playBtn.disabled = true;

            const audioBlob = await window.openaiAPI.textToSpeech(this.currentContent.text, 'nova');
            
            if (statusDiv) statusDiv.textContent = 'Playing audio...';
            await window.openaiAPI.playAudioBlob(audioBlob);
            
            if (statusDiv) statusDiv.textContent = 'Audio finished. You can replay if needed.';

        } catch (error) {
            console.error('OpenAI TTS error:', error);
            if (statusDiv) statusDiv.textContent = 'OpenAI TTS failed, using browser fallback...';
            
            // Fallback to browser TTS
            this.playAudioFallback();
        } finally {
            if (playBtn) playBtn.disabled = false;
        }
    }

    // **NEW: Browser TTS fallback**
    playAudioFallback() {
        if (!this.currentContent) return;

        const statusDiv = document.getElementById('audioStatus');
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(this.currentContent.text);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            utterance.pitch = 1.0;
            
            utterance.onstart = () => {
                if (statusDiv) statusDiv.textContent = 'Playing with browser TTS...';
            };
            
            utterance.onend = () => {
                if (statusDiv) statusDiv.textContent = 'Audio finished. You can replay if needed.';
            };
            
            utterance.onerror = (error) => {
                console.error('Browser TTS error:', error);
                if (statusDiv) statusDiv.textContent = 'Audio playback failed.';
            };
            
            speechSynthesis.speak(utterance);
        } else {
            if (statusDiv) statusDiv.textContent = 'Audio not supported in this browser.';
        }
    }

    async submitAnswer() {
        if (!this.currentContent) {
            alert('No content available. Please generate content first.');
            return;
        }

        const userAnswer = document.getElementById('userAnswer')?.value.trim();
        if (!userAnswer) {
            alert('Please enter your answer first!');
            return;
        }

        // **FIXED: Proper API key check**
        if (!window.app || !window.app.requireApiKey()) {
            this.showManualEvaluation(userAnswer);
            return;
        }

        const resultsArea = document.getElementById('listeningResults');
        if (window.app) {
            window.app.showLoading(resultsArea);
        }
        if (resultsArea) {
            resultsArea.style.display = 'block';
        }

        try {
            const evaluation = await window.openaiAPI.evaluateListeningAnswer(
                this.currentContent.text,
                this.currentContent.question,
                userAnswer,
                this.currentContent.answer
            );

            if (resultsArea) {
                resultsArea.innerHTML = `
                    <div class="evaluation-results">
                        <div class="score-display">
                            <h3>Score: ${evaluation.score}/100</h3>
                            <div class="score-bar">
                                <div class="score-fill" style="width: ${evaluation.score}%"></div>
                            </div>
                        </div>
                        <div class="feedback-section">
                            <h4>Feedback:</h4>
                            <p>${evaluation.feedback}</p>
                        </div>
                        <div class="correct-answer">
                            <h4>Expected Answer:</h4>
                            <p>${evaluation.correct_answer}</p>
                        </div>
                        <div class="original-text">
                            <h4>Original Text:</h4>
                            <p style="font-style: italic; background: #f8f9fa; padding: 15px; border-radius: 5px;">
                                "${this.currentContent.text}"
                            </p>
                        </div>
                    </div>
                `;
            }

        } catch (error) {
            console.error('Answer evaluation error:', error);
            this.showErrorEvaluation(userAnswer, error.message);
        }
    }

    showDemoContent() {
        const contentArea = document.getElementById('listeningContent');
        if (contentArea) {
            this.currentContent = {
                text: "I usually wake up at 7 AM and have breakfast with my family. After that, I take the bus to work and arrive at the office by 9 AM.",
                question: "What time does the speaker usually wake up?",
                answer: "7 AM"
            };

            contentArea.innerHTML = `
                <div class="listening-exercise">
                    <div class="demo-notice" style="background: #fff3cd; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: center;">
                        <p><strong>Demo Mode:</strong> Set your API key in settings for full functionality</p>
                    </div>
                    <div class="audio-controls">
                        <button id="playAudio" class="play-btn">🔊 Play Audio (Browser TTS)</button>
                        <div class="audio-status" id="audioStatus">Ready to play</div>
                    </div>
                    <div class="question-section">
                        <h4>Question:</h4>
                        <p>${this.currentContent.question}</p>
                        <textarea id="userAnswer" placeholder="Type your answer here..." rows="3"></textarea>
                        <button id="submitAnswer" class="submit-btn">Submit Answer</button>
                    </div>
                </div>
            `;

            this.setupDynamicEventListeners();
        }
    }

    showErrorContent(errorMessage) {
        const contentArea = document.getElementById('listeningContent');
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="error-message">
                    <p>⚠️ Failed to generate content. Please check your API key and try again.</p>
                    <div style="color: #666; font-size: 12px; margin-top: 10px;">
                        <p><strong>Error:</strong> ${errorMessage}</p>
                        <p>Try refreshing the page or checking your API key in settings.</p>
                    </div>
                    <button onclick="window.listeningModule.generateNewContent()" style="margin-top: 15px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Try Again
                    </button>
                </div>
            `;
        }
    }

    showManualEvaluation(userAnswer) {
        const resultsArea = document.getElementById('listeningResults');
        if (resultsArea) {
            resultsArea.style.display = 'block';
            resultsArea.innerHTML = `
                <div class="manual-evaluation">
                    <div class="demo-notice" style="background: #fff3cd; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: center;">
                        <p><strong>Manual Evaluation:</strong> Set your API key for AI-powered feedback</p>
                    </div>
                    <div class="manual-feedback">
                        <h4>Your Answer:</h4>
                        <p style="background: #e9ecef; padding: 10px; border-radius: 5px;">${userAnswer}</p>
                        <h4>Expected Answer:</h4>
                        <p style="background: #d4edda; padding: 10px; border-radius: 5px;">${this.currentContent.answer}</p>
                        <h4>Original Text:</h4>
                        <p style="font-style: italic; background: #f8f9fa; padding: 15px; border-radius: 5px;">
                            "${this.currentContent.text}"
                        </p>
                        <div style="margin-top: 15px; padding: 10px; background: #d1ecf1; border-radius: 5px;">
                            <p><strong>Self-Assessment:</strong> Compare your answer with the expected answer above. How well did you understand the listening content?</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    showErrorEvaluation(userAnswer, errorMessage) {
        const resultsArea = document.getElementById('listeningResults');
        if (resultsArea) {
            resultsArea.innerHTML = `
                <div class="error-evaluation">
                    <p>⚠️ Evaluation failed. Here's what we know:</p>
                    <div class="manual-feedback">
                        <h4>Your Answer:</h4>
                        <p style="background: #e9ecef; padding: 10px; border-radius: 5px;">${userAnswer}</p>
                        <h4>Expected Answer:</h4>
                        <p style="background: #d4edda; padding: 10px; border-radius: 5px;">${this.currentContent.answer}</p>
                        <h4>Original Text:</h4>
                        <p style="font-style: italic; background: #f8f9fa; padding: 15px; border-radius: 5px;">
                            "${this.currentContent.text}"
                        </p>
                    </div>
                    <p style="color: #666; font-size: 12px; margin-top: 15px;">Error: ${errorMessage}</p>
                </div>
            `;
        }
    }
}

// Initialize listening module when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('listening.html')) {
        window.listeningModule = new ListeningModule();
    }
});
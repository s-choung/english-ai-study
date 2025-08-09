// Listening Module - Updated with OpenAI TTS
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
        if (!window.app.requireApiKey()) return;

        const contentArea = document.getElementById('listeningContent');
        window.app.showLoading(contentArea);

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

            // Re-setup event listeners for new elements
            document.getElementById('playAudio').addEventListener('click', () => this.playAudioWithOpenAI());
            document.getElementById('submitAnswer').addEventListener('click', () => this.submitAnswer());

        } catch (error) {
            console.error('Content generation error:', error);
            contentArea.innerHTML = `
                <div class="error-message">
                    <p>⚠️ Failed to generate content. Here's a demo:</p>
                    <div class="demo-content">
                        <div class="audio-controls">
                            <button onclick="alert('Demo audio would play here')" class="play-btn">🔊 Play Demo Audio</button>
                        </div>
                        <div class="question-section">
                            <h4>Question:</h4>
                            <p>What did the speaker mention about their morning routine?</p>
                            <textarea placeholder="Type your answer here..." rows="3"></textarea>
                            <button onclick="alert('Demo evaluation would appear here')" class="submit-btn">Submit Answer</button>
                        </div>
                    </div>
                    <p style="color: #666; font-size: 12px;">Error: ${error.message}</p>
                </div>
            `;
        }
    }

    // **NEW: OpenAI TTS for listening content**
    async playAudioWithOpenAI() {
        if (!this.currentContent) return;

        const statusDiv = document.getElementById('audioStatus');
        const playBtn = document.getElementById('playAudio');

        try {
            statusDiv.textContent = 'Generating audio...';
            playBtn.disabled = true;

            const audioBlob = await window.openaiAPI.textToSpeech(this.currentContent.text, 'nova');
            
            statusDiv.textContent = 'Playing audio...';
            await window.openaiAPI.playAudioBlob(audioBlob);
            
            statusDiv.textContent = 'Audio finished. You can replay if needed.';

        } catch (error) {
            console.error('Audio playback error:', error);
            statusDiv.textContent = 'Audio playback failed. Using fallback...';
            
            // Fallback to browser TTS
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(this.currentContent.text);
                utterance.lang = 'en-US';
                utterance.rate = 0.8;
                speechSynthesis.speak(utterance);
                statusDiv.textContent = 'Playing with browser TTS...';
            }
        } finally {
            playBtn.disabled = false;
        }
    }

    async submitAnswer() {
        if (!this.currentContent) return;

        const userAnswer = document.getElementById('userAnswer').value.trim();
        if (!userAnswer) {
            alert('Please enter your answer first!');
            return;
        }

        if (!window.app.requireApiKey()) return;

        const resultsArea = document.getElementById('listeningResults');
        window.app.showLoading(resultsArea);
        resultsArea.style.display = 'block';

        try {
            const evaluation = await window.openaiAPI.evaluateListeningAnswer(
                this.currentContent.text,
                this.currentContent.question,
                userAnswer,
                this.currentContent.answer
            );

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

        } catch (error) {
            console.error('Answer evaluation error:', error);
            resultsArea.innerHTML = `
                <div class="error-message">
                    <p>⚠️ Evaluation failed. Here's what we know:</p>
                    <div class="manual-feedback">
                        <h4>Your Answer:</h4>
                        <p>${userAnswer}</p>
                        <h4>Expected Answer:</h4>
                        <p>${this.currentContent.answer}</p>
                        <h4>Original Text:</h4>
                        <p style="font-style: italic;">"${this.currentContent.text}"</p>
                    </div>
                    <p style="color: #666; font-size: 12px;">Error: ${error.message}</p>
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
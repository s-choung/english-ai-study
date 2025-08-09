// Listening Module
class ListeningModule {
    constructor() {
        this.currentContent = null;
        this.audioContext = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.generateNewContent();
    }

    setupEventListeners() {
        const playBtn = document.getElementById('playAudio');
        if (playBtn) {
            playBtn.addEventListener('click', () => this.playAudio());
        }

        const submitBtn = document.getElementById('submitListening');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitListeningAnswer());
        }
    }

    async generateNewContent() {
        if (!window.openaiAPI.getApiKey()) {
            // Use default content
            this.currentContent = {
                text: "Today's weather is really nice. I think I'll go to the park and have a picnic with my friends.",
                question: "What does the speaker want to do today?",
                answer: "Go to the park and have a picnic with friends"
            };
            return;
        }

        try {
            this.currentContent = await window.openaiAPI.generateListeningContent();
        } catch (error) {
            console.error('Error generating listening content:', error);
            this.currentContent = {
                text: "Today's weather is really nice. I think I'll go to the park and have a picnic with my friends.",
                question: "What does the speaker want to do today?",
                answer: "Go to the park and have a picnic with friends"
            };
        }
    }

    async playAudio() {
        if (!this.currentContent) {
            await this.generateNewContent();
        }

        const questionElement = document.getElementById('listeningQuestion');
        const playBtn = document.getElementById('playAudio');

        // Show the question
        questionElement.textContent = this.currentContent.question;

        // Change button text
        playBtn.textContent = '🔊 Playing...';
        playBtn.disabled = true;

        try {
            // Try to use OpenAI TTS if API key is available
            if (window.openaiAPI.getApiKey()) {
                await this.playWithTTS(this.currentContent.text);
            } else {
                // Fallback to Web Speech API
                this.playWithSpeechSynthesis(this.currentContent.text);
            }
        } catch (error) {
            console.error('Audio playback error:', error);
            // Fallback to alert (for development)
            alert(`Audio would play here: "${this.currentContent.text}"`);
        } finally {
            // Reset button
            setTimeout(() => {
                playBtn.textContent = '🔊 Play Audio';
                playBtn.disabled = false;
            }, 3000);
        }
    }

    async playWithTTS(text) {
        try {
            const audioBlob = await window.openaiAPI.textToSpeech(text);
            const audio = new Audio(URL.createObjectURL(audioBlob));
            audio.play();
        } catch (error) {
            // Fallback to speech synthesis
            this.playWithSpeechSynthesis(text);
        }
    }

    playWithSpeechSynthesis(text) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.8;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            
            // Try to use an English voice
            const voices = speechSynthesis.getVoices();
            const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
            if (englishVoice) {
                utterance.voice = englishVoice;
            }
            
            speechSynthesis.speak(utterance);
        } else {
            // Final fallback
            alert(`Audio would play here: "${text}"`);
        }
    }

    async submitListeningAnswer() {
        if (!window.app.requireApiKey()) return;

        const answerInput = document.getElementById('listeningAnswer');
        const feedback = document.getElementById('listeningFeedback');
        
        const userAnswer = answerInput.value.trim();
        
        if (!userAnswer) {
            alert('Please enter an answer!');
            return;
        }

        if (!this.currentContent) {
            alert('Please play the audio first!');
            return;
        }

        window.app.showLoading(feedback);

        try {
            const result = await window.openaiAPI.evaluateListeningAnswer(
                this.currentContent.text,
                this.currentContent.question,
                userAnswer,
                this.currentContent.answer
            );

            feedback.innerHTML = `
                <h3>🎧 Listening Results</h3>
                <div style="margin: 15px 0;">
                    <strong>Score:</strong> <span style="color: ${result.score >= 80 ? '#2e7d32' : result.score >= 60 ? '#f57c00' : '#d32f2f'}; font-size: 18px;">${result.score}/100</span>
                </div>
                <div style="margin: 15px 0;">
                    <strong>Your answer:</strong><br>
                    <em>"${userAnswer}"</em>
                </div>
                <div style="margin: 15px 0;">
                    <strong>Expected answer:</strong><br>
                    <em>"${result.correct_answer}"</em>
                </div>
                <div style="margin: 15px 0;">
                    <strong>Feedback:</strong><br>
                    ${result.feedback}
                </div>
                <div style="margin-top: 20px;">
                    <button onclick="window.listeningModule.nextExercise()" style="padding: 10px 20px; background: #4a90e2; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        Next Exercise
                    </button>
                </div>
            `;

        } catch (error) {
            console.error('Listening evaluation error:', error);
            feedback.innerHTML = `
                <h3>❌ Error</h3>
                <p>Sorry, there was an error evaluating your answer. Please try again.</p>
                <p><strong>Error:</strong> ${error.message}</p>
            `;
        }
    }

    async nextExercise() {
        // Clear previous inputs and feedback
        const answerInput = document.getElementById('listeningAnswer');
        const feedback = document.getElementById('listeningFeedback');
        const questionElement = document.getElementById('listeningQuestion');
        
        if (answerInput) answerInput.value = '';
        if (feedback) feedback.style.display = 'none';
        if (questionElement) questionElement.textContent = 'Click "Play Audio" to hear the paragraph, then a question will appear here.';
        
        // Generate new content
        await this.generateNewContent();
    }
}

// Global functions
window.playAudio = () => {
    if (window.listeningModule) {
        window.listeningModule.playAudio();
    }
};

window.submitListeningAnswer = () => {
    if (window.listeningModule) {
        window.listeningModule.submitListeningAnswer();
    }
};

// Initialize listening module when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('listening.html')) {
        window.listeningModule = new ListeningModule();
    }
});

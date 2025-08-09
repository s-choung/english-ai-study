// Writing Module
class WritingModule {
    constructor() {
        this.koreanSentences = [
            "오늘 날씨가 정말 좋아요.",
            "커피 한 잔 주세요.",
            "이것은 얼마예요?",
            "도와주셔서 감사합니다.",
            "한국 음식을 좋아해요.",
            "내일 친구를 만날 거예요.",
            "지금 몇 시예요?",
            "어디서 왔어요?",
            "한국어를 배우고 있어요.",
            "저는 학생이에요."
        ];
        this.currentSentenceIndex = 0;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.startSentenceRotation();
        this.displayCurrentSentence();
    }

    setupEventListeners() {
        const submitBtn = document.getElementById('submitTranslation');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitTranslation());
        }

        // Allow Enter key to submit
        const translationInput = document.getElementById('translationInput');
        if (translationInput) {
            translationInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && e.ctrlKey) {
                    this.submitTranslation();
                }
            });
        }
    }

    displayCurrentSentence() {
        const sentenceDisplay = document.querySelector('.sentence-display');
        if (sentenceDisplay) {
            sentenceDisplay.textContent = this.koreanSentences[this.currentSentenceIndex];
        }
    }

    startSentenceRotation() {
        setInterval(() => {
            if (document.getElementById('writing') && 
                document.getElementById('writing').style.display !== 'none') {
                this.nextSentence();
            }
        }, 45000); // Change every 45 seconds
    }

    nextSentence() {
        this.currentSentenceIndex = (this.currentSentenceIndex + 1) % this.koreanSentences.length;
        this.displayCurrentSentence();
        
        // Clear previous inputs and feedback
        const translationInput = document.getElementById('translationInput');
        const reasoningInput = document.getElementById('reasoningInput');
        const feedback = document.getElementById('writingFeedback');
        
        if (translationInput) translationInput.value = '';
        if (reasoningInput) reasoningInput.value = '';
        if (feedback) feedback.style.display = 'none';
    }

    async submitTranslation() {
        if (!window.app.requireApiKey()) return;

        const translationInput = document.getElementById('translationInput');
        const reasoningInput = document.getElementById('reasoningInput');
        const feedback = document.getElementById('writingFeedback');

        const translation = translationInput.value.trim();
        const reasoning = reasoningInput.value.trim();
        
        if (!translation) {
            alert('Please enter a translation!');
            return;
        }

        const koreanSentence = this.koreanSentences[this.currentSentenceIndex];

        window.app.showLoading(feedback);

        try {
            const result = await window.openaiAPI.evaluateTranslation(
                koreanSentence, 
                translation, 
                reasoning
            );

            feedback.innerHTML = `
                <h3>📝 Evaluation Results</h3>
                <div style="margin: 15px 0;">
                    <strong>Score:</strong> <span style="color: ${result.score >= 80 ? '#2e7d32' : result.score >= 60 ? '#f57c00' : '#d32f2f'}; font-size: 18px;">${result.score}/100</span>
                </div>
                <div style="margin: 15px 0;">
                    <strong>Your translation:</strong><br>
                    <em>"${translation}"</em>
                </div>
                <div style="margin: 15px 0;">
                    <strong>Correct translation:</strong><br>
                    <em>"${result.correct_translation}"</em>
                </div>
                <div style="margin: 15px 0;">
                    <strong>Feedback:</strong><br>
                    ${result.feedback}
                </div>
                ${result.suggestions && result.suggestions.length > 0 ? `
                    <div style="margin: 15px 0;">
                        <strong>Suggestions:</strong>
                        <ul style="margin-left: 20px;">
                            ${result.suggestions.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${reasoning ? `
                    <div style="margin: 15px 0;">
                        <strong>Your reasoning:</strong><br>
                        <em>"${reasoning}"</em>
                    </div>
                ` : ''}
            `;
        } catch (error) {
            console.error('Translation evaluation error:', error);
            feedback.innerHTML = `
                <h3>❌ Error</h3>
                <p>Sorry, there was an error evaluating your translation. Please check your API key and try again.</p>
                <p><strong>Error:</strong> ${error.message}</p>
            `;
        }
    }
}

// Global functions
window.submitTranslation = () => {
    if (window.writingModule) {
        window.writingModule.submitTranslation();
    }
};

// Initialize writing module when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('writing.html')) {
        window.writingModule = new WritingModule();
    }
});

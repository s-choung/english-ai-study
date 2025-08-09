// Enhanced Vocabulary Module with Day-based Learning
class VocabularyModule {
    constructor() {
        this.selectedDay = null;
        this.currentCardIndex = 0;
        this.currentVocabularyData = [];
        this.showHint = false;
        this.showSentence = false;
        this.isFlipped = false;
        
        // Vocabulary data by day
        this.vocabularyDataByDay = {
            1: window.day1Vocabulary || [],
            2: window.day2Vocabulary || [],
            3: window.day3Vocabulary || [],
            4: window.day4Vocabulary || [],
            5: window.day5Vocabulary || []
        };
    }

    async init() {
        this.setupEventListeners();
        this.renderDaySelection();
    }

    setupEventListeners() {
        // Back to menu
        document.getElementById('backToMenu')?.addEventListener('click', () => {
            this.handleBackToMenu();
        });

        // Card navigation
        document.getElementById('prevCard')?.addEventListener('click', () => {
            this.handlePrevious();
        });

        document.getElementById('nextCard')?.addEventListener('click', () => {
            this.handleNext();
        });

        // Card flip
        document.getElementById('flipCard')?.addEventListener('click', () => {
            this.handleFlipCard();
        });

        // Hint and sentence toggles
        document.getElementById('toggleHint')?.addEventListener('click', () => {
            this.toggleHint();
        });

        document.getElementById('toggleSentence')?.addEventListener('click', () => {
            this.toggleSentence();
        });

        // Speech synthesis
        document.getElementById('speakWord')?.addEventListener('click', () => {
            this.handleSpeak();
        });

        document.getElementById('speakSentence')?.addEventListener('click', () => {
            this.speakSentence();
        });
    }

    renderDaySelection() {
        const dayCards = document.getElementById('dayCards');
        if (!dayCards) return;

        dayCards.innerHTML = '';

        for (let day = 1; day <= 5; day++) {
            const isAvailable = this.vocabularyDataByDay[day].length > 0;
            const dayCard = document.createElement('div');
            dayCard.className = `day-card ${!isAvailable ? 'disabled' : ''}`;
            
            dayCard.innerHTML = `
                <div style="font-size: 48px; margin-bottom: 10px;">📅</div>
                <h3>Day ${day}</h3>
                <p style="margin: 0; opacity: 0.9;">
                    ${isAvailable ? `${this.vocabularyDataByDay[day].length} words` : 'Coming soon'}
                </p>
                ${isAvailable ? '<div style="position: absolute; top: 15px; right: 15px; width: 12px; height: 12px; background: #4CAF50; border-radius: 50%; animation: pulse 2s infinite;"></div>' : ''}
            `;

            if (isAvailable) {
                dayCard.style.cursor = 'pointer';
                dayCard.addEventListener('click', () => this.handleDaySelect(day));
            }

            dayCards.appendChild(dayCard);
        }
    }

    handleDaySelect(day) {
        this.selectedDay = day;
        this.currentCardIndex = 0;
        this.currentVocabularyData = this.vocabularyDataByDay[day];
        this.resetCard();
        this.showVocabularyScreen();
        this.updateCard();
    }

    handleBackToMenu() {
        this.selectedDay = null;
        this.currentCardIndex = 0;
        this.resetCard();
        this.showDaySelection();
    }

    showDaySelection() {
        document.getElementById('daySelection').classList.remove('hidden');
        document.getElementById('vocabularyScreen').classList.add('hidden');
    }

    showVocabularyScreen() {
        document.getElementById('daySelection').classList.add('hidden');
        document.getElementById('vocabularyScreen').classList.remove('hidden');
        
        // Update day title
        const dayTitle = document.getElementById('dayTitle');
        if (dayTitle) {
            dayTitle.textContent = `Day ${this.selectedDay} Vocabulary`;
        }
    }

    handleNext() {
        if (this.currentCardIndex < this.currentVocabularyData.length - 1) {
            this.currentCardIndex++;
            this.resetCard();
            this.updateCard();
        }
    }

    handlePrevious() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.resetCard();
            this.updateCard();
        }
    }

    handleFlipCard() {
        this.isFlipped = !this.isFlipped;
        const card = document.getElementById('vocabularyCard');
        const flipButton = document.getElementById('flipCard');
        
        if (this.isFlipped) {
            card.classList.add('flipped');
            flipButton.textContent = 'Show Word';
        } else {
            card.classList.remove('flipped');
            flipButton.textContent = 'Show Answer';
        }
    }

    resetCard() {
        this.showHint = false;
        this.showSentence = false;
        this.isFlipped = false;
        
        // Reset UI
        document.getElementById('vocabularyCard').classList.remove('flipped');
        document.getElementById('flipCard').textContent = 'Show Answer';
        document.getElementById('hintSection').classList.add('hidden');
        document.getElementById('sentenceSection').classList.add('hidden');
        document.getElementById('toggleHint').textContent = 'Show Hint';
        document.getElementById('toggleSentence').textContent = 'Show Example';
    }

    updateCard() {
        const currentCard = this.currentVocabularyData[this.currentCardIndex];
        if (!currentCard) return;

        // Update card content
        document.getElementById('wordDisplay').textContent = currentCard.word;
        document.getElementById('koreanMeaning').textContent = currentCard.korean;
        document.getElementById('etymologyText').textContent = currentCard.etymology;

        // Update counter
        document.getElementById('cardCounter').textContent = 
            `Card ${this.currentCardIndex + 1} of ${this.currentVocabularyData.length}`;

        // Update navigation buttons
        const prevBtn = document.getElementById('prevCard');
        const nextBtn = document.getElementById('nextCard');
        
        prevBtn.disabled = this.currentCardIndex === 0;
        nextBtn.disabled = this.currentCardIndex === this.currentVocabularyData.length - 1;

        // Update progress dots
        this.updateProgressDots();

        // Update hint and sentence content
        document.getElementById('hintText').textContent = currentCard.hints.join(', ');
        document.getElementById('sentenceText').innerHTML = this.renderSentence(currentCard);
    }

    updateProgressDots() {
        const progressDots = document.getElementById('progressDots');
        progressDots.innerHTML = '';

        const totalDots = Math.min(5, this.currentVocabularyData.length);
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.className = `progress-dot ${i === this.currentCardIndex % totalDots ? 'active' : ''}`;
            progressDots.appendChild(dot);
        }
    }

    renderSentence(card) {
        const parts = card.sentence.split('_____');
        const word = card.word.toLowerCase().replace(/\s*\(\d+\)/, '');
        return `${parts[0]}<span style="color: #007bff; font-weight: bold; border-bottom: 2px solid #007bff; padding-bottom: 2px;">${word}</span>${parts[1]}`;
    }

    toggleHint() {
        this.showHint = !this.showHint;
        const hintSection = document.getElementById('hintSection');
        const toggleButton = document.getElementById('toggleHint');

        if (this.showHint) {
            hintSection.classList.remove('hidden');
            toggleButton.textContent = 'Hide Hint';
        } else {
            hintSection.classList.add('hidden');
            toggleButton.textContent = 'Show Hint';
        }
    }

    toggleSentence() {
        this.showSentence = !this.showSentence;
        const sentenceSection = document.getElementById('sentenceSection');
        const toggleButton = document.getElementById('toggleSentence');

        if (this.showSentence) {
            sentenceSection.classList.remove('hidden');
            toggleButton.textContent = 'Hide Example';
        } else {
            sentenceSection.classList.add('hidden');
            toggleButton.textContent = 'Show Example';
        }
    }

    handleSpeak() {
        if ('speechSynthesis' in window) {
            const currentCard = this.currentVocabularyData[this.currentCardIndex];
            if (currentCard) {
                const wordToSpeak = currentCard.word.replace(/\s*\(\d+\)/, '');
                const utterance = new SpeechSynthesisUtterance(wordToSpeak);
                utterance.lang = 'en-US';
                utterance.rate = 0.9;
                window.speechSynthesis.speak(utterance);
            }
        }
    }

    speakSentence() {
        if ('speechSynthesis' in window) {
            const currentCard = this.currentVocabularyData[this.currentCardIndex];
            if (currentCard) {
                const word = currentCard.word.toLowerCase().replace(/\s*\(\d+\)/, '');
                const sentenceText = currentCard.sentence.replace('_____', word);
                const utterance = new SpeechSynthesisUtterance(sentenceText);
                utterance.lang = 'en-US';
                utterance.rate = 0.85;
                window.speechSynthesis.speak(utterance);
            }
        }
    }
}

// Initialize vocabulary module when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('vocabulary.html')) {
        window.vocabularyModule = new VocabularyModule();
        window.vocabularyModule.init();
    }
});
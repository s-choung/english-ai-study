// Vocabulary Module
class VocabularyModule {
    constructor() {
        this.cards = [];
        this.currentCardSet = 'basic';
    }

    async init() {
        await this.loadVocabularyCards();
        this.setupEventListeners();
    }

    async loadVocabularyCards() {
        try {
            // Try to load from API first
            if (window.openaiAPI.getApiKey()) {
                this.cards = await window.openaiAPI.generateVocabularyCards('intermediate', 12);
            } else {
                // Fallback to default cards
                this.cards = this.getDefaultCards();
            }
            this.renderCards();
        } catch (error) {
            console.error('Error loading vocabulary cards:', error);
            this.cards = this.getDefaultCards();
            this.renderCards();
        }
    }

    getDefaultCards() {
        return [
            { korean: "안녕하세요", english: "Hello", pronunciation: "annyeonghaseyo" },
            { korean: "감사합니다", english: "Thank you", pronunciation: "gamsahabnida" },
            { korean: "사랑해요", english: "I love you", pronunciation: "saranghaeyo" },
            { korean: "친구", english: "Friend", pronunciation: "chingu" },
            { korean: "가족", english: "Family", pronunciation: "gajok" },
            { korean: "음식", english: "Food", pronunciation: "eumsik" },
            { korean: "물", english: "Water", pronunciation: "mul" },
            { korean: "집", english: "House", pronunciation: "jip" },
            { korean: "학교", english: "School", pronunciation: "hakgyo" },
            { korean: "시간", english: "Time", pronunciation: "sigan" },
            { korean: "돈", english: "Money", pronunciation: "don" },
            { korean: "일", english: "Work", pronunciation: "il" }
        ];
    }

    renderCards() {
        const container = document.querySelector('.card-container');
        if (!container) return;

        container.innerHTML = '';
        
        this.cards.forEach((card, index) => {
            const cardElement = this.createCardElement(card, index);
            container.appendChild(cardElement);
        });
    }

    createCardElement(card, index) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'flip-card';
        cardDiv.onclick = () => this.flipCard(cardDiv);

        cardDiv.innerHTML = `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div>
                        <div style="font-size: 24px; margin-bottom: 10px;">${card.korean}</div>
                        <div style="font-size: 14px; opacity: 0.8;">${card.pronunciation || ''}</div>
                    </div>
                </div>
                <div class="flip-card-back">
                    ${card.english}
                </div>
            </div>
        `;

        return cardDiv;
    }

    flipCard(cardElement) {
        cardElement.classList.toggle('flipped');
    }

    setupEventListeners() {
        // Add refresh button functionality
        const refreshBtn = document.getElementById('refreshVocab');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.loadVocabularyCards());
        }
    }
}

// Global function
window.flipCard = (card) => {
    card.classList.toggle('flipped');
};

// Initialize vocabulary module when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('vocabulary.html')) {
        window.vocabularyModule = new VocabularyModule();
        window.vocabularyModule.init();
    }
});

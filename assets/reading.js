// Reading Module
class ReadingModule {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        const dropZone = document.getElementById('dropZone');
        const fileInput = document.getElementById('fileInput');

        if (dropZone) {
            dropZone.addEventListener('click', () => fileInput.click());
            dropZone.addEventListener('dragover', this.handleDragOver.bind(this));
            dropZone.addEventListener('dragleave', this.handleDragLeave.bind(this));
            dropZone.addEventListener('drop', this.handleDrop.bind(this));
        }

        if (fileInput) {
            fileInput.addEventListener('change', this.handleFileSelect.bind(this));
        }
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('dragging');
    }

    handleDragLeave(e) {
        e.currentTarget.classList.remove('dragging');
    }

    handleDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('dragging');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            this.processImage(files[0]);
        }
    }

    handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            this.processImage(file);
        }
    }

    async processImage(file) {
        if (!window.app.requireApiKey()) return;

        if (!file.type.startsWith('image/')) {
            alert('Please select an image file!');
            return;
        }

        const results = document.getElementById('translationResults');
        const sentencesList = document.getElementById('sentencesList');
        
        window.app.showLoading(sentencesList);
        results.style.display = 'block';

        try {
            // Convert image to base64
            const base64 = await this.fileToBase64(file);
            
            // Process with OpenAI Vision API
            const sentences = await window.openaiAPI.processImageText(base64);
            
            // Display results
            sentencesList.innerHTML = sentences.map(sentence => `
                <div class="sentence-pair">
                    <div class="original">${sentence.original}</div>
                    <div class="translated">${sentence.translated}</div>
                </div>
            `).join('');

        } catch (error) {
            console.error('Image processing error:', error);
            
            // Fallback to demo content
            sentencesList.innerHTML = `
                <div style="text-align: center; padding: 20px; color: #666;">
                    <p>⚠️ Image processing failed. Here's a demo of how it would work:</p>
                </div>
                <div class="sentence-pair">
                    <div class="original">The quick brown fox jumps over the lazy dog.</div>
                    <div class="translated">재빠른 갈색 여우가 게으른 개를 뛰어넘습니다.</div>
                </div>
                <div class="sentence-pair">
                    <div class="original">Learning a new language opens many doors.</div>
                    <div class="translated">새로운 언어를 배우는 것은 많은 문을 열어줍니다.</div>
                </div>
                <div class="sentence-pair">
                    <div class="original">Practice makes perfect.</div>
                    <div class="translated">연습이 완벽을 만듭니다.</div>
                </div>
                <div style="text-align: center; padding: 10px; font-size: 14px; color: #666;">
                    <p><strong>Error:</strong> ${error.message}</p>
                </div>
            `;
        }
    }

    fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const base64 = reader.result.split(',')[1];
                resolve(base64);
            };
            reader.onerror = error => reject(error);
        });
    }
}

// Global functions
window.handleDragOver = (e) => {
    if (window.readingModule) {
        window.readingModule.handleDragOver(e);
    }
};

window.handleDragLeave = (e) => {
    if (window.readingModule) {
        window.readingModule.handleDragLeave(e);
    }
};

window.handleDrop = (e) => {
    if (window.readingModule) {
        window.readingModule.handleDrop(e);
    }
};

window.handleFileSelect = (e) => {
    if (window.readingModule) {
        window.readingModule.handleFileSelect(e);
    }
};

// Initialize reading module when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('reading.html')) {
        window.readingModule = new ReadingModule();
    }
});

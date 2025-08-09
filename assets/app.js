// Main Application Logic
class EnglishLearningApp {
    constructor() {
        this.currentPage = 'home';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkApiKey();
    }

    setupEventListeners() {
        // Settings modal
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('settings-modal')) {
                this.toggleSettings();
            }
        });

        // API key management
        const apiKeyInput = document.getElementById('apiKeyInput');
        if (apiKeyInput) {
            apiKeyInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.saveApiKey();
                }
            });
        }
    }

    checkApiKey() {
        const apiKey = window.openaiAPI.getApiKey();
        if (apiKey) {
            console.log('API key loaded from session');
        }
    }

    toggleSettings() {
        const modal = document.getElementById('settingsModal');
        if (modal) {
            modal.classList.toggle('active');
        }
    }

    saveApiKey() {
        const input = document.getElementById('apiKeyInput');
        const key = input.value.trim();
        
        if (!key) {
            this.showApiStatus('Please enter an API key', 'error');
            return;
        }
        
        if (!key.startsWith('sk-')) {
            this.showApiStatus('Please enter a valid OpenAI API key (starts with sk-)', 'error');
            return;
        }

        window.openaiAPI.setApiKey(key);
        input.value = '';
        this.showApiStatus('API key saved successfully!', 'success');
    }

    showApiStatus(message, type) {
        const status = document.getElementById('apiStatus');
        if (status) {
            status.textContent = message;
            status.className = `api-status ${type}`;
            status.style.display = 'block';
            
            setTimeout(() => {
                status.style.display = 'none';
            }, 3000);
        }
    }

    // Utility function to show loading spinner
    showLoading(element) {
        element.innerHTML = '<div class="spinner"></div>';
        element.style.display = 'block';
    }

    // Utility function to check if API key is set
    requireApiKey() {
        if (!window.openaiAPI.getApiKey()) {
            alert('Please set your OpenAI API key first! Click the settings button in the top right.');
            return false;
        }
        return true;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new EnglishLearningApp();
});

// Global utility functions
window.toggleSettings = () => window.app.toggleSettings();
window.saveApiKey = () => window.app.saveApiKey();

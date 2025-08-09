// Main Application Logic
class App {
    constructor() {
        this.init();
    }

    init() {
        this.setupGlobalEventListeners();
        this.loadApiKey();
    }

    setupGlobalEventListeners() {
        // Settings modal
        window.toggleSettings = this.toggleSettings.bind(this);
        window.saveApiKey = this.saveApiKey.bind(this);
        
        // Close settings when clicking outside
        document.addEventListener('click', (e) => {
            const modal = document.getElementById('settingsModal');
            if (e.target === modal) {
                this.toggleSettings();
            }
        });

        // ESC key to close settings
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.getElementById('settingsModal');
                if (modal && !modal.style.display !== 'none') {
                    this.toggleSettings();
                }
            }
        });
    }

    loadApiKey() {
        const savedKey = sessionStorage.getItem('openai_api_key');
        if (savedKey) {
            const input = document.getElementById('apiKeyInput');
            if (input) {
                input.value = savedKey;
            }
            this.updateApiStatus('✅ API key loaded', 'success');
        }
    }

    toggleSettings() {
        const modal = document.getElementById('settingsModal');
        if (modal) {
            const isVisible = modal.style.display === 'block';
            modal.style.display = isVisible ? 'none' : 'block';
            
            if (!isVisible) {
                // Focus on input when opening
                const input = document.getElementById('apiKeyInput');
                if (input) {
                    setTimeout(() => input.focus(), 100);
                }
            }
        }
    }

    async saveApiKey() {
        const input = document.getElementById('apiKeyInput');
        const key = input ? input.value.trim() : '';

        if (!key) {
            this.updateApiStatus('❌ Please enter an API key', 'error');
            return;
        }

        if (!key.startsWith('sk-')) {
            this.updateApiStatus('❌ Invalid API key format', 'error');
            return;
        }

        try {
            // Test the API key with a simple request
            this.updateApiStatus('🔄 Validating API key...', 'loading');
            
            // Set the key first
            window.openaiAPI.setApiKey(key);
            
            // Test with a minimal request
            const testResponse = await window.openaiAPI.makeRequest('/chat/completions', {
                model: 'gpt-4o-mini',
                messages: [
                    {
                        role: 'user',
                        content: 'Hello'
                    }
                ],
                max_tokens: 5
            });

            if (testResponse && testResponse.choices) {
                this.updateApiStatus('✅ API key validated successfully!', 'success');
                sessionStorage.setItem('openai_api_key', key);
                
                // Close settings modal after success
                setTimeout(() => {
                    this.toggleSettings();
                }, 1500);
            } else {
                throw new Error('Invalid response format');
            }

        } catch (error) {
            console.error('API key validation error:', error);
            this.updateApiStatus(`❌ API key validation failed: ${error.message}`, 'error');
            
            // Clear invalid key
            window.openaiAPI.setApiKey('');
            sessionStorage.removeItem('openai_api_key');
        }
    }

    updateApiStatus(message, type) {
        const status = document.getElementById('apiStatus');
        if (status) {
            status.textContent = message;
            status.style.display = 'block';
            
            // Remove previous classes
            status.classList.remove('success', 'error', 'loading');
            
            // Add new class
            if (type) {
                status.classList.add(type);
            }
            
            // Auto-hide success messages
            if (type === 'success') {
                setTimeout(() => {
                    status.style.display = 'none';
                }, 3000);
            }
        }
    }

    requireApiKey() {
        const apiKey = window.openaiAPI.getApiKey();
        if (!apiKey) {
            alert('Please set your OpenAI API key in the settings first!');
            this.toggleSettings();
            return false;
        }
        return true;
    }

    showLoading(element) {
        if (element) {
            element.innerHTML = '<div class="loading-spinner">🔄 Loading...</div>';
        }
    }

    hideLoading(element) {
        if (element) {
            const spinner = element.querySelector('.loading-spinner');
            if (spinner) {
                spinner.remove();
            }
        }
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});

// Global utility functions
window.showLoading = (element) => {
    if (window.app) {
        window.app.showLoading(element);
    }
};

window.hideLoading = (element) => {
    if (window.app) {
        window.app.hideLoading(element);
    }
};
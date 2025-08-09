// OpenAI API Integration - Updated with Latest Models and Correct TTS
class OpenAIAPI {
    constructor() {
        this.apiKey = sessionStorage.getItem('openai_api_key') || '';
        this.baseURL = 'https://api.openai.com/v1';
    }

    setApiKey(key) {
        this.apiKey = key;
        sessionStorage.setItem('openai_api_key', key);
    }

    getApiKey() {
        return this.apiKey;
    }

    async makeRequest(endpoint, data) {
        if (!this.apiKey) {
            throw new Error('API key not set');
        }

        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API request failed: ${response.status} - ${errorText}`);
        }

        return response.json();
    }

    // **FIXED: Correct OpenAI TTS Implementation**
    async textToSpeech(text, voice = 'alloy', speed = 1.0, instructions = '') {
        if (!this.apiKey) {
            throw new Error('API key not set');
        }

        try {
            // Use the correct TTS endpoint and parameters
            const response = await fetch(`${this.baseURL}/audio/speech`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'tts-1-hd', // Using high-definition model
                    input: text,
                    voice: voice, // alloy, echo, fable, onyx, nova, shimmer
                    speed: speed,
                    response_format: 'mp3'
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`TTS request failed: ${response.status} - ${errorText}`);
            }

            // Return the audio blob directly
            return await response.blob();

        } catch (error) {
            console.error('TTS Error:', error);
            throw error;
        }
    }

    // **NEW: Enhanced TTS with Instructions (for newer models)**
    async textToSpeechWithInstructions(text, voice = 'coral', instructions = '', speed = 1.0) {
        if (!this.apiKey) {
            throw new Error('API key not set');
        }

        try {
            // Try the newer audio-preview model first
            const response = await fetch(`${this.baseURL}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini-audio-preview',
                    modalities: ['text', 'audio'],
                    audio: {
                        voice: voice, // coral, ash, ballad, sage, shimmer, verse, alloy, echo, fable, onyx, nova
                        format: 'mp3'
                    },
                    messages: [
                        {
                            role: 'system',
                            content: instructions || 'Speak naturally and clearly.'
                        },
                        {
                            role: 'user',
                            content: text
                        }
                    ],
                    max_tokens: 1000
                })
            });

            if (!response.ok) {
                // Fallback to standard TTS if audio-preview fails
                console.log('Falling back to standard TTS');
                return await this.textToSpeech(text, voice === 'coral' ? 'alloy' : voice, speed);
            }

            const data = await response.json();
            
            if (data.choices?.[0]?.message?.audio?.data) {
                // Convert base64 to blob
                const audioData = data.choices[0].message.audio.data;
                const binaryData = atob(audioData);
                const bytes = new Uint8Array(binaryData.length);
                
                for (let i = 0; i < binaryData.length; i++) {
                    bytes[i] = binaryData.charCodeAt(i);
                }
                
                return new Blob([bytes], { type: 'audio/mp3' });
            } else {
                throw new Error('No audio data received from API');
            }

        } catch (error) {
            console.error('Enhanced TTS Error:', error);
            // Fallback to standard TTS
            return await this.textToSpeech(text, voice === 'coral' ? 'alloy' : voice, speed);
        }
    }

    async playAudioBlob(blob) {
        return new Promise((resolve, reject) => {
            const audio = new Audio();
            const url = URL.createObjectURL(blob);
            
            audio.onloadeddata = () => {
                console.log('Audio loaded, duration:', audio.duration);
            };
            
            audio.onended = () => {
                URL.revokeObjectURL(url);
                resolve();
            };
            
            audio.onerror = (error) => {
                URL.revokeObjectURL(url);
                console.error('Audio playback error:', error);
                reject(new Error('Audio playback failed'));
            };
            
            audio.src = url;
            audio.play().catch(error => {
                URL.revokeObjectURL(url);
                reject(error);
            });
        });
    }

    // Chat completion for conversation
    async chatCompletion(messages, model = 'gpt-4o-mini', temperature = 0.7, maxTokens = 150) {
        return await this.makeRequest('/chat/completions', {
            model: model,
            messages: messages,
            temperature: temperature,
            max_tokens: maxTokens
        });
    }

    // Writing evaluation
    async evaluateWriting(koreanSentence, englishSentence, reasoning = '') {
        const messages = [
            {
                role: 'system',
                content: 'You are an English writing tutor. Evaluate the English translation and provide constructive feedback.'
            },
            {
                role: 'user',
                content: `Korean: ${koreanSentence}\nEnglish: ${englishSentence}\nReasoning: ${reasoning}\n\nPlease evaluate the translation and provide a corrected version with explanation.`
            }
        ];

        return await this.chatCompletion(messages, 'gpt-4o-mini', 0.3, 300);
    }

    // Reading: OCR and Translation (Function expected by reading.js)
    async processImageText(imageBase64) {
        if (!this.apiKey) {
            throw new Error('API key not set');
        }

        try {
            const response = await this.makeRequest('/chat/completions', {
                model: 'gpt-4o', // Using vision-capable model
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: 'Extract all English text from this image and translate each sentence to Korean. Return the result as a JSON array with this exact format: [{"original": "English text", "translated": "Korean translation"}, ...]. Make sure to include all readable text from the image.'
                            },
                            {
                                type: 'image_url',
                                image_url: {
                                    url: `data:image/jpeg;base64,${imageBase64}`
                                }
                            }
                        ]
                    }
                ],
                max_tokens: 1000,
                temperature: 0.3
            });

            const content = response.choices[0].message.content;
            
            // Try to parse as JSON
            try {
                const parsed = JSON.parse(content);
                return Array.isArray(parsed) ? parsed : [parsed];
            } catch (parseError) {
                console.warn('Failed to parse JSON response, creating fallback structure');
                
                // If response isn't JSON, try to extract text manually
                const lines = content.split('\n').filter(line => line.trim());
                const sentences = [];
                
                // Look for patterns like "English -> Korean" or "English\nKorean"
                for (const line of lines) {
                    if (line.includes('->') || line.includes('→')) {
                        const [original, translated] = line.split(/->|→/).map(s => s.trim());
                        if (original && translated) {
                            sentences.push({ original, translated });
                        }
                    }
                }
                
                // If no patterns found, return error message
                return sentences.length > 0 ? sentences : [
                    {
                        original: "Unable to extract text from image",
                        translated: "이미지에서 텍스트를 추출할 수 없습니다"
                    }
                ];
            }

        } catch (error) {
            console.error('Image processing error:', error);
            throw new Error(`Image processing failed: ${error.message}`);
        }
    }

    // Listening - Generate audio content
    async generateListeningContent(topic = 'general') {
        const messages = [
            {
                role: 'system',
                content: 'Create a short paragraph (3-4 sentences) for English listening practice, followed by 3 comprehension questions.'
            },
            {
                role: 'user',
                content: `Topic: ${topic}`
            }
        ];

        return await this.chatCompletion(messages, 'gpt-4o-mini', 0.7, 250);
    }
}

// Initialize global API instance
window.openaiAPI = new OpenAIAPI();
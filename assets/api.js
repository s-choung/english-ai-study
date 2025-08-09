// OpenAI API Integration
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
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        return response.json();
    }

    // Writing: Evaluate translation
    async evaluateTranslation(koreanSentence, userTranslation, reasoning = '') {
        const prompt = `
        Korean sentence: "${koreanSentence}"
        User's English translation: "${userTranslation}"
        ${reasoning ? `User's reasoning: "${reasoning}"` : ''}

        Please evaluate this translation and provide:
        1. The correct/best English translation
        2. Detailed feedback on accuracy and naturalness
        3. Grammar and vocabulary suggestions
        4. A score out of 100

        Format your response as JSON:
        {
            "correct_translation": "...",
            "feedback": "...",
            "score": 85,
            "suggestions": ["...", "..."]
        }
        `;

        const response = await this.makeRequest('/chat/completions', {
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: 'You are an expert English-Korean language teacher. Provide detailed, constructive feedback on translations.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.3
        });

        return JSON.parse(response.choices[0].message.content);
    }

    // Speaking: Generate conversation responses
    async generateSpeakingResponse(topic, conversationHistory) {
        const systemPrompt = `You are a friendly English conversation partner helping a Korean speaker practice English. 
        Topic: ${topic}
        Keep responses natural, encouraging, and at an appropriate level. 
        Occasionally include Korean phrases to help understanding.
        Ask follow-up questions to keep the conversation flowing.`;

        const messages = [
            { role: 'system', content: systemPrompt },
            ...conversationHistory
        ];

        const response = await this.makeRequest('/chat/completions', {
            model: 'gpt-4',
            messages: messages,
            temperature: 0.7,
            max_tokens: 150
        });

        return response.choices[0].message.content;
    }

    // Listening: Generate audio content and questions
    async generateListeningContent() {
        const prompt = `Generate a short English paragraph (2-3 sentences) about daily life, followed by a comprehension question. 
        Make it appropriate for intermediate English learners.
        
        Format as JSON:
        {
            "text": "The paragraph text...",
            "question": "What did the speaker mention about...?",
            "answer": "The expected answer..."
        }`;

        const response = await this.makeRequest('/chat/completions', {
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: 'You are an English listening comprehension expert creating practice materials.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.7
        });

        return JSON.parse(response.choices[0].message.content);
    }

    // Text-to-Speech
    async textToSpeech(text) {
        const response = await this.makeRequest('/audio/speech', {
            model: 'tts-1',
            voice: 'alloy',
            input: text
        });

        return response; // Returns audio blob
    }

    // Listening: Evaluate answer
    async evaluateListeningAnswer(originalText, question, userAnswer, correctAnswer) {
        const prompt = `
        Original text: "${originalText}"
        Question: "${question}"
        Correct answer: "${correctAnswer}"
        User's answer: "${userAnswer}"

        Evaluate the user's listening comprehension and provide feedback.
        
        Format as JSON:
        {
            "score": 85,
            "feedback": "Good comprehension! You understood the main point...",
            "correct_answer": "${correctAnswer}"
        }`;

        const response = await this.makeRequest('/chat/completions', {
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: 'You are an English listening comprehension evaluator.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.3
        });

        return JSON.parse(response.choices[0].message.content);
    }

    // Reading: OCR and Translation
    async processImageText(imageBase64) {
        const response = await this.makeRequest('/chat/completions', {
            model: 'gpt-4-vision-preview',
            messages: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'text',
                            text: 'Extract all English text from this image and translate each sentence to Korean. Format as JSON array: [{"original": "English text", "translated": "Korean translation"}, ...]'
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
            max_tokens: 1000
        });

        return JSON.parse(response.choices[0].message.content);
    }

    // Vocabulary: Generate vocabulary cards
    async generateVocabularyCards(level = 'intermediate', count = 10) {
        const prompt = `Generate ${count} Korean-English vocabulary pairs for ${level} level learners.
        Include common words and phrases used in daily conversation.
        
        Format as JSON:
        [
            {"korean": "안녕하세요", "english": "Hello", "pronunciation": "annyeonghaseyo"},
            ...
        ]`;

        const response = await this.makeRequest('/chat/completions', {
            model: 'gpt-4',
            messages: [
                {
                    role: 'system',
                    content: 'You are a Korean-English vocabulary expert creating learning materials.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            temperature: 0.7
        });

        return JSON.parse(response.choices[0].message.content);
    }
}

// Export the API instance
window.openaiAPI = new OpenAIAPI();

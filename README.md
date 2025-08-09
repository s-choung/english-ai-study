# 🎓 Ultimate English Learning App

An AI-powered English learning platform with 5 comprehensive modules for Korean speakers, built with vanilla HTML/CSS/JavaScript and OpenAI API integration.

## 🌟 Features

### 📚 **5 Learning Modules**
1. **Vocabulary** - Interactive flashcards with spaced repetition
2. **Writing** - Korean-to-English translation practice with AI evaluation
3. **Speaking** - Real-time conversation practice with AI
4. **Listening** - Audio comprehension exercises
5. **Reading** - Image text extraction and translation

### 🤖 **AI Integration**
- **Models Used**: GPT-4o-mini, GPT-4o (vision), TTS-1
- **Cost Estimation**: Real-time token usage tracking
- **Voices**: Multiple OpenAI TTS voices (alloy, echo, fable, onyx, nova, shimmer)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd ultimate_english_app
   ```

2. **Set up OpenAI API Key**
   - Open any module page
   - Click the settings gear (⚙️) in the top-right corner
   - Enter your OpenAI API key
   - Key is stored securely in browser session storage

3. **Open any HTML file**
   ```bash
   # Start with the main page
   open index.html
   # Or directly access specific modules
   open vocabulary.html
   open speaking.html
   # etc.
   ```

## 📁 Project Structure
ultimate_english_app/
├── index.html # Main landing page
├── vocabulary.html # Vocabulary flashcards
├── writing.html # Translation practice
├── speaking.html # Conversation practice
├── listening.html # Audio comprehension
├── reading.html # Image text recognition
├── assets/
│ ├── style.css # Global styles
│ ├── app.js # Main application logic
│ ├── api.js # OpenAI API integration
│ ├── vocabulary.js # Vocabulary module
│ ├── writing.js # Writing module
│ ├── speaking.js # Speaking module
│ ├── listening.js # Listening module
│ └── reading.js # Reading module
└── data/
├── day1.js # Vocabulary data (Day 1)
├── day2.js # Vocabulary data (Day 2)
├── day3.js # Vocabulary data (Day 3)
├── day4.js # Vocabulary data (Day 4)
└── day5.js # Vocabulary data (Day 5)



## 🔧 Current Status & Known Issues

### ✅ **Working Features**
- ✅ Main navigation and UI
- ✅ OpenAI API integration and key management
- ✅ Basic TTS functionality
- ✅ Vocabulary card system (basic functionality)
- ✅ Real-time cost estimation

### 🚧 **Known Issues & Planned Fixes**

#### 1. **Vocabulary Module** 📚
**Issues:**
- Word text positioning too high on cards
- Missing AI explanations for etymology and usage

**Planned Fixes:**
- Adjust CSS for proper text alignment
- Add AI-powered explanations using GPT-4o-mini
- Implement pronunciation audio
- Add difficulty-based word filtering

#### 2. **Listening Module** 🎧
**Issues:**
- Content generation not fully implemented
- Audio playback system needs improvement

**Planned Fixes:**
- Pre-generate listening content in data files
- Implement proper audio controls
- Add comprehension question system
- Support multiple difficulty levels

#### 3. **Writing Module** ✍️
**Issues:**
- Evaluation system not working properly
- API calls failing for translation assessment

**Planned Fixes:**
- Fix `evaluateTranslation()` API function
- Implement proper JSON response parsing
- Add real-time grammar suggestions
- Improve feedback quality and scoring

#### 4. **Speaking Module** 🗣️
**Issues:**
- Conversation ends after first exchange
- Microphone turns off prematurely
- AI responses too long
- Messages appear before AI finishes speaking
- Limited conversation flow

**Planned Fixes:**
- Fix microphone continuous listening
- Implement proper turn-taking system
- Shorten AI responses (max 2-3 sentences)
- Synchronize message display with TTS completion
- Add conversation topics rotation
- Improve speech recognition accuracy

#### 5. **Reading Module** 📖
**Issues:**
- Image recognition not working
- OCR functionality failing
- Vision API integration problems

**Planned Fixes:**
- Debug GPT-4o vision API calls
- Improve image preprocessing
- Add support for multiple image formats
- Implement fallback OCR solutions
- Better error handling and user feedback

## 🎯 Upcoming Features

### **Short Term (Next 2-4 weeks)**
- [ ] Fix all critical bugs listed above
- [ ] Improve TTS voice quality and speed
- [ ] Add progress tracking system
- [ ] Implement user preferences storage

### **Medium Term (1-2 months)**
- [ ] Add user authentication
- [ ] Implement learning analytics
- [ ] Add more vocabulary sets
- [ ] Create achievement system
- [ ] Mobile responsive design improvements

### **Long Term (3+ months)**
- [ ] Multi-language support
- [ ] Advanced AI tutoring features
- [ ] Social learning features
- [ ] Offline mode capability
- [ ] Advanced speech analysis

## 💰 API Costs & Usage

### **Estimated Costs per Session**
- **Vocabulary**: ~$0.001-0.005 per session
- **Writing**: ~$0.01-0.03 per evaluation
- **Speaking**: ~$0.05-0.15 per 5-minute conversation
- **Listening**: ~$0.02-0.05 per exercise
- **Reading**: ~$0.03-0.08 per image

### **Models Used**
- **Text Generation**: GPT-4o-mini ($0.15/1M input tokens, $0.60/1M output tokens)
- **Vision**: GPT-4o ($2.50/1M input tokens, $10.00/1M output tokens)
- **Text-to-Speech**: TTS-1 ($15.00/1M characters)

## 🛠️ Technical Details

### **Dependencies**
- No external JavaScript libraries
- Pure vanilla HTML/CSS/JavaScript
- OpenAI API (GPT-4o, GPT-4o-mini, TTS-1)

### **Browser Compatibility**
- Chrome 80+ (recommended)
- Firefox 75+
- Safari 13+
- Edge 80+

### **API Requirements**
- OpenAI API key with access to:
  - GPT-4o (for vision tasks)
  - GPT-4o-mini (for text generation)
  - TTS-1 (for text-to-speech)

## 🐛 Bug Reports & Contributions

### **Reporting Issues**
Please include:
1. Browser version
2. Steps to reproduce
3. Expected vs actual behavior
4. Console error messages (if any)

### **Contributing**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Development Notes

### **Code Style**
- ES6+ JavaScript
- Modular architecture
- Consistent naming conventions
- Comprehensive error handling

### **Testing**
- Manual testing across all modules
- API integration testing
- Cross-browser compatibility testing

## 🔐 Security & Privacy

- API keys stored in browser session storage only
- No user data sent to external servers (except OpenAI)
- All processing happens client-side
- No persistent data storage

## 📞 Support

For issues or questions:
1. Check the known issues section above
2. Review browser console for error messages
3. Ensure OpenAI API key is properly configured
4. Verify internet connection for API calls

---

**Last Updated**: August 2025  
**Version**: 1.0.0-beta  
**Status**: Active Development

*This is a learning project focused on practical English education for Korean speakers using modern AI technology.*
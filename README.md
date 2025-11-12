# SmartContent - AI-Powered Content Analysis Web App

![SmartContent Banner](https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200&h=400)

## 🚀 Overview

SmartContent is a powerful web application built for the Google Chrome Built-in AI Challenge. It leverages Chrome's built-in AI capabilities and the Gemini API to provide intelligent content analysis and insights.

### ✨ Key Features

- **Smart Content Analysis**: Advanced text analysis powered by Chrome's built-in AI models
- **Instant Summaries**: Get concise summaries of any content
- **Intelligent Tagging**: Automatically generate relevant tags and topics
- **Smart Suggestions**: Receive AI-powered insights and recommendations
- **Real-time Processing**: Instant analysis with beautiful loading states
- **Responsive Design**: Works seamlessly across all devices

## 🔧 Technology Stack

- **Frontend**: React + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/prabhsharan1/smart-content.git
   cd smart-content
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:

   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## 🎯 Usage

1. Navigate to the web app.
2. Paste your content in the text area.
3. Click "Analyze" to get instant AI-powered insights.
4. View the generated summary, tags, and suggestions.

## 🗰 Project Structure

```plaintext
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── ContentAnalyzer.tsx
│   └── AnalysisResults.tsx
├── utils/              # Utility functions
│   └── ai.ts           # AI-related functions
├── types/              # TypeScript types
│   └── index.ts
├── hooks/              # Custom React hooks
└── App.tsx             # Main application component
```

## 🔍 Submission Information
This project was created for the **Google Chrome Built-in AI Challenge**, showcasing the possibilities of Chrome's built-in AI capabilities to enrich productivity and content understanding directly in the browser.

### 🎥 Video Demonstration
Watch the video demonstration here: [SmartContent](https://youtu.be/kxTmtv777ew)

### 🌐 Live Web App
You can try out the live version of SmartContent here: [Netlify Live Link](https://stellular-kheer-8afbc5.netlify.app/)

### 🖋️ Text Description

**SmartContent - AI-Powered Content Analysis Web App** is a Chrome web app that leverages Google’s Gemini API and Chrome’s built-in AI models to provide efficient, real-time content analysis directly in the browser. It helps users quickly summarize text, generate relevant tags, and receive smart suggestions, addressing the need for productivity tools that streamline content consumption and understanding.

#### APIs Used
- **Gemini API**: Powers the intelligent content analysis, providing summaries, tags, and context-aware insights.
- **Prompt API in Chrome Extensions**: Enables dynamic user interaction with the AI model, enhancing the experience by keeping all processes local for privacy.

#### Problem Solved
SmartContent tackles the common challenge of quickly distilling key information from extensive content, helping users gain insights and generate ideas faster. It’s ideal for researchers, content creators, and anyone looking to save time and improve productivity by leveraging Chrome’s AI capabilities.

## 🖋️ Development Feedback

Throughout the development of SmartContent, the integration with the Gemini API and Chrome's built-in AI APIs proved both powerful and challenging. Here are some observations:

### Strengths:

- **Gemini API**: This API offered accurate and fast content analysis, with responses that significantly enhanced the extension’s utility for summaries and keyword generation.
- **Prompt API**: Provided a flexible way to interact with users dynamically, maintaining all processing locally, which improved privacy and responsiveness.

### Challenges:

- **API Constraints**: Some limitations on API response structure required additional error handling, especially when responses were unexpectedly formatted or missing expected data fields.
- **Rate Limiting and Quotas**: Working within API quotas and handling rate limits was essential, especially when testing iteratively.

Overall, these APIs allowed for a quick and smooth content analysis experience directly in Chrome, but it was crucial to develop workarounds for error handling and response formatting issues. This feedback aims to provide Google with insight into real-world development challenges with these models, which would enhance developer experience if addressed.

## 🤝 Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## 👍 Fresh Hacks Winner
SmartContent was recognized as the **Fresh Hacks Winner**! Check out the [Devpost Project Page](https://devpost.com/software/smartcontent-4udkj1?ref_content=user-portfolio&ref_feature=in_progress) for more details.

## 🔄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Chrome Built-in AI Challenge

This project was created for the Google Chrome Built-in AI Challenge, showcasing the possibilities of Chrome's built-in AI capabilities. It demonstrates how AI can enhance content understanding and user productivity directly in the browser.

### Challenge Features Used:
- Content Analysis API
- Smart Summarization
- Intelligent Tagging
- Context-Aware Suggestions

## 🔒 Privacy

SmartContent processes all content locally using Chrome's built-in AI capabilities. No content is stored or transmitted to external servers except for API calls to the Gemini API for enhanced analysis.

## 🙏 Acknowledgments

- Google Chrome Built-in AI Challenge
- Google Gemini API
- The React and TypeScript communities
- All contributors and users

---

Made with ❤️ for the Google Chrome Built-in AI Challenge.


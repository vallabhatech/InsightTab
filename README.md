# InsightTab

**InsightTab** is a Chrome extension/web interface for turning selected or pasted content into concise summaries, tags, and actionable suggestions.

> The repository is the source of truth. Documentation describes the implementation currently present in this codebase.

## Features

- Content analysis through an AI provider
- Summary generation
- Automatic tag extraction
- Suggestion/insight generation
- Chrome Manifest V3 extension structure
- React + TypeScript frontend
- Tailwind CSS styling
- ESLint quality checks
- Reproducible CI for pull requests and pushes to `main`

## Architecture

```text
Chrome Extension
├── manifest.json       Extension metadata and permissions
├── background.js       Background service worker
├── content.js          Page/content integration
└── React UI
    ├── src/App.tsx
    ├── src/components/
    ├── src/hooks/
    ├── src/utils/ai.ts AI provider integration
    └── src/types.ts   Shared TypeScript models
```

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Chrome Extension Manifest V3
- Gemini API integration

## Local development

### Prerequisites

- Node.js 20+
- npm
- A Gemini API key if AI analysis is enabled

### Setup

```bash
npm install
```

Create a local `.env` file:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

Then start the development server:

```bash
npm run dev
```

For a production build:

```bash
npm run build
```

For linting:

```bash
npm run lint
```

## Chrome extension

Build the project first, then load the generated extension assets through Chrome's **Load unpacked** developer-extension workflow. Review the generated output and extension manifest before publishing.

## Security notes

The current frontend integration calls the AI provider directly from the client. A `VITE_` environment variable is therefore **not a server-side secret**; a production deployment should move privileged API access behind a trusted backend or another architecture designed for client-side credentials.

Only send content to an external AI provider when users understand and accept that data flow. Keep extension permissions minimal and treat web-page content as untrusted input.

See [SECURITY.md](SECURITY.md) for the project's security guidance.

## CI

GitHub Actions runs:

1. `npm ci`
2. `npm run lint`
3. `npm run build`

This workflow runs for pushes to `main` and pull requests.

## Project history

See [CHANGELOG.md](CHANGELOG.md) for repository-level changes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).

---

Built as an experiment in browser-based AI-assisted content understanding.

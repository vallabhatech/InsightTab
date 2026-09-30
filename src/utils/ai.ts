import { ContentData, AnalysisResponse } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
const API_URL =
  'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';

function getApiKey(): string {
  if (!API_KEY) {
    throw new Error(
      'Missing VITE_GEMINI_API_KEY. Configure it in the local environment before running AI analysis.'
    );
  }
  return API_KEY;
}

function extractText(data: AnalysisResponse): string {
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text?.trim()) {
    throw new Error('The AI provider returned an empty or invalid response.');
  }
  return text.trim();
}

async function makeGeminiRequest(prompt: string): Promise<string> {
  const response = await fetch(`${API_URL}?key=${encodeURIComponent(getApiKey())}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!response.ok) {
    let message = `AI request failed with HTTP ${response.status}.`;
    try {
      const error = (await response.json()) as { error?: { message?: string } };
      if (error.error?.message) message = error.error.message;
    } catch {
      // Keep the HTTP status message when the provider does not return JSON.
    }
    throw new Error(message);
  }

  return extractText((await response.json()) as AnalysisResponse);
}

function parseTags(value: string): string[] {
  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
    .slice(0, 10);
}

function parseSuggestions(value: string): string[] {
  return value
    .split('\n')
    .map((suggestion) => suggestion.replace(/^[•*]/, '').replace(/^- /, '').trim())
    .filter(Boolean)
    .slice(0, 10);
}

export async function analyzeContent(content: string): Promise<ContentData> {
  const normalizedContent = content.trim();
  if (!normalizedContent) {
    throw new Error('Content cannot be empty.');
  }

  const [summary, tagsResponse, suggestionsResponse] = await Promise.all([
    makeGeminiRequest(`Provide a concise summary of the following content:\n\n${normalizedContent}`),
    makeGeminiRequest(
      `Generate 5 relevant tags for the following content. Return only comma-separated tags:\n\n${normalizedContent}`
    ),
    makeGeminiRequest(
      `Generate 3 useful suggestions or insights based on the following content. Return one suggestion per line:\n\n${normalizedContent}`
    ),
  ]);

  return {
    summary,
    tags: parseTags(tagsResponse),
    suggestions: parseSuggestions(suggestionsResponse),
  };
}

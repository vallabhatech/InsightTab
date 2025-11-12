import { ContentData, AnalysisResponse } from '../types';

const API_KEY = 'your_api_key_here';

async function makeGeminiRequest(prompt: string): Promise<string> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      })
    }
  );

  const data: AnalysisResponse = await response.json();
  return data.candidates[0].content.parts[0].text;
}

export async function analyzeContent(content: string): Promise<ContentData> {
  const [summary, tagsResponse, suggestionsResponse] = await Promise.all([
    makeGeminiRequest(`Provide a concise summary of the following content: ${content}`),
    makeGeminiRequest(`Generate 5 relevant tags for the following content, return only the tags separated by commas: ${content}`),
    makeGeminiRequest(`Generate 3 relevant suggestions or insights based on the following content. Return them as bullet points: ${content}`)
  ]);

  const tags = tagsResponse.split(',').map(tag => tag.trim());
  const suggestions = suggestionsResponse
    .split('\n')
    .map(s => s.replace(/^[•\-\*]\s*/, ''))
    .filter(s => s.trim());

  return {
    summary,
    tags,
    suggestions
  };
}
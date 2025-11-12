export interface ContentData {
  summary: string;
  tags: string[];
  suggestions: string[];
}

export interface AnalysisResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string;
      }>;
    };
  }>;
}
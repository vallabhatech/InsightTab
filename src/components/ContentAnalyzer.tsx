import React, { useState } from 'react';
import { Upload, X, Wand2 } from 'lucide-react';
import { analyzeContent } from '../utils/ai';
import { ContentData } from '../types';

interface ContentAnalyzerProps {
  setAnalysisData: (data: ContentData) => void;
  setLoading: (loading: boolean) => void;
}

const ContentAnalyzer: React.FC<ContentAnalyzerProps> = ({ setAnalysisData, setLoading }) => {
  const [content, setContent] = useState('');

  const handleAnalyze = async () => {
    if (!content.trim()) return;
    
    setLoading(true);
    try {
      const analysis = await analyzeContent(content);
      setAnalysisData(analysis);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-indigo-50">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-indigo-100 rounded-lg p-2">
          <Wand2 className="w-5 h-5 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Content Analysis</h2>
      </div>
      
      <div className="mb-6">
        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
          Enter or paste your content
        </label>
        <textarea
          id="content"
          rows={8}
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none"
          placeholder="Paste your content here for AI-powered analysis..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      
      <div className="flex justify-end gap-4">
        <button
          onClick={() => setContent('')}
          className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2 hover:bg-gray-50 rounded-xl"
        >
          <X className="w-4 h-4" />
          Clear
        </button>
        <button
          onClick={handleAnalyze}
          disabled={!content.trim()}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium shadow-lg shadow-indigo-200"
        >
          <Upload className="w-4 h-4" />
          Analyze Content
        </button>
      </div>
    </div>
  );
}

export default ContentAnalyzer;
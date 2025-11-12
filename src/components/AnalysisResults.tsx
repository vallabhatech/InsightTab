import React from 'react';
import { FileText, Tag, Lightbulb } from 'lucide-react';
import { ContentData } from '../types';

interface AnalysisResultsProps {
  data: ContentData;
  loading: boolean;
}

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ data, loading }) => {
  if (loading) {
    return (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-8 animate-pulse border border-indigo-50">
            <div className="h-6 bg-gray-200 rounded-lg w-1/4 mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded-lg w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded-lg w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-indigo-50 transform hover:scale-[1.02] transition-transform">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-indigo-100 rounded-lg p-2">
            <FileText className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Summary</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-50 transform hover:scale-[1.02] transition-transform">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-purple-100 rounded-lg p-2">
            <Tag className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Key Topics</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium hover:bg-purple-100 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 border border-yellow-50 transform hover:scale-[1.02] transition-transform">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-yellow-100 rounded-lg p-2">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">AI Suggestions</h2>
        </div>
        <ul className="space-y-4">
          {data.suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start gap-3 bg-yellow-50 rounded-xl p-4 hover:bg-yellow-100 transition-colors">
              <span className="text-yellow-600 font-bold">•</span>
              <span className="text-gray-700">{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnalysisResults;
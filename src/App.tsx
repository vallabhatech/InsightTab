import React, { useState } from 'react';
import { Brain, Sparkles, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import ContentAnalyzer from './components/ContentAnalyzer';
import AnalysisResults from './components/AnalysisResults';
import { ContentData } from './types';

function App() {
  const [analysisData, setAnalysisData] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-16">
            <div className="inline-block p-2 px-4 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-4">
              Powered by Chrome's Built-in AI
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Smart Content Analysis
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform any text into actionable insights using advanced AI analysis
            </p>
          </section>

          <ContentAnalyzer setAnalysisData={setAnalysisData} setLoading={setLoading} />
          
          {analysisData && <AnalysisResults data={analysisData} loading={loading} />}

          <section className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="group hover:scale-105 transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-indigo-50">
              <div className="bg-indigo-100 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                <Brain className="text-indigo-600 w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Smart Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced content analysis powered by Chrome's built-in AI models for deeper understanding
              </p>
            </div>

            <div className="group hover:scale-105 transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-purple-50">
              <div className="bg-purple-100 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Sparkles className="text-purple-600 w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Key Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Extract meaningful insights and summaries from any content instantly
              </p>
            </div>

            <div className="group hover:scale-105 transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 border border-blue-50">
              <div className="bg-blue-100 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <MessageSquare className="text-blue-600 w-6 h-6" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">Smart Suggestions</h3>
              <p className="text-gray-600 leading-relaxed">
                Get AI-powered suggestions and discover related topics automatically
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
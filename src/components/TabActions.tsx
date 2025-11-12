import React from 'react';
import { MessageSquare, Bookmark, Share2 } from 'lucide-react';
import { TabData } from '../types';

interface TabActionsProps {
  tab: TabData | null;
}

const TabActions: React.FC<TabActionsProps> = ({ tab }) => {
  const handleAction = (action: string) => {
    // Implementation will use Chrome's built-in AI APIs
    console.log(`Performing ${action}`);
  };

  return (
    <div className="mt-4 space-y-4">
      <button
        onClick={() => handleAction('summarize')}
        className="w-full flex items-center gap-3 p-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition-colors"
      >
        <MessageSquare className="text-indigo-600" />
        <div className="text-left">
          <h3 className="font-semibold text-gray-800">Summarize Content</h3>
          <p className="text-sm text-gray-600">Get a quick overview of the page</p>
        </div>
      </button>

      <button
        onClick={() => handleAction('bookmark')}
        className="w-full flex items-center gap-3 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
      >
        <Bookmark className="text-purple-600" />
        <div className="text-left">
          <h3 className="font-semibold text-gray-800">Smart Bookmark</h3>
          <p className="text-sm text-gray-600">Save with AI-generated tags</p>
        </div>
      </button>

      <button
        onClick={() => handleAction('share')}
        className="w-full flex items-center gap-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
      >
        <Share2 className="text-blue-600" />
        <div className="text-left">
          <h3 className="font-semibold text-gray-800">Share with Summary</h3>
          <p className="text-sm text-gray-600">Share page with AI insights</p>
        </div>
      </button>
    </div>
  );
}

export default TabActions;
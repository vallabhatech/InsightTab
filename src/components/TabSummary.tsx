import React from 'react';
import { FileText, Link as LinkIcon } from 'lucide-react';
import { TabData } from '../types';

interface TabSummaryProps {
  tab: TabData | null;
}

const TabSummary: React.FC<TabSummaryProps> = ({ tab }) => {
  if (!tab) {
    return (
      <div className="mt-4 p-6 bg-gray-50 rounded-lg text-center">
        <p className="text-gray-600">Connect the extension to see tab analysis</p>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
        <LinkIcon className="text-indigo-600" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">Current URL</h3>
          <p className="text-gray-600 break-all">{tab.url}</p>
        </div>
      </div>
      
      <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
        <FileText className="text-indigo-600" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">Content Summary</h3>
          <p className="text-gray-600">{tab.summary || 'Generating summary...'}</p>
        </div>
      </div>
    </div>
  );
}

export default TabSummary;
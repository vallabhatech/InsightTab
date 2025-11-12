import { useState, useEffect } from 'react';
import { TabData } from '../types';
import { summarizeContent, generateTags } from '../utils/ai';

export function useTabData() {
  const [activeTab, setActiveTab] = useState<TabData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Listen for messages from the Chrome extension
    window.addEventListener('message', async (event) => {
      if (event.data.type === 'TAB_DATA') {
        const { url, title, content } = event.data;
        setLoading(true);
        
        try {
          const [summary, tags] = await Promise.all([
            summarizeContent(content),
            generateTags(content)
          ]);

          setActiveTab({
            url,
            title,
            summary,
            tags
          });
        } catch (error) {
          console.error('Error processing tab data:', error);
        } finally {
          setLoading(false);
        }
      }
    });
  }, []);

  return { activeTab, loading };
}
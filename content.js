// Send message to analyze page when loaded
chrome.runtime.sendMessage({ type: 'ANALYZE_PAGE' });

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'TAB_DATA') {
    // Forward the data to our web app
    window.postMessage(message, '*');
  }
});
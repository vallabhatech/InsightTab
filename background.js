chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'ANALYZE_PAGE') {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      function: () => {
        const content = document.body.innerText;
        return {
          url: window.location.href,
          title: document.title,
          content: content.substring(0, 5000) // Limit content length
        };
      }
    }, (results) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
        return;
      }

      const data = results[0].result;
      chrome.runtime.sendMessage({
        type: 'TAB_DATA',
        ...data
      });
    });
  }
});
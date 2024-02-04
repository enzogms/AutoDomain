(() => {
  function executeScriptInActiveTable(functionName) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: functionName
      })
    });
  }
  self.executeScriptInActiveTable = executeScriptInActiveTable;
})()
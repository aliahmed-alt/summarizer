// Create a context menu when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "summarizeText",
        title: "Summarize Text",
        contexts: ["selection"] // Only show when text is selected
    });
});

// Handle context menu click event
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "summarizeText") {
        const selectedText = info.selectionText;

        if (selectedText) {
            const url = `summary.html?text=${encodeURIComponent(selectedText)}`;
            
            // Open the summary page in a new tab
            chrome.tabs.create({ url: url });
        }
    }
});

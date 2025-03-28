document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("summary", (data) => {
        document.getElementById("summaryText").innerText = data.summary || "No summary available.";
    });
});

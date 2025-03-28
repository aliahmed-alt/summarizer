document.addEventListener("DOMContentLoaded", () => {
    // Get the selected text from URL parameters
    const params = new URLSearchParams(window.location.search);
    const text = params.get("text");

    if (text) {
        fetch(`http://127.0.0.1:5000/summarize?text=${encodeURIComponent(text)}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("summaryText").innerText = data.summary || "No summary available.";
            })
            .catch(error => {
                console.error("Error fetching summary:", error);
                document.getElementById("summaryText").innerText = "Error summarizing text.";
            });
    } else {
        document.getElementById("summaryText").innerText = "No text provided for summarization.";
    }
});

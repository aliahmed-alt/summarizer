from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Load the summarization pipeline
summarizer = pipeline("summarization")

@app.route('/')
def home():
    return "Summarizer API is running! Use the /summarize endpoint."

@app.route('/summarize', methods=['GET'])
def summarize():
    text = request.args.get("text", "")
    if not text:
        return jsonify({"error": "No text provided"}), 400
    
    summary = summarizer(text, max_length=100, min_length=30, do_sample=False)
    return jsonify({"summary": summary[0]['summary_text']})

if __name__ == '__main__':
    app.run(debug=True)

Summarizer Backend

This is a text summarization API built using Flask and Hugging Face Transformers.

Features

Summarizes long text using a pre-trained model.

API endpoint available for integration.

Chrome extension support (select text and summarize via right-click menu).


Installation

Prerequisites

Make sure you have the following installed on your system:

Git

Python


Steps

1. Clone the Repository

git clone https://github.com/aliahmed-alt/summarizer-backend.git
cd summarizer-backend


2. Create a Virtual Environment

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate


3. Install Dependencies

pip install -r requirements.txt


4. Run the API

python app.py

The API should now be running at http://127.0.0.1:5000



API Usage

Use the /summarize endpoint to send text and receive a summarized version.

Example request using curl:

curl -X POST "http://127.0.0.1:5000/summarize" -H "Content-Type: application/json" -d '{"text": "Your long text here"}'


Chrome Extension

1. Open Chrome and go to chrome://extensions/.


2. Enable "Developer mode".


3. Click "Load unpacked" and select the chrome-extension folder from this repository.


4. Right-click on selected text and choose "Summarize".



Contributing

Feel free to fork this repository and submit pull requests!

License

This project is open-source under the MIT License.


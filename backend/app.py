import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

app = Flask(__name__)
CORS(app)

model_name = "tabularisai/multilingual-sentiment-analysis"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

@app.route('/', methods=['GET'])
def hello():
    return 'Hello, World!'

@app.route('/analyze_sentiment', methods=['POST'])
def analyse_sentiment():
    texts = request.get_json()['text']
    inputs = tokenizer(texts, return_tensors="pt", truncation=True, padding=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
    probabilities = torch.nn.functional.softmax(outputs.logits, dim=-1)
    sentiment_map = {0: "Very Negative", 1: "Negative", 2: "Neutral", 3: "Positive", 4: "Very Positive"}
    data = [sentiment_map[p] for p in torch.argmax(probabilities, dim=-1).tolist()]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
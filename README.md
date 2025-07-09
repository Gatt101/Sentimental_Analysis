# 🌐 Multilingual Sentiment Analysis

An interactive web app that enables users to analyze text sentiment across multiple languages. Developed with an **Angular** frontend and a **Flask** backend, it provides real-time feedback—classifying input text as **positive**, **negative**, or **neutral**.

---

## 🧭 Features

- **🌍 Multilingual Support**: Processes sentiment in various languages.
- **Fast & Interactive UI**: Angular-based interface for instant analysis.
- **Flask API Backend**: Receives text, runs language detection and sentiment model, and returns results.
- **Real-Time Predictions**: Instant sentiment output for user-submitted text.
- **Easy Integration**: Extendable with new languages or upgraded models.

---

## ⚙️ Tech Stack

| Layer      | Technology                            |
|------------|----------------------------------------|
| Frontend   | Angular, TypeScript, HTML, SCSS        |
| Backend    | Python, Flask                          |
| NLP & ML   | Language detection + sentiment model (rule-based or ML-powered) |
| Deployment | Vercel (frontend), Flask server (backend) |

---

## 🚀 Demo

Check out the live demo:  
https://sentimental-analysis-gatt101s-projects.vercel.app/home

Test input in different languages and see how the app identifies sentiment!

---

## 🧩 Project Structure

frontend/ ← Angular client-side code
backend/ ← Flask API backend
├── app.py ← Main Flask application
├── model/ ← Pretrained sentiment models or scripts
└── requirements.txt


---

## 🔧 Getting Started

### Prerequisites

- Angular CLI  
- Python 3.8+  
- pip  

### Frontend Setup

```bash
cd frontend
npm install
ng serve

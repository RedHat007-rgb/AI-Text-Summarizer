# 🧠 AI Text Summarizer App

This is a full-stack AI-powered text summarizer built with:

- 💻 Frontend: React + Vite
- ⚙️ Backend: Node.js + Express
- 🗃️ Database: MongoDB
- 🚀 Rust Microservice: Summary scoring
- 🤖 AI: OpenAI API for text summarization

---

## 📦 Features

- User authentication (Register/Login/Logout)
- Paste text or upload PDF to summarize
- Choose summary length and format (bullet/paragraph)
- View history of past summaries
- Summary scoring using a Rust-powered microservice
- Responsive UI
- Deployment-ready on Vercel (frontend) and Heroku/Railway/Render (backend)

---

## 🗂️ Project Structure

.
├── frontend/ # React + Vite app
├── backend/ # Node.js + Express server
├── rust-service/ # Rust microservice (summary scorer)
├── README.md
└── .gitignore



---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ai-text-summarizer.git
cd ai-text-summarizer
2. Setup MongoDB
Create a free MongoDB Atlas cluster

Add your connection string in backend/.env as:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
OPENAI_KEY=your_openai_api_key


3. Setup and Run Backend

cd backend
npm install
npm run dev


4. Setup and Run Frontend

cd frontend
npm install
npm run dev
Open: http://localhost:5173

5. Setup Rust Microservice

cd rust-service
cargo run
Make sure it runs on a port (e.g., localhost:8000) and update the backend to call it.

🌐 Deployment
Frontend (Vercel)
Push frontend/ to GitHub

Import repo on Vercel

Set environment variable: VITE_API_URL=http://your-backend-url

Backend (Heroku / Railway / Render)
Push backend/ to GitHub

Link to Heroku or Render

Set environment variables:

MONGO_URI

JWT_SECRET

OPENAI_KEY

🧪 Future Improvements
Multilingual support

Summary sharing links

Export as .pdf or .docx

Fine-tuned summary models

🧠 Learning Goals
This project is designed to help you:

Learn React + Vite setup

Use Express + MongoDB for real APIs

Understand JWT-based Auth

Explore Rust microservices

Deploy fullstack apps
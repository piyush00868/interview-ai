# 🚀 Interview AI – Smart Interview Preparation Tool

## 📌 Overview

Interview AI is a full-stack web application that helps users prepare for technical interviews in a structured and personalized way.

users can:

* Upload their resume
* Paste a job description
* Get an AI-powered analysis with a clear roadmap

---

## ✨ Features

### 📄 Resume Analysis

* Upload resume (PDF)
* Extract and analyze skills
* Identify strengths and weaknesses

### 🎯 Job Description Matching

* Compare resume with job requirements
* Calculate match score
* Highlight missing skills

### 🧠 AI-Powered Roadmap

* Personalized day-by-day preparation plan
* Focus on weak areas

### 💬 Interview Questions

* Technical questions based on skills
* Behavioral questions

### 📊 Skill Gap Detection

* Clearly shows what to improve
* Helps prioritize learning

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT (JSON Web Tokens)

### AI Integration

* OpenAI API (or similar LLM)

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/piyush00868/interview-ai.git
cd interview-ai
```

### 2. Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### 3. Setup environment variables

Create a `.env` file in backend:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
OPENAI_API_KEY=your_api_key
```

### 4. Run the application

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
npm run dev
```

---

## 🚀 Future Improvements

* Mock interview (AI voice/chat)
* Resume improvement suggestions
* User dashboard (history tracking)
* Better error handling & loading states
* Deployment (Vercel + Render)

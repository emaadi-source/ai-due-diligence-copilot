# 🛡️ AI Due Diligence Copilot

> An AI-powered document analysis application that allows users to upload PDF documents, automatically index their content using Retrieval-Augmented Generation (RAG), and interact with them through a natural language chat interface.

---

## 🚀 Overview

AI Due Diligence Copilot is a full-stack application built to simplify document analysis.

Instead of manually reading lengthy contracts, certificates, reports, or financial documents, users can upload a PDF and ask questions in plain English.

The application automatically:

- 📄 Extracts text from uploaded PDFs
- 🧹 Cleans and preprocesses the text
- ✂️ Splits the document into semantic chunks
- 🧠 Generates embeddings
- 📚 Stores embeddings inside ChromaDB
- 🔍 Retrieves the most relevant chunks using vector similarity search
- 🤖 Generates accurate responses using a local Large Language Model

Everything runs locally without relying on cloud-based vector databases.

---

# ✨ Features

- 📄 Upload PDF documents
- 🤖 AI-powered Question Answering
- 🧠 Local RAG Pipeline
- 📚 ChromaDB Vector Database
- 📑 Automatic Document Summarization
- 🔎 Semantic Search
- 💬 Modern Chat Interface
- ⚡ FastAPI Backend
- ⚛️ React + Vite Frontend
- 🎨 Modern Glassmorphism UI
- 🔒 Local AI Processing

---

# 🏗️ Project Architecture

```
                 PDF Upload
                      │
                      ▼
              Text Extraction
                      │
                      ▼
               Text Cleaning
                      │
                      ▼
               Text Chunking
                      │
                      ▼
             Embedding Generation
                      │
                      ▼
              ChromaDB Storage
                      │
                      ▼
        User asks a Question
                      │
                      ▼
         Query Embedding Created
                      │
                      ▼
     Similar Chunks Retrieved
                      │
                      ▼
        Local LLM Generates Answer
                      │
                      ▼
          Response shown in React
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Axios
- Lucide React
- CSS3

## Backend

- FastAPI
- Python

## AI & Machine Learning

- Sentence Transformers
- ChromaDB
- Ollama
- TinyLlama
- Retrieval-Augmented Generation (RAG)

---

# 📂 Project Structure

```
AI-DUE-DILIGENCE-COPILOT

│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── rag
│   │   └── main.py
│   │
│   ├── uploads
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── styles
│   │   └── assets
│   │
│   ├── public
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/AI-Due-Diligence-Copilot.git

cd AI-Due-Diligence-Copilot
```

---

## Backend Setup

```bash
cd backend

python -m venv .venv
```

Activate virtual environment

Windows

```bash
.venv\Scripts\activate
```

Linux / Mac

```bash
source .venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run FastAPI

```bash
uvicorn app.main:app --reload
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```
---

## CAUTION 

```bash
Check and run ollama 
ollama --version

Verify the model exists.
ollama list

You should see something like
llama3.2:latest
```



---

# 🧠 How it Works

### 1. Upload a PDF

The document is uploaded to the FastAPI backend.

---

### 2. Parse Document

The backend extracts text from the uploaded PDF.

---

### 3. Text Cleaning

Special characters and unnecessary whitespace are removed.

---

### 4. Chunking

Large documents are split into manageable chunks.

---

### 5. Embeddings

Each chunk is converted into vector embeddings.

---

### 6. Vector Storage

Embeddings are stored inside ChromaDB.

---

### 7. User Question

The user asks a question.

---

### 8. Semantic Search

Relevant chunks are retrieved using vector similarity.

---

### 9. AI Answer

The retrieved context is sent to the local LLM which generates the final response.


---

# 📚 Learning Outcomes

This project demonstrates practical experience with:

- Retrieval-Augmented Generation (RAG)
- Vector Databases
- Embedding Models
- FastAPI Development
- React Development
- API Integration
- AI Application Development
- Full Stack Development

---

# 👨‍💻 Author

**Muhammad Immad**

Computer Science Student

FAST National University

---

# ⭐ If you like this project

Give it a ⭐ on GitHub!

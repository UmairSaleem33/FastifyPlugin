# 📘 mod-notes

A modular Fastify plugin for managing notes using MongoDB.

## 🚀 Installation

```bash
git clone <your-repo-url>
cd mod-notes
npm install
```

## ⚙️ Setup

Create a `.env` file based on `.env.example`:

```env
MONGO_URL=mongodb://localhost:27017/mod-notes-test
```

## ▶️ Run

```bash
node index.js
```

Or if using Fastify app:

```js
fastify.register(require('./mod-notes'));
```

## ✅ Test

```bash
npm test
```

## 📌 Endpoints

- POST `/notes` - Create note
- GET `/notes` - List notes
- GET `/notes/:id` - Get by ID
- GET `/notes/search?q=term` - Text search

## 🧠 AI Tooling

Generated using Copilot + ChatGPT with best practices and Swagger-ready structure.

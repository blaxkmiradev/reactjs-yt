# 📁 YouTube Downloader

A simple YouTube video downloader built with React, TypeScript, and Node.js. Clean, minimal white UI design.

> ⚠️ **For educational/demo purposes only.** Downloading videos from YouTube may violate their Terms of Service. Use responsibly.

![React](https://img.shields.io/badge/React-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-blue) ![Node.js](https://img.shields.io/badge/Node.js-green) ![MIT License](https://img.shields.io/badge/License-MIT-gray)

---

## 🛠 Features

- Paste a YouTube video URL and download the video
- Clean, modern white card UI
- Fully responsive and mobile-friendly
- Fast Node.js + Express backend using `ytdl-core`
- React + TypeScript frontend for type safety

---

## ⚡ Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React, TypeScript, Vite |
| Backend | Node.js, Express, ytdl-core |
| Styling | CSS, clean white minimalist design |

---

## 📂 Project Structure

```
yt-downloader/
├── server/          # Backend
│   ├── index.ts
│   ├── package.json
│   └── tsconfig.json
│
└── client/          # Frontend
    ├── src/
    │   ├── App.tsx
    │   ├── App.css
    │   └── main.tsx
    ├── package.json
    └── tsconfig.json
```

---

## 🚀 Installation

### 1️⃣ Backend

```bash
cd server
npm install
npm run dev
```

Runs the backend on: `http://localhost:5000`

### 2️⃣ Frontend

```bash
cd client
npm install
npm run dev
```

Runs the frontend on: `http://localhost:5173` (default Vite port)

---

## 🖥 Usage

1. Open `http://localhost:5173` in your browser
2. Paste a YouTube video URL into the input field
3. Click **Download Video**
4. The video will start downloading automatically

---

## 🎨 UI Design

- White card layout with shadow
- Rounded input and button
- Modern SaaS style
- Responsive for mobile devices

---

## ⚙️ Optional Enhancements

- [ ] Add video preview or thumbnail before downloading
- [ ] Audio-only download (MP3)
- [ ] Download progress bar
- [ ] Tailwind CSS / Glassmorphism for more style
- [ ] Deploy online using Railway / Render / Vercel

---

## 📜 License

[MIT License](LICENSE) — free to use for learning and demo purposes.

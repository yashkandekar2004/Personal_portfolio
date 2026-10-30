# Yash Kandekar - Backend Developer Portfolio

A fast, modern, and accessible developer portfolio built with **React**, **Vite**, and **Lucide Icons**.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
Personal_portfolio/
├── public/
│   ├── logo.png               # Brand logo
│   └── yashkandekarResume.pdf # Downloadable resume
├── src/
│   ├── components/            # Modular UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Icons.jsx
│   │   └── BubbleBackground.jsx
│   ├── data/
│   │   └── portfolioData.js   # All projects, skills, and personal info
│   ├── App.jsx
│   ├── index.css              # Dark theme styling & animations
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## ✏️ How to Update Data

All content is managed centrally in `src/data/portfolioData.js`:
- **Projects**: Add, remove, or modify items in the `projects` array.
- **Skills**: Group and update tech stacks under `skillCategories`.
- **Contact & Socials**: Update email, GitHub, and LinkedIn links in `personalInfo`.
- **Resume**: Replace `public/yashkandekarResume.pdf` with your latest resume.


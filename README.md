# 🤖 GenAI Master

**Your comprehensive guide to 173 Generative AI concepts**

A beautiful, modern web application for learning and mastering Generative AI concepts, meticulously curated for deep understanding and interview preparation.

## 🌟 Features

- **📚 173 AI Concepts** organized into Must Know, Should Know, and Nice to Know categories
- **🎯 Interactive Learning** with in-depth explanations and interview-ready answers
- **💻 Code Examples** with Python implementations and technical breakdowns
- **🔍 Smart Search** to quickly find topics, tags, and concepts
- **📱 Fully Responsive** - works perfectly on mobile, tablet, and desktop
- **🎨 Beautiful UI** with smooth animations and modern design
- **⚡ Fast Performance** built with React + Vite

## 🚀 Live Demo

Visit the live application: **[https://ssvamsee.github.io/gen-ai/](https://ssvamsee.github.io/gen-ai/)**

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **Vite 7** - Build Tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **GitHub Pages** - Deployment

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ssvamsee/gen-ai.git

# Navigate to project directory
cd gen-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5001`

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production

# Preview
npm run preview      # Preview production build locally

# Deployment
npm run deploy       # Deploy to GitHub Pages (manual)

# Linting
npm run lint         # Run ESLint
```

## 🚀 Deployment

This project automatically deploys to GitHub Pages using GitHub Actions.

### Automatic Deployment (Recommended)

Every push to the `main` branch triggers automatic deployment:

1. Push your changes to main
2. GitHub Actions builds and deploys automatically
3. Visit your site at: `https://ssvamsee.github.io/gen-ai/`

### Manual Deployment

```bash
npm run deploy
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 Project Structure

```
gen-ai/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── public/                   # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard.jsx    # Main dashboard view
│   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   └── TopicDetail.jsx  # Topic detail view
│   ├── data/
│   │   └── topics.js        # AI concepts data
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js           # Vite configuration
└── README.md
```

## 📱 Mobile Responsive

The application is fully responsive and optimized for:
- 📱 Mobile phones (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop (1024px and up)
- 🖥️ Large screens (1280px and up)

Features:
- Hamburger menu for mobile navigation
- Touch-friendly interactions
- Optimized font sizes and spacing
- Smooth animations across all devices

## 🎨 Key Components

### Dashboard
- Overview of all categories (Must, Should, Nice to Know)
- Statistics and progress tracking
- Category selection and navigation

### Sidebar
- Category filtering
- Topic search functionality
- Collapsible sub-categories
- Mobile-friendly overlay

### Topic Detail
- Comprehensive explanations
- Interview-ready answers
- Code samples and implementations
- Technical glossary

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vamsee**
- GitHub: [@ssvamsee](https://github.com/ssvamsee)

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons by Lucide
- Animations by Framer Motion

---

**⭐ If you find this project helpful, please consider giving it a star!**

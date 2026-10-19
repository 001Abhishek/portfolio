# Abhishek Pathania - Modern Developer Portfolio 🚀

A modern, high-performance personal portfolio built with **React 18**, **Vite**, and **Tailwind CSS**, designed for enterprise software engineers.

🌐 **Live Website**: [https://001abhishek.github.io/portfolio/](https://001abhishek.github.io/portfolio/)

---

## ⚡ Tech Stack & Features

- **Core**: React 18, Vite 6 (ultra-fast HMR and bundle compilation under 2s)
- **Styling**: Tailwind CSS with custom glassmorphism, glowing accents, and dynamic background grid
- **Icons**: Lucide React
- **Theme Support**: Dark / Light theme toggle with automatic persistence (`localStorage`)
- **Interactive Sections**:
  - **Hero**: Engaging headline, status pill, CTAs, metrics grid, and social links
  - **Experience**: Timeline visualization of career history at Tata Consultancy Services & Windex
  - **Projects**: Filterable project showcase with live demo and GitHub source links
  - **Skills**: Categorized competence grid (Backend, Frontend, Databases, DevOps, Engineering Disciplines)
  - **About Me**: Professional narrative, core values, and GTU Computer Science degree details
  - **Contact**: One-click email copy with feedback toast, direct mailto, and downloadable PDF resume
- **Hosting & CI/CD**: Automated deployment to **GitHub Pages** via GitHub Actions workflow (`.github/workflows/deploy.yml`) + manual `npm run deploy` fallback.

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
# Clone the repository
git clone https://github.com/001Abhishek/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Compiles optimized production bundle into /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 GitHub Pages Deployment

### Method 1: Automated via GitHub Actions (Recommended)
1. Push your changes to the `master` or `main` branch:
   ```bash
   git add .
   git commit -m "Modernize portfolio and configure GitHub Pages"
   git push origin master
   ```
2. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every push will now build and deploy the latest site automatically!

### Method 2: Manual Deploy with `gh-pages`
If you prefer deploying directly to a `gh-pages` branch via the CLI:
```bash
npm run deploy
```
Then under **Settings** > **Pages**, ensure the source is set to deploy from the `gh-pages` branch.

---

## 📝 Updating Your Content

All personal info, experiences, projects, skills, and links are cleanly separated in a single modular file:
👉 [`src/data/portfolioData.js`](./src/data/portfolioData.js)

To add new projects or update work experience, simply edit that file!

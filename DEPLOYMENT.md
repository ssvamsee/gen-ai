# 🚀 Deployment Guide

## GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages.

### 🔧 Setup Steps

#### 1. Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/ssvamsee/gen-ai
2. Click on **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

#### 2. Automatic Deployment (Recommended)

The project uses GitHub Actions for automatic deployment:

- **Triggers**: Every push to `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Process**: Automatically builds and deploys the app

**After pushing to main:**
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The site will be automatically deployed to:
```
https://ssvamsee.github.io/gen-ai/
```

#### 3. Manual Deployment (Alternative)

You can also deploy manually using the `gh-pages` package:

```bash
# Install dependencies if not already installed
npm install

# Build and deploy
npm run deploy
```

This will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

### 📋 Configuration

- **Base URL**: `/gen-ai/` (configured in `vite.config.js`)
- **Build Output**: `dist/` directory
- **Deploy Branch**: `gh-pages` (for manual deployment)

### 🔍 Verify Deployment

After deployment, check:
- **GitHub Actions**: Go to the **Actions** tab to see deployment status
- **Live Site**: https://ssvamsee.github.io/gen-ai/

### 🛠️ Troubleshooting

#### Assets not loading (404 errors)
- Ensure `base: '/gen-ai/'` is set in `vite.config.js`
- Clear browser cache

#### Deployment fails
- Check GitHub Actions logs in the **Actions** tab
- Ensure GitHub Pages is enabled in repository settings
- Verify Node.js version compatibility (using Node 20)

#### First-time deployment
- You might need to enable GitHub Pages in Settings → Pages
- Select **GitHub Actions** as the source

### 📦 Files Added for Deployment

```
.github/
  └── workflows/
      └── deploy.yml          # GitHub Actions workflow

vite.config.js               # Updated with base path
package.json                 # Added deploy scripts and gh-pages
```

### 🎯 Local Preview of Production Build

To preview the production build locally:

```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

Then open: http://localhost:5001

---

**Note**: The first deployment might take a few minutes. Subsequent deployments are usually faster.


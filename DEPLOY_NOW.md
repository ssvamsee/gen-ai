# 🚀 Quick Deployment Guide

Since the `gh-pages` branch doesn't exist yet, we need to create it. Here's how:

## Option 1: Trigger GitHub Actions (Recommended)

The GitHub Actions workflow will automatically create the `gh-pages` branch. Here's what you need to do:

### Step 1: Make a small change to trigger the workflow

```bash
# Add a comment or update a file to trigger the workflow
git commit --allow-empty -m "Trigger GitHub Actions deployment"
git push origin main
```

### Step 2: Enable Workflow Permissions

**IMPORTANT**: Go to https://github.com/ssvamsee/gen-ai/settings/actions

Under **Workflow permissions**:
- ✅ Select **"Read and write permissions"**
- ✅ Check **"Allow GitHub Actions to create and approve pull requests"**
- Click **Save**

### Step 3: Monitor the deployment

- Go to: https://github.com/ssvamsee/gen-ai/actions
- The workflow should create the `gh-pages` branch automatically
- Wait for the green checkmark

### Step 4: Configure GitHub Pages

After the workflow completes:

1. Go to: https://github.com/ssvamsee/gen-ai/settings/pages
2. Under **Source**: Select **Deploy from a branch**
3. Select branch: **gh-pages**
4. Select folder: **/ (root)**
5. Click **Save**

Your site will be live at: https://ssvamsee.github.io/gen-ai/

## Option 2: Manual Git Commands (Alternative)

If you have git credentials set up, you can create the branch manually:

```bash
cd /home/vamsee/Development/gen-ai

# Build the project
npm run build

# Create gh-pages branch
git checkout -b gh-pages
git add -f dist
git commit -m "Initial gh-pages deployment"
git push origin gh-pages

# Go back to main
git checkout main
```

Then configure GitHub Pages as described above.

## ⚠️ Current Issue

The `gh-pages` npm package needs git authentication for manual deployments. 

**Solution**: Let GitHub Actions handle it automatically instead!

## ✅ What Will Happen

When the workflow runs successfully:

1. ✅ It will build your project
2. ✅ Create the `gh-pages` branch
3. ✅ Push the built files to that branch
4. ✅ GitHub Pages will serve from that branch

---

**Next Step**: Run the empty commit command above to trigger the workflow! 🚀


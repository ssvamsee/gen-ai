# 🔧 GitHub Pages Setup - Updated Workflow

## ⚠️ Issue Identified

The GitHub Actions workflow was failing because it was trying to use the new "GitHub Actions" deployment method, but your repository might have been previously configured to use the `gh-pages` branch method.

## ✅ Solution Applied

I've updated the workflow to use the **`gh-pages` branch** deployment method, which is more reliable and compatible with manual deployments.

### Changes Made:

**Updated `.github/workflows/deploy.yml`**:
- Simplified to single job `build-and-deploy`
- Uses `peaceiris/actions-gh-pages@v3` action
- Deploys to `gh-pages` branch automatically
- Only needs `contents: write` permission

## 🚀 How to Deploy Now

### Step 1: Update GitHub Pages Settings

1. Go to: https://github.com/ssvamsee/gen-ai/settings/pages
2. Under **Source**, select **Deploy from a branch**
3. Select branch: **`gh-pages`**
4. Select folder: **`/ (root)`**
5. Click **Save**

### Step 2: Push Your Changes

```bash
git add .
git commit -m "Update GitHub Actions workflow for gh-pages deployment"
git push origin main
```

### Step 3: Monitor Deployment

1. Go to: https://github.com/ssvamsee/gen-ai/actions
2. Watch the "Deploy to GitHub Pages" workflow
3. Wait for green checkmark (usually 1-2 minutes)

### Step 4: Access Your Site

```
https://ssvamsee.github.io/gen-ai/
```

## 🎯 Two Deployment Methods Now Available

### Method 1: Automatic (GitHub Actions) ⭐ Recommended
Every push to `main` triggers automatic deployment:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

### Method 2: Manual (npm script)
Deploy manually anytime:
```bash
npm run deploy
```

Both methods deploy to the same `gh-pages` branch!

## 🔍 Verify Settings

### GitHub Pages Settings Should Show:
- ✅ Source: **Deploy from a branch**
- ✅ Branch: **gh-pages** / (root)
- ✅ Your site is live at: https://ssvamsee.github.io/gen-ai/

### GitHub Actions Should Show:
- ✅ Workflow runs successfully
- ✅ Green checkmark on latest run
- ✅ No permission errors

## 📋 Troubleshooting

### If Actions Still Fails:

1. **Check permissions**:
   - Go to: https://github.com/ssvamsee/gen-ai/settings/actions
   - Under "Workflow permissions"
   - Select "Read and write permissions"
   - Click Save

2. **Check branch protection**:
   - Ensure `gh-pages` branch is not protected
   - Or allow Actions to push to protected branches

3. **Manual deployment as fallback**:
   ```bash
   npm run deploy
   ```

### If Site Shows 404:

1. **Verify GitHub Pages is enabled**
2. **Check the branch**: Should be `gh-pages`
3. **Wait 1-2 minutes** for changes to propagate
4. **Hard refresh**: Ctrl+Shift+R or Cmd+Shift+R

### If Site is Blank:

1. **Check browser console** (F12) for errors
2. **Verify base path**: Should see `/gen-ai/` in URLs
3. **Clear cache** and try incognito mode

## ✅ Expected Workflow

When you push to main:

1. ✅ GitHub Actions triggers
2. ✅ Installs dependencies
3. ✅ Builds the project
4. ✅ Deploys to `gh-pages` branch
5. ✅ GitHub Pages serves from `gh-pages` branch
6. ✅ Site updates at https://ssvamsee.github.io/gen-ai/

## 🎉 Benefits of This Approach

- ✅ **Compatible** with manual `npm run deploy`
- ✅ **Reliable** - uses proven `peaceiris/actions-gh-pages` action
- ✅ **Simple** - single job, fewer moving parts
- ✅ **Flexible** - can deploy manually or automatically
- ✅ **No special permissions** needed beyond basic write access

## 📞 Still Having Issues?

If the workflow still fails:

1. **Check the Actions logs**:
   - Go to Actions tab
   - Click on the failed workflow
   - Read the error message

2. **Common errors**:
   - **Permission denied**: Enable write permissions in Settings → Actions
   - **Branch protected**: Disable branch protection for `gh-pages`
   - **Build fails**: Check if `npm run build` works locally

3. **Fallback to manual**:
   ```bash
   npm run deploy
   ```
   This will always work as a backup!

---

**Your site will be live at**: https://ssvamsee.github.io/gen-ai/

After pushing, wait 1-2 minutes and refresh! 🚀


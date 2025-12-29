# 🔧 Troubleshooting GitHub Pages Blank Page

## ✅ Fixes Applied

If you're seeing a blank page on GitHub Pages, here's what was fixed:

### 1. Added `homepage` field to `package.json`
```json
"homepage": "https://ssvamsee.github.io/gen-ai"
```

### 2. Configured `base` in `vite.config.js`
```javascript
base: '/gen-ai/'
```

### 3. Added SPA routing support for GitHub Pages

**`public/404.html`** - Handles client-side routing
- Redirects 404s to index.html with proper path handling

**`index.html`** - Added redirect handling script
- Converts query string back to proper routes

## 🧪 Testing Locally

### Test the production build locally:

```bash
# Build the project
npm run build

# Preview the build (simulates GitHub Pages environment)
npm run preview
```

Then open: http://localhost:5001/gen-ai/

**Important**: You must access it with `/gen-ai/` path to simulate GitHub Pages!

### If blank page locally:

1. **Check the browser console** for errors (F12)
2. **Verify the base path**: Make sure you're accessing `http://localhost:5001/gen-ai/` (with the `/gen-ai/` path)
3. **Clear browser cache**: Hard reload (Ctrl+Shift+R or Cmd+Shift+R)

## 🚀 Deploying to GitHub Pages

### Method 1: Automatic (GitHub Actions)

1. **Enable GitHub Pages**:
   - Go to: https://github.com/ssvamsee/gen-ai/settings/pages
   - Under **Source**, select **GitHub Actions**
   - Save

2. **Push your changes**:
   ```bash
   git add .
   git commit -m "Fix GitHub Pages blank page issue"
   git push origin main
   ```

3. **Wait for deployment**:
   - Check: https://github.com/ssvamsee/gen-ai/actions
   - Wait for the green checkmark

4. **Access your site**:
   - https://ssvamsee.github.io/gen-ai/

### Method 2: Manual Deployment

```bash
npm run deploy
```

This will:
1. Build the project
2. Deploy to `gh-pages` branch
3. Your site will be live in 1-2 minutes

## 🔍 Common Issues & Solutions

### Issue 1: Blank Page on GitHub Pages
**Symptoms**: Page loads but shows blank screen

**Solutions**:
✅ Added `homepage` to package.json
✅ Set `base: '/gen-ai/'` in vite.config.js
✅ Added 404.html for SPA routing
✅ Added redirect script to index.html

### Issue 2: Assets Return 404
**Symptoms**: Console shows 404 errors for CSS/JS files

**Solution**:
- Verify `base: '/gen-ai/'` is in vite.config.js
- Rebuild: `npm run build`
- Redeploy: `npm run deploy` or push to main

### Issue 3: Routing Doesn't Work
**Symptoms**: Direct URLs (like /gen-ai/topic/123) return 404

**Solution**:
✅ 404.html handles this automatically
✅ Index.html has redirect script

### Issue 4: GitHub Actions Fails
**Symptoms**: Deployment fails in Actions tab

**Check**:
1. Go to https://github.com/ssvamsee/gen-ai/actions
2. Click on the failed workflow
3. Check the error logs
4. Common fixes:
   - Ensure GitHub Pages is enabled (Settings → Pages → GitHub Actions)
   - Check if `dist/` folder is being created in build step
   - Verify Node.js version (should be 20)

### Issue 5: Changes Not Reflecting
**Symptoms**: Pushed changes but site looks the same

**Solutions**:
1. **Wait**: GitHub Pages can take 1-2 minutes to update
2. **Hard refresh**: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
3. **Clear cache**: Clear browser cache completely
4. **Check Actions**: Verify deployment completed successfully
5. **Try incognito**: Open in private/incognito window

## 🧰 Debugging Steps

### Step 1: Check Browser Console
```
F12 → Console tab
```
Look for:
- ❌ 404 errors → Asset path issue (check base path)
- ❌ CORS errors → Usually not an issue with GitHub Pages
- ❌ JavaScript errors → Check the error message

### Step 2: Verify Build Output
```bash
npm run build
ls -la dist/
```

Should see:
- `index.html`
- `404.html`
- `assets/` folder with CSS and JS files
- `.nojekyll` file

### Step 3: Test Preview Locally
```bash
npm run preview
```

Access: http://localhost:5001/gen-ai/

If it works locally but not on GitHub Pages:
- Wait 2-3 minutes for GitHub Pages to update
- Clear browser cache
- Try incognito mode

### Step 4: Check GitHub Pages Settings
1. Go to: https://github.com/ssvamsee/gen-ai/settings/pages
2. Verify:
   - ✅ Source is set to "GitHub Actions"
   - ✅ Custom domain is empty (unless you have one)
   - ✅ "Enforce HTTPS" is checked

### Step 5: Verify GitHub Actions
1. Go to: https://github.com/ssvamsee/gen-ai/actions
2. Check latest workflow run:
   - ✅ Build step completed
   - ✅ Deploy step completed
   - ✅ Green checkmark

## 📝 Checklist Before Deploying

- [ ] `homepage` field in package.json
- [ ] `base: '/gen-ai/'` in vite.config.js
- [ ] `public/404.html` exists
- [ ] `public/.nojekyll` exists
- [ ] Redirect script in index.html
- [ ] GitHub Pages enabled (Settings → Pages → GitHub Actions)
- [ ] Code committed and pushed to main branch
- [ ] Build succeeds locally (`npm run build`)
- [ ] Preview works locally (`npm run preview`)

## 🎯 Quick Fix Commands

```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build

# Test locally
npm run preview
# Open: http://localhost:5001/gen-ai/

# Deploy manually
npm run deploy

# Or push to trigger automatic deployment
git add .
git commit -m "Fix deployment"
git push origin main
```

## 📞 Still Having Issues?

1. **Check the build output**: Look for errors in `npm run build`
2. **Verify file paths**: All imports should be relative
3. **Check console**: Open browser DevTools (F12) and check for errors
4. **GitHub Actions logs**: Check the Actions tab for detailed error messages
5. **Wait**: Sometimes it just takes a few minutes for changes to propagate

## ✅ Expected Behavior

When everything works:
1. Build completes without errors
2. Preview shows the app correctly at `/gen-ai/`
3. GitHub Actions deployment succeeds
4. Site loads at https://ssvamsee.github.io/gen-ai/
5. All pages and navigation work
6. Assets (CSS, JS, images) load correctly
7. No console errors

---

**Need more help?** Check the GitHub Actions logs for detailed error messages.


# 🔧 Fix GitHub Actions Workflow Failure

## Common Reasons for Workflow Failure

### 1. ⚠️ MOST COMMON: Permissions Issue

The workflow needs permission to create and push to the `gh-pages` branch.

**FIX THIS FIRST:**

1. Go to: https://github.com/ssvamsee/gen-ai/settings/actions
2. Scroll to **"Workflow permissions"**
3. Select: **"Read and write permissions"** (NOT "Read repository contents")
4. Check: **"Allow GitHub Actions to create and approve pull requests"**
5. Click **"Save"**

### 2. Check the Actual Error

Go to: https://github.com/ssvamsee/gen-ai/actions

1. Click on the failed workflow (red X)
2. Click on "build-and-deploy" job
3. Read the error message
4. Common errors and fixes below

## 📋 Common Errors and Solutions

### Error: "Resource not accessible by integration"
**Cause**: Workflow doesn't have write permissions

**Fix**:
- Enable "Read and write permissions" in Settings → Actions (see above)

### Error: "Failed to create deployment"
**Cause**: GitHub Pages not configured correctly

**Fix**:
1. Go to: https://github.com/ssvamsee/gen-ai/settings/pages
2. Under **Source**: Select **"Deploy from a branch"**
3. Branch: **"gh-pages"** (it will appear after first successful workflow run)
4. Folder: **"/ (root)"**
5. Click **"Save"**

### Error: "npm ci" fails
**Cause**: package-lock.json issues

**Fix**:
- The workflow will use `npm ci` which requires package-lock.json to be up to date
- It should work fine if your package-lock.json is committed

### Error: "peaceiris/actions-gh-pages" fails
**Cause**: Version or configuration issue

**Fix**: I've updated to v4 with `force_orphan: true` to handle first-time deployment

## ✅ Updated Workflow

I've updated the workflow file to:
- Use `peaceiris/actions-gh-pages@v4` (latest version)
- Added `force_orphan: true` to handle initial branch creation better
- Maintained `contents: write` permission

## 🚀 Next Steps

### Step 1: Commit and Push the Updated Workflow

```bash
# The workflow file has been updated
git add .github/workflows/deploy.yml
git add FIX_WORKFLOW_FAILURE.md
git commit -m "Update workflow to fix deployment"
```

Then push using your IDE's sync button or:
```bash
git push origin main
```

### Step 2: Enable Permissions (CRITICAL!)

Go to: https://github.com/ssvamsee/gen-ai/settings/actions
- Enable **"Read and write permissions"**
- Save

### Step 3: Monitor the Workflow

Go to: https://github.com/ssvamsee/gen-ai/actions
- Watch the workflow run
- Should see green checkmark if permissions are enabled

### Step 4: Configure GitHub Pages

After successful workflow:
1. Go to: https://github.com/ssvamsee/gen-ai/settings/pages
2. Source: **"Deploy from a branch"**
3. Branch: **"gh-pages"** / (root)
4. Save

### Step 5: Access Your Site

https://ssvamsee.github.io/gen-ai/

## 🔄 Alternative: Retry Failed Workflow

If you've already enabled permissions, you can retry the failed workflow:

1. Go to: https://github.com/ssvamsee/gen-ai/actions
2. Click on the failed workflow
3. Click **"Re-run all jobs"** button (top right)

## 🆘 If Still Failing

### Check These Settings:

1. **Repository Settings → Actions → General**
   - Actions permissions: "Allow all actions and reusable workflows"
   - Workflow permissions: "Read and write permissions"

2. **Repository Settings → Pages**
   - Make sure GitHub Pages is not disabled

3. **Check Protected Branches**
   - Settings → Branches
   - Make sure `main` branch doesn't have restrictions that block Actions

### Get Detailed Error Info

1. Go to Actions tab
2. Click the failed workflow
3. Click on "build-and-deploy"
4. Expand each step to see where it fails
5. Look for red error messages

## 📞 Common Error Messages and Meanings

| Error Message | Meaning | Fix |
|---------------|---------|-----|
| "Resource not accessible" | No write permissions | Enable write permissions |
| "refusing to create an empty archive" | Build produced no files | Check build step logs |
| "fatal: could not read Username" | Authentication issue | Use GITHUB_TOKEN (already configured) |
| "Failed to create deployment" | Pages not configured | Configure GitHub Pages settings |

## ✅ Expected Success Output

When the workflow succeeds, you should see:

```
✓ Checkout
✓ Setup Node
✓ Install dependencies
✓ Build
✓ Deploy to GitHub Pages
```

All with green checkmarks!

## 🎯 Quick Checklist

- [ ] Enable "Read and write permissions" in Settings → Actions
- [ ] Commit and push the updated workflow
- [ ] Watch the workflow run in Actions tab
- [ ] Configure GitHub Pages after workflow succeeds
- [ ] Visit https://ssvamsee.github.io/gen-ai/

---

**Most Important**: Enable "Read and write permissions" first!

Then commit and push the updated workflow file.


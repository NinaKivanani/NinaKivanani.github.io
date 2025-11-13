# Nina Hosseini-Kivanani - Personal Website

> Professional portfolio website showcasing research in NLP, Computer Vision, and Multilingual Speech Research.

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue)](https://pages.github.com/)

## 🌐 Live Website

Once deployed, your website will be available at: `https://YOUR-USERNAME.github.io/personal-webpage/`

---

## 📋 Table of Contents

- [Features](#features)
- [Quick Start - Deploy to GitHub Pages](#quick-start---deploy-to-github-pages)
- [Customization Guide](#customization-guide)
- [Local Development](#local-development)
- [Updating Your Website](#updating-your-website)
- [Troubleshooting](#troubleshooting)

---

## ✨ Features

- ✅ Modern, responsive design
- ✅ Multiple color themes (Blue, Pink, Orange, Yellow, Green)
- ✅ Dark/Light mode toggle
- ✅ Publications section with BibTeX export
- ✅ Project portfolio with filtering
- ✅ News ticker for latest updates
- ✅ Fully responsive for mobile, tablet, and desktop
- ✅ Fast loading and optimized
- ✅ SEO friendly

---

## 🚀 Quick Start - Deploy to GitHub Pages

Follow these steps to make your website public:

### Step 1: Create a GitHub Account
If you don't have one already:
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the registration process

### Step 2: Create a New Repository
1. Log in to GitHub
2. Click the **"+"** icon in the top-right corner → Select **"New repository"**
3. Fill in the details:
   - **Repository name**: `personal-webpage` (or any name you prefer)
   - **Description**: "My personal academic website"
   - **Visibility**: Choose **Public**
   - ❌ **DO NOT** check "Add a README file" (you already have one)
4. Click **"Create repository"**

### Step 3: Push Your Website to GitHub

Open Terminal (Mac) or Command Prompt (Windows) and run these commands:

```bash
# Navigate to your project folder
cd /Users/nina.hosseinikivanan/Desktop/main/personal-webpage

# Check if git is already initialized (you should see files listed)
git status

# Add all your files
git add .

# Commit your files
git commit -m "Initial commit: Personal website"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/personal-webpage.git

# Push to GitHub
git push -u origin main
```

**Note**: If `git push` fails with a branch error, try:
```bash
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR-USERNAME/personal-webpage`
2. Click on **"Settings"** (top menu)
3. In the left sidebar, click **"Pages"**
4. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes, then refresh the page
7. You'll see a message: **"Your site is live at https://YOUR-USERNAME.github.io/personal-webpage/"**

🎉 **Congratulations!** Your website is now live!

---

## 🎨 Customization Guide

### Update Website Title (Browser Tab)

Edit `index.html` line 5:
```html
<title>Your Desired Title Here</title>
```

### Update Personal Information

Edit `index.html`:
- **Line 45**: Name in logo
- **Line 75**: Main heading name
- **Line 76**: Tagline/subtitle
- **Lines 78-82**: Social media links
- **Lines 152-160**: About me text
- **Line 178**: Email address

### Update Publications

Edit the publications section in `index.html` (starting around line 495):
- Update your Google Scholar link (line 486)
- Add/remove publication entries
- Update PDF links in the `papers/` folder

### Change Colors

Click the **color switcher icon** (⚙️) on the right side of your live website, or edit:
- `css/skins/` folder for color schemes
- `index.html` line 12 to change the default color

### Update CV/Resume

Replace the file: `pdf/resume.pdf` with your updated CV

---

## 💻 Local Development

To preview your website locally before pushing changes:

### Option 1: Simple HTTP Server (Python)
```bash
# Navigate to your project folder
cd /Users/nina.hosseinikivanan/Desktop/main/personal-webpage

# Start a local server (Python 3)
python3 -m http.server 8000

# Or if you have Python 2:
python -m SimpleHTTPServer 8000

# Open your browser and go to:
# http://localhost:8000
```

### Option 2: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 🔄 Updating Your Website

After making changes to your website:

```bash
# Navigate to your project folder
cd /Users/nina.hosseinikivanan/Desktop/main/personal-webpage

# Check what files changed
git status

# Add all changed files
git add .

# Commit with a descriptive message
git commit -m "Update publications section"

# Push to GitHub
git push

# Your website will automatically update in 1-2 minutes!
```

---

## 🔧 Troubleshooting

### Issue: Website shows 404 error

**Solution**:
- Wait 2-5 minutes after enabling GitHub Pages
- Check that GitHub Pages is enabled in Settings → Pages
- Verify the branch is set to `main` and folder to `/ (root)`

### Issue: Images not showing

**Solution**:
- Check that all image paths are relative (no leading `/`)
- Ensure images are committed to the repository
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### Issue: CSS not loading

**Solution**:
- Check that `css/` folder is in your repository
- Verify paths in `index.html` are correct
- Clear browser cache

### Issue: "git push" authentication failed

**Solution**:
- Use a Personal Access Token instead of password
- Go to GitHub → Settings → Developer settings → Personal access tokens
- Generate a new token with `repo` permissions
- Use the token as your password when pushing

### Issue: Changes not appearing on live site

**Solution**:
- Wait 1-2 minutes for GitHub Pages to rebuild
- Clear browser cache
- Check that changes were successfully pushed: `git log`

---

## 📁 Project Structure

```
personal-webpage/
├── index.html              # Main HTML file
├── _config.yml            # Jekyll configuration for GitHub Pages
├── README.md              # This file
├── LICENSE                # License file
├── .gitignore            # Git ignore rules
├── css/                   # Stylesheets
│   ├── style.css
│   ├── styleSwitcher.css
│   └── skins/            # Color themes
├── js/                    # JavaScript files
│   ├── script.js
│   └── styleSwitcher.js
├── images/                # Images and icons
│   ├── n_profile.png
│   ├── favicon.ico
│   └── Project/          # Project images
├── papers/                # Research papers (PDFs)
├── pdf/                   # CV and resumes
└── CV_Updated_2024.pdf   # Latest CV
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Nina Hosseini-Kivanani**

- 🎓 University Profile: [uni.lu/people/nina-hosseini-kivanani](https://www.uni.lu/fstm-en/people/nina-hosseini-kivanani/)
- 🐦 Twitter: [@Nina_HKivanani](https://twitter.com/Nina_HKivanani)
- 💼 LinkedIn: [ninahkivanani](https://www.linkedin.com/in/ninahkivanani/)
- 💻 GitHub: [NinaHKivanani](https://github.com/NinaHKivanani)
- ✉️ Email: hkivanani [at] gmail [dot] com

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the [Troubleshooting](#troubleshooting) section above
2. Search GitHub Pages documentation: [docs.github.com/pages](https://docs.github.com/pages)
3. Check your repository's Actions tab for build errors

---

**Made with ❤️ by Nina Hosseini-Kivanani**

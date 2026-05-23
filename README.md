# Restocked — Household Product Tracker

A mobile-friendly PWA that reminds you when to restock household essentials, based on your household size.

## Features
- Tracks 12 common household products out of the box
- Adjusts restock frequency based on number of adults & children
- Color-coded urgency (overdue / soon / stocked)
- Mark items as bought to reset their countdown
- Add custom products with custom frequencies
- Works offline (PWA with service worker)
- Saves your data locally on the device

---

## Deploy to GitHub Pages (step by step)

### 1. Create a new GitHub repo
1. Go to https://github.com/new
2. Name it `household-tracker` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### 2. Push these files to the repo

Open your terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/household-tracker.git
git push -u origin main
```

> Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main`, folder to `/ (root)`
5. Click **Save**

### 4. Get your link
After ~60 seconds, your app will be live at:
```
https://YOUR_USERNAME.github.io/household-tracker/
```

Share this link with anyone — they can open it on their phone and tap **"Add to Home Screen"** to install it like a native app.

---

## Add to Home Screen (for your users)

**iPhone (Safari):**
1. Open the link in Safari
2. Tap the Share button (box with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

**Android (Chrome):**
1. Open the link in Chrome
2. Tap the three-dot menu
3. Tap "Add to Home Screen" or "Install app"
4. Tap "Add"

---

## File structure
```
household-tracker/
├── index.html       ← The entire app
├── manifest.json    ← PWA metadata (name, colors, icons)
├── sw.js            ← Service worker (offline support)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md        ← This file
```

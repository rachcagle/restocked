# Restocked — Household Product Tracker

## What this project is
A mobile-first Progressive Web App (PWA) that reminds households when to restock everyday essentials. Users input the number of adults and children in their household, and the app calculates personalized restock intervals for each product based on average consumption rates.

## Tech stack
- **Pure HTML/CSS/JS** — no framework, no build step, no node_modules
- **PWA** — manifest.json + service worker (sw.js) for offline support and "Add to Home Screen"
- **localStorage** — all user data persists in the browser (no backend, no database)
- **Hosted on GitHub Pages** — deploys automatically from the `main` branch

## File structure
```
household-tracker/
├── index.html        ← Entire app (all HTML, CSS, JS in one file)
├── manifest.json     ← PWA metadata (name, theme color, icons)
├── sw.js             ← Service worker for offline caching
├── icons/
│   ├── icon-192.png  ← App icon (home screen)
│   └── icon-512.png  ← App icon (splash screen)
├── CLAUDE.md         ← This file
└── README.md         ← Deploy instructions for GitHub Pages
```

## What's already built
- Household size input (adults + children) via a bottom-sheet modal
- 12 built-in products with consumption rates that scale by household size
- Custom product support with user-defined restock frequency
- Reminders tab: products sorted by urgency (overdue / soon / stocked)
- Progress bar per product showing how far through the restock cycle it is
- "Mark as bought" button that resets the countdown for that item
- Products tab: tap to toggle which items to track
- All state persisted to localStorage
- Service worker registered for offline use

## Design
- Dark theme: `#0f0f1a` background, `#7c6af7` accent (purple)
- Font: DM Sans (body) + DM Mono (labels/badges) from Google Fonts
- Mobile-first, max-width 480px, safe-area insets for notched phones
- No external UI libraries — all custom CSS using CSS variables

## Consumption logic
Each product has a `base` (days for 1 person) and per-adult (`pa`) / per-child (`pc`) multipliers.
Cycle length = `base / (adults * pa + children * pc)`, clamped to minimum 3 days.
Children count as 0.7 of an adult for overall household scaling.

---

## How to run locally
No build step needed. Just open `index.html` in a browser, or serve with:
```bash
npx serve .
# then open http://localhost:3000
```

## How to deploy
Push to the `main` branch — GitHub Pages auto-deploys.
Live URL: `https://YOUR_USERNAME.github.io/household-tracker/`

---

## Planned features / what to build next
These are ideas discussed but not yet implemented — pick up from here:

- [ ] **Push notifications** — remind users on a schedule (requires Notification API + a notification timestamp stored in localStorage)
- [ ] **Shopping list view** — one-tap "add all overdue + soon items to list", with a shareable text export
- [ ] **Pantry quantity tracking** — let users log how many units they have left, not just time since last bought
- [ ] **Onboarding flow** — first-launch screen to set household size before showing reminders
- [ ] **Product categories** — group products (Kitchen, Bathroom, Cleaning, etc.) in the Products tab
- [ ] **Dark/light mode toggle** — currently dark-only
- [ ] **Better icons** — replace emoji with proper SVG icons or a consistent icon set
- [ ] **Household profiles** — allow saving multiple household configs (e.g. home vs. vacation house)

---

## Conversation summary (built in Claude.ai chat)
This project was built in a Claude.ai conversation. Here is a summary to give you full context:

1. **Started as an in-chat widget** — built a household product reminder app as an interactive artifact inside claude.ai, with product cards, urgency badges, and a "mark as bought" flow.

2. **Converted to a deployable PWA** — user wanted to share it. Chose GitHub Pages over Netlify because the user already had GitHub set up. Added manifest.json, sw.js, and app icons. Packaged as a zip for download.

3. **Moved to Claude Code** — user wants to continue development directly in their repo using Claude Code (this file is the handoff).

The app is complete and working. Focus new work on the "Planned features" list above, one at a time, starting with whatever the user asks for.

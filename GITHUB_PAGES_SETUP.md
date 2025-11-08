# GitHub Pages Deployment Guide

This document explains the changes made to convert the Shopee Fortune Wheel application for GitHub Pages deployment.

## Overview

The application was converted from a client-server architecture to a fully static single-page application (SPA) that can be hosted on GitHub Pages.

## Changes Made

### 1. Backend Logic Moved to Frontend

**Created: `src/utils/wheelLogic.js`**
- Extracted wheel spinning logic from the backend server
- Contains `DEFAULT_WHEEL_CONFIG` with wheel values and weights
- Contains `getWeightedRandomValue()` function for client-side random value generation

### 2. Component Updates

**Modified: `src/App.jsx`**
- Added `wheelConfig` state to manage wheel configuration
- Updated `startGame()` to accept wheel configuration parameter
- Updated `resetGame()` to reset wheel configuration
- Passes wheel configuration to `GameBoard` component

**Modified: `src/components/HostSetup.jsx`**
- Removed API calls to backend (`/api/wheel-config/default`)
- Uses local `DEFAULT_WHEEL_CONFIG` instead
- Removed async configuration setup
- Directly passes wheel configuration to parent via `onStart()`

**Modified: `src/components/GameBoard.jsx`**
- Removed API call for spinning (`/api/spin`)
- Uses local `getWeightedRandomValue()` function instead
- Accepts `wheelConfig` prop from parent
- Spins wheel using client-side logic

### 3. Build Configuration

**Modified: `vite.config.js`**
- Added `base: '/shopee-fortune-wheel/'` for GitHub Pages deployment
- Removed proxy configuration (no longer needed)
- Removed server configuration
- Set output directory to `dist`

**Modified: `package.json`**
- Removed backend dependencies:
  - `express` (backend server)
  - `cors` (CORS middleware)
  - `concurrently` (running multiple processes)
- Added `gh-pages` for deployment
- Updated scripts:
  - `dev`: Changed from running backend+frontend to just frontend
  - `build`: Unchanged (Vite build)
  - `preview`: Unchanged (preview build)
  - Added `predeploy`: Runs build before deployment
  - Added `deploy`: Deploys to GitHub Pages

### 4. GitHub Pages Setup

**Created: `.github/workflows/deploy.yml`**
- GitHub Actions workflow for automatic deployment
- Triggers on push to main branch or manual workflow dispatch
- Build and deploy steps:
  1. Checkout code
  2. Setup Node.js 20
  3. Install dependencies
  4. Build application
  5. Deploy to GitHub Pages

**Created: `public/.nojekyll`**
- Prevents Jekyll processing on GitHub Pages
- Ensures files with underscores are served correctly

### 5. Documentation Updates

**Modified: `README.md`**
- Added live demo link at the top
- Removed backend setup instructions
- Simplified development instructions
- Removed references to Express server
- Updated technology stack section
- Added GitHub Pages deployment instructions
- Updated project structure to reflect new architecture
- Removed troubleshooting for backend issues

## Architecture Comparison

### Before (Client-Server)
```
Frontend (React + Vite)
    ↓ HTTP Requests
    ↓ /api/spin
    ↓ /api/wheel-config
Backend (Express Server)
    ↓ Generates random values
    ↓ Stores wheel configuration
```

### After (Static SPA)
```
Frontend (React + Vite)
    ↓ Direct function calls
    ↓ wheelLogic.js
Client-side Logic
    ↓ Generates random values
    ↓ Manages wheel configuration in state
```

## Deployment Instructions

### Automatic Deployment (Recommended)

1. Push changes to the main branch
2. GitHub Actions will automatically build and deploy
3. Wait for the workflow to complete
4. Access the site at `https://hasyimap.github.io/shopee-fortune-wheel/`

### Manual Deployment

```bash
npm run deploy
```

This will:
1. Build the application (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch

### Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173/shopee-fortune-wheel/` to test the built application.

## GitHub Pages Configuration

1. Go to repository Settings
2. Navigate to Pages section
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on push to main

## Benefits of This Approach

1. **No Server Required**: Fully static, can be hosted anywhere
2. **Free Hosting**: GitHub Pages is free for public repositories
3. **Automatic Deployment**: Push to main and it's live
4. **Faster**: No network latency for wheel spins
5. **Simpler**: No backend to maintain
6. **More Reliable**: No server downtime

## Files Removed

The following backend files are no longer needed:
- `backend/server.js` - Express server
- Backend-specific documentation sections

Note: The backend directory and documentation files still exist in the repository but are not used by the application.

## Technical Notes

### Random Value Generation

The weighted random selection algorithm is identical to the backend version:

```javascript
function getWeightedRandomValue(config) {
  const totalWeight = config.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const item of config) {
    random -= item.weight;
    if (random <= 0) {
      return item.value;
    }
  }
  
  return config[config.length - 1].value;
}
```

This ensures the same probability distribution as before.

### State Management

All game state is now managed in React components:
- Wheel configuration: Stored in App component
- Game state: Managed by App component
- Spin values: Generated on-demand in GameBoard component

### Security

- No API keys or secrets needed
- No backend to secure
- All logic runs in the user's browser
- CodeQL security check passed with 0 alerts

## Testing Checklist

- [x] Application builds successfully
- [x] No console errors in development
- [x] Wheel spinning works correctly
- [x] Custom wheel configuration works
- [x] All game features functional
- [x] Preview shows correct base path
- [x] CodeQL security check passed
- [x] Build size is reasonable (155KB JS + 11KB CSS)

## Troubleshooting

### Base Path Issues

If assets don't load on GitHub Pages:
1. Check `vite.config.js` has correct `base` path
2. Ensure it matches your repository name
3. Rebuild the application

### 404 Errors

If you get 404 errors on GitHub Pages:
1. Ensure `.nojekyll` file exists in public folder
2. Check GitHub Pages is enabled in repository settings
3. Verify the source is set to "GitHub Actions"

### Build Failures

If the build fails:
1. Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
2. Clear dist folder: `rm -rf dist`
3. Try building again: `npm run build`

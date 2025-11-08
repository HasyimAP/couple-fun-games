# 🎡 Wheel of Love - Shopee Challenge Edition 💕

A fun, interactive Wheel of Fortune-inspired web game for couples! Spin the wheel, guess letters, and win your Shopee shopping budget!

**🌐 Live Demo:** [Play Now on GitHub Pages](https://hasyimap.github.io/shopee-fortune-wheel/)

## 🎮 Game Overview

**Wheel of Love** is a browser-based game where your girlfriend can:
- Spin a colorful wheel to get random values (customizable by host)
- Guess consonant letters to reveal a secret phrase
- Purchase vowels using accumulated points
- Try to solve the full phrase for bonus points
- The final score becomes the Shopee shopping budget!

## 🎯 Game Rules

1. **Spin the Wheel**: Get a random value based on weighted probabilities
2. **Guess Consonants**: 
   - ✅ Correct guess → ADD the spun value to your score
   - ❌ Wrong guess → SUBTRACT the spun value from your score
3. **Buy Vowels**: 
   - Cost increases with each purchase (1x, 2x, 3x, etc. of the initial vowel price)
   - Default: First vowel costs Rp 5,000, second Rp 10,000, third Rp 15,000...
   - The host can adjust the initial vowel price
4. **Solve the Phrase**:
   - ✅ Correct answer → Get bonus for each unguessed letter (default: 5k per letter)
   - The game shows exactly how many letters you didn't guess and the total bonus
   - The host can adjust the bonus per letter
   - ❌ Wrong answer → LOSE HALF your score
5. **Final Score** = Your Shopee Budget! 🛍️

## 🚀 Getting Started

### Play Online (Easiest!)

Just visit the live demo: **[https://hasyimap.github.io/shopee-fortune-wheel/](https://hasyimap.github.io/shopee-fortune-wheel/)**

No installation needed! Works on any device with a modern web browser.

### Run Locally (For Development)

#### Prerequisites

Make sure you have **Node.js** installed on your laptop:
- Download from: https://nodejs.org/ (LTS version recommended)
- Check installation: `node --version` and `npm --version`

#### Installation

1. **Clone or download this repository**:
   ```bash
   git clone https://github.com/HasyimAP/shopee-fortune-wheel.git
   cd shopee-fortune-wheel
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

#### Running the Application

**Start the development server**:
```bash
npm run dev
```

This will:
- Start the Vite development server on `http://localhost:5173`
- Open your browser automatically to `http://localhost:5173`

## 📖 How to Play

### For the Host (You):

1. Open the game at `http://localhost:5173`
2. Enter a secret phrase in the input field (e.g., "I LOVE YOU SO MUCH")
3. **Choose your wheel configuration:**
   - **Use Default Wheel**: Standard settings with balanced probabilities
   - **Customize Wheel**: Set your own values and weights
     - Add or remove values
     - Adjust weights (lower weight = rarer value)
     - Preview the probability distribution
4. **Configure game settings:**
   - **Initial Vowel Price**: Set the base cost for vowels (default: 5,000)
     - Each subsequent vowel costs 2x, 3x, 4x, etc. of this amount
   - **Bonus per Unguessed Letter**: Set reward for each letter not guessed when solving correctly (default: 5,000)
5. Click **"Start Game"** to begin

### For the Player (Your Girlfriend):

1. Click **"Spin the Wheel"** to get a random value
2. Choose to either:
   - **Guess a consonant** (B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z)
   - **Buy a vowel** (A, E, I, O, U) - if you have enough money
   - **Guess the full phrase** - risky but can win big!
3. Keep playing until you solve the phrase
4. See your final Shopee budget with detailed bonus breakdown!
   - View how many letters you didn't guess
   - See which letters those were
   - Check your bonus calculation

## 🎨 Features

- ✨ **Colorful, animated wheel** that spins with smooth animations
- 🎯 **Interactive letter board** that reveals guessed letters
- 💰 **Real-time score tracking** with clear visual feedback
- 🔊 **Visual feedback** for spins, correct/wrong guesses
- 📱 **Responsive design** that works on laptops and tablets
- 🎊 **Celebration screen** showing final Shopee budget with detailed bonus breakdown
- ⚙️ **Customizable wheel values and weights** - Host can control the game difficulty
- 🎲 **Weighted random selection** - Rare values are harder to get
- 💵 **Adjustable vowel pricing** - Host can set initial vowel price (increases multiplicatively)
- 🎁 **Configurable bonus points** - Host can customize bonus per unguessed letter
- 📊 **Detailed bonus information** - See exactly what letters weren't guessed and total bonus earned

## 🛠️ Technology Stack

- **React 18** - UI framework
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with animations
- **GitHub Pages** - Static hosting

## 📁 Project Structure

```
shopee-fortune-wheel/
├── src/
│   ├── components/
│   │   ├── HostSetup.jsx      # Initial setup screen
│   │   ├── GameBoard.jsx      # Main game interface
│   │   ├── Wheel.jsx          # Spinning wheel component
│   │   ├── PhraseBoard.jsx    # Letter display board
│   │   ├── FinalSummary.jsx   # End game summary
│   │   └── *.css              # Component styles
│   ├── utils/
│   │   └── wheelLogic.js      # Wheel spinning logic
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Customization Ideas

### Easy Modifications:

1. **Change wheel values and weights**: Use the built-in customization UI in the host setup screen
2. **Adjust vowel pricing**: Use the initial vowel price setting in the host setup screen
3. **Modify bonus points**: Use the bonus per letter setting in the host setup screen
4. **Modify colors**: Update CSS gradient values in component CSS files
5. **Add sound effects**: Include audio files and play on events

### Future Enhancements:

- 🎵 Add real sound effects (wheel spin, ding for correct, buzz for wrong)
- 💾 Add localStorage to save high scores
- 🎨 Integrate Tailwind CSS for easier styling
- 📊 Add statistics and game history
- 🎭 Multiple phrase categories
- ⏱️ Add timer for extra challenge

## 🚀 Deployment

This app is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

This will build the app and deploy it to the `gh-pages` branch.

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The app will be automatically deployed on every push to the main branch

## 🐛 Troubleshooting

### Dependencies not installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Browser doesn't open automatically
Manually open your browser and go to: `http://localhost:5173`

## 📝 Development Tips

### Build for Production:
```bash
npm run build
```
This creates a `dist/` folder with optimized files.

### Preview Production Build:
```bash
npm run preview
```

## 💝 Made with Love

This game was created for a special couple's Shopee challenge. Have fun playing and enjoy your shopping! 🛍️

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and add your own features! Some ideas:
- Add different game modes
- Create mobile-responsive design
- Add multiplayer support
- Integrate with actual Shopee API
- Add authentication and user profiles

---

**Happy Spinning! 🎡💕**
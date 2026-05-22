# 🎂 Birthday Surprise Website

एक interactive birthday surprise website जो 2 minutes 2 seconds का timer के बाद एक lock screen दिखाता है। 2323 PIN डालने से जन्मदिन का जश्न शुरू होता है!

## ✨ Features

### 🕐 **Stage 1: Timer** (00:02:02)
- Beautiful countdown timer with pulsing animation
- Glowing text effect
- "Get Ready! 🎉" message

### 🔒 **Stage 2: Lock Screen**
- Interactive numeric keypad (0-9)
- PIN entry with bullet points (••••)
- Clear (C) and Delete (⌫) buttons
- **Correct PIN: `2323`**
- Wrong PIN error message with shake animation
- Sound effects for interactions

### 🎉 **Stage 3: Celebration**
- "Happy 24th Birthday Buddy!" message with animation
- ✨ Confetti animation
- 🎈 Floating colored balloons (red, blue, yellow, green, purple)
- 🔊 Sound effects (beep sounds)
- "Play Again" button
- Animated gradient background

## 📁 Files

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure |
| `style.css` | Beautiful CSS with animations |
| `script.js` | Complete JavaScript functionality |
| `README.md` | Documentation (this file) |

## 🚀 कैसे Use करें

1. **Repository खोलें:**
   ```bash
   git clone https://github.com/Ru2355/BB.git
   cd BB
   ```

2. **Browser में खोलें:**
   - `index.html` को अपने browser में खोलें
   - या Live Server extension का उपयोग करें

3. **Website को देखें:**
   - Timer शुरू होगा automatically
   - 2 minutes 2 seconds का इंतजार करें
   - Timer खत्म होने पर lock screen दिखेगा
   - `2323` डालें और celebration देखें! 🎉

## ⚙️ Customize करें

### Timer बदलने के लिए:
`script.js` में यह बदलें:
```javascript
const TIMER_HOURS = 0;      // घंटे
const TIMER_MINUTES = 2;    // मिनट
const TIMER_SECONDS = 2;    // सेकंड
```

### PIN बदलने के लिए:
```javascript
const CORRECT_PIN = "2323"; // अपना PIN डालें
```

### Birthday Message बदलने के लिए:
`index.html` में यह बदलें:
```html
<h1 class="happy-text">🎉 Happy 24th Birthday Buddy! 🎉</h1>
```

## 🎨 Design Features

✅ **Responsive Design** - Mobile, tablet, और desktop पर perfectly काम करता है
✅ **Beautiful Animations** - Smooth transitions और eye-catching effects
✅ **Sound Effects** - Interactive audio feedback
✅ **Gradient Backgrounds** - Modern color schemes
✅ **Glassmorphism** - Frosted glass effect on lock screen

## 🔧 Technical Details

- **HTML5** - Semantic markup
- **CSS3** - Advanced animations और gradients
- **Vanilla JavaScript** - No external dependencies
- **Web Audio API** - Sound effects generation
- **Canvas API** - Confetti animation

## 📱 Browser Support

✅ Chrome/Edge
✅ Firefox  
✅ Safari
✅ Mobile browsers

## 🎯 How It Works

1. **Page Load** → Timer starts automatically
2. **Timer Ends** → Lock screen appears with sound
3. **PIN Entry** → User enters 4 digits
4. **Validation** → If PIN is "2323", celebration starts
5. **Celebration** → Confetti, balloons, and sound effects

## 🎵 Sound Effects

- **Timer End**: Single high beep
- **Unlock**: Brief success tone
- **Celebration**: Musical celebration sequence

## 📝 License

Free to use and modify!

---

**Made with ❤️ for a special birthday celebration!** 🎂✨
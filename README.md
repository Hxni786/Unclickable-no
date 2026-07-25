# 💕 Love No is not clickable

<div align="center">

![Love Me Valentine Banner](https://img.shields.io/badge/Made%20with-Love%20%F0%9F%92%96-ff3377?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**An interactive, romantic Valentine experience — asking the most important question of all.**

</div>

---

## 🌹 Overview

**Love Me Valentine** is a charming, fully browser-based interactive web page designed to ask someone that special question: *"Do you love me?"*

Built with pure **HTML, CSS, and Vanilla JavaScript**, it features a lush animated pink aesthetic, floating heart particles, a glowing glassmorphism card, rotating love quotes, and a celebratory heart explosion when they say **Yes** — all with zero dependencies.

---

## ✨ Features

### 💖 Visual & Animation

| Feature | Description |
|---|---|
| 🎨 **Animated Gradient Background** | A soft, slow-shifting pink gradient that breathes and transitions continuously |
| 🪟 **Glassmorphism Card** | Frosted-glass card with `backdrop-filter` blur, pink-glow border, and deep shadow |
| 🌹🌸 **Swaying Flower Decorations** | Rose & cherry blossom emojis on the card corners that gently rock using CSS animations |
| 💓 **Heartbeat Yes Button** | The Yes button pulses with a realistic double-beat heartbeat animation |
| 🌟 **Shimmer Video Frame** | The video thumbnail glows softly in a pulsing pink shimmer |
| ✨ **Rotating Love Quotes** | A badge pill above the video cycles through 8 romantic quotes with smooth fade transitions |
| 🔤 **Glowing Question Text** | The heading glows in and out in a warm pink light |

### 🎆 Interaction

| Feature | Description |
|---|---|
| 💨 **Floating Heart Canvas** | 40 ambient heart particles float upward with gentle sine-wave wobble and a soft color glow |
| 🖱️ **Mouse Sparkle Trail** | Moving the cursor spawns mini heart sparkles that fade and drift |
| 🎇 **Multi-Wave Heart Explosion** | Clicking Yes triggers 3 staggered waves of heart confetti from the center |
| 🎆 **Victory Burst** | A final 3-point heart burst across the screen when the result is revealed |
| 🏃 **Dodging No Button** | The No button teleports away randomly whenever the cursor approaches it |
| 🎵 **Heartbeat Sound Toggle** | A pill button (top-right) toggles a Web Audio API heartbeat — a real double-thump rhythm |

---

## 🗂️ Project Structure

```
Love Me Valentine/
│
├── index.html          # Main HTML structure & layout
├── style.css           # All styles, animations, glassmorphism & responsive design
├── script.js           # Interaction logic, canvas engine, audio, quote rotator
├── README.md           # You are here
│
├── Reply me love.mp4   # Video shown on the question screen
└── Love me.mp4         # Video shown on the result/celebration screen
```

---

## 🚀 Getting Started

### Prerequisites

No build tools, no dependencies, no `npm install`. Just a modern browser.

### Running Locally

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/yourusername/love-me-valentine.git
   ```

2. **Open** `index.html` directly in your browser:
   ```bash
   # On Windows
   start index.html

   # On macOS
   open index.html

   # On Linux
   xdg-open index.html
   ```

That is it. No server required. ✅

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure, `<canvas>` element, `<video>` tags |
| **CSS3** | Glassmorphism, keyframe animations, gradient backgrounds, `backdrop-filter` |
| **Vanilla JavaScript** | DOM manipulation, Canvas 2D API, Web Audio API |
| **Google Fonts** | `Poppins` & `Quicksand` for elegant typography |
| **Web Audio API** | Programmatic heartbeat sound — no audio file needed |
| **Canvas 2D API** | Particle engine for floating/burst heart animations |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Primary Pink | `#ff3377` | Headings, primary button, glow |
| Soft Pink | `#ff54a4` | Button gradient end, badge text |
| Blush | `#ffd1dc` | Background mid-stop |
| Petal | `#fff0f5` | Background light stop |
| Rose | `#ffe4ec` | Background transition stop |

### Typography

- **Quicksand** — Body & heading font; rounded and warm
- **Poppins** — Buttons, badge, and UI labels; modern and clean

---

## 📐 How It Works

### Heart Particle Engine (`script.js`)

Each `HeartParticle` instance has:
- `isBurst` mode (explosion on Yes click) vs. ambient floating mode
- Custom bezier-curve heart shape drawn directly on `<canvas>`
- Sine-wave wobble offset for organic floating motion
- Soft `shadowBlur` glow applied to ambient particles
- Gravity applied only during burst mode

### Web Audio Heartbeat

The music toggle uses the **Web Audio API** to synthesize a heartbeat programmatically — two descending-frequency oscillator thumps spaced ~220 ms apart, repeated every 900 ms. **No audio file is needed.**

```js
// First thump
osc1.frequency.setValueAtTime(60, now);
osc1.frequency.exponentialRampToValueAtTime(40, now + 0.12);

// Second thump (offset by 220ms)
osc2.frequency.setValueAtTime(55, now + 0.22);
osc2.frequency.exponentialRampToValueAtTime(35, now + 0.34);
```

### Dodging No Button

On `mouseover`, the No button's `left` and `top` are randomised within `questionContainer.offsetWidth`, making it essentially impossible to click intentionally.

---

## 📸 Screens

| Screen | Description |
|---|---|
| **Question Screen** | Video + rotating quote badge + glowing question + heartbeat Yes + dodging No |
| **Loading Screen** | CSS heart loader animation plays for ~3 seconds |
| **Result Screen** | Celebration video + "I knew it 😍!" + triple heart burst explosion |

---

## 💡 Customisation Ideas

- 🎥 **Swap the videos** with your own clips or GIFs
- 💬 **Add more quotes** to the `quotes` array in `script.js`
- 🎨 **Change the color palette** in `:root` variables to match any theme (birthday, anniversary, etc.)
- 🔊 **Replace the synthesized heartbeat** with a real audio file using the HTML `<audio>` element
- 🌍 **Localise the text** — translate "Do you love me?" into any language

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/romantic-addition`
3. Commit your changes: `git commit -m 'Add some romantic touch'`
4. Push to the branch: `git push origin feature/romantic-addition`
5. Open a Pull Request 💌

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with 💖 for someone special

*"Every love story is beautiful, but ours is my favorite."*

</div>

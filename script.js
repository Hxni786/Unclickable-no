const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const musicBtn = document.getElementById("musicToggle");
const musicText = musicBtn.querySelector(".music-text");
const quoteEl = document.getElementById("quoteText");

// ── Rotating Romantic Quotes ──
const quotes = [
  "You make my heart skip a beat 💕",
  "Every love story is beautiful… 🌹",
  "You are my sunshine & moonlight 🌙",
  "In a sea of people, my eyes find you ✨",
  "You are my favorite hello 💌",
  "Love is patient, love is you 🫀",
  "Every moment with you is magic 🌸",
  "You are my forever & always 💖",
];
let quoteIndex = 0;

function cycleQuote() {
  quoteEl.style.opacity = "0";
  quoteEl.style.transform = "translateY(5px)";
  setTimeout(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteEl.textContent = quotes[quoteIndex];
    quoteEl.style.opacity = "1";
    quoteEl.style.transform = "translateY(0)";
  }, 400);
}

quoteEl.style.transition = "opacity 0.4s ease, transform 0.4s ease";
setInterval(cycleQuote, 3500);

// ── Web Audio Romantic Heartbeat Tone ──
let audioCtx = null;
let heartbeatInterval = null;
let musicOn = false;

function playHeartbeat() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  function beat() {
    const now = audioCtx.currentTime;
    
    // first thump
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.frequency.setValueAtTime(60, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.12);
    gain1.gain.setValueAtTime(0.25, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
    osc1.start(now);
    osc1.stop(now + 0.2);

    // second thump
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.frequency.setValueAtTime(55, now + 0.22);
    osc2.frequency.exponentialRampToValueAtTime(35, now + 0.34);
    gain2.gain.setValueAtTime(0.18, now + 0.22);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
    osc2.start(now + 0.22);
    osc2.stop(now + 0.4);
  }

  beat();
  heartbeatInterval = setInterval(beat, 900);
}

function stopHeartbeat() {
  clearInterval(heartbeatInterval);
  heartbeatInterval = null;
}

musicBtn.addEventListener("click", () => {
  musicOn = !musicOn;
  if (musicOn) {
    playHeartbeat();
    musicBtn.classList.add("on");
    musicText.textContent = "Sound: ON";
  } else {
    stopHeartbeat();
    musicBtn.classList.remove("on");
    musicText.textContent = "Sound: OFF";
  }
});

// ── No Button: dodge within viewport so it never disappears ──
noBtn.addEventListener("mouseover", () => {
  const btnW  = noBtn.offsetWidth  || 90;
  const btnH  = noBtn.offsetHeight || 48;
  const margin = 20;

  const maxX = window.innerWidth  - btnW  - margin;
  const maxY = window.innerHeight - btnH  - margin;

  const newX = Math.floor(Math.random() * (maxX - margin) + margin);
  const newY = Math.floor(Math.random() * (maxY - margin) + margin);

  // Switch to fixed so it's always relative to the viewport
  noBtn.style.position = "fixed";
  noBtn.style.left = `${newX}px`;
  noBtn.style.top  = `${newY}px`;
  noBtn.style.right = "auto";
});

// ── Yes Button ──
yesBtn.addEventListener("click", () => {
  // Multi-wave celebratory heart burst
  createHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 70);
  setTimeout(() => createHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 50), 300);
  setTimeout(() => createHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 40), 600);

  questionContainer.style.opacity = "0";
  questionContainer.style.transform = "translate(-50%, -50%) scale(0.9)";
  setTimeout(() => {
    questionContainer.style.display = "none";
    heartLoader.style.display = "block";
    heartLoader.style.opacity = "1";
  }, 350);

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.play();
    // Victory wave
    setTimeout(() => createHeartBurst(window.innerWidth / 2, window.innerHeight / 2, 90), 100);
    setTimeout(() => createHeartBurst(window.innerWidth / 4, window.innerHeight / 2, 40), 400);
    setTimeout(() => createHeartBurst((window.innerWidth / 4) * 3, window.innerHeight / 2, 40), 600);
  }, 3000);
});

// ── Interactive Heart Canvas ──
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

let width  = (canvas.width  = window.innerWidth);
let height = (canvas.height = window.innerHeight);

window.addEventListener("resize", () => {
  width  = canvas.width  = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const particles = [];

class HeartParticle {
  constructor(x, y, isBurst = false) {
    this.x = x ?? Math.random() * width;
    this.y = y ?? height + Math.random() * 20;
    this.size         = isBurst ? Math.random() * 20 + 8  : Math.random() * 14 + 6;
    this.speedY       = isBurst ? (Math.random() - 0.5) * 14 : -(Math.random() * 1.6 + 0.5);
    this.speedX       = isBurst ? (Math.random() - 0.5) * 14 : Math.sin(Math.random() * Math.PI) * 0.7;
    this.opacity      = isBurst ? 1 : Math.random() * 0.5 + 0.2;
    this.color        = `hsl(${Math.random() * 50 + 320}, 100%, ${Math.random() * 20 + 62}%)`;
    this.rotation     = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.06;
    this.isBurst      = isBurst;
    this.gravity      = isBurst ? 0.18 : 0;
    this.life         = isBurst ? 100 : Infinity;
    // gentle wobble for floating hearts
    this.wobbleOffset = Math.random() * Math.PI * 2;
    this.wobbleSpeed  = Math.random() * 0.03 + 0.01;
    this.wobbleAmp    = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.wobbleOffset += this.wobbleSpeed;
    this.x += this.speedX + Math.sin(this.wobbleOffset) * this.wobbleAmp;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;

    if (this.isBurst) {
      this.speedY += this.gravity;
      this.life   -= 1.4;
      this.opacity = Math.max(0, this.life / 100);
    } else {
      if (this.y < -30) {
        this.y = height + 20;
        this.x = Math.random() * width;
      }
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;

    // Subtle glow for ambient hearts
    if (!this.isBurst) {
      ctx.shadowColor = this.color;
      ctx.shadowBlur  = 8;
    }

    ctx.fillStyle = this.color;
    const s  = this.size;
    const tc = s * 0.3;

    ctx.beginPath();
    ctx.moveTo(0, tc);
    ctx.bezierCurveTo(0, 0, -s / 2, 0, -s / 2, tc);
    ctx.bezierCurveTo(-s / 2, (s + tc) / 2, 0, s, 0, s);
    ctx.bezierCurveTo(0, s, s / 2, (s + tc) / 2, s / 2, tc);
    ctx.bezierCurveTo(s / 2, 0, 0, 0, 0, tc);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

// Seed ambient floating hearts
for (let i = 0; i < 40; i++) {
  particles.push(new HeartParticle(Math.random() * width, Math.random() * height, false));
}

function createHeartBurst(x, y, count = 40) {
  for (let i = 0; i < count; i++) {
    particles.push(new HeartParticle(x, y, true));
  }
}

// Mouse sparkle trail
window.addEventListener("mousemove", (e) => {
  if (Math.random() < 0.22) {
    const p       = new HeartParticle(e.clientX, e.clientY, true);
    p.size        = Math.random() * 9 + 3;
    p.speedY      = (Math.random() - 0.5) * 2.5;
    p.speedX      = (Math.random() - 0.5) * 2.5;
    p.life        = 38;
    p.gravity     = 0;
    particles.push(p);
  }
});

function animateCanvas() {
  ctx.clearRect(0, 0, width, height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.isBurst && (p.life <= 0 || p.opacity <= 0)) {
      particles.splice(i, 1);
    }
  }

  requestAnimationFrame(animateCanvas);
}

animateCanvas();
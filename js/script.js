const texts = [
  "Halo, Saya Alhamd 👋",
  "Web Developer & Pelajar 💻",
  "Selamat Datang di Portofolio Saya!"
];
const typingElement = document.getElementById("typing-text");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let cursorVisible = true;

// Animasi cursor custom
function blinkCursor() {
  const cursor = document.querySelector(".custom-cursor");
  if (cursor) {
    cursor.style.opacity = cursorVisible ? "1" : "0";
    cursorVisible = !cursorVisible;
  }
  setTimeout(blinkCursor, 500);
}

// Efek typing dengan highlight huruf terakhir
function typeLoop() {
  const currentText = texts[textIndex];
  let displayText = currentText.substring(0, charIndex);

  // Highlight huruf terakhir yang sedang diketik
  let highlighted = "";
  if (charIndex > 0) {
    highlighted =
      displayText.slice(0, -1) +
      `<span style="color:#ffb347; text-shadow:0 0 8px #fff700;">${displayText.slice(-1)}</span>`;
  }

  // Efek gradient pada seluruh teks
  typingElement.innerHTML = `<span style="background: linear-gradient(90deg, #ff9800, #ff5e62, #36d1c4, #5b86e5); -webkit-background-clip: text; color: transparent; font-weight: bold;">
${
  charIndex > 0 ? highlighted : ""
}</span><span class="custom-cursor" style="color:#ffb347;font-weight:bold;">|</span>`;

  if (!isDeleting) {
    if (charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeLoop, 90);
    } else {
      isDeleting = true;
      setTimeout(typeLoop, 1200);
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeLoop, 35);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeLoop, 600);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeLoop();
  blinkCursor();
});
function runTyping() {
  const text = "I am Mehdiali Kadiwala";
  const textEl = document.querySelector("#typing-text");
  const typingDelay = 150;

  typeText(text, textEl, typingDelay);
}

function typeText(text, textEl, typingDelay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      textEl.textContent += text.charAt(i);
    }, typingDelay * i);
  }
}

document.addEventListener("DOMContentLoaded", runTyping);

const preloaderPercent = document.getElementById('preloaderPercent');
const preloaderNeedle = document.getElementById('preloaderNeedle');

function startPreloader() {
  let value = 0;
  const interval = setInterval(() => {
    value += Math.floor(Math.random() * 8) + 4;
    if (value >= 100) value = 100;
    preloaderPercent.textContent = `${value}%`;
    preloaderNeedle.style.transform = `rotate(${(value / 100) * 180 - 90}deg)`;
    if (value >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 500);
      }, 450);
    }
  }, 120);
}

window.addEventListener('DOMContentLoaded', startPreloader);

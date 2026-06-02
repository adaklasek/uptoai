// NAV scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile burger
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1400;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + increment, target);
    el.textContent = Math.round(current);
    if (current >= target) clearInterval(timer);
  }, step);
}

const counterEls = document.querySelectorAll('.hc-metric-val');
let countersStarted = false;
const heroCard = document.querySelector('.hero-card');
if (heroCard) {
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      counterEls.forEach(el => animateCounter(el));
    }
  }, { threshold: 0.5 });
  obs.observe(heroCard);
}

// Ticker duplication for seamless loop
const ticker = document.querySelector('.ticker-inner');
if (ticker) {
  ticker.innerHTML += ticker.innerHTML;
}

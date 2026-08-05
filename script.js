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

// AJAX contact form – no page redirect, inline success message
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const btnText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Odesílám…';

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error('send_failed');
      contactForm.outerHTML = `<div class="form-success">
        <div class="form-success-icon">✓</div>
        <p class="form-success-title">Odesláno – díky!</p>
        <p class="form-success-text">Ozveme se do 24 hodin a domluvíme bezplatný 90minutový hovor.</p>
        <p class="form-success-sub">Mezitím nás najdete na <a href="mailto:info@uptoai.cz">info@uptoai.cz</a></p>
      </div>`;
    } catch {
      btn.disabled = false;
      btn.textContent = btnText;
      if (!contactForm.querySelector('.form-error')) {
        const err = document.createElement('p');
        err.className = 'form-error';
        err.textContent = 'Nepodařilo se odeslat. Zkuste to znovu nebo napište přímo na info@uptoai.cz';
        contactForm.querySelector('.form-submit').after(err);
      }
    }
  });
}

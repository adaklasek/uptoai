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
  el.textContent = '0';
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

// AJAX contact form – language-aware, no page redirect
const lang = document.documentElement.lang || 'cs';
const i18n = {
  cs: {
    sending: 'Odesílám…',
    successIcon: '✓',
    successTitle: 'Odesláno – díky!',
    successText: 'Ozveme se do 24 hodin a domluvíme bezplatný 90minutový hovor.',
    successSub: 'Mezitím nás najdete na',
    errorText: 'Nepodařilo se odeslat. Zkuste to znovu nebo napište přímo na info@uptoai.cz',
  },
  en: {
    sending: 'Sending…',
    successIcon: '✓',
    successTitle: 'Sent – thank you!',
    successText: "We'll get back to you within 24 hours to schedule your free 90-minute call.",
    successSub: 'In the meantime, reach us at',
    errorText: 'Something went wrong. Try again or write directly to info@uptoai.cz',
  },
};
const t = i18n[lang] || i18n.cs;

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const btnText = btn.textContent;
    btn.disabled = true;
    btn.textContent = t.sending;

    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) throw new Error('send_failed');
      contactForm.outerHTML = `<div class="form-success">
        <div class="form-success-icon">${t.successIcon}</div>
        <p class="form-success-title">${t.successTitle}</p>
        <p class="form-success-text">${t.successText}</p>
        <p class="form-success-sub">${t.successSub} <a href="mailto:info@uptoai.cz">info@uptoai.cz</a></p>
      </div>`;
    } catch {
      btn.disabled = false;
      btn.textContent = btnText;
      if (!contactForm.querySelector('.form-error')) {
        const err = document.createElement('p');
        err.className = 'form-error';
        err.textContent = t.errorText;
        contactForm.querySelector('.form-submit').after(err);
      }
    }
  });
}

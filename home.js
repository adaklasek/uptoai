(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile menu
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Console log, lines appear one by one
  var logs = document.querySelectorAll('#console .log');
  if (reduce || !('IntersectionObserver' in window)) {
    logs.forEach(function (l) { l.classList.add('on'); });
  } else {
    logs.forEach(function (l, i) {
      setTimeout(function () { l.classList.add('on'); }, 350 + i * 650);
    });
  }

  // Reveal on scroll
  var rv = document.querySelectorAll('.rv');
  if (reduce || !('IntersectionObserver' in window)) {
    rv.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    rv.forEach(function (el) { io.observe(el); });
  }

  // Calculator
  var p = document.getElementById('c-people');
  var h = document.getElementById('c-hours');
  var r = document.getElementById('c-rate');
  if (p && h && r) {
    var fmt = function (n) { return Math.round(n).toLocaleString('cs-CZ') + ' Kč'; };
    var upd = function () {
      var people = +p.value, hours = +h.value, rate = +r.value;
      var yearHours = people * hours * 52;
      document.getElementById('o-people').textContent = people;
      document.getElementById('o-hours').textContent = hours + ' h';
      document.getElementById('o-rate').textContent = fmt(rate);
      document.getElementById('o-year').textContent = fmt(yearHours * rate);
      document.getElementById('o-sub').textContent = 'To je ' + yearHours.toLocaleString('cs-CZ') + ' hodin práce ročně, kterou by mohl dělat agent.';
    };
    [p, h, r].forEach(function (el) { el.addEventListener('input', upd); });
    upd();
  }
})();

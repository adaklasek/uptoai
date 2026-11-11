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

  // Demo widget
  var demoWidget = document.querySelector('.demo-widget');
  if (demoWidget) {
    var CYCLE = 9000;
    var cards = demoWidget.querySelectorAll('.demo-card');
    var tabs = demoWidget.querySelectorAll('.demo-tab');
    var bar = demoWidget.querySelector('.demo-bar');
    var current = 0;
    var timer = null;

    function resetCard(card) {
      card.querySelectorAll('.demo-step, .demo-result').forEach(function (el) {
        el.classList.remove('on');
      });
    }

    function animateCard(card) {
      if (reduce) {
        card.querySelectorAll('.demo-step, .demo-result').forEach(function (el) { el.classList.add('on'); });
        return;
      }
      card.querySelectorAll('.demo-step').forEach(function (step) {
        var delay = parseInt(step.getAttribute('data-delay') || '0');
        setTimeout(function () { step.classList.add('on'); }, delay);
      });
      var result = card.querySelector('.demo-result');
      if (result) {
        var rDelay = parseInt(result.getAttribute('data-delay') || '7200');
        setTimeout(function () { result.classList.add('on'); }, rDelay);
      }
    }

    function startBar() {
      if (!bar || reduce) return;
      bar.style.transition = 'none';
      bar.style.width = '0';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          bar.style.transition = 'width ' + CYCLE + 'ms linear';
          bar.style.width = '100%';
        });
      });
    }

    function showCard(idx) {
      cards.forEach(function (c, i) {
        var active = i === idx;
        c.classList.toggle('active', active);
        resetCard(c);
      });
      tabs.forEach(function (t, i) { t.classList.toggle('active', i === idx); });
      current = idx;
      animateCard(cards[idx]);
      startBar();
    }

    function startCycle() {
      if (timer) clearInterval(timer);
      timer = setInterval(function () { showCard((current + 1) % cards.length); }, CYCLE);
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        clearInterval(timer);
        showCard(i);
        startCycle();
      });
    });

    showCard(0);
    if (!reduce) startCycle();
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

'use strict';

/* ============================================
   01. STICKY HEADER
============================================ */
(function initStickyHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const SCROLL_THRESHOLD = 80;

  function onScroll() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load
})();

/* ============================================
   02. MOBILE HAMBURGER MENU
============================================ */
(function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav       = document.getElementById('nav');
  if (!hamburger || !nav) return;

  function toggleMenu(forceClose = false) {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    const newState = forceClose ? false : !isOpen;

    hamburger.setAttribute('aria-expanded', String(newState));
    nav.classList.toggle('open', newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleMenu());

  // Close on nav link click
  nav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      toggleMenu(true);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(true);
  });
})();

/* ============================================
   03. PROMO CODE — COPY TO CLIPBOARD
============================================ */
(function initPromoCode() {
  const btn     = document.getElementById('promo-code');
  const tooltip = document.getElementById('promo-tooltip');
  if (!btn || !tooltip) return;

  let resetTimer = null;

  btn.addEventListener('click', async () => {
    const code = btn.textContent.trim();

    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Fallback for browsers without clipboard API
      const ta = document.createElement('textarea');
      ta.value = code;
      ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }

    tooltip.textContent = 'Copié !';
    tooltip.classList.add('visible');
    btn.setAttribute('aria-label', `Code promo ${code} — copié dans le presse-papier`);

    clearTimeout(resetTimer);
    resetTimer = setTimeout(() => {
      tooltip.classList.remove('visible');
      btn.setAttribute('aria-label', `Code promo ${code} — cliquer pour copier`);
      setTimeout(() => { tooltip.textContent = ''; }, 300);
    }, 2000);
  });
})();

/* ============================================
   04. NEWSLETTER FORM
============================================ */
(function initNewsletter() {
  const form    = document.getElementById('newsletter-form');
  const input   = document.getElementById('newsletter-email');
  const success = document.getElementById('newsletter-success');
  const error   = document.getElementById('newsletter-error');
  if (!form || !input || !success || !error) return;

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function showMessage(el, visible) {
    el.hidden = !visible;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    showMessage(success, false);
    showMessage(error, false);

    const email = input.value.trim();

    if (!isValidEmail(email)) {
      showMessage(error, true);
      input.focus();
      return;
    }

    // Simulate API call (replace with real endpoint)
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = '...';

    await new Promise(r => setTimeout(r, 800));

    submitBtn.disabled = false;
    submitBtn.textContent = "S'abonner";

    input.value = '';
    showMessage(success, true);

    // Reset success after 5s
    setTimeout(() => showMessage(success, false), 5000);
  });

  // Clear error on input
  input.addEventListener('input', () => {
    if (!error.hidden) showMessage(error, false);
  });
})();

/* ============================================
   05. ADD TO CART — Feedback visuel
============================================ */
(function initAddToCart() {
  const cartCount = document.querySelector('.header__cart-count');
  let count = 0;

  document.querySelectorAll('.product-card__cta').forEach(btn => {
    btn.addEventListener('click', function () {
      count++;
      if (cartCount) {
        cartCount.textContent = String(count);
        const cartBtn = document.querySelector('.header__cart');
        if (cartBtn) cartBtn.setAttribute('aria-label', `Panier — ${count} article${count > 1 ? 's' : ''}`);
      }

      const original = this.textContent;
      this.textContent = '✓ AJOUTÉ';
      this.style.backgroundColor = '#2d6a4f';
      this.disabled = true;

      setTimeout(() => {
        this.textContent = original;
        this.style.backgroundColor = '';
        this.disabled = false;
      }, 1800);
    });
  });
})();

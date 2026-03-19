'use strict';

/* =========================================
   SCROLL REVEAL — IntersectionObserver
   ========================================= */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach((el) => revealObserver.observe(el));

/* =========================================
   NAV — scroll bg & hamburger drawer
   ========================================= */
const nav = document.querySelector('nav');
const hamburgerBtn  = document.getElementById('hamburgerBtn');
const drawerMenu    = document.getElementById('drawerMenu');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose   = document.getElementById('drawerClose');

// Nav bg on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 80;
  nav.style.backgroundColor = scrolled ? 'rgba(247, 242, 233, 0.92)' : 'transparent';
  nav.style.backdropFilter   = scrolled ? 'blur(12px)' : 'none';
  nav.style.boxShadow        = scrolled ? '0 1px 0 rgba(180,155,120,0.18)' : 'none';
  // Logo colour: white on hero, dark after
  const logo = nav.querySelector('.nav-logo');
  if (logo) logo.style.color = scrolled ? 'var(--brown)' : 'var(--warm-white)';
  // Hamburger lines colour
  nav.querySelectorAll('.hamburger span').forEach(s => {
    s.style.background = scrolled ? 'var(--brown)' : 'var(--warm-white)';
  });
}, { passive: true });

function openDrawer() {
  drawerMenu.classList.add('open');
  drawerOverlay.classList.add('open');
  hamburgerBtn.classList.add('open');
  hamburgerBtn.setAttribute('aria-expanded', 'true');
  drawerMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  drawerMenu.classList.remove('open');
  drawerOverlay.classList.remove('open');
  hamburgerBtn.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
  drawerMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (hamburgerBtn) hamburgerBtn.addEventListener('click', openDrawer);
if (drawerClose)  drawerClose.addEventListener('click', closeDrawer);
if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

// Close on drawer link click
document.querySelectorAll('.drawer-link').forEach(link => {
  link.addEventListener('click', () => closeDrawer());
});

// Escape key closes drawer
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDrawer();
});

/* =========================================
   CARD TILT — mouse-follow on hover
   =========================================  */
document.querySelectorAll('.story-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / rect.width;
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / rect.height;
    card.style.transform = `translateY(-6px) rotate(${dx * 1.6}deg) rotateX(${-dy * 2}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* =========================================
   HERO ORNAMENT parallax
   ========================================= */
const heroOrnament = document.querySelector('.hero-ornament');
if (heroOrnament) {
  window.addEventListener('scroll', () => {
    heroOrnament.style.transform = `translateY(${window.scrollY * 0.12}px)`;
  }, { passive: true });
}

/* =========================================
   GALLERY REVEAL — staggered
   ========================================= */
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('revealed'), i * 100);
        galleryObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
galleryItems.forEach((item) => { item.classList.add('reveal'); galleryObserver.observe(item); });

/* =========================================
   SMOOTH ANCHOR SCROLLING
   ========================================= */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* =========================================
   PAGE TRANSITION — navigate away
   ========================================= */
function navigateTo(url) {
  document.body.classList.add('page-exit');
  setTimeout(() => { window.location.href = url; }, 420);
}

// Intercept story card clicks for transition
document.querySelectorAll('.story-card[href]').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(card.getAttribute('href'));
  });
});

/* =========================================
   STORIES SLIDER
   ========================================= */
(function () {
  const track  = document.getElementById('sliderTrack');
  const dots   = document.querySelectorAll('#sliderDots .dot');
  if (!track) return;

  const CARD_GAP   = 32; // 2rem gap
  let currentIdx   = 0;
  let offset       = 0;   // current translate X in px
  let isDragging   = false;
  let startX       = 0;
  let startOffset  = 0;

  function getCardWidth() {
    const card = track.querySelector('.story-card');
    return card ? card.offsetWidth + CARD_GAP : 300;
  }

  function snapTo(idx, animate = true) {
    const cards  = track.querySelectorAll('.story-card');
    const maxIdx = cards.length - 1;
    // wrap around
    if (idx < 0) idx = maxIdx;
    if (idx > maxIdx) idx = 0;
    currentIdx = idx;

    const cw = getCardWidth();
    offset = -idx * cw;

    track.style.transition = animate ? 'transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)' : 'none';
    track.style.transform  = `translateX(${offset}px)`;

    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  // Dot click
  dots.forEach(dot => {
    dot.addEventListener('click', () => snapTo(+dot.dataset.idx));
  });

  /* ---- Mouse drag ---- */
  track.addEventListener('mousedown', e => {
    isDragging  = true;
    startX      = e.clientX;
    startOffset = offset;
    track.classList.add('is-dragging');
    track.style.transition = 'none';
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    offset = startOffset + dx;
    track.style.transform = `translateX(${offset}px)`;
  });

  window.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('is-dragging');

    const dx      = e.clientX - startX;
    const cw      = getCardWidth();
    const swipeThreshold = cw * 0.18;

    if (Math.abs(dx) < 5) {
      // treat as click — let the link fire (pointer-events restored)
      snapTo(currentIdx);
      return;
    }

    if (dx < -swipeThreshold) snapTo(currentIdx + 1);
    else if (dx > swipeThreshold) snapTo(currentIdx - 1);
    else snapTo(currentIdx);
  });

  /* ---- Touch swipe ---- */
  let touchStartX = 0;
  let touchOffset = 0;

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchOffset = offset;
    track.style.transition = 'none';
  }, { passive: true });

  track.addEventListener('touchmove', e => {
    const dx = e.touches[0].clientX - touchStartX;
    offset = touchOffset + dx;
    track.style.transform = `translateX(${offset}px)`;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const cw = getCardWidth();
    if (dx < -(cw * 0.18)) snapTo(currentIdx + 1);
    else if (dx > (cw * 0.18)) snapTo(currentIdx - 1);
    else snapTo(currentIdx);
  });

  /* ---- Keyboard navigation when focused in slider ---- */
  track.setAttribute('tabindex', '0');
  track.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') snapTo(currentIdx + 1);
    if (e.key === 'ArrowLeft')  snapTo(currentIdx - 1);
  });

  // Init
  snapTo(0, false);
})();

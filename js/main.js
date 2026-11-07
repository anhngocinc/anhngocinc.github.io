/**
 * ANHNGOCINC - PORTFOLIO & BLOG
 * Bento Grid Controller & Interactive Effects
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. SMOOTH SCROLL FOR IN-PAGE ANCHORS
  // -------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
          // Subtle highlight pulse effect
          targetElement.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
          targetElement.style.borderColor = 'var(--neon-blue)';
          targetElement.style.boxShadow = '0 0 30px rgba(56, 189, 248, 0.4)';
          setTimeout(() => {
            targetElement.style.borderColor = '';
            targetElement.style.boxShadow = '';
          }, 1800);
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 2. MOUSE HOVER AMBIENT GLOW ON BENTO CARDS
  // -------------------------------------------------------------------------
  const bentoCards = document.querySelectorAll('.bento-card, .video-feed-card, .sc-embed-card, .gallery-card-3x3');
  bentoCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // -------------------------------------------------------------------------
  // 3. FILE PROTOCOL WARNING (YOUTUBE EMBED SECURITY NOTIFICATION)
  // -------------------------------------------------------------------------
  if (window.location.protocol === 'file:') {
    const warningBox = document.getElementById('file-protocol-warning');
    if (warningBox) {
      warningBox.style.display = 'flex';
    }
  }
});

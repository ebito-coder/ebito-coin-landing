const SITE_CONFIG = {
  telegramUrl: "https://t.me/Ebitocoinbot",
  xUrl: "",
  instagramUrl: "",
  youtubeUrl: ""
};

const assignLinkTargets = () => {
  const telegramLinks = document.querySelectorAll('[data-cta="telegram"]');
  telegramLinks.forEach((link) => {
    link.href = SITE_CONFIG.telegramUrl;
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noreferrer noopener');
  });

  const xLink = document.querySelector('[data-social="x"]');
  if (xLink) {
    xLink.href = SITE_CONFIG.xUrl || '#';
    if (!SITE_CONFIG.xUrl) xLink.setAttribute('aria-disabled', 'true');
  }

  const instagramLink = document.querySelector('[data-social="instagram"]');
  if (instagramLink) {
    instagramLink.href = SITE_CONFIG.instagramUrl || '#';
    if (!SITE_CONFIG.instagramUrl) instagramLink.setAttribute('aria-disabled', 'true');
  }

  const youtubeLink = document.querySelector('[data-social="youtube"]');
  if (youtubeLink) {
    youtubeLink.href = SITE_CONFIG.youtubeUrl || '#';
    if (!SITE_CONFIG.youtubeUrl) youtubeLink.setAttribute('aria-disabled', 'true');
  }
};

const createParticles = () => {
  const particleLayer = document.querySelector('.particles');
  if (!particleLayer) return;

  const particleCount = 18;
  for (let i = 0; i < particleCount; i += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${(Math.random() * 10).toFixed(2)}s`;
    particle.style.animationDuration = `${(Math.random() * 9 + 8).toFixed(2)}s`;
    particleLayer.appendChild(particle);
  }
};

const revealObserver = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
      element.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach((element) => observer.observe(element));
};

assignLinkTargets();
createParticles();
revealObserver();

const siteContent = document.getElementById('siteContent');
const navbarLinks = document.getElementById('navbarLinks');
const mobileNavLinks = document.getElementById('mobileNavLinks');
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const backToTop = document.getElementById('backToTop');
const scrollProgress = document.getElementById('scrollProgress');
const preloader = document.getElementById('preloader');
const brandTitle = document.getElementById('brandTitle');
let activeSection = 'hero';

function createElement(tag, className = '', attrs = {}) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'text') element.textContent = value;
    else if (key === 'html') element.innerHTML = value;
    else element.setAttribute(key, value);
  });
  return element;
}

function buildNav() {
  if (brandTitle) brandTitle.textContent = siteData.brand.name;
  document.title = `${siteData.brand.name} | ${siteData.brand.role}`;
  siteData.brand.navItems.forEach(item => {
    const link = createElement('a', '', { href: `#${item.section}`, text: item.label });
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
    navbarLinks.appendChild(link);
    const mobileLink = createElement('a', '', { href: `#${item.section}`, text: item.label });
    mobileLink.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
    mobileNavLinks.appendChild(mobileLink);
  });
}

function buildHero() {
  const section = createElement('section', 'hero', { id: 'hero' });
  const left = createElement('div', 'hero__left');
  const eyebrow = createElement('div', 'hero__eyebrow');
  eyebrow.innerHTML = `<span></span>${siteData.hero.eyebrow}`;
  const title = createElement('h2', 'hero__title');
  if (siteData.hero.titleLines) {
    siteData.hero.titleLines.forEach(line => {
      title.appendChild(createElement('span', '', { text: line }));
    });
  } else {
    title.textContent = siteData.hero.title;
  }
  if (siteData.hero.greeting) {
    title.appendChild(createElement('span', 'hero__greeting', { text: siteData.hero.greeting }));
  }
  const typing = createElement('div', 'hero__typing');
  typing.innerHTML = `<span class="hero__typing-label">Now loading</span><strong class="hero__typing-text"></strong>`;
  const subtitle = createElement('p', 'hero__subtitle', { text: siteData.hero.subtitle });
  const actions = createElement('div', 'hero__actions');
  const cta = createElement('a', 'hero__cta', { href: '#skills', text: siteData.hero.cta });
  const secondaryCta = createElement('a', 'hero__cta hero__cta--secondary', { href: '#formula', text: siteData.hero.secondaryCta });
  actions.append(cta, secondaryCta);
  const statList = createElement('div', 'hero__stats');
  siteData.hero.stats.forEach(stat => {
    const statCard = createElement('div', 'hero__stat');
    statCard.innerHTML = `<h3>${stat.value}</h3><p>${stat.label}</p>`;
    statList.appendChild(statCard);
  });

  const lines = createElement('div', 'hero__hero-lines');
  lines.innerHTML = `<p>${siteData.hero.kicker}</p>`;
  left.append(eyebrow, title, typing, subtitle, actions, lines, statList);

  const right = createElement('div', 'hero__image-shell');
  const imageCard = createElement('div', 'hero__image-card');
  const image = createElement('img', 'hero__image', { src: siteData.hero.image, alt: 'Hero image' });
  image.onerror = () => imageCard.classList.add('placeholder');
  imageCard.appendChild(image);

  const racingLines = createElement('div', 'hero__racing-lines');
  for (let i = 0; i < 5; i++) {
    const line = createElement('span');
    line.style.top = `${10 + i * 18}%`;
    line.style.animationDuration = `${16 + i * 4}s`;
    line.style.left = `${i * 12}%`;
    racingLines.appendChild(line);
  }

  const particles = createElement('div', 'hero__particles');
  for (let i = 0; i < 6; i++) {
    const particle = createElement('span');
    particle.style.left = `${10 + i * 14}%`;
    particle.style.top = `${20 + i * 12}%`;
    particle.style.animationDelay = `${i * 0.9}s`;
    particle.style.animationDuration = `${10 + i * 4}s`;
    particles.appendChild(particle);
  }

  right.append(imageCard, racingLines, particles);
  section.append(left, right);
  siteContent.appendChild(section);
}

function startTyping() {
  const textTarget = document.querySelector('.hero__typing-text');
  if (!textTarget) return;
  const phrases = siteData.hero.typingPhrases || [];
  if (!phrases.length) return;
  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeFrame() {
    const phrase = phrases[phraseIndex];
    textTarget.textContent = phrase.slice(0, charIndex);

    if (!deleting && charIndex < phrase.length) {
      charIndex += 1;
      setTimeout(typeFrame, 70);
      return;
    }

    if (!deleting && charIndex === phrase.length) {
      deleting = true;
      setTimeout(typeFrame, 1100);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      setTimeout(typeFrame, 34);
      return;
    }

    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeFrame, 180);
  }

  typeFrame();
}

function buildSectionIntro(title, subtitle) {
  const wrapper = createElement('div', 'section-intro');
  const heading = createElement('h2', 'section-title', { text: title });
  const paragraph = createElement('p', 'section-subtitle', { text: subtitle });
  wrapper.append(heading, paragraph);
  return wrapper;
}

function buildAbout() {
  siteContent.appendChild(buildSectionIntro(siteData.sectionIntros.about.title, siteData.sectionIntros.about.subtitle));
  const section = createElement('section', 'about', { id: 'about' });
  const card = createElement('div', 'about__card glass-card');
  const eyebrow = createElement('p', 'about__eyebrow', { text: siteData.about.eyebrow });
  const title = createElement('h2', '', { text: siteData.about.title });
  const description = createElement('p', '', { text: siteData.about.description });
  const timeline = createElement('div', 'timeline');
  siteData.about.timeline.forEach(item => {
    const entry = createElement('div', 'timeline-item');
    entry.innerHTML = `<div><h3>${item.year}</h3></div><div><p>${item.event}</p></div>`;
    timeline.appendChild(entry);
  });
  const stats = createElement('div', 'about__stats');
  siteData.about.highlights.forEach(stat => {
    const statCard = createElement('div', 'stat-card');
    statCard.innerHTML = `<p>${stat.label}</p><h3>${stat.value}</h3>`;
    stats.appendChild(statCard);
  });
  card.append(eyebrow, title, description, timeline, stats);
  const imageShell = createElement('div', 'about__image-shell');
  const imageCard = createElement('div', 'about__image-card');
  const image = createElement('img', 'about__image', { src: siteData.about.image, alt: 'About image' });
  image.onerror = () => imageCard.classList.add('placeholder');
  imageCard.appendChild(image);
  imageShell.appendChild(imageCard);
  section.append(card, imageShell);
  siteContent.appendChild(section);
}

function buildSkills() {
  siteContent.appendChild(buildSectionIntro(siteData.sectionIntros.skills.title, siteData.sectionIntros.skills.subtitle));
  const section = createElement('section', 'skills', { id: 'skills' });
  const grid = createElement('div', 'skills-grid');
  siteData.skills.forEach(skill => {
    const card = createElement('div', 'skill-card');
    card.innerHTML = `
      <div class="skill-card__icon">${skill.icon}</div>
      <h3>${skill.title}</h3>
      <p>${skill.description}</p>
      <div class="skill-progress"><span style="width: 0%;" data-level="${skill.level}"></span></div>
    `;
    grid.appendChild(card);
  });
  section.appendChild(grid);
  siteContent.appendChild(section);
}

function buildAchievements() {
  siteContent.appendChild(buildSectionIntro(siteData.sectionIntros.achievements.title, siteData.sectionIntros.achievements.subtitle));
  const section = createElement('section', 'achievements', { id: 'achievements' });
  const list = createElement('div', 'timeline-list');
  siteData.achievements.items.forEach(item => {
    const card = createElement('div', 'timeline-card');
    const value = Number(item.value) || 0;
    card.innerHTML = `
      <div>
        <div class="timeline-card__tag">${item.label}</div>
        <h3 class="timeline-card__title"><span class="count-up" data-count="${value}">0</span>%</h3>
      </div>
      <div class="timeline-card__text telemetry-inline">
        <div class="bar-shell"><div class="bar-fill" style="width: 0%" data-level="${value}"></div></div>
      </div>
    `;
    list.appendChild(card);
  });
  section.appendChild(list);
  siteContent.appendChild(section);
}

function buildFormula() {
  siteContent.appendChild(buildSectionIntro(siteData.sectionIntros.formula.title, siteData.sectionIntros.formula.subtitle));
  const section = createElement('section', 'formula', { id: 'formula' });
  const hero = createElement('div', 'formula__hero');
  const left = createElement('div');
  left.innerHTML = `<h3>${siteData.formula.hero.title}</h3><p>${siteData.formula.hero.subtitle}</p>`;
  const stats = createElement('div', 'formula__hero-stats');
  siteData.formula.hero.stats.forEach(stat => {
    const item = createElement('div', 'stats-card');
    item.innerHTML = `<p class="stat-value">${stat.value}</p><p>${stat.label}</p>`;
    stats.appendChild(item);
  });
  hero.append(left, stats);

  if (siteData.formula.image) {
    const imageWrap = createElement('div', 'formula__image-hud');
    const image = createElement('img', '', { src: siteData.formula.image, alt: siteData.formula.hero.title, loading: 'lazy' });
    imageWrap.appendChild(image);
    hero.appendChild(imageWrap);
  }

  const cards = createElement('div', 'stats-grid');
  siteData.formula.cards.forEach(cardData => {
    const card = createElement('div', 'stats-card');
    card.innerHTML = `<h3>${cardData.title}</h3><p class="headline">${cardData.value}</p><p>${cardData.description}</p>`;
    cards.appendChild(card);
  });

  const telemetry = createElement('div', 'telemetry-card');
  telemetry.innerHTML = `<h4>Personality Telemetry</h4><div class="telemetry-track"></div>`;
  const track = telemetry.querySelector('.telemetry-track');
  (siteData.formula.telemetry || []).forEach(stat => {
    const value = Number(stat.value) || 0;
    const bar = createElement('div', 'telemetry-bar');
    bar.innerHTML = `<span>${stat.label}<strong>${value}%</strong></span><div class="bar-shell"><div class="bar-fill" style="width: 0%" data-level="${value}"></div></div>`;
    track.appendChild(bar);
  });

  section.append(hero, cards, telemetry);
  siteContent.appendChild(section);
}

function buildCricket() {
  siteContent.appendChild(buildSectionIntro(siteData.sectionIntros.cricket.title, siteData.sectionIntros.cricket.subtitle));
  const section = createElement('section', 'cricket', { id: 'cricket' });
  const hero = createElement('div', 'cricket__hero');
  const left = createElement('div');
  left.innerHTML = `<h3>${siteData.cricket.hero.title}</h3><p>${siteData.cricket.hero.subtitle}</p>`;
  const stats = createElement('div', 'cricket__hero-stats');
  siteData.cricket.hero.stats.forEach(stat => {
    const item = createElement('div', 'stats-card');
    item.innerHTML = `<p class="stat-value">${stat.value}</p><p>${stat.label}</p>`;
    stats.appendChild(item);
  });
  hero.append(left, stats);

  const cards = createElement('div', 'stats-grid');
  siteData.cricket.cards.forEach(cardData => {
    const card = createElement('div', 'stats-card');
    card.innerHTML = `<h3>${cardData.title}</h3><p class="headline">${cardData.value}</p><p>${cardData.description}</p>`;
    cards.appendChild(card);
  });

  section.append(hero, cards);
  siteContent.appendChild(section);
}

function buildHobbies() {
  siteContent.appendChild(buildSectionIntro(siteData.sectionIntros.hobbies.title, siteData.sectionIntros.hobbies.subtitle));
  const section = createElement('section', 'hobbies', { id: 'hobbies' });
  const grid = createElement('div', 'hobbies-grid');
  siteData.hobbies.forEach(item => {
    const card = createElement('div', 'hobby-card');
    card.innerHTML = `
      <div class="hobby-card__tag">${item.tag}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    grid.appendChild(card);
  });
  section.appendChild(grid);
  siteContent.appendChild(section);
}

function buildGallery() {
  siteContent.appendChild(buildSectionIntro(siteData.sectionIntros.gallery.title, siteData.sectionIntros.gallery.subtitle));
  const section = createElement('section', 'gallery', { id: 'gallery' });
  const grid = createElement('div', 'gallery-grid');
  siteData.gallery.forEach((item, index) => {
    const card = createElement('button', 'gallery-item');
    card.type = 'button';
    card.setAttribute('data-index', String(index));
    if (item.image) {
      card.innerHTML = `<img src="${item.image}" alt="${item.label}" loading="lazy" onerror="this.style.display='none'"/>`;
    } else {
      card.style.background = 'linear-gradient(135deg, rgba(30,94,255,0.24), rgba(0,183,255,0.12))';
    }
    card.innerHTML += `<div class="gallery-item__label">${item.label}</div>`;
    grid.appendChild(card);
  });
  section.appendChild(grid);

  const lightbox = createElement('div', 'lightbox', { id: 'lightbox' });
  const close = createElement('button', 'lightbox__close', { type: 'button', html: '&times;' });
  const lightboxImg = createElement('img', 'lightbox__img', { alt: 'Gallery item' });
  const lightboxPlaceholder = createElement('div', 'lightbox__placeholder', { text: 'Preview unavailable - add gallery images in content.js' });
  close.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.classList.remove('open');
  });
  lightbox.append(close, lightboxImg, lightboxPlaceholder);
  section.appendChild(lightbox);

  grid.querySelectorAll('.gallery-item').forEach(button => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      const item = siteData.gallery[index];
      if (item.image) {
        lightboxImg.src = item.image;
        lightboxImg.alt = item.label;
        lightboxImg.style.display = 'block';
        lightboxPlaceholder.style.display = 'none';
      } else {
        lightboxImg.style.display = 'none';
        lightboxPlaceholder.style.display = 'grid';
      }
      lightbox.classList.add('open');
    });
  });

  siteContent.appendChild(section);
}

function buildContact() {
  siteContent.appendChild(buildSectionIntro(siteData.sectionIntros.contact.title, siteData.sectionIntros.contact.subtitle));
  const section = createElement('section', 'contact', { id: 'contact' });
  const card = createElement('div', 'contact-card glass-card');
  card.innerHTML = `<h2>${siteData.contact.title}</h2><p>${siteData.contact.subtitle}</p>`;
  const iconGrid = createElement('div', 'decorative-socials');
  const icons = siteData.socials.length ? siteData.socials : siteData.contact.icons;
  icons.forEach(item => {
    const icon = siteData.socials.length
      ? createElement('a', 'decorative-icon', { href: item.url, target: '_blank', rel: 'noreferrer', text: item.icon || item.label })
      : createElement('span', 'decorative-icon', { text: item.value || item.label });
    icon.setAttribute('aria-label', item.label);
    iconGrid.appendChild(icon);
  });
  card.appendChild(iconGrid);

  const imageShell = createElement('div', 'contact-image-shell');
  const imageCard = createElement('div', 'contact-image-card');
  const image = createElement('img', 'contact-image', { src: siteData.contact.image, alt: 'Contact image' });
  image.onerror = () => imageCard.classList.add('placeholder');
  imageCard.appendChild(image);
  imageShell.appendChild(imageCard);
  section.append(card, imageShell);
  siteContent.appendChild(section);
}

function buildFooter() {
  const section = createElement('section', 'footer');
  const left = createElement('div', 'footer-card');
  left.innerHTML = `
    <p class="footer-card__eyebrow">${siteData.footer.eyebrow || ''}</p>
    <h3>${siteData.footer.name || siteData.footer.brand}</h3>
    <p class="footer-card__brand">${siteData.footer.note || siteData.footer.brand || ''}</p>
  `;
  const links = createElement('div', 'footer-details');
  (siteData.footer.links || []).forEach(item => {
    const link = createElement('a', '', { href: item.url, target: '_blank', rel: 'noreferrer', text: item.label });
    links.appendChild(link);
  });
  if ((siteData.footer.links || []).length) left.appendChild(links);
  const right = createElement('div', 'footer-image-card');
  const image = createElement('img', 'footer-image', { src: siteData.footer.image, alt: 'Footer image' });
  image.onerror = () => right.classList.add('placeholder');
  right.appendChild(image);
  section.append(left, right);
  siteContent.appendChild(section);
}

function isBirthdayInTimezone(config) {
  if (!config) return false;
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: config.timezone || 'Asia/Kolkata',
    month: 'numeric',
    day: 'numeric'
  });
  const parts = formatter.formatToParts(new Date());
  const month = Number(parts.find(part => part.type === 'month')?.value);
  const day = Number(parts.find(part => part.type === 'day')?.value);
  return month === Number(config.month) && day === Number(config.day);
}

function buildBirthdayPopup() {
  const birthday = siteData.birthday;
  if (!isBirthdayInTimezone(birthday)) return;

  const modal = createElement('div', 'birthday-modal', {
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'birthdayTitle'
  });
  const card = createElement('div', 'birthday-modal__card');
  card.innerHTML = `
    <button class="birthday-modal__close" type="button" aria-label="Close birthday note">&times;</button>
    <p class="birthday-modal__eyebrow">${birthday.eyebrow}</p>
    <h2 id="birthdayTitle">${birthday.title}</h2>
    <p class="birthday-modal__message">${birthday.message}</p>
    <p class="birthday-modal__signature">${birthday.signature}</p>
  `;
  modal.appendChild(card);
  document.body.appendChild(modal);

  const closeModal = () => {
    modal.classList.remove('open');
    setTimeout(() => modal.remove(), 300);
  };

  card.querySelector('.birthday-modal__close').addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  requestAnimationFrame(() => modal.classList.add('open'));
}

function setActiveLink() {
  const sections = document.querySelectorAll('main section[id]');
  const scrollPosition = window.scrollY + window.innerHeight / 3;
  sections.forEach(section => {
    const offset = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.id;
    const link = document.querySelectorAll(`a[href="#${id}"]`);
    if (scrollPosition >= offset && scrollPosition < offset + height) {
      activeSection = id;
      link.forEach(item => item.classList.add('active'));
    } else {
      link.forEach(item => item.classList.remove('active'));
    }
  });
}

function updateScrollProgress() {
  const total = document.body.scrollHeight - window.innerHeight;
  const percent = total ? (window.scrollY / total) * 100 : 0;
  scrollProgress.style.width = `${percent}%`;
  backToTop.classList.toggle('visible', window.scrollY > 600);
}

function animateSkills() {
  document.querySelectorAll('.skill-progress span').forEach(span => {
    const level = span.dataset.level;
    setTimeout(() => {
      span.style.width = `${level}%`;
    }, 450);
  });
}

function animateTelemetry() {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    const rawLevel = bar.dataset.level || '90';
    const level = String(rawLevel).includes('%') ? rawLevel : `${rawLevel}%`;
    setTimeout(() => {
      bar.style.width = level;
    }, 700);
  });
}

function animateCounters() {
  document.querySelectorAll('.count-up').forEach(counter => {
    const target = Number(counter.dataset.count) || 0;
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 42));
    const interval = setInterval(() => {
      current = Math.min(target, current + increment);
      counter.textContent = String(current);
      if (current >= target) clearInterval(interval);
    }, 24);
  });
}

function initMobileMenu() {
  mobileToggle.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
}

function initBackToTop() {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function createCursor() {
  const cursor = createElement('div', 'cursor');
  document.body.appendChild(cursor);
  window.addEventListener('mousemove', event => {
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });
}

function initSectionAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('section, .hero__image-card, .about__card, .skill-card, .timeline-card, .hobby-card, .stats-card, .gallery-item, .contact-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

function initParallax() {
  const heroImage = document.querySelector('.hero__image-card');
  const aboutImage = document.querySelector('.about__image-card');
  const hero = document.querySelector('.hero');
  window.addEventListener('mousemove', event => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = (event.clientY / window.innerHeight) * 2 - 1;
    if (hero) {
      hero.style.setProperty('--parallax-x', `${x * 18}px`);
      hero.style.setProperty('--parallax-y', `${y * 18}px`);
      hero.style.setProperty('--mouse-x', `${event.clientX}px`);
      hero.style.setProperty('--mouse-y', `${event.clientY}px`);
    }
    if (heroImage) heroImage.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
    if (aboutImage) aboutImage.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0)`;
  });
}

function initPremiumInteractions() {
  const heroLine = document.querySelector('.hero__hero-lines p');
  if (heroLine) heroLine.textContent = siteData.hero.kicker;
  const lightboxClose = document.querySelector('.lightbox__close');
  if (lightboxClose) lightboxClose.innerHTML = '&times;';

  const cards = document.querySelectorAll('.glass-card, .skill-card, .timeline-card, .stats-card, .hobby-card, .gallery-item, .contact-card, .footer-card, .hero__stat');
  cards.forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      card.style.setProperty('--mx', `${localX}px`);
      card.style.setProperty('--my', `${localY}px`);
      card.style.setProperty('--tilt-x', `${((localY / rect.height) - 0.5) * -4}deg`);
      card.style.setProperty('--tilt-y', `${((localX / rect.width) - 0.5) * 4}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
    });
  });

  document.querySelectorAll('.hero__cta, .submit-btn, .action-btn, .back-to-top, .mobile-toggle, .theme-option').forEach(button => {
    button.addEventListener('click', event => {
      const ripple = createElement('span', 'button-ripple');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      button.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });
}

function init() {
  buildNav();
  buildHero();
  startTyping();
  buildAbout();
  buildSkills();
  buildAchievements();
  buildFormula();
  buildCricket();
  buildHobbies();
  buildGallery();
  buildContact();
  buildFooter();
  buildBirthdayPopup();
  animateSkills();
  animateTelemetry();
  animateCounters();
  initMobileMenu();
  initBackToTop();
  createCursor();
  initSectionAnimations();
  initParallax();
  initPremiumInteractions();
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    setActiveLink();
  });
  setActiveLink();
  updateScrollProgress();
}

window.addEventListener('DOMContentLoaded', init);

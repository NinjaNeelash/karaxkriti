const themePanel = document.getElementById('themePanel');
const themeOptions = document.getElementById('themeOptions');
const themePanelToggle = document.getElementById('themePanelToggle');
const themePanelClose = document.getElementById('themePanelClose');

function applyTheme(theme) {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  localStorage.setItem('krittikaTheme', theme.id);
}

function buildThemeOptions() {
  siteData.themes.forEach(theme => {
    const option = document.createElement('button');
    option.className = 'theme-option';
    option.type = 'button';
    option.innerHTML = `
      <span class="theme-option__label">${theme.label}</span>
      <span class="theme-option__accent">
        <span class="theme-chip" style="background:${theme.vars['--accent']}"></span>
        <span class="theme-chip" style="background:${theme.vars['--accent-2']}"></span>
        <span class="theme-chip" style="background:${theme.vars['--highlight']}"></span>
      </span>
    `;

    option.addEventListener('click', () => applyTheme(theme));
    themeOptions.appendChild(option);
  });
}

function initTheme() {
  buildThemeOptions();
  const stored = localStorage.getItem('krittikaTheme');
  const theme = siteData.themes.find(item => item.id === stored) || siteData.themes[0];
  applyTheme(theme);
}

themePanelToggle.addEventListener('click', () => {
  themePanel.classList.toggle('open');
});

themePanelClose.addEventListener('click', () => {
  themePanel.classList.remove('open');
});

window.addEventListener('click', event => {
  if (!themePanel.contains(event.target) && !themePanelToggle.contains(event.target)) {
    themePanel.classList.remove('open');
  }
});

window.addEventListener('DOMContentLoaded', initTheme);

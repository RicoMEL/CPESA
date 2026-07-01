
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  if (!button || !menu) return;

  button.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    button.textContent = isOpen ? '×' : '☰';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = '☰';
    });
  });
});


document.addEventListener('DOMContentLoaded', function(){
  const button = document.getElementById('menuButton');
  const menu = document.getElementById('mainMenu');
  if(!button || !menu) return;
  button.addEventListener('click', function(){
    const opened = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', opened ? 'true' : 'false');
    button.textContent = opened ? '×' : '☰';
  });
});


document.addEventListener('DOMContentLoaded', function(){
  const button = document.getElementById('menuButton');
  const menu = document.getElementById('mainMenu');
  if(!button || !menu) return;

  button.addEventListener('click', function(){
    const opened = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', opened ? 'true' : 'false');
    button.textContent = opened ? '×' : '☰';
  });

  menu.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      menu.classList.remove('open');
      button.setAttribute('aria-expanded','false');
      button.textContent = '☰';
    });
  });
});

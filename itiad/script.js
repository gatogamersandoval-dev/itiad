const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('#nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('.more').forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.area-card');
    const isOpen = card.classList.toggle('open');
    button.textContent = isOpen ? 'Ver menos⌃' : 'Ver más⌄';
  });
});

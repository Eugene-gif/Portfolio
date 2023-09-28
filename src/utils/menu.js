const btn = document.querySelector('.header__menu-btn input');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav');

export function toggleMenu() {
  overlay.classList.toggle('_show');
  nav.classList.toggle('_show');
  document.body.classList.toggle('_lock');
}

export function closeMenu() {
  btn.checked = false;
  overlay.classList.remove('_show');
  nav.classList.remove('_show');
  document.body.classList.remove('_lock');
}

btn.addEventListener('input', toggleMenu);
overlay.addEventListener('click', closeMenu);

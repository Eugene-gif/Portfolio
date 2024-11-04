const btn = safeQuerySelector<HTMLInputElement>('.header__menu-btn input');
const overlay = safeQuerySelector<HTMLDivElement>('.overlay');
const nav = safeQuerySelector<HTMLDivElement>('.nav');

function safeQuerySelector<T extends Element> (selector: string) {
  const foundResult = document.querySelector<T>(selector);

  if (!foundResult) {
    throw Error('Ошибка ноды!');
  }

  return foundResult;
}

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

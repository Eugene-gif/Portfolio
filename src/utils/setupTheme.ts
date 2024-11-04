export function setupTheme() {
  const switcher = document.querySelector<HTMLInputElement>('.theme-btn #toggle');

  if (!switcher) {
    throw Error('Нет ноды!');
  }

  switcher.addEventListener('input', switchTheme);
  switcher.checked = true;

  if (localStorage.getItem('theme') === 'dark') {
    switcher.checked = false;
    document.body.classList.add('dark');
  }

  function switchTheme() {
    if (!switcher) {
      throw Error('Нет ноды!');
    }

    if (!switcher.checked) {
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  }
}
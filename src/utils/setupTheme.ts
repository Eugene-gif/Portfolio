export function setupTheme() {
  const switcher = document.querySelector<HTMLInputElement>('[data-theme]');

  if (!switcher) {
    throw Error('Нет ноды!');
  }

  if (localStorage.getItem('theme') === 'dark') {
    switcher.dataset.theme = 'dark';
    document.body.classList.add('dark');
  }

  function setTheme() {
    if (!switcher) {
      throw Error('Нет ноды!');
    }

    const currentTheme = localStorage.getItem('theme'); // 'light' | 'dark' | null
    if (currentTheme === null || currentTheme === 'light') {
      switcher.dataset.theme = 'dark';
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    if (currentTheme === 'dark') {
      switcher.dataset.theme = 'light';
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  switcher.addEventListener('click', setTheme);
}
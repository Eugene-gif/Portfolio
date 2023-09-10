export function setupTheme() {
  const switcher = document.querySelector('.theme-btn #toggle');

  switcher.addEventListener('input', switchTheme);
  switcher.checked = true;

  if (localStorage.getItem('theme') === 'dark') {
    switcher.checked = false;
    document.body.classList.add('dark');
  }

  function switchTheme() {
    if (!switcher.checked) {
      localStorage.setItem('theme', 'dark')
      document.body.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark');
    }
  }
}
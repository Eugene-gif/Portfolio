export function loadPage(links, pages, setupTheme) {
  let mask = document.querySelector('.mask');
  let currentLink = document.querySelector('.nav__item._active');
  let currentPage = document.querySelector('._page._show');
  let hash = window.location.hash.slice(1);

  setupTheme();
  mask.classList.add('hide');

  for (let i = 0; i < links.length; i++) {
    let link = links[i].closest('.nav__item');
    let page = pages[i];

    if (hash === page.id) {
      currentPage.classList.remove('_show');
      page.classList.add('_show');
      currentLink.classList.remove('_active');
      link.classList.add('_active');
      localStorage.setItem('page', page.id);
    } else if (!hash) {
      window.location.hash = '#home';
      localStorage.setItem('page', 'home');
    }
  }

  setTimeout(() => {
    mask.remove();
  }, 500);
}

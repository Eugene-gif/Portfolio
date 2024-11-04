export function loadPage(links : NodeListOf<HTMLAnchorElement>, pages : NodeListOf<HTMLDivElement>, setupTheme : () => void) {
  let mask = document.querySelector<HTMLDivElement>('.mask')!;
  let currentLink = document.querySelector<HTMLAnchorElement>('.nav__item._active')!;
  let currentPage = document.querySelector<HTMLDivElement>('._page._show')!;
  let hash = window.location.hash.slice(1);

  setupTheme();
  mask.classList.add('hide');

  for (let i = 0; i < links.length; i++) {
    let link = links[i].closest('.nav__item');
    if (!link) throw Error('Ошибка типа link!');
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

export function switchPage(link: HTMLAnchorElement, page: HTMLDivElement, menuClose: () => void) {

  link.addEventListener('click', (el) => {
    let activePage = document.querySelector<HTMLDivElement>('._show._page');
    let activeLink = document.querySelector<HTMLDivElement>('.nav__item._active');
    let target = el.target as Element;
    let currentLink = target.closest('.nav__item');

    if (!activeLink || !activePage || !currentLink) {
      throw Error('Нет ноды!');
    }

    activePage.classList.remove('_show');
    page.classList.add('_show');
    activeLink.classList.remove('_active');
    currentLink.classList.add('_active');
    localStorage.setItem('page', page.id);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 30);
    menuClose();
  })
}
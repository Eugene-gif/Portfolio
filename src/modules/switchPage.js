export function switchPage(link, page, menuClose) {

  link.addEventListener('click', (el) => {
    let activePage = document.querySelector('._show._page');
    let activeLink = document.querySelector('.nav__item._active');
    let currentLink = el.target.closest('.nav__item');

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
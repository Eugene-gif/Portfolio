const mask = document.querySelector<HTMLDivElement>('.mask');
// Ссылки в меню
const links = document.querySelectorAll<HTMLAnchorElement>('.nav__item a');
// Существующие страницы
const pages = document.querySelectorAll<HTMLDivElement>('._page');
// Кнопка перейти в работы
const followProjects = document.querySelector<HTMLAnchorElement>('.home__btn');
// Кнопка перейти в контакты
const followContacts = document.querySelector<HTMLAnchorElement>('.catalog__btn');
// Кнопка на главную
const followHome = document.querySelector<HTMLAnchorElement>('._follow-home');
// Список проектов на Главной
const homeList = document.querySelector<HTMLDivElement>('.home__list');
// Список проектов в Каталоге
const catalogList = document.querySelector<HTMLDivElement>('.catalog__list');

export { mask, links, pages, followProjects, followContacts, followHome, homeList, catalogList };
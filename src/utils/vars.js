const mask = document.querySelector('.mask');
// Ссылки в меню
const links = document.querySelectorAll('.nav__item a');
// Существующие страницы
const pages = document.querySelectorAll('._page');
// Кнопка перейти в работы
const followProjects = document.querySelector('.home__btn');
// Кнопка перейти в контакты
const followContacts = document.querySelector('.catalog__btn');
// Кнопка на главную
const followHome = document.querySelector('._follow-home');
// Список проектов на Главной
const homeList = document.querySelector('.home__list');
// Список проектов в Каталоге
const catalogList = document.querySelector('.catalog__list');

export { mask, links, pages, followProjects, followContacts, followHome, homeList, catalogList };
import { closeMenu } from "@/modules/menu";
import { switchPage } from "@/modules/switchPage";
import { loadPage } from "@/modules/loadPage";
import { setupTheme } from "@/modules/setupTheme";
import {URL} from "@/modules/url.js";

const links = document.querySelectorAll('.nav__item a');
const pages = document.querySelectorAll('._page');
const linkProjects = document.querySelector('.home__btn');
const linkHome = document.querySelector('._link-home');

for (let i = 0; i < links.length; i++) {
  switchPage(links[i], pages[i], closeMenu);
}

linkProjects.addEventListener('click', () => {
  const link = document.querySelector(".nav__item [data-link='catalog']");
  link.click();
});

linkHome.addEventListener('click', () => {
  const link = document.querySelector(".nav__item [data-link='home']");
  link.click();
});

window.addEventListener('load', () => {
  loadPage(links, pages, setupTheme);
});


// _____ ТЕСТ _____
class Project {
  constructor(img, title, text) {
    this.img = img;
    this.title = title;
    this.text = text;
  }
}

// Структура объекта:
/* 
+ Картинка проекта
+ Заголовок - название проекта;
+ Описание проекта
- Ссылка на код
- Ссылка на проект
*/

const arrProjects = [
  new Project('Borodinski.webp', 'Card 1', 'Text card 1'),
  new Project('Cards-gallery.png', 'Card 2', 'Text card 2'),
  new Project('Desire.webp', 'Card 3', 'Text card 3'),
  new Project('Pink.webp', 'Card 4', 'Text card 4'),
  new Project('V-slider.webp', 'Card 5', 'Text card 5')
];

// console.log(arrProjects);

// List
const homeList = document.querySelector('.home__list');
// Фрагмент
const temp = document.querySelector('#card');
let card = temp.content.querySelector('.card');

// Поля карточки проекта
let title = card.querySelector('.card__title');
let description = card.querySelector('.card__description');
let img = card.querySelector('.card__img img');
let linkCode = card.querySelector('.code');
let linkProject = card.querySelector('.project');

for (let i = 0; i < arrProjects.length; i++) {
  title.textContent = `${arrProjects[i].title}`;
  description.textContent = `${arrProjects[i].text}`;
  img.setAttribute('src', URL + arrProjects[i].img);

  card = temp.content.cloneNode(true);
  homeList.append(card);
}

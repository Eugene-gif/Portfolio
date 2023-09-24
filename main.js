import { closeMenu } from "@/modules/menu";
import { switchPage } from "@/modules/switchPage";
import { loadPage } from "@/modules/loadPage";
import { setupTheme } from "@/modules/setupTheme";

const links = document.querySelectorAll('.nav__item a');
const pages = document.querySelectorAll('._page');
const linkProjects = document.querySelector('.home__btn');
const linkHome = document.querySelector('._link-home');

for(let i = 0; i < links.length; i++) {
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

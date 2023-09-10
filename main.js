import { closeMenu } from "@/modules/menu";
import { switchPage } from "@/modules/switchPage";
import { loadPage } from "@/modules/loadPage";
import { setupTheme } from "@/modules/setupTheme";

let links = document.querySelectorAll('.nav__item a');
let pages = document.querySelectorAll('._page');

for(let i = 0; i < links.length; i++) {
  switchPage(links[i], pages[i], closeMenu);
}

window.addEventListener('load', () => {
  loadPage(links, pages, setupTheme);
  // setTimeout(() => {
  //   window.scrollTo(0, 0);
  // }, 30)
});

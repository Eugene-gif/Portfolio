import { cachedProjects, getProjects } from "@/modules/getProjects";
import { closeMenu } from "@/utils/menu";
import { switchPage } from "@/utils/switchPage";
import { loadPage } from "@/modules/loadPage";
import { setupTheme } from "@/utils/setupTheme";
import { mask, links, pages, moreProjects, linkHome, homeList, catalogList } from "@/modules/vars";
import displayProjects  from "@/modules/displayProjects";

displayProjects(cachedProjects.slice(0, 2), homeList);
displayProjects(cachedProjects, catalogList);

window.addEventListener('load', () => {
  loadPage(links, pages, setupTheme);
});

for (let i = 0; i < links.length; i++) {
  switchPage(links[i], pages[i], closeMenu);
}

moreProjects.addEventListener('click', () => {
  const link = document.querySelector(".nav__item [data-link='catalog']");
  link.click();
});

linkHome.addEventListener('click', () => {
  const link = document.querySelector(".nav__item [data-link='home']");
  link.click();
});


if(mask) {
  setTimeout(() => {
    mask.classList.add('hide');
    mask.remove();
  }, 500);
}

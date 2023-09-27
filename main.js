import { cachedProjects, getProjects } from "@/modules/getProjects";
import { closeMenu } from "@/utils/menu";
import { switchPage } from "@/utils/switchPage";
import { loadPage } from "@/modules/loadPage";
import { setupTheme } from "@/utils/setupTheme";
import { mask, links, pages, moreProjects, linkHome, homeList, catalogList } from "@/modules/vars";
import displayProjects from "@/modules/displayProjects";


window.addEventListener('load', async () => {
  await getProjects();
  await displayProjects(cachedProjects.slice(0, 2), homeList);
  await displayProjects(cachedProjects, catalogList);

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

  loadPage(links, pages, setupTheme);
});





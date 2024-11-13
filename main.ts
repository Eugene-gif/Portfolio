import { cachedProjects, getProjects } from "./src/modules/getProjects";
import { closeMenu } from "./src/utils/menu";
import { switchPage } from "./src/utils/switchPage";
import { loadPage } from "./src/modules/loadPage";
import { setupTheme } from "./src/utils/setupTheme";
import { mask, links, pages, followProjects, followContacts, followHome, homeList, catalogList } from "./src/utils/vars";
import displayProjects from "./src/modules/displayProjects";
import { testFun } from "./src/modules/test";

testFun();

window.addEventListener('load', async () => {
  await getProjects();
  await displayProjects(cachedProjects.slice(0, 2), homeList);
  await displayProjects(cachedProjects, catalogList);

  for (let i = 0; i < links.length; i++) {
    switchPage(links[i], pages[i], closeMenu);
  }

  loadPage(links, pages, setupTheme);
  
  if (followHome && followProjects && followContacts) {
    followHome.addEventListener('click', () => {
      const link: HTMLAnchorElement | null = document.querySelector(".nav__item [data-link='home']");
      link!.click();
    });
  
    followProjects.addEventListener('click', () => {
      const link: HTMLAnchorElement | null = document.querySelector(".nav__item [data-link='catalog']");
      link!.click();
    });
  
    followContacts.addEventListener('click', () => {
      const link: HTMLAnchorElement | null = document.querySelector(".nav__item [data-link='contacts']");
      link!.click();
    });
  }
});


import { cachedProjects, getProjects } from "@/modules/getProjects";
import { closeMenu } from "@/utils/menu";
import { switchPage } from "@/utils/switchPage";
import { loadPage } from "@/modules/loadPage";
import { setupTheme } from "@/utils/setupTheme";
import { mask, links, pages, followProjects, followContacts, followHome, homeList, catalogList } from "@/utils/vars";
import displayProjects from "@/modules/displayProjects";
import { testFun } from "@/modules/test";

testFun();

window.addEventListener('load', async () => {
  await getProjects();
  await displayProjects(cachedProjects.slice(0, 2), homeList);
  await displayProjects(cachedProjects, catalogList);

  for (let i = 0; i < links.length; i++) {
    switchPage(links[i], pages[i], closeMenu);
  }

  followHome.addEventListener('click', () => {
    const link = document.querySelector(".nav__item [data-link='home']");
    link.click();
  });

  followProjects.addEventListener('click', () => {
    const link = document.querySelector(".nav__item [data-link='catalog']");
    link.click();
  });

  followContacts.addEventListener('click', () => {
    const link = document.querySelector(".nav__item [data-link='contacts']");
    link.click();
  });

  loadPage(links, pages, setupTheme);
});





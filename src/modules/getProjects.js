import getData from "./getData";
import URL from "@/utils/url.js";

const cachedProjects = [];

const getProjects = async () => {
  const projects = await getData(URL);

  try {
    projects.forEach((el) => cachedProjects.push(el));
  } catch (error) {
    console.error(error.message);
  }
}

export { cachedProjects, getProjects };
import getData from "./getData";
import URL from "../utils/url.js";

interface Project {
  id: number,
  img: string,
  name: string,
  text: string,
  urlCode: string, 
  urlProject: string
}

const cachedProjects : Project[] = [];

const getProjects = async () => {
  const projects = await getData<Project[]>(URL);
  if (!projects) throw Error;

  projects.forEach((el) => cachedProjects.push(el));
}

export { cachedProjects, getProjects };


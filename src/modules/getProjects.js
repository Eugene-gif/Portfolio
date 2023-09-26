import getData from "./getData";

const cachedProjects = [];

const getProjects = async () => {
  const url = 'https://raw.githubusercontent.com/Eugene-gif/data/main/Portfolio/projects.json';
  const projects = await getData(url);

  try {
    projects.forEach((el) => cachedProjects.push(el));
  } catch (error) {
    console.error(error.message);
  }
}

await getProjects();

export { cachedProjects, getProjects };
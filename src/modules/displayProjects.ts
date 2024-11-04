const displayProjects = (arr, boxList) => {
  const temp = document.querySelector<HTMLTemplateElement>('#card');
  if (temp === null) throw Error('temp пуст');
  let card = temp.content.querySelector<HTMLDivElement>('.card')!;

  // Поля карточки проекта
  const name = card.querySelector<HTMLHeadingElement>('.card__title')!;
  const text = card.querySelector<HTMLDivElement>('.card__description')!;
  const img = card.querySelector<HTMLImageElement>('.card__img img')!;
  const urlProject = card.querySelector<HTMLAnchorElement>('.project')!;
  // const urlCode = card.querySelector('.code');

  arr.forEach(el => {
    name.textContent = el.name;
    text.textContent = el.text;
    img.setAttribute('src', el.img);
    // urlCode.setAttribute('href', el.urlCode);
    urlProject.setAttribute('href', el.urlProject);
    
    card = temp.content.cloneNode(true) as HTMLDivElement;
    boxList.append(card);
  });
}

export default displayProjects;
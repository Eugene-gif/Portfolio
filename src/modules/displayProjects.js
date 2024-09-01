const displayProjects = (arr, boxList) => {
  const temp = document.querySelector('#card');
  let card = temp.content.querySelector('.card');

  // Поля карточки проекта
  const name = card.querySelector('.card__title');
  const text = card.querySelector('.card__description');
  const img = card.querySelector('.card__img img');
  const urlProject = card.querySelector('.project');
  // const urlCode = card.querySelector('.code');

  arr.forEach(el => {
    name.textContent = el.name;
    text.textContent = el.text;
    img.setAttribute('src', el.img);
    // urlCode.setAttribute('href', el.urlCode);
    urlProject.setAttribute('href', el.urlProject);
    
    card = temp.content.cloneNode(true);
    boxList.append(card);
  });
}

export default displayProjects;
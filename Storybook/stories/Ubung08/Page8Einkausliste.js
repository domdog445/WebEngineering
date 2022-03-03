export const createPage8Einkaufsliste = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script type="module" src="/U8/WebComponentEinkaufsliste.js"></script>
  
  <shopping-list></shopping-list>


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

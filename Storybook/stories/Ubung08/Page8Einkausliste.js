export const createPage8Einkaufsliste = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script type="module" src="/~dzens2s/Storybook/U8/WebComponentEinkaufsliste.js"></script>
  
  <shopping-list></shopping-list>


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

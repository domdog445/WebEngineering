export const createPage8Rednerliste = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script type="module" src="/~dzens2s/Storybook/U8/WebComponentRednerliste.js"></script>
  
  <redner-list></redner-list>


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

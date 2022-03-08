export const createPage8TabellenCalc = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script type="module" src="/~dzens2s/Storybook/U8/WebComponentTabellenCalc.js"></script>
  
  <tabellen-calc></tabellen-calc>


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

export const createPage8Bundestag = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script type="module" src="/U8/WebComponentBundestag.js"></script>
  
  <simple-bundestag></simple-bundestag>


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

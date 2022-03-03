export const createPage8Bezier= ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script type="module" src="/U8/WebComponentBezier.js"></script>
  
  <bezier-kurve></bezier-kurve>


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

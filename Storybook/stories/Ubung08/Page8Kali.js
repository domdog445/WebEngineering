export const createPage8Kali= ({
  linemode= false
}) => {
  const article = document.createElement('article');

  const section = `
  <script type="module" src="/U8/WebComponentKaligraphie.js"></script>
  
  <simple-kaligraphie sizeWidth="1000px"></simple-kaligraphie>


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

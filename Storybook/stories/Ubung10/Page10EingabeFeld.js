export const createPage10EingabeFeld= ({

}) => {
  const article = document.createElement('article');

  const section = `

  <div id="app">
  <word-counter></word-counter>
  <word-counter></word-counter>
	</div>

	<script src="/U10/Vue.js"></script>
	<script src="/U10/WordCounter.js"></script>

	<script>
	new Vue({
	el: '#app'
	
	});
	</script>


	<style>

	
	</style>

  

`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

export const createPage10WWWapp= ({

}) => {
  const article = document.createElement('article');

  const section = `


	


	



  <div id="WWWVue">
  	<www-navigator></www-navigator>
  </div>

	


	<script type="module" src="/~dzens2s/Storybook/U10/Vue.js"></script>
	<script type="module" src="/~dzens2s/Storybook/U10/MenuCompAlone.js"></script>


	<script>
	//new Vue(import('/~dzens2s/Storybook/U10/App.vue.js')).$mount('#WWWVue');
	</script>

	<script>
	new Vue({
	el: '#WWWVue',
	components: {
		"www-navigator": () => import('/~dzens2s/Storybook/U10/App.vue.js')
	  }
	});
	</script>
`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

export const createPage10MenuComp= ({
	MenuItems = ["1.", "2.","3."],
	ColumnMode = true
}) => {
  const article = document.createElement('article');

  const section = `

  <div id="appMenuAlone">
  <simple-menu v-bind:items="itemss" fdirection=`+BoolColumnToString(ColumnMode)+` ></simple-menu>
	</div>




	<script type="module" src="/U10/Vue.js"></script>


	<script>
	new Vue({
	el: '#appMenuAlone',
	data:{
		itemss: `+ArrToString(MenuItems)+`
	},
	components: {
		"simple-menu": () => import('/U10/components/MenuComp.vue.js')
	  }
	});
	</script>

`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};


function ArrToString(arrd) {
	let result ="["

	for (let i=0; i < arrd.length; i++) {
		result+= '"' + arrd[i] + '"';
		if(i < arrd.length-1)
			result+=",";
	}
	return result + "]"
  }
function BoolColumnToString(boolval) {
	if(boolval)
		return "column"
	else
		return "row"
  }
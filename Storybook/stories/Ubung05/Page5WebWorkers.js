export const createPage5WebWorkers = ({
}) => {
  const article = document.createElement('article');

  const section = `
<style>
	#container, #animate {
		width:100%;
		height: 4em;
	}
	#container {
		background-color: lightgrey;
	}
	#animate {
		background-color: yellow;
	}
	.primzahl {
		display: inline;
	}
	#primzahlen {
		overflow-y: scroll;
	}
	body{
		display: grid;
		grid-template-rows:4em 1fr;
	}
	
	html, 
	body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
	
	
	
</style>


<body>
<div id="container">
	<div id="animate"> </div>
</div>
<div id="primzahlen"> </div>
</body>



<script>

	container = document.getElementById("container");
	animate = document.getElementById("animate");
	primzahlenContainer = document.getElementById("primzahlen");
	width = 1;
	animation = requestAnimationFrame(step);

	
	worker = new Worker("/~dzens2s/Storybook/U5/PrimzahlenWebworkerPrime.js");
	worker.addEventListener('message', function(i)
	{
		primzahlenContainer.innerHTML += '<div class="primzahl">'+i.data+' </div>';
	});
	worker.postMessage(2);
	function step() {
	width +=1;
	if(width ===100) width = 1;
	animate.style.width = width + "%";
	animation = requestAnimationFrame(step);
	
	}
</script> 


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

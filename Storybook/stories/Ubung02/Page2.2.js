export const createPage2_2 = ({
	title = "xxx",
	subtitle = "The man who saved a billion lives",
}) => {
  const article = document.createElement('article');

  const section = `
  <!DOCTYPE html>
<html lang="de">
<head>
    <link rel="icon" href="../Ressource/favicon.svg" sizes="any" type="image/svg+xml">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> Grid</title>
	<style>
	
	* {
	  box-sizing: border-box;
	}
	/*Allgemein*/
	
	#red {background-color: #FF2500;
			grid-area: red; 	
			 }
	#green 	{background-color: #2CEE27;
			grid-area: green; 
			 }
	#blue 	{background-color: #0533FF;
			grid-area: blue; 
			 }
	#pink 	{background-color: #EA3EFE;
			grid-area: pink; 
			 }
			 
	.container 	{display: grid;
				grid-template-areas:
				'red'
				'green'
				'blue'
				'pink';
				grid-gap: 0px;
				 padding: 0px;
			}
	html, body,article,#root,.container
	{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	
	.boxx {margin: 0px 0px 0px 0px;}
	
	
	#red {  height: 100%;}
	#green{ height: 100%;}
	#blue {	height: 100%;}
	#pink { height: 100%;}
	
	
	@media (min-width: 400px) {
		.container 	{display: grid;
				grid-template-areas:
				'red red'
				'green blue'
				'green blue'
				'pink pink';
				grid-gap: 10px;
				 padding: 10px;
		}
	}
	
		@media (min-width: 800px) {
			.container 	{display: grid;
				grid-template-areas:
				'red red red red red'
				'green blue blue blue pink'
				'green blue blue blue pink'
				'green blue blue blue pink';
				grid-gap: 10px;
				 padding: 10px;
		}
	}
	
	</style>
	
</head>

<body>
	<div class="container">
	<div id="red" class="boxx">Red </div>
	<div id="green" class="boxx">Green</div>
	<div id="blue" class="boxx">Blue</div>
	<div id="pink" class="boxx">Pink</div>
	</div>
</body>


</html>


`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};

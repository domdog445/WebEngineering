export const createPage2_1 = ({
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
	<title> Flexbox</title>
	<style>
	
	* {
	  box-sizing: border-box;
	}
	#dummy {}
	/*Allgemein*/
	
	#red {background-color: #FF2500; 
			 }
	#green 	{background-color: #2CEE27;
			 }
	#blue 	{background-color: #0533FF;
			 }
	#pink 	{background-color: #EA3EFE;
			 }
	body,.container 	{display: flex;
			flex-wrap: wrap}
			
	html, body,.container,article,#root
	{
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	}
	
	.boxx {margin: 5px 5px 5px 5px;}
	/*Desktop*/
	
	
	#red {  background-color: #FF2500; 
			flex: 100%;
		    height: 19%;}
	#green {
			flex: 9%;
			height: 80%;}
	#blue { flex: 75%;
			height: 80%;}
	#pink { flex: 9%;
			height: 80%;}
	
	/*Tablet*/
	@media (max-width: 800px) {

		#red {flex: 100%;
		    height: 19%;}
		#green {
				flex: 30%;
				height: 58%;}
		#blue { flex: 64%;
				height: 58%;}
		#pink { flex: 100%;
				height: 19%;}
	}
	
	/*Phone*/
	@media (max-width: 400px) {

		#red {  flex: 100%;
		    height: 20%;}
		#green {
				flex: 100%;
				height: 20%;}
		#blue { flex: 100%;
				height: 200%;}
		#pink { flex: 100%;
				height: 20%;}
		.boxx {margin: 0px 0px 0px 0px;}
	}
	
	
	
	</style>
	
</head>

<body>
	<div class="container">
	<div id="red" class="boxx">Red</div>
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

export const createPage2_4 = ({
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
	<title> 2.4 Responsiv mit Grid</title>
	<style>
	header {background-color: #363636;
			height: 70px;
			text-align: center;
			font-family: Helvetica, sans-serif,Arial;
			grid-area: Header;
			}
	body {background-color: #EBEAE6;
			grid-area: Body;}
	footer {background-color: #061825;
			color: white;
			text-align: center;
			padding: 80px;
			grid-area: Footer;			
			}
	img {border: solid 2px black;
		width: 50%;
		height: 50%;
		align: center;}
	h1 {text-align: center}
	.Buybutton{font-size: 20px;
		background-color: #EA934B;
		color: white;
		padding: 10px 80px 10px 80px;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: bold;}
	.HeadButtons{font-size: 17px;
		background-color: #363636;
		border: 0px;
		vertical-align: center;
		height: 100%;
		color: white;
		align: middle;
		padding: 15px;
		}
	p{padding-top: 50px;
		font-size: 20px;}
		
	
	

	
	.content{
		width: 100%;
		display: grid;
		grid-template-areas: "Title Title"
							 "image text";
		grid-template-rows: 70px 80%;
		grid-template-columns: 50% 50%;
	}
	body{
		width: 100%;
		display: grid;
		grid-template-areas: "Header"
							 "Content"
							 "Footer";
							 grid-template-rows: auto 1fr auto;
	}
	.Title{
		grid-area: Title;
	}
	.image{
		width: auto;
		height: 100%;
		max-height: 600px;
 	}
	.imageBox{
		grid-area: image;
		width: auto;
		height: 100%;
		
		display: block;
		margin-left: auto;
		margin-right: auto;
		
 	}
	
	.text{
		grid-area: text;
		text-align: center;
	}
	
	/*Allgemein*/
	
	html, body
	{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}

	/*Tablet*/
	@media (max-width: 800px) {
		.content{
			width: 100%;
		
			display: grid;
			grid-template-areas: "Title"
								 "image" 
								 "text";
			grid-template-rows: 70px auto 500px;
			grid-template-columns: 100%;
			padding: 0px 0px 0px 0px;
		}
			.image{
		width: auto;
		height: 100%;
		max-height: 500px;
		}
	}
	
	/*Tablet*/
	@media (max-width: 550px) {
		header{
		display:grid;
			grid-template-rows: 70px 70px 70px 70px;
		}
		
		body{
			grid-template-rows: 280px auto 500px;	
		}
		
	}
	
	
	
	</style>
	
</head>


<body>

	<header>
		<button class="HeadButtons" type="button">The book series</button> 
		<button class="HeadButtons" type="button">Testimonials</button> 
		<button class="HeadButtons" type="button">The Author</button> 
		<button class="HeadButtons" type="button">Free resource</button> 
	</header>

	<div class="content">
		<div class="Title"><h1> You dont know JavaScript </h1></div>
		
		
		<div class="imageBox">
			<img class="image" src="https://kaul.inf.h-brs.de/wem/assets/img/landing-img.png"/>
		</div>
		<div class="text">
			<p>Don't just drift through Javascript </p>
			<p>Understand how Javascript works</p>
			<p>Start your journey through the bumpy side of Javascript</p>
							
			 <button class="Buybutton" type="button">ORDER YOUR COPY NOW </button>

		</div>
	</div>
	<footer>
	The first ebook in the book series is absolutely free. <br>
	<br>
	 <button class="Buybutton" type="button">FIND OUT MORE ABOUT THIS OFFER</button> 


	</footer>
</body>


</html>


`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};

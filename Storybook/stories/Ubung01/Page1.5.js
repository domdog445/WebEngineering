export const createPage5 = ({
	title = "Wireframe with HTML and CSS: Product Landingpage",
}) => {
  const article = document.createElement('article');

  const section = `
  <!DOCTYPE html>
<head>
	<title> Wireframe with HTML and CSS: Product Landingpage</title>
	
	
	<style>
	header {background-color: #363636;
			height: 70px;
			text-align: center;
			font-family: Helvetica, sans-serif,Arial;
			}
	body {background-color: #EBEAE6;}
	footer {background-color: #061825;
			color: white;
			text-align: center;
			padding: 80px }
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
	tr{text-align: center;}
	p{padding-top: 50px;
		font-size: 20px;}
		

</style>
	
</head>

<header>
	<button class="HeadButtons" type="button">The book series</button> 
	<button class="HeadButtons" type="button">Testimonials</button> 
	<button class="HeadButtons" type="button">The Author</button> 
	<button class="HeadButtons" type="button">Free resource</button> 
</header>

<body>

	<div>
		<h1> You dont know JavaScript </h1>
		<table>
			<colgroup>
			   <col span="1" style="width: 900px;">
			   <col span="1" style="width: 900px;">
			</colgroup>
		
			<tbody>
				<tr>
					<td>
						<img src="https://kaul.inf.h-brs.de/wem/assets/img/landing-img.png">
					</td>
					<td>
						<p>Don't just drift through Javascript </p>
						<p>Understand how Javascript works</p>
						<p>Start your journey through the bumpy side of Javascript</p>
						
						 <button class="Buybutton" type="button">ORDER YOUR COPY NOW </button>
					</td>
				</tr>
			</tbody>
		</table>
	<div>
	
	
	
</body>
<footer>
The first ebook in the book series is absolutely free. <br>
<br>
 <button class="Buybutton" type="button">FIND OUT MORE ABOUT THIS OFFER</button> 


</footer>


</html>


`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};

export const createPage2_3Grid = ({
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
	  margin: 0px 0px 0px 0px;
	}
	/*Allgemein*/
	
	#header {background-color: #B35653; 
			border-radius: 20px 20px 0px 0px;
			margin: 0px 0px 0px 0px;
			
			}
	#menu 	{background-color: #B98583;
			 margin: 0px 0px 0px 0px;
			 grid-area: menu;
			}
	#content{background-color: #759DBA;
			 margin: 0px 0px 0px 0px;
			 grid-area: content;
			 
			}
	#right 	{background-color: #B98583;
			 margin: 0px 0px 0px 0px;
			 grid-area: right;
			}
	#footer {background-color: #000000;
			 border-radius: 0px 0px 20px 20px ;
			 margin: 0px 0px 0px 0px;
			}		 
	a {font-size: 18px;
		margin: 0px 5px 0px 5px;
		color: white;
			}		 
			
	#mainScroll	{
		overflow-y: scroll;
		height: 80%;
		grid-template-areas:
		"menu content right";
		display: grid;
		grid-template-columns: 20% 60% 20%;
	}
	
	body {
		border-radius: 3px 15px 5px 30px;
		
	}
	
	.headerbutton {
		border-radius: 80px;
		height: 30px;
		padding: 0px 30px 0px 30px;
		margin: 10px 10px 10px 10px;
		background-color: #7B80AB;
		font-weight: bold;
		
	}
	.headerbutton:hover {
		
		background-color: #5B608B;
		
	}
	
	html, body
	{
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	}
	.contentText {
		color: white;
		font-size: 30px;
		text-align: center;
	}
	.boxx {margin: 5px 5px 5px 5px;}
	/*Desktop*/
	
	
	#header {flex: 100%;}
	#menu {	flex: 15%;}
	#content { flex: 70%;}
	#right { flex: 15%;}
	#footer { flex: 100%;}
	
	/*Tablet*/
	@media (max-width: 800px) {
		#mainScroll { 
			display: grid;
			grid-template-columns: 20% 80%;
			grid-template-areas:
			"menu content"
			"right right";
		}

	}
	
	/*Phone*/
	@media (max-width: 400px) {

		#mainScroll { 
			grid-template-columns: 100%;
			grid-template-areas:
			"menu"
			"content"
			"right";
		}
	}
	
	
	
	</style>
	
</head>

<body>
	<!--Header-->
	<div id="header" class="boxx"> <div class="contentText">Header</div><br>
	<button class="headerbutton">Home</button> 
	<button class="headerbutton">News</button> 
	<button class="headerbutton">Content</button> 
	<button class="headerbutton">About</button> 
	</div>
	
	<div id="mainScroll">
	
		<!--Left-->
		<div id="menu" class="boxx" > 
			<div class="contentText">
				left <br>
				menu <br>
				with <br>
				many <br>
				items <br>
			</div>
		</div>
		
		<!--Content-->
		<div id="content" class="boxx"> <div class="contentText">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
		Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   
		Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   
		Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   
		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.   
		Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita   </div></div>
		
		<!--Right-->
		<div id="right" class="boxx"> 
			<div class="contentText">
				right
			</div>
		</div>
	</div>
	<!--Footer-->
	<div id="footer" class="boxx"> <div class="contentText">Footer: 
		<a href="">Sitemap</a>
		<a href="">Home</a>
		<a href="">News</a>
		<a href="">Contact</a>
		<a href="">About</a>
		</div></div> 
</body>


</html>


`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};

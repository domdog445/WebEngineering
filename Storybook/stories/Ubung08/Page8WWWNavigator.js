export const createPage8WWWNavigator = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <!DOCTYPE html>
<html>
<head>
	<title> Domenic Overview 8</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

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
			min-height: 300px;
		}
		
		body {
			border-radius: 3px 15px 5px 30px;
			
		}
		
		.headerlink {
			border-radius: 80px;
			height: 30px;
			padding: 0px 30px 0px 30px;
			margin: 10px 10px 10px 10px;
			background-color: #6B709B;
			font-weight: bold;
		}
		.navDivs{
			display: flex;
			flex-direction: column;
		}
		.navLinks{
			width: auto;
			border-radius: 80px;
			height: 30px;
			padding: 0px 30px 0px 30px;
			margin: 10px 10px 10px 10px;
			background-color: #6B709B;
			font-weight: bold;
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
		@media (max-width: 600px) {
	
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

<script type="module" src="/U8/WebComponentMenuComponent.js"></script>
<script type="module" src="/U8/WebComponentDisplayComponent.js"></script>
<body>
	
		<div id="header" class="boxx"> <div class="contentText">Header</div><br>
		<simple-menucomponent id="headerMenu"></simple-menucomponent>
		</div>
		<div id="mainScroll">
	
			<!--Left-->
			<div id="menu" class="boxx" > 
				<div class="contentText">
					<simple-displaycomponent id="LeftDisplay"></simple-displaycomponent>
				</div>
			</div>
			
			<!--Content-->
			<div id="content" class="boxx"> 
				<simple-displaycomponent id="CenterDisplay" ></simple-displaycomponent>
			</div>
			
			<!--Right-->
			<div id="right" class="boxx"> 
				<simple-displaycomponent id="RightDisplay" ></simple-displaycomponent>
			</div>
		</div>
	
	<!--Footer-->
	<div id="footer" class="boxx"> 
		<div class="contentText">Footer: 
			<a href="">Sitemap</a>
			<a href="">Home</a>
			<a href="">News</a>
			<a href="">Contact</a>
			<a href="">About</a>
		</div>
	</div>
	
	
<script>
	fetch("/U8/NavigatorContents.json").then(response => response.json())
		.then(data => {
			var headmenu = document.getElementById("headerMenu");
			var LeftDisplay = document.getElementById("LeftDisplay");
			var CenterDisplay = document.getElementById("CenterDisplay");
			var RightDisplay = document.getElementById("RightDisplay");
			keys = Object.keys(data);
			headmenu.items = [];
			LeftDisplay.items = [];
			CenterDisplay.items = [];
			RightDisplay.items = [];


			for(var i = 0; i <keys.length;i++)
			{
				//Header
				headmenu.items.push(
					{
						link: "#"+keys[i],
						text: keys[i]
					}
				)

				let Lmenu = document.createElement('simple-menucomponent');
				Lmenu.columnMode = true
				Lmenu.items = [];

				//LeftMenu
				currentMainTopic = Object.keys(data[keys[i]])
				for(var j = 0; j < currentMainTopic.length; j++)
				{
					
					Lmenu.items.push(
						{
							link: "#"+keys[i] + ";" + currentMainTopic[j],
							text: currentMainTopic[j]
						}
					);
					CenterDisplay.items.push(
						{
							hash: "#"+keys[i] + ";" + currentMainTopic[j],
							element: data[keys[i]][currentMainTopic [j]].content
						}
					);
					RightDisplay.items.push(
						{
							hash: "#"+keys[i] + ";" + currentMainTopic[j],
							element: data[keys[i]][currentMainTopic [j]].references
						}
					);
				
				}
				LeftDisplay.items.push(
					{
						hash: "#"+keys[i],
						element: Lmenu
					}
				);


			}


			console.log(data);
			})
		;;


</script>


</body>


</html>




`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

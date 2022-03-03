export const createPage5WWWNavigator = ({
}) => {
  const article = document.createElement('article');

  const section = `
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
  
  <body>
	  <!--Header-->
	  <div id="header" class="boxx"> <div class="contentText">Header</div><br>
	  </div>
	  
	  <div id="mainScroll">
	  
		  <!--Left-->
		  <div id="menu" class="boxx" > 
			  <div class="contentText">
			  </div>
		  </div>
		  
		  <!--Content-->
		  <div id="content" class="boxx"> <div class="contentText"></div></div>
		  
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
		  
		  <script src="/U5/WWWNavigator.js"></script> 
  </body>
  
  
  
  


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

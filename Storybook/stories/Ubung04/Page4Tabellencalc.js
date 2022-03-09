export const createPage4TC = ({
}) => {
  const article = document.createElement('article');

  const section = `
  
	<style>
	.grid-container {
	  display: grid;
	  grid-template-columns: 1fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr 3fr;
	  grid-template-rows: auto auto auto auto auto auto auto auto auto auto auto;
	}
	.grid-item {
	  border: black solid 1px;
	}
	
	.grid-item-des{
	  border: black solid 1px;
	  background-color: #DDDDDD
	}
	.infotable{
		  border: black solid 1px;
	  background-color: #DDDDDD
	}
	</style>

<body>
	<h1>HTML-Editor</h1>
  
<div class="grid-container" id="grid-container">
</div> 


	<script src="/~dzens2s/Storybook/U4/Tabellencalc.js"></script> 
	
		<h3> Funktionen:</h3>
	<table class="infotable">
  <tr>
    <th>=sum(v1,v2,...)</th>
    <th>v1+v2+...</th>
  </tr>
  
  <tr>
    <th>=sub(v1,v2,...)</th>
    <th>v1-v2-...</th>
  </tr>
  
  <tr>
    <th>=div(v1,v2,...)</th>
    <th>v1/v2/...</th>
  </tr>
  
  <tr>
    <th>=mul(v1,v2,...)</th>
    <th>v1*v2*...</th>
  </tr>
  
  
   <tr>
    <th>=pow(v1,v2)</th>
    <th>Math.pow(v1,v2)</th>
  </tr>
  
  <tr>
    <th>=sqrt(v1)</th>
    <th>Wurzel von v1</th>
  </tr>
	
	


</body>


</html>


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

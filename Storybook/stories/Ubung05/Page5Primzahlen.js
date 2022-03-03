export const createPage5Primzahlen = ({
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

function step() {
	width +=1;
	if(width ===100) width = 1;
	animate.style.width = width + "%";
	animation = requestAnimationFrame(step);
	
}



prims = [];
j = 2;
calcPrims = async function()
{
	return new Promise(function(resolve,reject)
	{
		for(o = j; true ;j++)
		{
			if(testPrim(j))
			{
				resolve(j);
				return;
			}
		}

	});
	
	
}

async function asyncCall() {
  calcPrims().then(function(){
	  primzahlenContainer.innerHTML += '<div class="primzahl">'+j+' </div>'
				
	  setTimeout(function() {
				  asyncCall();
				}, 0);
  });
}



asyncCall();

function testPrim(numb)
{
	for(i = 0; i < prims.length;i++)
	{
		if(numb%prims[i]==0)
			return false;
	}
	prims.push(numb);
	return true;
}

/*
testnumber = math.bignumber('2')

console.log(testnumber);*/
  </script> 
  
`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

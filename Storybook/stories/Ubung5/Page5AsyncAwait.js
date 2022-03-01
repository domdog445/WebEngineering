export const createPage5AsyncAwait = ({
}) => {
  const article = document.createElement('article');

  const section = `
  
<body>
	<div id="Status"> Load A.txt & B.txt kontaktinierend </div>
	<div id="ABs"> </div>
</body>


<script>
var Status = document.getElementById('Status');
var ABs = document.getElementById('ABs');

var get = async function(url)
{
	return new Promise(function(resolve,reject)
	{
		var req = new XMLHttpRequest();
		req.open("GET",url);
		req.onload = function(){
			if(req.status === 200)
			{
				resolve(req.response);
			}
			else
			{
				reject(Error(req.statustext));
				
			}
		}
		req.onerror = function(){
			rejectedFunction("Datei konnte nicht geladen werden");
			reject(Error("Network Error"));
			
		}

		req.send();

	});
}

var atxt = "";
var btxt = "";

konkatenier();

async function konkatenier() {
	const Patxt = get("/U5/A.txt")
	const Pbtxt = get("/U5/B.txt")

	
	atxt = await Patxt; 
	btxt = await Pbtxt; 


	result = "";
					
	allA = atxt.split("\\r\\n");
	allB = btxt.split("\\r\\n");
					
	i = 0;
					
	while(i < allA.length || i < allB.length)
	{
		if(i < allA.length)
		{
			result += allA[i] +"\\r\\n";
		}
		if(i < allB.length)
		{
			result += allB[i] +"\\r\\n";
		}
		i++;
	}
			
			
	Status.innerHTML = "A.txt + B.txt konkateniert ";
	ABs.innerHTML = result;
}

function rejectedFunction(e)
{
Status.innerHTML = "Fehler beim laden einer Datei: " + e

}




</script>

`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

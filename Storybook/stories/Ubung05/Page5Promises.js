export const createPage5Promises = ({
}) => {
  const article = document.createElement('article');

  const section = `
  <!DOCTYPE html>

<body>
	<div id="Status"> Load A.txt & B.txt </div>
	<div id="ABs"> </div>
</body>


<script>
var Status = document.getElementById('Status');
var ABs = document.getElementById('ABs');

function get(url)
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
			reject(Error("Network Error"));
		}

		req.send();

	});
}

var atxt = "";
var btxt = "";


Promise.all([
	get("/~dzens2s/Storybook/U5/A.txt").then((value)=> atxt = value),
	get("/~dzens2s/Storybook/U5/B.txt").then((value)=> btxt = value)])
	.then(function()
	{
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
		
		return result;
	}).catch((mes) => Status.innerHTML = "Fehler beim laden einer Datei: " + mes)
			





</script>





`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

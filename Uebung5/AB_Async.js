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
console.log("File loaded");

var atxt = "";
var btxt = "";


Promise.all([
	get("http://www2.inf.h-brs.de/~dzens2s/Uebung5/A.txt").then((value)=> atxt = value),
	get("http://www2.inf.h-brs.de/~dzens2s/Uebung5/B.txt").then((value)=> btxt = value)])
	.then(function()
	{
		result = "";
				
		allA = atxt.split("\r\n");
		allB = btxt.split("\r\n");
				
		i = 0;
				
		while(i < allA.length || i < allB.length)
		{
			if(i < allA.length)
			{
				result += allA[i] +"\r\n";
			}
			if(i < allB.length)
			{
				result += allB[i] +"\r\n";
			}
			i++;
		}
		console.log(result);
		
		Status.innerHTML = "A.txt + B.txt konkateniert ";
		ABs.innerHTML = result;
		
		return result;
	}).catch((mes) => Status.innerHTML = "Fehler beim laden einer Datei: " + mes)
			





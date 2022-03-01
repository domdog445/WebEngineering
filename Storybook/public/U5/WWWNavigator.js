
NodeList.prototype.forEach = Array.prototype.forEach;

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

function createA(id,href,title,classname,Cont)
{
	var a = document.createElement('a');
	var linkText = document.createTextNode(title);
	a.appendChild(linkText);
	a.title = title;
	a.href = href;
	a.setAttribute("class", classname);
	a.id=id;
	if(Cont !== undefined)
		Cont.appendChild(a);
	return a;
	
}
function createDiv(id,title,classname,Cont,content)
{
	var div = document.createElement('div');
	if(content !== undefined)
		div.innerHTML = content;
	div.title = title;
	div.setAttribute("class", classname);
	div.id=id;
	if(Cont !== undefined)
		return Cont.appendChild(div);
	return div;
	
}

function makeVisible(domObj)
{
	domObj.style.display = "flex"; 
}
function makeHide(domObj)
{
	domObj.style.display = "none"; 
}

function makeThisNavVisible(domObj,cont)
{
	for(var i = 0; i < cont.children.length; i++) {
     makeHide(cont.children[i]);
   }
   if(domObj !== undefined)
	makeVisible(domObj);
}


var obj;
const mapNavDivs = new Map();
const mapContentDivs = new Map();
const mapRightDivs = new Map();


window.onhashchange = calcDisplays;


function calcDisplays()
{
	console.log(location.hash);
	vals = location.hash.substring(4).split(";");
	makeThisNavVisible(mapNavDivs.get(vals[0]),menu);
	
	if(vals[1] !== undefined)
	{
		makeThisNavVisible(mapContentDivs.get("con"+vals[1]),contents);
		makeThisNavVisible(mapRightDivs.get("right"+vals[1]),right);
	}
}





header = document.getElementById("header");
menu = document.getElementById("menu");
contents = document.getElementById("content");
right = document.getElementById("right");



get("/U5/NavigatorContents.json").then(function(json)
{
	obj = JSON.parse(json);
	keys = Object.keys(obj);
	
	
	for(var i = 0; i <keys.length;i++)
	{
		//Create Button Header
		var a = createA(keys[i],"#top"+keys[i],keys[i],"headerlink",header);
		
		currentMainTopic = Object.keys(obj[keys[i]])
		let div = createDiv("top"+keys[i],keys[i],"navDivs",menu)
		console.log(keys[i]);
		mapNavDivs.set(keys[i],div);
		makeHide(div);
		
		for(var j = 0; j < currentMainTopic.length; j++)
		{
			let NavA = createA(div.id + "-" + currentMainTopic[j],"#"+div.id + ";" + currentMainTopic[j],currentMainTopic[j],"navLinks",div);
			
			let contentdiv = createDiv("con"+currentMainTopic[j],currentMainTopic[j],"contDivs",contents,obj[keys[i]][currentMainTopic [j]].content)
			makeHide(contentdiv);
			mapContentDivs.set("con"+currentMainTopic[j],contentdiv);
			
			let rightdiv = createDiv("right"+currentMainTopic[j],currentMainTopic[j],"rightDivs",right,obj[keys[i]][currentMainTopic [j]].references)
			makeHide(rightdiv);
			mapRightDivs.set("right"+currentMainTopic[j],rightdiv);
		}
		
		
	}	
	calcDisplays();	
});


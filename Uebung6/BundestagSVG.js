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

function addAnimateBalken(finValue,cont)
{
	let animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
	animate.setAttribute('attributeName',"width");
	animate.setAttribute('attributeType',"XML");
	animate.setAttribute('from',0);
	animate.setAttribute('to',finValue);
	animate.setAttribute('begin',"0s");
	animate.setAttribute('dur',"1s");
	animate.setAttribute('fill',"freeze");
	if(cont !== undefined)
		cont.appendChild(animate);
	return animate;
}

function addAnimateText(cont)
{
	let animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
	animate.setAttribute('attributeName',"fill-opacity");
	animate.setAttribute('attributeType',"XML");
	animate.setAttribute('from',0);
	animate.setAttribute('to',1.0);
	animate.setAttribute('begin',"0.5s");
	animate.setAttribute('dur',"0.5s");
	animate.setAttribute('fill',"freeze");
	if(cont !== undefined)
		cont.appendChild(animate);
	return animate;
}

function addRect(x,y,width,height,color)
{
	let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rect.setAttribute('x',x);
		rect.setAttribute('y',y);
		rect.setAttribute('width',width);
		rect.setAttribute('height',height);
		rect.setAttribute('fill',color);
	return rect;	
	
}

function addText(displayText,x,y,size,color,opacity)
{
	let svgtext = document.createElementNS('http://www.w3.org/2000/svg', 'text');
		svgtext.setAttribute('x',x);
		svgtext.setAttribute('y',y);
		svgtext.setAttribute('font-size',size);
		svgtext.setAttribute('text-anchor',"left");
		svgtext.setAttribute('fill',color);
		if(opacity !== undefined)
			svgtext.setAttribute('fill-opacity',opacity);
		
		
		svgtext.innerHTML= displayText;
	return svgtext;	
	
}
function createLine(x1,y1,x2,y2,stroke)
{
	let svgline = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		svgline.setAttribute('x1',x1);
		svgline.setAttribute('y1',y1);
		svgline.setAttribute('x2',x2);
		svgline.setAttribute('y2',y2);
		svgline.setAttribute('stroke',stroke);
	return svgline;	
}




function getParteiMaxSitze(Parteien)
{
	result = Parteien[0];
	for(var i = 1; i < Parteien.length; i++)
	{
		if(Parteien[i].Sitze > result.Sitze)
		{
			result = Parteien[i];
		}
	}
	return result;
}



function createBackground(svg,sizex,sizey)
{
	//Create Background Rect
	let background = addRect(0,0,sizex,sizey,"#DDDDDD");
	svg.appendChild(background);

	//Vertikale Linien
	for(var i = 150; i < sizex-50;i+=50)
	{
		svg.appendChild(createLine(i,0,i,sizey-20,"#CCCCCC"))
		svg.appendChild(addText(i-100,i,sizey-10,10,"#555555"))
	}
	//R??nder
	svg.appendChild(createLine(100,0,100,sizey-20,"#888888"))
	svg.appendChild(createLine(100,sizey-20,sizex,sizey-20,"#888888"))
	
	
}


get("http://www2.inf.h-brs.de/~dzens2s/Uebung6/Bundestagverteilung.json").then(function(json)
{
	
	
	
	svgDiv = document.getElementById("svgDiv");
	
	obj = JSON.parse(json);
	var Parteien = obj.Parteien;
	
	
	var maxPartei = getParteiMaxSitze(Parteien);
	
	
	//Create SVG
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute("viewBox","0 0 "+ ( maxPartei.Sitze+150) +" "+((Parteien.length *30)+20));
	svg.setAttribute('width',"300px");
	
	//Create Background
	createBackground(svg,( maxPartei.Sitze+150),((Parteien.length *30)+20))
	
	
	
	//F??r jede Partei
	for(var i = 0; i < Parteien.length;i++)
	{
		let rect = addRect(100,(i*30)+5,Parteien[i].Sitze,20,Parteien[i].Farbe);
		svg.appendChild(rect);
		console.log(Parteien[i].name);
		
		
		
		addAnimateBalken(Parteien[i].Sitze,rect);
		
		//(displayText,x,y,size,color)
		let rectTXT = addText(Parteien[i].Sitze,Parteien[i].Sitze+110,20+(i*30),15,"#000000",0.0);
		addAnimateText(rectTXT)
		svg.appendChild(rectTXT);
		
		rectTXT = addText(Parteien[i].name,5,20+(i*30),15,"#000000");
		
		svg.appendChild(rectTXT);
		
		
	}
	
	svgDiv.appendChild(svg);
	
	
	console.log(obj);
});
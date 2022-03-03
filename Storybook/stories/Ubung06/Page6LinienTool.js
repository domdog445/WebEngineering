export const createPage6Linien = ({

}) => {
  const article = document.createElement('article');

  const section = `
  
  <!DOCTYPE html>
<html>
<head>
	<title> Kalligraphie-Editor</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
</head>

<body id="body">
<h1>Achtung diese Story funktioniert in Storybook leider nur unter Chrome und benötigt einen direkten Reload auf dieser Seite. Bei der Verwendung von Firefox, muss die Webseite direkt aufgerufen werden (<a href="/U6/LinienTool.html">Hier</a>)</h1>
<h3>Diese Version des Kalligraphies Editors, ist während der Übung entstanden. Diese funktioniert mithilfe von path und nicht mithilfe von polygon</h3>
	<div>
	<svg xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1000 600"
		onload="makeDrawable(evt)">
		<rect x="0" y="0" width="1000" height="600" fill="#DDDDDD">
	</svg>
	
	</div>
	
</body>

<script>
	
	
	
	
	function makeDrawable(evt)
	{
		var svg = evt.target;
		var currentpath;
		svg.addEventListener('mousedown', startDraw);
		svg.addEventListener('mousemove', Draw);
		svg.addEventListener('mouseup', endDraw);
		svg.addEventListener('mouseleave', endDraw);
	
		function startDraw(evt)
		{
			
			currentpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			svg.appendChild(currentpath);
			coord = getMousePosition(evt);
			currentpath.setAttribute("d","M" + coord.x + " " + coord.y);
			currentpath.setAttribute("stroke-width","5");
			currentpath.setAttribute("stroke","black");
			currentpath.setAttribute("fill","transparent");
			console.log(coord);
		}
		
		function Draw(evt)
		{
			if(currentpath)
			{
				var coord = getMousePosition(evt);
				currentpath.setAttribute("d", currentpath.getAttribute("d")+ " " + coord.x + " " + coord.y)
				console.log(coord)
			}

		}	
		
		function endDraw(evt)
		{
			currentpath = null;
		}
		
		function getMousePosition(evt)
		{
			const CTM = document.querySelector('svg').getScreenCTM();
			return {
				x:(evt.clientX - CTM.e)/ CTM.a,
				y:(evt.clientY - CTM.f)/ CTM.d
			};
		}
	}
	
	function setLineFromPoints(line,po1,po2)
	{
		line.setAttribute("x1",po1.getAttribute("cx"));
		line.setAttribute("y1",po1.getAttribute("cy"));
		line.setAttribute("x2",po2.getAttribute("cx"));
		line.setAttribute("y2",po2.getAttribute("cy"));
	}
	
	
	function PointToString(p)
	{
		return p.getAttribute("cx")+" " + p.getAttribute("cy");
	}
</script>

</html>




`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

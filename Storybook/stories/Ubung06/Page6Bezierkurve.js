export const createPage6Bezier = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <!DOCTYPE html>
  <html>
  <head>
	  <title> Bezier</title>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  
	  
	  <style>
	  .draggable 
	  {
		  cursor: move;
	  }
	  </style>
  </head>
  
  <script>
  
  var p1=document.getElementById("p1");
  var p2=document.getElementById("p2");
  var p3=document.getElementById("p3");
  var p4=document.getElementById("p4");
  
  var line12=document.getElementById("path12");
  var line23=document.getElementById("path23");
  var line34=document.getElementById("path34");
  
  var curve=document.getElementById("curve");
		  
  animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
  
  selectedElement = false;
  
  calcCurv();
  
  
  function makeDraggable(evt)
  {
	  console.log("Make Draggable")
	  var svg = evt.target;
	  svg.addEventListener('mousedown', startDrag);
	  svg.addEventListener('mousemove', drag);
	  svg.addEventListener('mouseup', endDrag);
	  svg.addEventListener('mouseleave', endDrag);
	  console.log(evt.target);
	  function startDrag(evt)
	  {
		  if(evt.target.classList.contains('draggable'))
		  {
			  selectedElement = evt.target;
			  offset = getMousePosition(evt);
			  offset.x-= parseFloat(selectedElement.getAttribute("cx"));
			  offset.y-= parseFloat(selectedElement.getAttribute("cy"));
			  
		  }
	  }
	  
	  function drag(evt)
	  {
		  if(selectedElement)
		  {
			  evt.preventDefault();
			  var coord = getMousePosition(evt);
			  selectedElement.setAttribute("cx",coord.x - offset.x);
			  selectedElement.setAttribute("cy",coord.y - offset.y);
			   calcCurv();
		  }

	  }	
	  
	  function endDrag(evt)
	  {
		  selectedElement = null;
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

  function calcCurv()
  {

	  curve.setAttribute("d","M"+PointToString(p1)+" C "+PointToString(p2)+", " + PointToString(p3) + " ,"+ PointToString(p4))
	  
	  
	  
	  setLineFromPoints(path12,p1,p2);
	  setLineFromPoints(path23,p2,p3);
	  setLineFromPoints(path34,p3,p4);
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
  console.log("JOO");
</script>




  <body id="body">
  <h1>Achtung diese Story funktioniert in Storybook leider nur unter Chrome und benötigt einen direkten Reload auf dieser Seite. Bei der Verwendung von Firefox, muss die Webseite direkt aufgerufen werden (<a href="/U6/BezierKurven.html">Hier</a>)</h1>
	  <div>
	  <svg xmlns="http://www.w3.org/2000/svg"
		  viewBox="0 0 1000 600"
		  onload="makeDraggable(evt)">
	  <rect x=0 y=0 fill="#DDDDDD" width="1000" height="600"/>
	  
	  <path id="curve" d="" stroke="black" fill="transparent"/>
	  <line id="path12" x1="0" y1="0" x2="0" y2="0" stroke="#AAAAAA" />
	  <line id="path23" x1="0" y1="0" x2="100" y2="100" stroke="#AAAAAA" />
	  <line id="path34" x1="0" y1="0" x2="0" y2="0" stroke="#AAAAAA" />
	  
	  <circle id="p1" cx="600" cy="50" r="10" fill="yellow" class="draggable"></circle>
	  <circle id="p2" cx="600" cy="150" r="10" fill="green" class="draggable"></circle>
	  <circle id="p3" cx="135" cy="150" r="10" fill="red" class="draggable"></circle>
	  <circle id="p4" cx="135" cy="50" r="10" fill="blue" class="draggable"></circle>
	  
	  
	  
	  </svg>
	  
	  </div>
	  
  </body>
  
  
  
  </html>
  
  


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

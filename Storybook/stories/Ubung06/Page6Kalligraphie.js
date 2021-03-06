export const createPage6Kalligraphie = ({
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
  <h1>Achtung diese Story funktioniert in Storybook leider nur unter Chrome und benötigt einen direkten Reload auf dieser Seite. Bei der Verwendung von Firefox, muss die Webseite direkt aufgerufen werden (<a href="/~dzens2s/Storybook/U6/Kalligraphie-Editor.html">Hier</a>)</h1>
	  <div>
	  <svg xmlns="http://www.w3.org/2000/svg"
		  viewBox="0 0 1000 600"
		  onload="makeDrawable(evt)">
		  <rect x="0" y="0" width="1000" height="600" fill="#DDDDDD">
	  </svg>
	  
	  </div>
	  
  </body>
  
  <script>
	  
	  
	  var polyPoints = [];
	  
	  function makeDrawable(evt)
	  {
		  var svg = evt.target;
		  var currentpoly;
		  
		  var myInterval;
		  
		  
		  var lastpoint;
		  svg.addEventListener('mousedown', startDraw);
		  svg.addEventListener('mousemove', Draw);
		  svg.addEventListener('mouseup', endDraw);
		  svg.addEventListener('mouseleave', endDraw);
	  
		  function startDraw(evt)
		  {
			  currentpoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
			  svg.appendChild(currentpoly);
			  coord = getMousePosition(evt);
			  lastpoint = coord;
			  polyPoints.push(coord.ToString());
			  polyPoints.push(coord.ToString());
			  currentpoly.setAttribute("points",coord.ToString());
			  currentpoly.setAttribute("stroke-width","1");
			  currentpoly.setAttribute("stroke","black");
			  currentpoly.setAttribute("fill","#333333");
			  console.log(coord);
			  myInterval = setInterval(function(){doInterval(evt)}, 50);
		  }
		  var intevt;
		  function Draw(evt)
		  {
			  if(currentpoly)
			  {
				  intevt = evt;
			  }
  
		  }	
		  function doInterval(evt)
		  {
			  if(intevt)
			  {
				  coord = getMousePosition(intevt);
				  points = PointsToString(coord,lastpoint);
					  
				  polyPoints.splice(polyPoints.length/2,0,points[0],points[1]);
				  currentpoly.setAttribute("points", polyPoints);
				  console.log(coord)
					  
					  
				  lastpoint = coord;
			  }
		  }
		  
		  function endDraw(evt)
		  {
			  intevt = null; 
			  clearInterval(myInterval);
			  currentpoly = null;
			  polyPoints = [];
			  lastpoint = null;
		  }
		  
		  function getMousePosition(evt)
		  {
			  const CTM = document.querySelector('svg').getScreenCTM();
			  return new Point(
				  (evt.clientX - CTM.e)/ CTM.a,
				  (evt.clientY - CTM.f)/ CTM.d
			  );
		  }
	  }
	  
	  function setLineFromPoints(line,po1,po2)
	  {
		  line.setAttribute("x1",po1.getAttribute("cx"));
		  line.setAttribute("y1",po1.getAttribute("cy"));
		  line.setAttribute("x2",po2.getAttribute("cx"));
		  line.setAttribute("y2",po2.getAttribute("cy"));
	  }
	  
  
	  function PointsToString(p1,p2)
	  {
		  DistanceVek = p1.sub(p2);
		  console.log( DistanceVek,p1,p2);
		  
		  
		  ortho = DistanceVek.getOrthogonale().kehrwert().mul(7);
		  
		  
		  return [p1.plus(ortho).ToString(), p1.plus(ortho.NegativVektor()).ToString()];
		  
	  }
  
	  
	  class Point 
	  {
		  constructor(x, y) {
			  this.x = x;
			  this.y = y;
		  }
  
		  laenge(a) {
			  if(a === undefined)
			  {
				  const dx = this.x;
				  const dy = this.y;
				  return Math.sqrt((dx*dx) + (dy*dy));
			  }
			  else
			  {
				  const dx = a.x - this.x;
				  const dy = a.y - this.y;
				  return Math.sqrt((dx*dx) + (dy*dy));
			  }
			  
		  }
		  getOrthogonale(p = this)
		  {
			  return new Point(-p.y,p.x)
		  }
		  ToString(p = this)
		  {
			  return p.x + "," + p.y + " ";
		  }
		  NegativVektor(p = this)
		  {
			  return new Point(-p.x,-p.y);
		  }
		  mul(f)
		  {
			  return new Point(this.x*f,this.y*f);
		  }
		  plus(b)
		  {
			  return new Point(this.x+b.x,this.y+b.y);
		  }
		  sub(b)
		  {
			  return new Point(this.x-b.x,this.y-b.y);
		  }
		  kehrwert()
		  {
			  var dx = 1/this.x
			  var dy = 1/this.y
			  if(dx === Infinity || dx === -Infinity)
				  dx = this.x
			  if(dy === Infinity || dy === -Infinity)
				  dy = this.y
			  
			  return new Point(dx,dy);
		  }
	  }
	  
	  
	  
  </script>
  
  </html>
  
  



`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

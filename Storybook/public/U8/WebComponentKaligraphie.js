//import {html,LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
import {html,LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module'


class Kaligraphie extends LitElement
{
	static properties = {
		sizeX:{},
		sizeY:{},
		styleV:{},
		sizeHeight:{},
		sizeWidth:{},
		linemode:{Boolean:false}
	};

	constructor() {
		super();
		this.sizeX = 1000;
		this.sizeY = 600;
		this.sizeWidth = "1000px";
		this.sizeHeight = "600px";
		this.linemode = false;

		this.currentpoly = null;
		this.endDrawKali(null);
		this.styleV = html`<style>
		.grid-container {
		  display: grid;
		  grid-template-columns: 3em repeat(${this.sizeX}, 1fr);
		  grid-template-rows: repeat(${this.sizeX+1}, 1fr);
		}
		</style>`
	  }

	render(){
		return html`
			<svg xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 ${this.sizeX} ${this.sizeY}"
				height="${this.sizeHeight}"
				width="${this.sizeWidth}"
				@mousedown=${this.linemode ? this.startDraw : this.startDrawKali} @mousemove=${this.linemode ?this.Draw : this.DrawKali} @mouseup=${this.linemode ?this.endDraw: this.endDrawKali} @mouseleave=${this.linemode ? this.endDraw: this.endDrawKali}>
				<rect x="0" y="0" width="${this.sizeX}" height="${this.sizeY}" fill="#DDDDDD">
			</svg>
		`;
	}

	startDraw(evt)
	{
		console.log(evt.target.ownerSVGElement);
		this.currentpath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		evt.target.ownerSVGElement.appendChild(this.currentpath);
		var coord = this.getMousePosition(evt);
		this.currentpath.setAttribute("d","M" + coord.x + " " + coord.y);
		this.currentpath.setAttribute("stroke-width","5");
		this.currentpath.setAttribute("stroke","black");
		this.currentpath.setAttribute("fill","transparent");
		console.log(coord);
	}
		
	Draw(evt)
	{
		if(this.currentpath)
		{
			var coord = this.getMousePosition(evt);
			this.currentpath.setAttribute("d", this.currentpath.getAttribute("d")+ " " + coord.x + " " + coord.y)
			console.log(coord)
		}

	}	
		
	endDraw(evt)
	{
		this.currentpath = null;
	}

	getMousePosition(evt)
	{

		console.log(evt.target)
		var CTM;
		if(evt.target.getScreenCTM !==undefined)
			CTM = evt.target.getScreenCTM();
		else
		{
			CTM = evt.target.shadowRoot.childNodes[2].getScreenCTM();
		}
		console.log(evt);
		console.log(evt.clientX, CTM.e, CTM.a);
		return new Point(
			(evt.clientX - CTM.e)/ CTM.a,
			(evt.clientY - CTM.f)/ CTM.d
		);
	}

	setLineFromPoints(line,po1,po2)
	{
		line.setAttribute("x1",po1.getAttribute("cx"));
		line.setAttribute("y1",po1.getAttribute("cy"));
		line.setAttribute("x2",po2.getAttribute("cx"));
		line.setAttribute("y2",po2.getAttribute("cy"));
	}
	
	
	PointToString(p)
	{
		return p.getAttribute("cx")+" " + p.getAttribute("cy");
	}

	PointsToString(p1,p2)
	{
		var DistanceVek = p1.sub(p2);
		
		
		var ortho = DistanceVek.getOrthogonale().kehrwert().mul(7);
		
		
		return [p1.plus(ortho).ToString(), p1.plus(ortho.NegativVektor()).ToString()];
		
	}


	
	startDrawKali(evt)
	{
		this.currentpoly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
		evt.target.ownerSVGElement.appendChild(this.currentpoly);
		var coord = this.getMousePosition(evt);
		this.lastpoint = coord;
		this.polyPoints.push(coord.ToString());
		this.polyPoints.push(coord.ToString());
		this.currentpoly.setAttribute("points",coord.ToString());
		this.currentpoly.setAttribute("stroke-width","1");
		this.currentpoly.setAttribute("stroke","black");
		this.currentpoly.setAttribute("fill","#333333");
		console.log(coord);

		var uthis = this;
		this.myInterval = setInterval(function(){
			console.log(uthis);
			uthis.doInterval(evt,uthis)}, 50);
	}
	
	DrawKali(evt)
	{
		if(this.currentpoly)
		{
			this.intevt = evt;
		}

	}	
	doInterval(evt,uthis)
	{
		if(uthis.intevt)
		{
			console.log("Jooo");
			var coord = uthis.getMousePosition(uthis.intevt);
			var points = uthis.PointsToString(coord,uthis.lastpoint);
			console.log(coord);
			uthis.polyPoints.splice(uthis.polyPoints.length/2,0,points[0],points[1]);
			uthis.currentpoly.setAttribute("points", uthis.polyPoints);
			console.log(coord)
					
					
			uthis.lastpoint = coord;
		}
	}
		
	endDrawKali(evt)
	{
		this.intevt = null; 
		clearInterval(this.myInterval);
		this.currentpoly = null;
		this.polyPoints = [];
		this.lastpoint = null;
	}
	
	
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

customElements.define("simple-kaligraphie",Kaligraphie);







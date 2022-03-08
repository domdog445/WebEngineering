//import {html,LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
import {html,LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module'


class Bezierkurve extends LitElement
{
	static properties = {
		sizeX:{},
		sizeY:{},
		styleV:{},
		sizeHeight:{},
		sizeWidth:{},

		x1:{},
		y1:{},
		x2:{},
		y2:{},
		x3:{},
		y3:{},
		x4:{},
		y4:{},

		r1:{},
		r2:{},
		r3:{},
		r4:{},
		selectedElement:{},
		offset:{}
	};

	constructor() {
		super();
		this.sizeX = 600;
		this.sizeY = 300;
		this.sizeHeight = "300px";
		this.sizeWidth = "600px";
		this.r1 =20,this.r2=20,this.r3=20,this.r4  = 20;
		this.x1 = 40;this.y1 = 40;
		this.x2 = 120;this.y2 = 40;
		this.x3 = 120;this.y3 = 120;
		this.x4 = 40;this.y4 = 120;
		this.selectedElement=null;

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
				@mousedown=${this.startDrag} @mousemove=${this.drag} @mouseup=${this.endDrag} @mouseleave=${this.endDrag}
				onload="makeDraggable(evt)">
				<rect x=0 y=0 fill="#DDDDDD" width="${this.sizeX}" height="${this.sizeY}"/>
				
				<path id="curve" d="" stroke="black" fill="transparent" d="M ${this.x1} ${this.y1} C ${this.x2} ${this.y2}, ${this.x3} ${this.y3} ,${this.x4} ${this.y4}"/>
				<line id="path12" x1="${this.x1}" y1="${this.y1}" x2="${this.x2}" y2="${this.y2}" stroke="#AAAAAA" />
				<line id="path23" x1="${this.x2}" y1="${this.y2}" x2="${this.x3}" y2="${this.y3}" stroke="#AAAAAA" />
				<line id="path34" x1="${this.x3}" y1="${this.y3}" x2="${this.x4}" y2="${this.y4}" stroke="#AAAAAA" />
				
				<circle id="p1" cx="${this.x1}" cy="${this.y1}" r="${this.r1}" fill="yellow" class="draggable"></circle>
				<circle id="p2" cx="${this.x2}" cy="${this.y2}" r="${this.r2}" fill="green" class="draggable"></circle>
				<circle id="p3" cx="${this.x3}" cy="${this.y3}" r="${this.r3}" fill="red" class="draggable"></circle>
				<circle id="p4" cx="${this.x4}" cy="${this.y4}" r="${this.r4}" fill="blue" class="draggable"></circle>
	
	
	
			</svg>
			
		`;
	}


	startDrag(evt)
	{
		if(evt.target.classList.contains('draggable'))
		{
			console.log(evt.target);
			this.selectedElement = evt.target;
			this.offset = this.getMousePosition(evt);
			

			this.offset.x-= parseFloat(this.selectedElement.getAttribute("cx"));
			this.offset.y-= parseFloat(this.selectedElement.getAttribute("cy"));
		}
	}
		
	drag(evt)
	{
		if(this.selectedElement)
		{
			evt.preventDefault();
			var coord = this.getMousePosition(evt);
			this.setPos(coord.x,coord.y,evt.target.id)
			
		}
	}	
		
	endDrag(evt)
	{
		this.selectedElement = null;
	}
		
	getMousePosition(evt)
	{
		const CTM = evt.target.getScreenCTM();
		return {
			x:(evt.clientX - CTM.e)/ CTM.a,
			y:(evt.clientY - CTM.f)/ CTM.d
		};
	}
	
	setPos(x,y,id)
	{
		if(id==="p1")
		{
			this.x1 = x;
			this.y1 = y;
		}
		else if(id==="p2")
		{
			this.x2 = x;
			this.y2 = y;
		}
		else if(id==="p3")
		{
			this.x3 = x;
			this.y3 = y;
		}
		else if(id==="p4")
		{
			this.x4 = x;
			this.y4 = y;
		}
	}


}

customElements.define("bezier-kurve",Bezierkurve);







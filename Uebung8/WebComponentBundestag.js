//import {html,LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
import {html,LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module'


class Bundestag extends LitElement
{
	static properties = {
		styleV:{},
		data: {},
		maxSitze:{},
		background:{}
	};

	constructor() {
		super();
		this.data = [];
		this.styleV = html`<style>
		.grid-container {
		  display: grid;
		  grid-template-columns: 3em repeat(${this.sizeX}, 1fr);
		  grid-template-rows: repeat(${this.sizeX+1}, 1fr);
		}
		.grid-item {
		  border: black solid 1px;
		}
		
		.grid-item-des{
		  border: black solid 1px;
		  background-color: #DDDDDD
		}
		.infotable{
			  border: black solid 1px;
		  background-color: #DDDDDD
		}
		</style>`


		fetch("./Bundestagverteilung.json")
		.then(response => response.json())
		.then(data => {
			this.data = data.Parteien;
			this.maxSitze = this.getParteiMaxSitze(this.data).Sitze;
			this.background = this.createBackground(( this.maxSitze+150),((this.data.length *30)+20))
			})
		;
	  }

	render(){
		if(this.data === undefined || this.maxSitze === undefined || this.background === undefined)
			return html`loading...`;

		console.log(this.data)
		var j=0;
		console.log(this.maxSitze)
		return html`
			${this.styleV}	<svg width= ${this.maxSitze+150} height=${(this.data.length *30)+20}>
			${this.background}

			${this.data.map((i) => html`
			${this.addAnimateBalken(i.Sitze,this.addRect(100,(j*30)+5,i.Sitze,20,i.Farbe))}
			${this.addAnimateText(this.addText(i.Sitze,i.Sitze+110,20+(j*30),15,"#000000",0.0))}
			${this.addText(i.name,5,20+(j++*30),15,"#000000")}
			`)}

			</svg>
			
		`;
	}
	
	addAnimateBalken(finValue,cont)
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
		{
			cont.appendChild(animate);
			return cont;
		}
			
		return animate;
	}

	addAnimateText(cont)
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
		{
			cont.appendChild(animate);
			return cont;
		}
			
		return animate;
	}

	addRect(x,y,width,height,color)
	{
		let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			rect.setAttribute('x',x);
			rect.setAttribute('y',y);
			rect.setAttribute('width',width);
			rect.setAttribute('height',height);
			rect.setAttribute('fill',color);
		return rect;	
		
	}

	addText(displayText,x,y,size,color,opacity)
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
	createLine(x1,y1,x2,y2,stroke)
	{
		let svgline = document.createElementNS('http://www.w3.org/2000/svg', 'line');
			svgline.setAttribute('x1',x1);
			svgline.setAttribute('y1',y1);
			svgline.setAttribute('x2',x2);
			svgline.setAttribute('y2',y2);
			svgline.setAttribute('stroke',stroke);
		return svgline;	
	}




	getParteiMaxSitze(Parteien)
	{
		var result = Parteien[0];
		for(var i = 1; i < Parteien.length; i++)
		{
			if(Parteien[i].Sitze > result.Sitze)
			{
				result = Parteien[i];
			}
		}
		return result;
	}



	createBackground(sizex,sizey)
	{
		//Create Background Rect
		let background = []
		background.push(this.addRect(0,0,sizex,sizey,"#DDDDDD"));

		//Vertikale Linien
		for(var i = 150; i < sizex-50;i+=50)
		{
			background.push(this.createLine(i,0,i,sizey-20,"#CCCCCC"))
			background.push(this.addText(i-100,i,sizey-10,10,"#555555"))
		}
		//Ränder
		background.push(this.createLine(100,0,100,sizey-20,"#888888"))
		background.push(this.createLine(100,sizey-20,sizex,sizey-20,"#888888"))
		
		return background;
	}



}

customElements.define("simple-bundestag",Bundestag);







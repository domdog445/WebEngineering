//import {html,LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
import {html,LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module'


class TabellenCalc extends LitElement
{
	static properties = {
		items: {},
		title:{type:String},
		nextAdd: {type:String},
		sizeX:{},
		sizeY:{},
		head:{},
		styleV:{}
	};

	constructor() {
		super();
		this.sizeX = 10;
		this.sizeY = 10;
		this.items = [];
		this.head = []; 
		this.head.push(""); 
		for(var i = 0; i < this.sizeY;i++)
		{
			this.items.push([])
			
			for(var j = 0; j < this.sizeX;j++)
			{
				this.items[i].push("");
			}
		}
		for(var j = 0; j < this.sizeX;j++)
		{
			this.head.push(j+1);
		}
		
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
	  }

	render(){

		var coln= 0;

		return html`
			${this.styleV}
		

			<div class="grid-container">

			${this.head.map((i) => html`
			<div class="grid-item-des">${i}</div>
			`)}
			
				${this.items.map((i) => html`
				<div class="grid-item-des">${this.getChar(coln++)} </div>${i.map((j) => html`
					<div class="grid-item" xpos="${this.items.indexOf(i)}+${this.items[this.items.indexOf(i)].indexOf(j)}" contenteditable="true" @focus=${this.focus} @focusout=${this.focusout}

					}>${j}</div>	`
				)}</div>


			
			`)}
			</div>
		`;
	}
	getChar(val)
	{
		return String.fromCharCode(65 + val);
		
	}

	focus(e)
	{
		var target = e.target;

		if(target.sec !== undefined)
		{
			var tmp = target.innerText;
			target.innerText = target.sec;
			target.sec = tmp;
		}



		console.log(target);

	}
	focusout(e)
	{
		var target = e.target;

		target.sec = target.innerText;
		target.innerText = this.getDisplay(target.sec,target);
		//console.log(e);

	}
	
	getArrayCount(min,max)
	{
		arr = [];
		for(var j = min; j < max;j++)
		{
			arr.push(j);
		}
		return arr;
	}


	ParseIntoNumber(currentValue)
	{
		
		var matchres = currentValue.match("([a-z]|[A-Z])*")
		var letter = matchres[0].toUpperCase();
		var intVal = currentValue.slice(letter.length);

		var letterval = 0;


		while(letter.length> 0)
		{
			
			letterval +=letter.charCodeAt(0)-64;
			console.log(letter);
			letter = letter.slice(1);
			
			if(letter.length >0)
				letterval = letterval*26;
		}

		console.log("SizeX; " +this.sizeX )
		console.log("intVal; " +intVal )
		console.log("letterval; " +letterval )
		console.log((this.sizeX*letterval) + parseInt(intVal));
		return ((this.sizeX+1)*letterval) + parseInt(intVal);


	}

	getIntVal(currentValue,obj)
	{
		console.log(this.sizeY);
		console.log(obj.parentElement.children[this.ParseIntoNumber(currentValue)].innerText);
		if(!isNaN(parseInt(currentValue)))
			return parseInt(currentValue);
		else
		{
			return parseInt(obj.parentElement.children[this.ParseIntoNumber(currentValue)].innerText);
		}
	}

	getDisplay(newVal,obj)
	{
		//Return if no '=' Symbol
		if(!newVal.startsWith('='))
			return newVal;	
		var Val = newVal.substring(1);
		try {
			//SUM
			if(Val.toLowerCase().startsWith("sum"))
			{
				var allvals = Val.split("(")[1].split(")")[0];
				console.log(allvals);
				
				var arrval = allvals.split(",");
					
				var result = this.getIntVal(arrval[0],obj);
				for(var i = 1;i < arrval.length;i++){
					result +=this.getIntVal(arrval[i],obj);
						
				};
				return result;
					
			}
			//SUB
			if(Val.toLowerCase().startsWith("sub"))
			{
				var allvals = Val.split("(")[1].split(")")[0];
				console.log(allvals);
					
				var arrval = allvals.split(",");
					
				var result = this.getIntVal(arrval[0],obj);
				for(var i = 1;i < arrval.length;i++){
					result -=this.getIntVal(arrval[i],obj);
						
				};
				return result;
				
			}
			//mul
			if(Val.toLowerCase().startsWith("mul"))
			{
				var allvals = Val.split("(")[1].split(")")[0];
				console.log(allvals);
				
				var arrval = allvals.split(",");
				
				var result = this.getIntVal(arrval[0],obj);
				for(var i = 1;i < arrval.length;i++){
					result *=this.getIntVal(arrval[i],obj);
						
				};
				
				return result;
				
			}
			//div
			if(Val.toLowerCase().startsWith("div"))
			{
				var allvals = Val.split("(")[1].split(")")[0];
				console.log(allvals);
				
				var arrval = allvals.split(",");
				
				var result = this.getIntVal(arrval[0],obj);
				
				
				for(var i = 1;i < arrval.length;i++){
					result /=this.getIntVal(arrval[i],obj);
				};
				return result;
				
			}
			//pow
			if(Val.toLowerCase().startsWith("pow"))
			{
				var allvals = Val.split("(")[1].split(")")[0];
				console.log(allvals);
				
				var arrval = allvals.split(",");
				return Math.pow(this.getIntVal(arrval[0],obj),this.getIntVal(arrval[1],obj));
				
			}
			
			//sqrt
			if(Val.toLowerCase().startsWith("sqrt"))
			{
				var allvals = Val.split("(")[1].split(")")[0];
				console.log(allvals);
					
				var arrval = allvals.split(",");
				return Math.sqrt(this.getIntVal(arrval[0],obj));
					
			}
			return "---Keine gueltige Function---"
				
		} catch (e)
		{
			console.log(e);
			return "---Error---";
		}







	}

}

customElements.define("tabellen-calc",TabellenCalc);







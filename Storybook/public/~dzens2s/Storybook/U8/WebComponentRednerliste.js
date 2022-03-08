//import {html,LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
import {html,LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module'
import {customElement, property} from 'https://unpkg.com/lit-element/decorators.js?module';


class RednerList extends LitElement
{
	static properties = {
		items: {},
		title:{type:String},
		nextAdd: {type:String},
		lastInterval:{},
		currentElementKey:{}
	};

	constructor() {
		super();
		this.items = [];
		this.title = "Rednerliste";
	  }

	render(){

		return html`<h1> ${this.title} </h1>
	
		<label for="fname">Enter a new item</label>
		<input @keypress="${this.PressEnter}" @input="${this.changeInput}" type="text" id="newEntryInput" name="newEntry" value="">
		<button @click="${this.addEntry}">Add item</button>

		<div style="display: grid; grid-template-columns: 4em 4em 10em 1fr 4em;grid-auto-rows: minmax(4em, auto); grid-gap: 5px;">
		${this.items.map((i) => html`
		
			

			<button @click=${()=>this.DeleteEntry(i)} style="font-size: xx-large;">🗑️ </button>
			<div style="display: flex;flex-direction: column">
				<button @click=${()=>this.Up(i)}  style="height:50%">&#128314; </button>
				<button @click=${()=>this.Down(i)} style="height:50%" >&#128315;</button>
			</div>
			<div style="text-align: center;height:50%;vertical-align: middle;font-size: xx-large;height:100%;">${this.NumbertoTime(i.val)}</div>
			<div style="text-align: center;height:50%;vertical-align: middle;font-size: xx-large;height:100%;">${i.name}</div>
				
			
			
			${i!==this.currentElementKey ? html`<button @click="${this.getstart(i)}" style="font-size: xx-large;">▶️</button>` : html`<button @click="${this.Stop}" style="font-size: xx-large;">⏸️</button>`}
			`
			
			)}
</div>
		`;
	}

	changeInput(val) {
		this.AddInput = val.target;
	}

	PressEnter(e)
	{
		if (e.key === 'Enter') {
			this.addEntry();
		}
	}
	
	DeleteEntry(obj) {
		var tmp = this.items.slice();
		tmp.splice(this.items.indexOf(obj),1);
		this.items=tmp;
		this.render();
	}

	addEntry()
	{
		if(this.AddInput === undefined)
			return;

		if(this.AddInput.value.trim().length >0)
		{
			var tmp = this.items.slice();
			tmp.push(
				{
					name:this.AddInput.value,
					val:0
				}
				
				);
			this.AddInput.value = "";
			this.items = tmp;
			this.render();
		}

	}
	getstart(ID)
	{
		return function() {
			this.Start(ID);
		} 
	}
	Start (ID)
	{
		//Falls noch kein Eintrag für die ID existiert, erstelle einen
		if(this.lastInterval!== 'undefined')
			clearInterval(this.lastInterval);
		this.lastInterval = setInterval(() => this.doInterval(this), 1000);
		
		this.currentElementKey = ID;	
	}

	//Stoppe die Zeit
	Stop()
	{
		if(this.lastInterval!== 'undefined')
			clearInterval(this.lastInterval);
		this.currentElementKey = "";
		this.render();
		console.log(this.currentElementKey );
	}
	
	//Erhöhe den Zähler bei jedem Interval
	doInterval(obj)
	{
		console.log("dsds")
		console.log(obj)
		var tmp = obj.items.slice();
			tmp[tmp.indexOf(obj.currentElementKey)].val = tmp[tmp.indexOf(obj.currentElementKey)].val +1;
			this.items = tmp;
			this.render();
	}

	getIDTime(ID)
	{
		if(this.map[ID] === undefined)
			return this.NumbertoTime(0)
		return this.NumbertoTime(this.map[ID]);
	}

	NumbertoTime(numb) {
		var sec = numb%60;
		var min = Math.floor(numb/60);
		var hour = Math.floor(numb/3600);
		
		if (hour   < 10) {hour   = "0"+hour;}
		if (min < 10) {min = "0"+min;}
		if (sec < 10) {sec = "0"+sec;}
		return hour+':'+min+':'+sec;
		
	}

	//Zusätzliche Funktionen für mehr Funktionalität
	Up(obj) {
		var pos1=this.items.indexOf(obj);
		if(pos1>0)
			this.switchPos(pos1,pos1-1);
		else if(pos1==0)
			this.switchPos(pos1,this.items.length-1);
	}
	  
	Down(obj) {
		var pos1=this.items.indexOf(obj);
		if(pos1<this.items.length-1 && pos1>=0)
			this.switchPos(pos1,pos1+1);
		else if(pos1==this.items.length-1)
			this.switchPos(pos1,0);
	}
	  
	switchPos(pos1,pos2) {
		var tmp = this.items.slice();
		
		tmp[pos1] = this.items[pos2];
		tmp[pos2] = this.items[pos1];
		
		this.items=tmp;


		this.render();
	}
}

customElements.define("redner-list",RednerList);







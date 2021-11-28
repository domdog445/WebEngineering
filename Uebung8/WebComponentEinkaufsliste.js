//import {html,LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
import {html,LitElement} from 'https://unpkg.com/lit-element/lit-element.js?module'
import {customElement, property} from 'https://unpkg.com/lit-element/decorators.js?module';



class ShoppingList extends LitElement
{
	static properties = {
		items: {},
		title:{type:String},
		nextAdd: {type:String}
	};

	constructor() {
		super();
		this.items = [];
		this.title = "Einkaufsliste";
	  }

	render(){
		return html`<h1> ${this.title} </h1>
	
		<label for="fname">Enter a new item</label>
		<input @keypress="${this.PressEnter}" @input="${this.changeInput}" type="text" id="newEntryInput" name="newEntry" value="">
		<button @click="${this.addEntry}">Add item</button>
		${this.items.map((i) => html`
		
			<li>
			
			<button @click=${()=>this.DeleteEntry(i)} >🗑️ </button>
			<button @click=${()=>this.Up(i)} >&#128314; </button>
			<button @click=${()=>this.Down(i)} >&#128315;</button>
			${i}
			
			</li>`
			
			)}

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
			tmp.push(this.AddInput.value);
			this.AddInput.value = "";
			this.items = tmp;
			this.render();
		}

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

customElements.define("shopping-list",ShoppingList);







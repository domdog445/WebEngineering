//import {html,LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
import {html,LitElement,css} from 'https://unpkg.com/lit-element/lit-element.js?module'


class MenuComponent extends LitElement
{
	static properties = {
		items:{type: Array},
		columnMode:{type: Boolean}
	};
	static get styles(){
		return css`
		* {
			box-sizing: border-box;
			margin: 0px 0px 0px 0px;
		  }

		  #menu 	{
				   margin: 0px 0px 0px 0px;
				  }

		  a {font-size: 18px;
			  margin: 0px 5px 0px 5px;
			  color: white;
			  border-radius: 80px;
			  height: 30px;
			  padding: 0px 30px 0px 30px;
			  margin: 10px 10px 10px 10px;
			  background-color: #6B709B;
			  font-weight: bold;
				  }		 
				  
		  .contentTextrows {
			  color: white;
			  font-size: 30px;
			  text-align: center;
			  display: flex;
			  flex-direction: rows;
			  justify-content: center
		  }
		  .contentTextcolumn {
			color: white;
			font-size: 30px;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: center
		}
		  .boxx {margin: 5px 5px 5px 5px;}
		`
	}

	constructor() {
		super();
		this.items = [];
		this.columnMode = false;
		this.items.push(
			{
				link: "#google.de",
				text: "Google"
			}
		);
		this.items.push(
			{
				link: "#amazon.de",
				text: "Amazon"
			}
		);
	  }

	render(){
		return html`
			<div id="menu" class="boxx" > 
				<div class="${this.columnMode ? "contentTextcolumn" : "contentTextrows"}">
					${this.items.map(i => html`<a href="${i.link}" class="headerlink">${i.text}</a>`)}
				</div>
			</div>
			
			
		`;
	}

	setItems(arr)
	{
		this.items = arr;
	}
	getItems()
	{
		this.items;
	}





}

customElements.define("simple-menucomponent",MenuComponent);







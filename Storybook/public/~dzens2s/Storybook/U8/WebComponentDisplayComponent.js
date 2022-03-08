//import {html,LitElement} from 'https://mkaul.github.io/lit/lib/lit.js'
import {html,LitElement,css} from 'https://unpkg.com/lit-element/lit-element.js?module'


class DisplayComponent extends LitElement
{
	static properties = {
		items:{type: Array},
		columnMode:{type: Boolean},
		currentElement:{},
		comparefunction:{}
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
		this.comparefunction = this.simpleComparefuntion;


		this.items.push(
			{
				hash: "#topcss",
				element: "Google"
			}
		);
		this.items.push(
			{
				hash: "#topjavascript",
				element: "Amazon"
			}
		);

		window.addEventListener("hashchange", ()=>this.HashChanged(this), false);
		
	  }

	render(){
		this.HashChanged(this);
		return html`

			${this.currentElement}

			
			
		`;
	}
	HashChanged(uthis)
	{
		
		for(var i = 0;i < uthis.items.length;i++)
		{
			if(uthis.comparefunction(uthis.items[i].hash,location.hash))
			{
				uthis.currentElement = uthis.items[i].element;
				return
			}
			

		}
	}



	simpleComparefuntion(str1,str2)
	{
		return str1 === str2;
	}
	


}

customElements.define("simple-displaycomponent",DisplayComponent);







export const createPage10Code = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script src="/~dzens2s/Storybook/Style/prism.js"></script>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/prism.css">
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/SummaryStyle.css">
  <p>In diesem Dokument, wird der Source-Code der Aufgaben 10 dargestellt. Hierbei wurde die Menü Komponente und der WWW-Navigator als Single File Component (.vue Datei) geschrieben und automatisch umgewandelt</p>
  

  <details>
  <summary> Source Code WordCounter.js</summary>


  <pre>
		<code class="language-javascript">
		Vue.component('word-counter', {
			data() {
				return {
					value: "",
					countSymbols: 0,
					countLetters: 0,
					countSpace: 0,
					countWords: 0
				}
			},
			methods: {
				CalcCount: function(){
		
					this.countSymbols =""+ this.value.length;
					this.countLetters = this.countFunc(this.value.split(''), (v) => { return v!==' ' && v!=='\n'});
					this.countSpace = this.countFunc(this.value.split(''), (v) => { return v===' '});
					this.countWords = this.countFunc(this.value.split(' '), (v) => { return v.length>0});
				},
				countFunc: function(val,f)
				{
					var result = 0;
					for(var i = 0; i < val.length;i++)
					{
						if(f(val[i]))
							result++;
					}
					return result;
				}
			},
			template: \`	<div>
							<textarea  v-model="value" @input="CalcCount" style="width:100%; height:200px;" > </textarea > 
							<p>Länge Zeichenkette: {{countSymbols}}</p>
							<p>Anzahl Buchstaben: {{countLetters}}</p>
							<p>Anzahl Leerzeichen: {{countSpace}}</p>
							<p>Anzahl Woerter: {{countWords}}</p> 
						</div>\`
		})
		
		</code>
	</pre>
	</details>
	<br>
	<br>
	<details>
	<summary> Source Code MenuComp.vue</summary>
  
  
	<pre>
		  <code class="language-html">
		
		  &lt;template&gt;
		  &lt;div class="hello"&gt;
			&lt;div var="" &gt;
			&lt;div v-bind:style="{ display: 'flex', 'flex-direction': fdirection, 'justify-content': 'center' }"&gt;
				&lt;slot&gt;&lt;/slot&gt;
				&lt;button v-bind:class="[{'': true}, butclass ? butclass : '']" v-for="item in items" :key="item.name" @click="$emit('ClickButton', item)"&gt;{{item}}&lt;/button&gt;
			&lt;/div&gt;
		
		
		
			&lt;/div&gt;
		  &lt;/div&gt;
		&lt;/template&gt;
		
		&lt;script&gt;
		export default {
		  name: 'HelloWorld',
		  props: {
			msg: String,
			fdirection: String,
			items: Array,
			butclass: String
		  }
		}
		&lt;/script&gt;
		
		&lt;!-- Add "scoped" attribute to limit CSS to this component only --&gt;
		&lt;style scoped&gt;
		.VerticalCont {
		  display: flex; 
		  flex-direction: row;
		  background: #555555
		}
		.HorizontalCont {
		  display: flex; 
		  flex-direction: column;
		  background: #FF0000
		}
		li {
		  display: inline-block;
		  margin: 0 10px;
		}
		a {
		  color: #42b983;
		}
		&lt;/style&gt;
		


		  
		  </code>
	  </pre>
	</details>
	<details>
	<summary> Source Code MenuDisplay.vue</summary>
  
  
	<pre>
		  <code class="language-html">
		
		  &lt;template>
			&lt;div>
				{{displayText}}
				&lt;slot>&lt;/slot>
			&lt;/div>
			&lt;/template>

			&lt;script>
			export default {
			name: 'HelloWorld',
			props: {
				displayText: String
			}

			}
			&lt;/script>

			
			&lt;style scoped>
			h3 {
			margin: 40px 0 0;
			}
			ul {
			list-style-type: none;
			padding: 0;
			}
			li {
			display: inline-block;
			margin: 0 10px;
			}
			a {
			color: #42b983;
			}
			&lt;/style>

		


		  
		  </code>
	  </pre>
	</details>
	<details>
	<summary> Source Code MenuDisplayLinks.vue</summary>
  
  
	<pre>
		  <code class="language-html">
		
		  &lt;template>
		&lt;div>
			&lt;ul>
			&lt;li v-for="link in Links" :key="link">
				&lt;a :href="link">{{link}}&lt;/a>
			&lt;/li>
			&lt;/ul>
			&lt;slot>&lt;/slot>
		&lt;/div>
		&lt;/template>

		&lt;script>
		export default {
		name: 'HelloWorld',
		props: {
			Links: String
		}

		}
		&lt;/script>

		&lt;style scoped>
		h3 {
		margin: 40px 0 0;
		}
		ul {
		list-style-type: none;
		padding: 0;
		}
		li {
		display: inline-block;
		margin: 0 10px;
		}
		a {
		color: #42b983;
		}
		&lt;/style>

		


		  
		  </code>
	  </pre>
	</details>
	<details>
	<summary> Source Code WWWNavigator.vue</summary>
  
  
	<pre>
		  <code class="language-html">
		
		  &lt;template>
&lt;div id="header" class="boxx"> &lt;div class="contentText">Header&lt;/div>&lt;br>
  &lt;menucomp butclass='headerlink' fdirection="row" ref="Menu" v-on:ClickButton="ClickedOnMenuTop" v-bind:items="itemsHeader">
  &lt;/menucomp>
  &lt;/div>

  &lt;div id="mainScroll">
	
		&lt;!--Left-->
		&lt;div id="menu" class="boxx" > 
			&lt;div class="contentText">
				&lt;menucomp butclass='navLinks' fdirection='column' v-on:ClickButton="ClickedOnMenuLeft" v-bind:items="itemsLeft">&lt;/menucomp>
			&lt;/div>
		&lt;/div>
			
		&lt;!--Content-->
		&lt;div id="content" class="boxx"> 
			&lt;MenuDisplay  v-bind:displayText="content">&lt;/MenuDisplay>
		&lt;/div>
			
		&lt;!--Right-->
		&lt;div id="right" class="boxx"> 
			&lt;MenuDisplayLinks  v-bind:Links="references">&lt;/MenuDisplayLinks>
		&lt;/div>
	&lt;/div>
	&lt;!--Footer-->
	&lt;div id="footer" class="boxx"> 
		&lt;div class="contentText">Footer: 
			&lt;a href="">Sitemap&lt;/a>
			&lt;a href="">Home&lt;/a>
			&lt;a href="">News&lt;/a>
			&lt;a href="">Contact&lt;/a>
			&lt;a href="">About&lt;/a>
		&lt;/div>
	&lt;/div>


  
  
  
  

&lt;/template>

&lt;script>
import menucomp from './components/MenuComp.vue'
import MenuDisplay from './components/MenuDisplay.vue'
import MenuDisplayLinks from './components/MenuDisplayLinks.vue'

export default {
  name: 'App',
  components: {
    menucomp,
    MenuDisplay,
    MenuDisplayLinks
  },
  methods:
  {
    ClickedOnMenuTop(Val){
      console.log(Val);
      TopKey = Val;
      this.itemsLeft = Object.keys(jsonOBJ[Val])
    },
    ClickedOnMenuLeft(Val)
    {
      console.log("sd:"+Val);
      this.content = jsonOBJ[TopKey][Val].content
      this.references = jsonOBJ[TopKey][Val].references
    }
    

  },
  data()
  {
    return {
      itemsHeader:Object.keys(jsonOBJ),
      itemsLeft:[],
      content:"",
      references:""
    }
  },
  created()
  {
    console.log("created")
    fetch("NavigatorContents.json").then(response => response.json())
		.then(data => {
      jsonOBJ = data;
      console.log(data);
      this.itemsHeader=Object.keys(jsonOBJ)
    });
  }
}
//console.log(this.$refs)
/*
menuelement = this.$refs.Menu;
menuelement.items = ["Anna","Nina","Karla"];*/

var TopKey = "html"; 

var jsonOBJ = {
  
  
}


&lt;/script>

&lt;style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
    box-sizing: border-box;
    margin: 0px 0px 0px 0px;
}
/*Allgemein*/
		
    #header {background-color: #B35653; 
				border-radius: 20px 20px 0px 0px;
				margin: 0px 0px 0px 0px;
				
				}
		#menu {background-color: #B98583;
        margin: 0px 0px 0px 0px;
				grid-area: menu;
				}
		#content{background-color: #759DBA;
				margin: 0px 0px 0px 0px;
				grid-area: content;
				}
		#right 	{background-color: #B98583;
				margin: 0px 0px 0px 0px;
				grid-area: right;
				}
		#footer {background-color: #000000;
				border-radius: 0px 0px 20px 20px ;
				margin: 0px 0px 0px 0px;
				}		 
		a {font-size: 18px;
			margin: 0px 5px 0px 5px;
			color: white;
				}		 
				
		#mainScroll	{
			overflow-y: scroll;
			height: 80%;
			grid-template-areas:
			"menu content right";
			display: grid;
			grid-template-columns: 20% 60% 20%;
		}
		
		body {
			border-radius: 3px 15px 5px 30px;
			
		}
		
		.headerlink {
			border-radius: 80px;
			height: 30px;
			padding: 0px 30px 0px 30px;
			margin: 10px 10px 10px 10px;
			background-color: #6B709B;
			font-weight: bold;
		}
		.navDivs{
			display: flex;
			flex-direction: column;
		}
		.navLinks{
			width: auto;
			border-radius: 80px;
			height: 30px;
			padding: 0px 30px 0px 30px;
			margin: 10px 10px 10px 10px;
			background-color: #ABB0DB;
			font-weight: bold;
		}
		
		
		html, body
		{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		}
		.contentText {
			color: white;
			font-size: 30px;
			text-align: center;
		}
		.boxx {margin: 5px 5px 5px 5px;}
		/*Desktop*/
		
		
		#header {flex: 100%;}
		#menu {	flex: 15%;}
		#content { flex: 70%;}
		#right { flex: 15%;}
		#footer { flex: 100%;}
		
		/*Tablet*/
		@media (max-width: 800px) {
			#mainScroll { 
				display: grid;
				grid-template-columns: 20% 80%;
				grid-template-areas:
				"menu content"
				"right right";
			}
	
		}
		
		/*Phone*/
		@media (max-width: 600px) {
	
			#mainScroll { 
				grid-template-columns: 100%;
				grid-template-areas:
				"menu"
				"content"
				"right";
			}
		}
	&lt;/style>

		


		  
		  </code>
	  </pre>
	</details>
	




`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

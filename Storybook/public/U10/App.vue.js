import menucomp from './components/MenuComp.vue.js'
import MenuDisplay from './components/MenuDisplay.vue.js'
import MenuDisplayLinks from './components/MenuDisplayLinks.vue.js'

export default {
  name: "www-navigator",
	template: `<div>
  
<div id="header" class="boxx" style="flex: 100%;background-color: #B35653; border-radius: 20px 20px 0px 0px; margin: 0px 0px 0px 0px;"> 
  <menucomp butclass='headerlink' fdirection="row" ref="Menu" v-on:ClickButton="ClickedOnMenuTop" v-bind:items="itemsHeader">
  </menucomp>
  </div>
  <div id="mainScroll" style='overflow-y: scroll; height: 80%;  grid-template-areas: "menu content right"; display: grid; grid-template-columns: 20% 60% 20%;'>
	
		<!--Left-->
		<div id="menu" class="boxx" style='background-color: #B98583; margin: 0px 0px 0px 0px; grid-area: menu;' > 
			<div class="contentText" style='color: white;
			font-size: 30px;
			text-align: center;'>
				<menucomp butclass='navLinks' fdirection='column' v-on:ClickButton="ClickedOnMenuLeft" v-bind:items="itemsLeft"></menucomp>
			</div>
		</div>
			
		<!--Content-->
		<div id="content" class="boxx" style='background-color: #759DBA; margin: 0px 0px 0px 0px;grid-area: content;'> 
			<MenuDisplay  v-bind:displayText="content"></MenuDisplay>
		</div>
			
		<!--Right-->
		<div id="right" class="boxx" style='background-color: #B98583; margin: 0px 0px 0px 0px; grid-area: right;'> 
			<MenuDisplayLinks  v-bind:Links="references"></MenuDisplayLinks>
		</div>
	</div>
	<!--Footer-->
	<div id="footer" class="boxx"> 
		<div class="contentText">Footer: 
			<a href="">Sitemap</a>
			<a href="">Home</a>
			<a href="">News</a>
			<a href="">Contact</a>
			<a href="">About</a>
		</div>
    </div></div>`,
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
    fetch("/U10/NavigatorContents.json").then(response => response.json())
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



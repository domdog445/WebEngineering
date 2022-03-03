
import menucomp from './components/MenuComp.vue'
import MenuDisplay from './components/MenuDisplay.vue'
import MenuDisplayLinks from './components/MenuDisplayLinks.vue'

export default {
	template: `
<div id="header" class="boxx"> <div class="contentText">Header</div><br>
  <menucomp butclass='headerlink' fdirection="row" ref="Menu" v-on:ClickButton="ClickedOnMenuTop" v-bind:items="itemsHeader">
  </menucomp>
  </div>

  <div id="mainScroll">
	
		<!--Left-->
		<div id="menu" class="boxx" > 
			<div class="contentText">
				<menucomp butclass='navLinks' fdirection='column' v-on:ClickButton="ClickedOnMenuLeft" v-bind:items="itemsLeft"></menucomp>
			</div>
		</div>
			
		<!--Content-->
		<div id="content" class="boxx"> 
			<MenuDisplay  v-bind:displayText="content"></MenuDisplay>
		</div>
			
		<!--Right-->
		<div id="right" class="boxx"> 
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
	</div>`,
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



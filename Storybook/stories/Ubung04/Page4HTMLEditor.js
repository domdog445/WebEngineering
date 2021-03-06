export const createPage4HTMLE = ({
}) => {
  const article = document.createElement('article');

  const section = `
<script src="https://kit.fontawesome.com/80f1744b25.js" crossorigin="anonymous"></script>
	
	<style>
		body,html {
			margin: 0;
			height: 100%;
		
		}
		body{
			display: grid;
			grid-template-rows: auto auto 1fr;
		}
		button i {
			float: left;
			top: 0;
			
		}
		#Editor {
			background-color: #DDDDDD;
			border: solid black 1px;
			margin: 0px 10px 10px 10px;
      min-height: 300px;
		}
		
		#toolbar {
			background-color: #EEEEEE;
			border: solid gray 1px;
			min-height: 1fr;
			margin: 10px 10px 5px 10px;
			padding: 5px 5px 5px 5px;
		}
		
		.Toolbar{
			margin: 5px 5px 5px 5px;
		}
		
		.menu-item{
			position: relative;
		}
		.menu-item div {
			height: 0px;
			overflow: hidden;
			position: absolute;
			top: 17px;
			Left: 0;
		}

		.menu-item:hover div {
			height: auto;
			padding: 0px 0px 0px 0px
		}
	</style>


<h1>HTML-Editor (WYSIWYG) </h1>
<div id="toolbar">
	<span id="Headlines" class="Toolbar">
		<select name="Headlines" id="HeadlinesSelect" oninput="SelectHeadline()">
		  <option value="h">Format</option>
		  <option value="h1">H1</option>
		  <option value="h2">H2</option>
		  <option value="h3">H3</option>
		  <option value="h4">H4</option>
		  <option value="h5">H5</option>
		  <option value="h6">H6</option>
		  <option value="p">p</option>
		</select>
		
	</span>
	<span id="Special" class="Toolbar">
		<button onclick="pressButt('undo')"><i class="fas fa-undo"></i> </button>
		<button onclick="pressButt('redo')"><i class="fas fa-redo"></i> </button>
		<button onclick="pressButt('delete')"><i class="fas fa-backspace"></i> </button>


	</span>
	<span id="Color" class="Toolbar">
		
		<span class="menu-item"  >
			<button onclick="addForeColor()"><i class="fa fa-font"  style="color:#55BB55" ></i><i class="fas fa-plus" style="color:#55BB55"></i></button>
			<div id="foreColorContainer" ></div>
		</span>

		<input id="hexdezColor" placeholder="#FF0000"></input>
	<span class="menu-item"  >
			<button onclick="addBackColor()"><i class="fa fa-font"  style="background:#55BB55"></i><i class="fas fa-plus" style="background:#55BB55"></i></button>
			<div id="backColorContainer" ></div>
		</span>
	
	</span>

	<span id="Linking" class="Toolbar">
		<button onclick="pressButt('createlink')"><i class="fas fa-link"></i> </button>
		<button onclick="pressButt('unlink')"><i class="fas fa-unlink"></i> </button>
		<button onclick="pressButt('insertimage')"><i class="far fa-image"></i> </button>
		
	</span>

	<span id="Align" class="Toolbar">
		<button onclick="pressButt('justifyLeft')"><i class='fa fa-align-left'></i> </button>
		<button onclick="pressButt('justifyCenter')"><i class='fa fa-align-center'></i> </button>
		<button onclick="pressButt('justifyRight')"><i class='fa fa-align-right'></i> </button>
		<button onclick="pressButt('justifyFull')"><i class='fa fa-align-justify'></i> </button>
	</span>	
	<span id="Ruck" class="Toolbar">
		<button onclick="pressButt('indent')"><i class='fa fa-indent'></i> </button>
		<button onclick="pressButt('outdent')"><i class='fa fa-outdent'></i> </button>
	</span>

	<span id="Style" class="Toolbar">
		<button onclick="pressButt('bold')"><i class="fas fa-bold"></i></button>
		<button onclick="pressButt('italic')"><i class="fas fa-italic"></i> </button>
		<button onclick="pressButt('underline')"><i class="fas fa-underline"></i> </button>
		<button onclick="pressButt('strikeThrough')"><i class="fas fa-strikethrough"></i> </button>
		
		
	</span>

	<span id="SubSuper" class="Toolbar">
		<button onclick="pressButt('subscript')"><i class="fa fa-subscript"></i> </button>
		<button onclick="pressButt('superscript')"><i class="fa fa-superscript"></i> </button>
	</span>

	<span id="Size" class="Toolbar">	
		
		
		
		<select name="SizeSelect" id="SizeSelect" oninput="SelectSize()">
		  <option value="0">Size</option>
		  <option value="1">1</option>
		  <option value="2">2</option>
		  <option value="3">3</option>
		  <option value="4">4</option>
		  <option value="5">5</option>
		  <option value="6">6</option>
		  <option value="7">7</option>
		</select>
		
		
		
	</span>
</div>



<div id="Editor">Es kann losgehen!!!</div>





	<script src="/~dzens2s/Storybook/U4/HTMLEditor.js"></script> 



`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

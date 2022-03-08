export const createPage11WatGGT = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <style>
.ggt1{
	background-color: #FF5555;
	
}
.ggtself{
	background-color: #333333;
	color: #FFFFFF;
}

    table, th, td {
    border: 1px solid black;
    }
    
    
</style>
  <script src="/~dzens2s/Storybook/Style/prism.js"></script>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/prism.css">
  <p>In dieser Aufgabe wurde eine Funktion für die Berechnung des GGTs von 2 Zahlen implementiert. Diese Implementierung wurde dabei in einer WAT-Datei geschrieben und zu WASM konvertiert. Getestet wurde diese Funktion mithilfe der Zahlen 1 - 100.</p>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/SummaryStyle.css">

  <details>
  <summary> Source Code ggt.wat</summary>


  <pre>
		<code class="language-clike">
		(module
			(func (export "ggt") (param i32)(param i32) (result i32)
			  (call $innerggt
				(get_local 0)
				(get_local 1)
			   )
			)
			(func $innerggt (param i32)(param i32) (result i32)
			  (if(result i32)
			   (i32.eq
				(i32.rem_s
				 (get_local 0)
				 (get_local 1)
				)
				(i32.const 0
				)
			   )
			   (then (get_local 1))
			   (else(call $innerggt
				(get_local 1)
				 (i32.rem_s
				 (get_local 0)
				 (get_local 1))
			   ))
			  )
			)
		  )
		  
		
		</code>
	</pre>
	</details>
  
	<details>
	<summary> Tabelle der GGTS (1-100)</summary>
		<table id="GGTs"> </table> 
	</details>
	

 
			

	

<script>

function addTD(value,parent_element,type="td")
{
    let td = document.createElement(type);
    td.innerHTML=value;
    parent_element.append(td)
	return td;
}








var ggts = [];
fetch('/~dzens2s/Storybook/U11/ggt.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes,{})
).then(wasmInstance => {
    
    const {ggt} = wasmInstance.instance.exports;

    for (let i = 1; i <= 100; i++) {
		for (let j = 1; j <= 100; j++) {
			ggts.push(
			{"x": i,
			 "y": j,
			 "ggt":ggt(i, j)
			})
	  }
	}
	table = document.getElementById("GGTs");
	//Header
    tr = document.createElement("tr");
	addTD(" ",tr,"th");
    for (var i = 1; i<101;i++)
    {
		addTD(""+i,tr,"th");
    }
	table.append(tr);
    
	//Lines
	tr = document.createElement("tr");
    for (var i = 0; i<100;i++)
    {
		tr = document.createElement("tr");
		addTD(" "+(i+1),tr,"th");
		for (var j = 0; j<100;j++)
		{
			td = addTD(""+ggts[(i*100)+j].ggt,tr);
			if(ggts[(i*100)+j].ggt ===1)
			{
				td.classList.add("ggt1");
			}
			if(ggts[(i*100)+j].y === ggts[(i*100)+j].x)
			{
				td.classList.add("ggtself");
			}
		}
		table.append(tr);
    }
	




    
});






</script>



`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

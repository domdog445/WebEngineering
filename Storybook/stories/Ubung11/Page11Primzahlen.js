export const createPage11Primzahlen = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <style>
    table, th, td {
    border: 1px solid black;
    }
    
  </style>
  <script src="/~dzens2s/Storybook/Style/prism.js"></script>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/prism.css">
  <p>In dieser Aufgabe wurde eine Funktion für die Berechnung von der Anzahl von Primzahlen entwickelt (In den Zahlen bis 100.000 sind es 9592 Primzahlen). DIese wurde sowohl in C als auch in JavaScript implementiert. Aus der C Datei wurde anschließend eine WASM und eine WAT Datei konvertiert </p>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/SummaryStyle.css">

  <details>
  <summary> Source Code CalcPrim.c</summary>


  <pre>
		<code class="language-clike">
		long prims[10000];

		typedef int bool;
		#define true 1
		#define false 0

		int currentcount = 0;

		bool testPrim(long numb)
		{
			for(long i = 0; i &lt; currentcount;i++)
			{
				if(numb%prims[i]==0)
					return false;
			}
			prims[currentcount] = numb;
			currentcount++;
			return true;
		}
		bool testPrims(long numb)
		{
		for(int i= 2; i&lt;numb ;i++)
		{
			testPrim(i);
		}
		return currentcount;
		}
		</code>
	</pre>
	</details>
  
	<details>
  <summary> Source Code CalcPrim.wat</summary>


  <pre>
		<code class="language-clike">
		(module
			(table 0 anyfunc)
			(memory $0 1)
			(data (i32.const 12) "\\00\\00\\00\\00")
			(export "memory" (memory $0))
			(export "testPrim" (func $testPrim))
			(export "testPrims" (func $testPrims))
			(func $testPrim (; 0 ;) (param $0 i32) (result i32)
			 (local $1 i32)
			 (local $2 i32)
			 (local $3 i32)
			 (block $label$0
			  (block $label$1
			   (br_if $label$1
				(i32.lt_s
				 (tee_local $1
				  (i32.load offset=12
				   (i32.const 0)
				  )
				 )
				 (i32.const 1)
				)
			   )
			   (set_local $2
				(i32.const 16)
			   )
			   (set_local $3
				(i32.const 0)
			   )
			   (loop $label$2
				(br_if $label$0
				 (i32.eqz
				  (i32.rem_s
				   (get_local $0)
				   (i32.load
					(get_local $2)
				   )
				  )
				 )
				)
				(set_local $2
				 (i32.add
				  (get_local $2)
				  (i32.const 4)
				 )
				)
				(br_if $label$2
				 (i32.lt_s
				  (tee_local $3
				   (i32.add
					(get_local $3)
					(i32.const 1)
				   )
				  )
				  (get_local $1)
				 )
				)
			   )
			  )
			  (i32.store offset=12
			   (i32.const 0)
			   (i32.add
				(get_local $1)
				(i32.const 1)
			   )
			  )
			  (i32.store
			   (i32.add
				(i32.shl
				 (get_local $1)
				 (i32.const 2)
				)
				(i32.const 16)
			   )
			   (get_local $0)
			  )
			  (return
			   (i32.const 1)
			  )
			 )
			 (i32.const 0)
			)
			(func $testPrims (; 1 ;) (param $0 i32) (result i32)
			 (local $1 i32)
			 (local $2 i32)
			 (local $3 i32)
			 (local $4 i32)
			 (set_local $1
			  (i32.load offset=12
			   (i32.const 0)
			  )
			 )
			 (block $label$0
			  (br_if $label$0
			   (i32.lt_s
				(get_local $0)
				(i32.const 3)
			   )
			  )
			  (set_local $2
			   (i32.const 2)
			  )
			  (loop $label$1
			   (block $label$2
				(block $label$3
				 (br_if $label$3
				  (i32.lt_s
				   (get_local $1)
				   (i32.const 1)
				  )
				 )
				 (set_local $4
				  (i32.const 0)
				 )
				 (set_local $3
				  (i32.const 16)
				 )
				 (loop $label$4
				  (br_if $label$2
				   (i32.eqz
					(i32.rem_s
					 (get_local $2)
					 (i32.load
					  (get_local $3)
					 )
					)
				   )
				  )
				  (set_local $3
				   (i32.add
					(get_local $3)
					(i32.const 4)
				   )
				  )
				  (br_if $label$4
				   (i32.lt_s
					(tee_local $4
					 (i32.add
					  (get_local $4)
					  (i32.const 1)
					 )
					)
					(get_local $1)
				   )
				  )
				 )
				)
				(i32.store offset=12
				 (i32.const 0)
				 (tee_local $3
				  (i32.add
				   (get_local $1)
				   (i32.const 1)
				  )
				 )
				)
				(i32.store
				 (i32.add
				  (i32.shl
				   (get_local $1)
				   (i32.const 2)
				  )
				  (i32.const 16)
				 )
				 (get_local $2)
				)
				(set_local $1
				 (get_local $3)
				)
			   )
			   (br_if $label$1
				(i32.ne
				 (tee_local $2
				  (i32.add
				   (get_local $2)
				   (i32.const 1)
				  )
				 )
				 (get_local $0)
				)
			   )
			  )
			 )
			 (get_local $1)
			)
		   )
		   
		</code>
	</pre>
	</details>
	<details>
	<summary> Source Code CalcPrim.js</summary>


	<pre>
		  <code class="language-javascript">
		  var prims = [];

			function testPrim(numb)
			{
				for(let i = 0; i < prims.length;i++)
				{
					if(numb%prims[i]==0)
						return false;
				}
				prims.push(numb);
				return true;
			}

			for(var i= 2; i<100000 ;i++)
			{
				testPrim(i);
			}

			 
		  </code>
	  </pre>
	  </details>

	  <details>
	<summary> Messergebnisse</summary>
	<h1>Hier werden die 2 Primzahlberechnungen für unterschiedliche Bereiche durchgeführt und angezeigt. Insgesamt wird jede Anzahl 10 mal berechnet.</h1>
    <h2>Ein Refresh verursacht eine Neuberechnung und somit andere Werte</h2>
	<table>
        <thead>
          <tr>
            <th></th>
            <th colspan="3">Messung JavaScript</th>
            <th colspan="3">Messung Wasm</th>
            <th colspan="3">Anzahl Primzahlen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th></th>
            <th>min</th>
            <th>max</th>
            <th>avg</th>
            <th>min</th>
            <th>max</th>
            <th>avg</th>
          </tr>
          <tr id="R10">
            <td>10</td>
          </tr>
          <tr  id="R100">
            <td>100</td>
          </tr>
          <tr id="R1000">
            <td>1000</td>
          </tr>
          <tr id="R10000">
            <td>10000</td>
          </tr>
          <tr id="R100000">
            <td>100000</td>
          </tr>
        </tbody>
        </table>

	
	  </details>
	  <script>
	  function TimeTestFunction(f,amount)
	  {
		  var start = performance.now();
		  var result = f(amount);
		  var end = performance.now();
		  return {time: end-start, "result": result};
	  }
  
	  function addTD(value,parent_element)
	  {
		  let td = document.createElement("td");
		  td.innerHTML=value;
		  parent_element.append(td)
	  }
	  function getBenchmark(arr)
	  {
		  var min = Infinity;
		  var max = -Infinity;
		  var sum = 0;
		  var vals = [];
		  for(var i = 0; i < arr.length;i++)
		  {
			  var val = arr[i].time
			  if(val < min)
				  min = val;
			  if(val > max)
				  max = val;
			  sum+=val;
			  vals.push(val);
		  }
  
		  var avg = sum/ arr.length;
		  
		  return {
			  min: min,
			  max: max,
			  avg: avg,
			  vals: vals
		  }
	  }
  </script>
  
  
  <script>
  // Calc Prim in JavaScript
  var prims = [];
  
  function testPrimJS(numb)
  {
	  for(let i = 0; i < prims.length;i++)
	  {
		  if(numb%prims[i]==0)
			  return false;
	  }
	  prims.push(numb);
	  return true;
  }
  
  function testprimsJS(amount)
  {
	  prims = [];
	  for(var i= 2; i<amount ;i++)
	  {
		  testPrimJS(i);
	  }
	  return prims.length;
  }
  var MessungJS = [[],[],[],[],[]];
  for(var i = 0; i <10;i++)
  {
	  MessungJS[0].push(TimeTestFunction(testprimsJS,10))
	  MessungJS[1].push(TimeTestFunction(testprimsJS,100))
	  MessungJS[2].push(TimeTestFunction(testprimsJS,1000))
	  MessungJS[3].push(TimeTestFunction(testprimsJS,10000))
	  MessungJS[4].push(TimeTestFunction(testprimsJS,100000))
  }
  
  </script>
  
  <script>
  
  var MessungWASM = [[],[],[],[],[]];
  fetch('/~dzens2s/Storybook/U11/CalcPrimZahlen.wasm').then(response =>
	response.arrayBuffer()
  ).then(bytes =>
	WebAssembly.instantiate(bytes,{})
  ).then(wasmInstance => {
	  const {testPrims} = wasmInstance.instance.exports;
  
	  for(var i = 0; i <10;i++)
	  {
		  MessungWASM[0].push(TimeTestFunction(testPrims,10))
		  MessungWASM[1].push(TimeTestFunction(testPrims,100))
		  MessungWASM[2].push(TimeTestFunction(testPrims,1000))
		  MessungWASM[3].push(TimeTestFunction(testPrims,10000))
		  MessungWASM[4].push(TimeTestFunction(testPrims,100000))
	  }
	  
	  for (var i = 0; i<5;i++)
	  {
		  element = document.getElementById("R"+(Math.pow(10,(i+1))));
		  
		  var Messergebniss = getBenchmark(MessungJS[i])
  
		  addTD(Messergebniss.min,element);
		  addTD(Messergebniss.max,element);
		  addTD(Messergebniss.avg,element);
  
		  var Messergebniss = getBenchmark(MessungWASM[i])
  
		  addTD(Messergebniss.min,element);
		  addTD(Messergebniss.max,element);
		  addTD(Messergebniss.avg,element);
  
		  addTD(MessungJS[i][0].result,element);
	  }
		  
  
	  
  });
  
  
  
  
  
  
  </script>
			

	



`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

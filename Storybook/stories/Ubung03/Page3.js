export const createPage3 = ({
}) => {
  const article = document.createElement('article');

  const section = `
  <script src="/~dzens2s/Storybook/Style/prism.js"></script>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/prism.css">
   
	<title> JavaScript</title>
	<style>
	#console {
		background-color: #000000;
		color: #00FF00;
		height: auto;
		min-height: 20em;
	}
	.console {
		background-color: #000000;
		color: #00FF00;
		height: auto;
		min-height: 20em;
	}
	
	pre {
		background-color: #DDDDDD;
		padding: 10px 10px 10px 20px
	}
	
	.flexContainer{
		display: flex;
		height: 100%;
		align-items: center;
  		justify-content: center;
	}
	.ConsoleContainer{
		display: flex;
		flex-direction: column;
		grid-area: "ConsoleContainer";
		margin: 10px 3px 3px 3px;
		padding: 5px 5px 5px 5px;
		background-color: #EEEEEE;
		border-radius: 30px;
	}
	
	.AufgabenContainer{
		display: flex;
		height: 100%;
		
  		justify-content: center;
		align-items: stretch;
		grid-area: "AufgabenContainer";
	}
	.Aufgabehidden
	{
	visibility:hidden;
	
	height: 0px;
	width: 0px;
	margin: 0px 0px 0px 0px;
	display:none;
	}
	.Aufgabevisible
	{
	visibility:visible;
	width: 100%;
	display: inline-block;
	margin: 10px 3px 3px 3px;
	padding: 5px 5px 5px 5px;
	background-color: #EEEEEE;
	border-radius: 30px;
	padding: 5px 5px 5px 5px;
	}

	.GridContainer
	{
		display: grid;
		grid-template-columns:1fr auto;
		grid-template-areas: "Nav Nav"
							 "AufgabeContainer ConsoleContainer"
	}
	
	button{
		font-size: 20px;
		background-color: #9999FF;
		padding: 5px 10px 5px 10px ;
		border-radius: 10px 10px 10px 10px;
		border: solid 1px #555;
		text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 3px rgba(0, 0, 0, 0.2);
	}
	button:hover{
		
		background-color: #7979DF;
		
	}
	.button1{
		background-color: #c49106;
	}
	.button1:hover{
		background-color: #a47100;
	}
	.button2{
		font-size: 20px;
		background-color: #57f50d;
		padding: 5px 10px 5px 10px ;
		border-radius: 10px 10px 10px 10px;
	}
	.button2:hover{
		background-color: #37d500;
	}
	.NavButtons{
		grid-area: Nav;
		margin: 0px 0px 15px 0px;
		padding: 5px 5px 5px 5px;
		background-color: #EEEEEE;
		border-radius: 20px;
	}

	@media only screen and (max-width: 600px) {
		body
		{
			display: grid;
			grid-template-columns:1fr;
			grid-template-areas: "Nav"
								 "AufgabeContainer" 
								 "ConsoleContainer"
		}
	}

	</style>
	


<script>
//Webseiten Funktionen
function simple_display_function(x)
{
	document.getElementById("Console").innerHTML += x +"<br>";
}
function function_call_bin_display_function(f,x,y)
{
	try
	{
		document.getElementById("Console").innerHTML += f(x,y) +"<br>";
	}
	catch (e)
	{
		simple_display_function(e);
	}
}
function function_call_uni_display_function(f,x)
{
	try
	{
		document.getElementById("Console").innerHTML += f(x) +"<br>";
	}
	catch (e)
	{
		simple_display_function(e);
	}
}


function uni_display_function(f,x)
{
	document.getElementById("Console").innerHTML += f(x) +"<br>";
}
function uni_uni_display_function(f,x,y)
{
	document.getElementById("Console").innerHTML += f(x)(y) +"<br>";
}
function bin_display_function(f,x,y)
{
	document.getElementById("Console").innerHTML += f(x,y) +"<br>";
}
function clearConsole()
{
	document.getElementById("Console").innerHTML ="";
}



//Get Inputs
function getInput1()
{
	return document.querySelector('#Input1').value;
}
function getInput1int()
{
	return parseInt(getInput1() ? getInput1() : 0);
}
function getInput2()
{
	return document.querySelector('#Input2').value;
}
function getInput2int()
{
	return parseInt(getInput2() ? getInput2() : 0);
}

function getInput3()
{
	return document.querySelector('#Input3').value;
}
function getInput3int()
{
	return parseInt(getInput3() ? getInput3() : 0);
}

//Standart Funktionen
function add(x,y)
{
  return x + y;
}
function mul(x,y)
{
  return x * y;
}

//Funktionen der Aufgabe 1 
function identity_function(par)
{
  return function()
  {
	return par;
  }
}
	
////////////////////////////
function addf(x)
{
  return function(y){
	return x+ y;
  }
}
	
////////////////////////////
function applyf(op)
{
	  return function(x)
	  {
	  return function (y)
	  {
		return op(x,y);
	  }
	  }
}

////////////////////////////

function curry(f,x)
{
  return function(y)
  {
    return f(x,y);
  }

}
if(typeof inc1 !== 'undefined')
{
	const inc1 = addf(1);
	const inc2 = applyf(add)(1)
	const inc3 = curry(add,1)
}
////////////////////////////

function methodize(f)
{
  return function(y)
  {
	  return f(this,y);
  }
}

Number.prototype.add = methodize(add);
Number.prototype.mul = methodize(mul);

////////////////////////////

function demethodize(f)
{
  return function(x,y)
  {
	  return f.call(x,y);
  }
}

////////////////////////////
function twice(f)
{
  return function(x)
	{
	  return f(x,x);
	}
}

double = twice(add);
square = twice(mul);

////////////////////////////

function composeu(f1,f2)
{
  return function f(x)
  {
	return f2(f1(x));
  }
}

////////////////////////////

function composeb(f1,f2)
{
  return function (x,y,z)
  {
    return f2(f1(x,y),z);
  }

}

////////////////////////////

function once(f)
{
  var count = 0;
  return function(x,y)
  {
	if(count ===0)
	{
	  count ++;
	  return f(x,y);
	}
	else
	{
	  throw "Fehler Mehrfachnutzung";
	}
  }
}
add_once = once(add);
mul_once = once(mul);


////////////////////////////


function counterf(start)
{
  
  var count = start;
  return {
	  inc: function()
	  {
		count++;
		return count;
	  },
	  dec: function()
	  {
		count--;
		return count;
	  }
  }
}
	
counter = counterf(10);

////////////////////////////

function revocable(_f)
{
  var f=_f
  return{
	invoke: function(x){
	  if(f==null)
		throw "function is revoked";
	  return f(x);
	},
	revoke: function()
	{
	  f=null;
	}
  }
}

temp = revocable(alert);

////////////////////////////
function vector()
{
  var elements = [];
  return {
		
	get: function(i)
	{
	  return elements[i];
	},
	store: function(i,x)
	{
	  elements[i] = x;
	},
	append: function(x)
	{
	  elements.push(x);
	}
  }
}

my_vector = vector();
my_vector.append(7);
my_vector.store(1, 8);
	
	
////////////////////////////	
//Funktionen der Aufgabe 2
////////////////////////////	
function pubsub()
{
	  var subscribers = [];
		return {
			
		subscribe: function(f)
		{
		  subscribers.push(f)
		},
	publish: function(x)
		{
		  subscribers.forEach(subscriber => subscriber(x));
		}
		
  }
}

my_pubsub = pubsub();	

////////////////////////////	
function gensymf(x)
{
  var sym= x;
  var count = 0;
  return function()
  {
	var result = x+count;
	count++;
	return result;
  }
}
gensym = gensymf('G');

////////////////////////////	

function fibonaccif(x,y)
{
  var a = x;
  var b = y;
  return function()
  {
	var result = a;
	var c = a+b;
	a = b;
	b = c;



	return result;
  }
}

////////////////////////////	

fib = fibonaccif(0, 1);

function addg(x)
{
  function inner(y)
  {
	if(y !== undefined)
	{
	  x+=y;
	  return inner;
	}
	else
	{
	  return x;
	}
	   
  }
  if (x !== undefined)
  {
	return inner;
  }
}

////////////////////////////	
function applyg(f)
{
  var x=0;
  function inner(y)
  {

    if(y !== undefined)
    {
      x= f(x,y);
      return inner;
    }
    else
    {
      return x;
    }
  }
  return inner;
}
////////////////////////////	
function m(x,s)
{
  if(s===undefined)
  {
	return {
	  value: x,
	  source: String(x) 
	};
  }
  else
  {
	return {
	  value: x,
	  source: s
	};
  }
}

////////////////////////////

function addm(x,y)
{
  return {
	  value: x.value + y.value,
	  source: "(" + x.source + "+" + y.source+ ")" 
	};
}

////////////////////////////

function binarymf(f,s)
{
  return function(x,y)
  {
	return {
	  value: (f(x.value,y.value)),
	  source: "(" + x.source + s + y.source+ ")" 
	}
   };
}
	
addm2 = binarymf(add, "+"); 
mulm2 = binarymf(mul, "*"); 
	
////////////////////////////	
function binarymf2(f,s)
{
  return function(x,y)
  {
	if(typeof(x) ==="number")
	{
	  x=m(x);
	}
	if(typeof(y) ==="number")
	{
	  y=m(y);
	}
	return {
	  value: (f(x.value,y.value)),
	  source: "(" + x.source + s + y.source+ ")" 
	}
   };
}
	
addm3 = binarymf2(add, "+"); 
mulm3 = binarymf2(mul, "*"); 	

////////////////////////////
	
function unarymf(f,s)
{
  return function(x)
  {
    if(typeof(x) ==="number")
    {
      x=m(x);
    }
    return {
      value: (f(x.value)),
      source: s+"(" + x.source+")" 
    }
   };
}	
	
squarem = unarymf(square, "square");
doublem = unarymf(double, "double");

////////////////////////////

function hyp(x,y)
{
  return Math.sqrt((x*x) + (y*y))
}

////////////////////////////

function exp(arr)
{
  if(Array.isArray(arr))
  {
	var f = arr[0];
	var x = arr[1];
	var y = arr[2];

	return f(exp(x),exp(y));
  }
  else
  {
	return arr;
  }
}

////////////////////////////

var variable = 0;

function store(x)
{
  variable = x;
}

////////////////////////////

function quatre(f,fx,fy,fout)
{
  fout(f(fx(),fy()));
}

////////////////////////////

function unaryc(f)
{
  return function(x,callback)
  {
	callback(f(x));
  }
}
var sqrtc = unaryc(Math.sqrt); 
var doublec = unaryc(double); 
var squarec = unaryc(square); 

////////////////////////////

function binaryc(f)
{
  return function(x,y,callback)
  {
	callback(f(x,y));
  }
}

var addc = binaryc(add); 
var mulc = binaryc(mul); 

</script>


<script>
	currentView = null;
	function viewAufgabe(i)
	{
		if(currentView === null)
		{
			currentView = document.getElementById("a0");
		}
		currentView.className = "Aufgabehidden";
		
		
			currentView = document.getElementById("a"+i);
		
		currentView.className = "Aufgabevisible";
		
	}
</script>

<div class="GridContainer">
<div class="NavButtons">
<div>
<Button onclick="viewAufgabe('0')"> Erkl??rung</button>
</div><div>
<Button class="button1" onclick="viewAufgabe('1_1')"> 1.1</button>
<Button class="button1" onclick="viewAufgabe('1_2')"> 1.2</button>
<Button class="button1" onclick="viewAufgabe('1_3')"> 1.3</button>
<Button class="button1" onclick="viewAufgabe('1_4')"> 1.4</button>
<Button class="button1" onclick="viewAufgabe('1_5')"> 1.5</button>
<Button class="button1" onclick="viewAufgabe('1_6')"> 1.6</button>
<Button class="button1" onclick="viewAufgabe('1_7')"> 1.7</button>
<Button class="button1" onclick="viewAufgabe('1_8')"> 1.8</button>
<Button class="button1" onclick="viewAufgabe('1_9')"> 1.9</button>
<Button class="button1" onclick="viewAufgabe('1_10')"> 1.10</button>
<Button class="button1" onclick="viewAufgabe('1_11')"> 1.11</button>
<Button class="button1" onclick="viewAufgabe('1_12')"> 1.12</button>
<Button class="button1" onclick="viewAufgabe('1_13')"> 1.13</button>
<Button class="button1" onclick="viewAufgabe('1_14')"> 1.14</button>
</div><div>
<Button class="button2" onclick="viewAufgabe('2_1')"> 2.1</button>
<Button class="button2" onclick="viewAufgabe('2_2')"> 2.2</button>
<Button class="button2" onclick="viewAufgabe('2_3')"> 2.3</button>
<Button class="button2" onclick="viewAufgabe('2_4')"> 2.4</button>
<Button class="button2" onclick="viewAufgabe('2_5')"> 2.5</button>
<Button class="button2" onclick="viewAufgabe('2_6')"> 2.6</button>
<Button class="button2" onclick="viewAufgabe('2_7')"> 2.7</button>
<Button class="button2" onclick="viewAufgabe('2_8')"> 2.8</button>
<Button class="button2" onclick="viewAufgabe('2_9')"> 2.9</button>
<Button class="button2" onclick="viewAufgabe('2_10')"> 2.10</button>
<Button class="button2" onclick="viewAufgabe('2_11')"> 2.11</button>
<Button class="button2" onclick="viewAufgabe('2_12')"> 2.12</button>
<Button class="button2" onclick="viewAufgabe('2_13')"> 2.13</button>
<Button class="button2" onclick="viewAufgabe('2_14')"> 2.14</button>
<Button class="button2" onclick="viewAufgabe('2_15')"> 2.15</button>
<Button class="button2" onclick="viewAufgabe('2_16')"> 2.16</button>
</div>
</div>
<div class="AufgabenContainer">
	<div class="Aufgabevisible" id="a0">
	<h3>Auf dieser Seite sind dir bearbeiteten JavaScript Aufgaben pr??sentiert. <br>
		Dabei sind die L??sungen m??glichst interaktiv aufbereitet und k??nnen per Buttondruck ausgef??hrt werden.
		Die dabei entstehende Ausgabe erscheint rechts im Console div<br>
		Die Inputs 1, 2 und 3 befinden sich ebenfalls rechts und k??nnen beliebig gef??llt werden.
		Wird kein Wert eingetragen, wird der Wert 0 angenommen<br>
		<br>
		Der folgende Code, ist f??r mehrere Aufgaben wichtig, aber wurde nicht direkt gefragt. Deshalb wird er einmal hier aufgef??hrt
		</h3>
		
	<pre>
			<code class="language-javascript">
	function add(x,y)
	{
	  return x + y;
	}
	function mul(x,y)
	{
	  return x * y;
	}
			</code>
		</pre>

	</div>
<!-- Aufgabe 1-->
	<div class="Aufgabehidden" id="a1_1">
		<h3>Schreiben Sie eine Funktion identity_function(), die ein Argument als Parameter entgegen nimmt und eine Funktion zur??ck gibt, die dieses Argument zur??ck gibt.</h3>
		<pre>
			<code class="language-javascript">
	function identity_function(par)
	{
	  return function()
	  {
		return par;
	  }
	}

			</code>
		</pre>

		<button onclick="simple_display_function(identity_function(5)())"> identity_function(5)()</button>
		<button onclick="simple_display_function(identity_function(42)())"> identity_function(42)()</button>
		<button onclick="simple_display_function(identity_function('hallo')())"> identity_function("hallo")()</button>
		<button onclick="simple_display_function(identity_function(getInput3())())"> identity_function(Input3)()</button>
	</div>
	<div class="Aufgabehidden" id="a1_2">
		<h3>Schreiben Sie eine Addier-Funktion addf(), so dass addf(x)(y) genau x + y zur??ck gibt. 
		    (Es haben also zwei Funktionsaufrufe zu erfolgen. addf(x) liefert eine Funktion, 
			die auf y angewandt wird.)</h3>
		<pre>
			<code class="language-javascript">
	function addf(x)
	{
	  return function(y){
		return x+ y;
	  }
	}

			</code>
		</pre>

		<button onclick="uni_uni_display_function(addf,5,4)"> addf(5)(4)</button>
		<button onclick="uni_uni_display_function(addf,10,2)"> addf(10)(2)</button>
		<button onclick="uni_uni_display_function(addf,67,-25)"> addf(67)(-25)</button>
		<button onclick="uni_uni_display_function(addf,getInput1int(),getInput2int())"> addf(Input1)(Input2)</button>
	</div>
	<div class="Aufgabehidden" id="a1_3">
		<h3>Schreiben Sie eine Funktion applyf(), die aus einer bin??ren Funktion wie add(x,y) 
		eine Funktion addfberechnet, die mit zwei Aufrufen das gleiche Ergebnis liefert, 
		z.B. addf = applyf(add); addf(x)(y) soll add(x,y) liefern. Entsprechend 
		applyf(mul)(5)(6) soll 30 liefern, wenn mul die bin??re Multiplikation ist.</h3>
		<pre>
			<code class="language-javascript">

	function applyf(op)
	{
	   return function(x)
	   {
		  return function (y)
		  {
			return op(x,y);
		  }

	   }
	}

			</code>
		</pre>

		<button onclick="uni_uni_display_function(applyf(mul),5,6)"> applyf(mul)(5)(6)</button>
		<button onclick="uni_uni_display_function(applyf(add),12,21)"> applyf(add)(12)(21)</button>
		<button onclick="uni_uni_display_function(applyf(mul),getInput1int(),getInput2int())"> applyf(mul)(Input1)(Input2)</button>
		<button onclick="uni_uni_display_function(applyf(add),getInput1int(),getInput2int())"> applyf(add)(Input1)(Input2)</button>
	</div>
	<div class="Aufgabehidden" id="a1_4">
		<h3>Schreiben Sie eine Funktion curry() (von Currying), 
		die eine bin??re Funktion und ein Argument nimmt, 
		um daraus eine Funktion zu erzeugen, die ein zweites Argument entgegen nimmt, 
		z.B. add3 = curry(add, 3);add3(4) ergibt 7. curry(mul, 5)(6) ergibt 30.</h3>
		<pre>
			<code class="language-javascript">

	function curry(f,x)
	{
	  return function(y)
	  {
		return f(x,y);
	  }

	}

			</code>
		</pre>

		<button onclick="uni_display_function(curry(mul,5),6)"> curry(mul,5)(6)</button>
		<button onclick="uni_display_function(curry(add,12),21)"> curry(add,12)(21)</button>
		<button onclick="uni_display_function(curry(mul,getInput1int()),getInput2int())"> curry(mul,Input1)(Input2)</button>
		<button onclick="uni_display_function(curry(add,getInput1int()),getInput2int())"> curry(add,Input1)(Input2)</button>
	</div>
	<div class="Aufgabehidden" id="a1_5">
		<h3>Erzeugen Sie die inc-Funktion mit Hilfe einer der Funktionen addf, applyf und curry aus den letzten Aufgaben,
		ohne die Funktion inc() selbst zu implementieren. (inc(x) soll immer x + 1 ergeben und l??sst sich nat??rlich auch 
		direkt implementieren. Das ist aber hier nicht die Aufgabe.) Vielleicht schaffen Sie es auch, drei Varianten 
		der inc()-Implementierung zu schreiben?</h3>
		<pre>
			<code class="language-javascript">

			

	const inc1 = addf(1);
	const inc2 = applyf(add)(1)
	const inc3 = curry(add,1)

			</code>
		</pre>

		<button onclick="uni_display_function(inc1,6)"> inc1(6)</button>		
		<button onclick="uni_display_function(inc1,getInput1int())"> inc1(Input1)</button>
		
		<button onclick="uni_display_function(inc2,12)"> inc2(12)</button>
		<button onclick="uni_display_function(inc2,getInput1int())"> inc2(Input1)</button>
		
		<button onclick="uni_display_function(inc3,41)"> inc3(41)</button>
		<button onclick="uni_display_function(inc3,getInput1int())"> inc3(Input1)</button>
	</div>
	<div class="Aufgabehidden" id="a1_6">
		<h3>Schreiben Sie eine Funktion methodize(), die eine bin??re Funktion (z.B. add, mul) in eine 
		un??re Methode verwandelt. Nach Number.prototype.add = methodize(add); soll (3).add(4) genau 7 ergeben.</h3>
		<pre>
			<code class="language-javascript">

	function methodize(f)
	{
	  return function(y)
	  {
		  return f(this,y);
	  }
	}
	Number.prototype.add = methodize(add);
	Number.prototype.mul = methodize(mul);
			</code>
		</pre>

		<button onclick="simple_display_function((3).add(4))"> (3).add(4)</button>		
		<button onclick="simple_display_function((getInput1int()).add(getInput2int()))"> (Input1).add(Input2)</button>
		
		<button onclick="simple_display_function((3).mul(4))"> (3).mul(4)</button>		
		<button onclick="simple_display_function((getInput1int()).mul(getInput2int()))"> (Input1).mul(Input2)</button>
	</div>
	<div class="Aufgabehidden" id="a1_7">
		<h3>Schreiben Sie eine Funktion demethodize(), die eine un??re Methode (z.B. add, mul) in eine bin??re 
		Funktion umwandelt. demethodize(Number.prototype.add)(5, 6) soll 11 ergeben.</h3>
		<pre>
			<code class="language-javascript">

	function demethodize(f)
	{
	  return function(x,y)
	  {
		  return f.call(x,y);
	  }
	}
			</code>
		</pre>

		<button onclick="simple_display_function(demethodize(Number.prototype.add)(5, 6))"> demethodize(Number.prototype.add)(5, 6)</button>		
		<button onclick="simple_display_function(demethodize(Number.prototype.add)(getInput1int(), getInput2int()))"> demethodize(Number.prototype.add)(Input1, Input2)</button>
		
		<button onclick="simple_display_function(demethodize(Number.prototype.mul)(5, 6))"> demethodize(Number.prototype.mul)(5, 6)</button>		
		<button onclick="simple_display_function(demethodize(Number.prototype.mul)(getInput1int(), getInput2int()))"> demethodize(Number.prototype.mul)(Input1, Input2)</button>
		
	</div>
	<div class="Aufgabehidden" id="a1_8">
		<h3>Schreiben Sie eine Funktion twice(), die eine bin??re Funktion in eine un??re Funktion 
		umwandelt, die den einen Parameter zweimal weiter reicht. Z.B. var double = twice(add); 
		double(11) soll 22 ergeben; var square = twice(mul); square(11) soll mul(11,11) === 121 ergeben.</h3>
		<pre>
			<code class="language-javascript">

	function twice(f)
	{
	  return function(x)
		{
		  return f(x,x);
		}
	}

	var double = twice(add);
	var square = twice(mul);
			</code>
		</pre>

		<button onclick="simple_display_function(double(5))"> double(5)</button>		
		<button onclick="simple_display_function(double(getInput1int()))"> double(Input1)</button>
		
		<button onclick="simple_display_function(square(5))"> twice(5)</button>		
		<button onclick="simple_display_function(square(getInput1int()))"> twice(Input1)</button>
	</div>
	<div class="Aufgabehidden" id="a1_9">
		<h3>Schreiben Sie eine Funktion composeu(), die zwei un??re Funktionen in eine einzelne 
		un??re Funktion transformiert, die beide nacheinander aufruft, z.B. soll 
		composeu(double, square)(3) genau 36 ergeben.</h3>
		<pre>
			<code class="language-javascript">

	function composeu(f1,f2)
	{
	  return function f(x)
	  {
		return f2(f1(x));
	  }
	}
	</code>
		</pre>

		<button onclick="simple_display_function(composeu(double, square)(3))"> composeu(double, square)(3) </button>		
		<button onclick="simple_display_function(composeu(double, square)(getInput1int()))"> composeu(double, square)(Input1)</button>
		
		<button onclick="simple_display_function(composeu(square, double)(3))"> composeu(square, double )(3) </button>		
		<button onclick="simple_display_function(composeu(square, double)(getInput1int()))"> composeu(square, double)(Input1)</button>
		
	</div>
	<div class="Aufgabehidden" id="a1_10">
		<h3>Schreiben Sie eine Funktion composeb(), die zwei bin??re Funktionen in eine einzelne Funktion transformiert, 
		die beide nacheinander aufruft, z.B. composeb(add, mul)(2, 3, 5) soll 25 ergeben.</h3>
		<pre>
			<code class="language-javascript">

	function composeb(f1,f2)
	{
	  return function (x,y,z)
	  {
		return f2(f1(x,y),z);
	  }

	}
	</code>
		</pre>

		<button onclick="simple_display_function(composeb(add, mul)(2, 3, 5))"> composeb(add, mul)(2, 3, 5) </button>		
		<button onclick="simple_display_function(composeb(add, mul)(getInput1int(),getInput2int(),getInput3int()))"> composeb(add, mul)(Input1, Input2, Input3)</button>

		<button onclick="simple_display_function(composeb(mul, add)(2, 3, 5))"> composeb(mul, add)(2, 3, 5) </button>		
		<button onclick="simple_display_function(composeb(mul, add)(getInput1int(),getInput2int(),getInput3int()))"> composeb(mul, add)(Input1, Input2, Input3)</button>

		
	</div>
	<div class="Aufgabehidden" id="a1_11">
		<h3>Schreiben Sie eine Funktion once(), die einer anderen Funktion nur einmal erlaubt, 
		aufgerufen zu werden, z.B. add_once = once(add); add_once(3, 4) soll beim ersten Mal 7 ergeben, 
		beim zweiten Mal soll jedoch add_once(3, 4) einen Fehlerabbruch bewirken.</h3>
		<pre>
			<code class="language-javascript">
	function once(f)
	{
	  var count = 0;
	  return function(x,y)
	  {
		if(count ===0)
		{
		  count ++;
		  return f(x,y);
		}
		else
		{
		  throw "Fehler Mehrfachnutzung";
		}
	  }
	}
	
	add_once = once(add);
	mul_once = once(add);
	//add_once & mul_once sind bereits einmal gesetzt
	
	</code>
		</pre>

		<button onclick="add_once = once(add); simple_display_function('add_once reseted')"> add_once = once(add);  </button>		
		<button onclick="mul_once = once(add); simple_display_function('mul_once reseted')"> mul_once = once(mul);  </button>		
		
		<button onclick="function_call_bin_display_function(add_once,3, 4)"> add_once(3, 4)</button>
		<button onclick="function_call_bin_display_function(add_once,getInput1int(), getInput2int())"> add_once(Input1, Input2)</button>
		
		<button onclick="function_call_bin_display_function(mul_once,3, 4)"> mul_once(3, 4)</button>		
		<button onclick="function_call_bin_display_function(mul_once,getInput1int(), getInput2int())"> mul_once(Input1, Input2)</button>
	
		
	</div>
	<div class="Aufgabehidden" id="a1_12">
		<h3>Schreiben Sie eine Fabrik-Funktion counterf(), die zwei Funktionen inc() und dec() berechnet, 
		die einen Z??hler hoch- und herunterz??hlen. Z.B. counter = counterf(10); 
		Dann soll counter.inc() 11 und counter.dec() wieder 10 ergeben.</h3>
		<pre>
			<code class="language-javascript">
	function counterf(start)
	{
	  
	  var count = start;
	  return {
		  inc: function()
		  {
			count++;
			return count;
		  },
		  dec: function()
		  {
			count--;
			return count;
		  }
	  }
	}
	
	counter = counterf(10);
	
	</code>
		</pre>

		<button onclick="counter = counterf(10); simple_display_function('counter = counterf(10)')"> counter = counterf(10);  </button>		
		<button onclick="counter = counterf(getInput1int()); simple_display_function('counter = counterf(getInput1int())')"> counter = counterf(Input1);  </button>		
		
		<button onclick="simple_display_function(counter.inc())"> counter.inc()</button>
		<button onclick="simple_display_function(counter.dec())"> counter.dec()</button>
	</div>
	<div class="Aufgabehidden" id="a1_13">
		<h3>Schreiben Sie eine r??cknehmbare Funktion revocable(), 
		die als Parameter eine Funktion nimmt und diese bei Aufruf ausf??hrt. 
		Sobald die Funktion aber mit revoke() zur??ck genommen wurde, 
		f??hrt ein erneuter Aufruf zu einem Fehler. Z.B.<br>
		temp = revocable(alert);<br>
		temp.invoke(7); // f??hrt zu alert(7);<br>
		temp.revoke();<br>
		temp.invoke(8); // Fehlerabbruch!</h3>
		<pre>
			<code class="language-javascript">
	
	function revocable(_f)
	{
	  var f=_f
	  return{
		invoke: function(x){
		  if(f==null)
			throw "function is revoked";
		  return f(x);
		},
		revoke: function()
		{
		  f=null;
		}
	  }
	}
	
	temp = revocable(alert);
	
	</code>
	</pre>

	<button onclick="temp = revocable(alert); simple_display_function('temp = revocable(alert);')"> temp = revocable(alert);</button>		
	<button onclick="temp.revoke(); simple_display_function('temp.revoke();')"> temp.revoke();</button>		
		
	<button onclick="function_call_uni_display_function(temp.invoke,7)"> temp.invoke(7)</button>
	<button onclick="function_call_uni_display_function(temp.invoke,getInput3())"> temp.invoke(Input3)</button>
	
		
	</div>
	<div class="Aufgabehidden" id="a1_14">

		<h3>Implementieren Sie ein "Array Wrapper"-Objekt mit den Methoden get, 
		store und append, so dass ein Angreifer keinen 
		Zugriff auf das innere, private Array hat.
<br>
		my_vector = vector(); <br>
		my_vector.append(7);<br>
		my_vector.store(1, 8);<br>
		my_vector.get(0) // 7<br>
		my_vector.get(1) // 8 <br>
		</h3>
		<pre>
			<code class="language-javascript">
	
	function vector()
	{
	  var elements = [];
	  return {
			
		get: function(i)
		{
		  return elements[i];
		},
		store: function(i,x)
		{
		  elements[i] = x;
		},
		append: function(x)
		{
		  elements.push(x);
		}
	  }
	}

	my_vector = vector();
	my_vector.append(7);
	my_vector.store(1, 8);
	
	</code>
	</pre>

	<button onclick="my_vector = vector(); simple_display_function('my_vector = vector();')"> my_vector = vector()</button>		
	<button onclick="my_vector.append(getInput3()); simple_display_function('my_vector.append('+getInput3()+')')"> append(Input3)</button>		
	<button onclick="my_vector.store(getInput1int(),getInput3()); simple_display_function('my_vector.store('+getInput1()+','+getInput3()+');')"> store(Input1,Input3)</button>		
	<button onclick="my_vector.get(getInput1int()); simple_display_function(my_vector.get(getInput1()))"> get(Input1)</button>		
		
	
		

</div>
	<div class="Aufgabehidden" id="a2_1">

		<h3>Make a function that makes a publish/subscribe object.
		It will reliably deliver all publications to all subscribers in the right order.<br>
		my_pubsub = pubsub();<br>
		my_pubsub.subscribe(alert);<br>
		my_pubsub.publish("It works!"); // alert("It works!") 
		</h3>
		<pre>
			<code class="language-javascript">
	
	function pubsub()
	{
	  var subscribers = [];
		return {
			
	    subscribe: function(f)
	    {
	      subscribers.push(f)
	    },
	    publish: function(x)
	    {
	      subscribers.forEach(subscriber => subscriber(x));
	    }
	  	
	  }
	}

	my_pubsub = pubsub();
	
	</code>
	</pre>

	<button onclick="my_pubsub = pubsub(); simple_display_function('my_pubsub = pubsub()')"> my_pubsub = pubsub()</button>		
	
	<button onclick="my_pubsub.subscribe(alert); simple_display_function('subscribe(alert)')"> subscribe(alert)</button>		
	<button onclick="my_pubsub.subscribe(simple_display_function); simple_display_function('subscribe(console.log)')"> subscribe(simple_display_function)</button>		
	
	<button onclick="my_pubsub.publish('5');"> publish('5')</button>		
	<button onclick="my_pubsub.publish(getInput3());"> publish(Input3)</button>		
	
		

</div>
	<div class="Aufgabehidden" id="a2_2">

		<h3>Make a factory that makes functions that generate unique symbols.<br>
		gensym = gensymf('G'); <br>
		gensym() // 'G0'<br>
		gensym() // 'G1'<br>
		gensym() // 'G2'<br>
		gensym() // 'G3' 
		</h3>
		<pre>
			<code class="language-javascript">
	

	function gensymf(x)
	{
	  var sym= x;
	  var count = 0;
	  return function()
	  {
		var result = x+count;
		count++;
		return result;
	  }
	}

	gensym = gensymf('G');
	
	</code>
	</pre>

	<button onclick="gensym = gensymf('G'); simple_display_function('gensym = gensymf(G)')"> gensym = gensymf('G')</button>	
	<button onclick="gensym = gensymf(getInput3()); simple_display_function('gensym = gensymf('+getInput3()+')')"> gensym = gensymf(Input3)</button>	

	<button onclick="simple_display_function(gensym())"> gensym()</button>		
	
	
	
		

</div>
	<div class="Aufgabehidden" id="a2_3">

		<h3>Make a function that returns a function that will return the next fibonacci number.<br>
			var fib = fibonaccif(0, 1);<br>
			fib() // 0<br>
			fib() // 1<br>
			fib() // 1<br>
			fib() // 2<br>
			fib() // 3<br>
			fib() // 5  <br>
		</h3>
		<pre>
			<code class="language-javascript">
	

	function fibonaccif(x,y)
	{
	  var a = x;
	  var b = y;
	  return function()
	  {
		var result = a;
		var c = a+b;
		a = b;
		b = c;



		return result;
	  }

	}

	fib = fibonaccif(0, 1);
	
	</code>
	</pre>

	<button onclick="fib = fibonaccif(0, 1); simple_display_function('fib = fibonaccif(0, 1);')"> fib = fibonaccif(0, 1);</button>	
	
	<button onclick="simple_display_function(fib())"> fib()</button>		
	
	
	
		

</div>
	<div class="Aufgabehidden" id="a2_4">

		<h3>Write a function that adds from many invocations, until it sees an empty invocation.<br>
			addg(3)(4)(5)() // 12<br>
			addg(1)(2)(4)(8)() // 15 <br>
		</h3>
		<pre>
			<code class="language-javascript">
	function addg(x)
	{
	  function inner(y)
	  {
		if(y !== undefined)
		{
		  x+=y;
		  return inner;
		}
		else
		{
		  return x;
		}
	   
	  }
	  if (x !== undefined)
	  {
		return inner;
	  }
	}
	</code>
	</pre>

	<button onclick="simple_display_function(addg(3)(4)(5)())"> addg(3)(4)(5)()</button>	
	<button onclick="simple_display_function(addg(1)(2)(4)(8)())"> addg(1)(2)(4)(8)()</button>	
	<button onclick="simple_display_function(addg(getInput1int())(getInput2int())())"> addg(Input1)(Input2)()</button>		
	
	
	
		

</div>
	<div class="Aufgabehidden" id="a2_5">

		<h3>Write a function that will take a binary function and apply it to many invocations.<br>
			applyg(add)(3)(4)(5)() // 12<br>
			applyg(add)(1)(2)(4)(8)() // 15 <br>
		</h3>
		<pre>
			<code class="language-javascript">
	function applyg(f)
	{
	  var x=0;
	  function inner(y)
	  {

		if(y !== undefined)
		{
		  x= f(x,y);
		  return inner;
		}
		else
		{
		  return x;
		}
	  }
	  return inner;
	}
	</code>
	</pre>

	<button onclick="simple_display_function(applyg(add)(3)(4)(5)())"> applyg(add)(3)(4)(5)()</button>	
	<button onclick="simple_display_function(applyg(add)(1)(2)(4)(8)())"> applyg(add)(1)(2)(4)(8)()</button>	
	<button onclick="simple_display_function(applyg(add)(getInput1int())(getInput2int())())"> applyg(add)(Input1)(Input2)()</button>		
	
	
	
		

</div>
	<div class="Aufgabehidden" id="a2_6">

		<h3>Write a function m that takes a value and an optional source string and returns them in an object. <br>
		JSON.stringify(m(1)) // {"value": 1, "source": "1"} <br>
		JSON.stringify(m(Math.PI, "pi")) // {"value": 3.14159..., "source": "pi"}  <br>
		</h3>
		<pre>
			<code class="language-javascript">
	function m(x,s)
	{
	  if(s===undefined)
	  {
		return {
		  value: x,
		  source: String(x) 
		};
	  }
	  else
	  {
		return {
		  value: x,
		  source: s
		};
	  }
	}
	</code>
	</pre>

	<button onclick="simple_display_function(JSON.stringify(m(1)))"> m(1)</button>	
	<button onclick="simple_display_function(JSON.stringify(m(Math.PI,'pi')))"> m(Math.PI,'pi')</button>	
	<button onclick="simple_display_function(JSON.stringify(m(getInput2(),getInput3())))"> m(Input2,Input3)</button>	
	
	</div>
	<div class="Aufgabehidden" id="a2_7">

		<h3>Write a function addm that takes two m objects and returns an m object.<br>
			JSON.stringify(addm(m(3), m(4))) // {"value": 7, "source": "(3+4)"}   <br>
		</h3>
		<pre>
			<code class="language-javascript">

	function addm(x,y)
	{
	  return {
		  value: x.value + y.value,
		  source: "(" + x.source + "+" + y.source+ ")" 
		};
	}
	</code>
	</pre>

	<button onclick="simple_display_function(JSON.stringify(addm(m(3), m(4))))"> addm(m(3), m(4))</button>	
	<button onclick="simple_display_function(JSON.stringify(addm(m(getInput1int()), m(getInput2int()))))"> addm(m(Input1), m(Input2))</button>	
	</div>
	<div class="Aufgabehidden" id="a2_8">

		<h3>Write a function binarymf that takes a binary function and a string and returns a 
			function that acts on m objects.<br>
			addm = binarymf(add, "+");<br>
			JSON.stringify(addm(m(3), m(4))) // {"value": 7, "source": "(3+4)"}  <br>
		</h3>
		<pre>
			<code class="language-javascript">

	function binarymf(f,s)
	{
	  return function(x,y)
	  {
		return {
		  value: (f(x.value,y.value)),
		  source: "(" + x.source + s + y.source+ ")" 
		}
	   };
	}
	
	addm2 = binarymf(add, "+"); 
	mulm2 = binarymf(mul, "*"); 
	</code>
	</pre>

	<button onclick="simple_display_function(JSON.stringify(addm2(m(3), m(4))))"> addm2(m(3), m(4))</button>	
	<button onclick="simple_display_function(JSON.stringify(mulm2(m(3), m(4))))"> addm2(m(3), m(4))</button>
	
	<button onclick="simple_display_function(JSON.stringify(addm2(m(getInput1int()), m(getInput2int()))))"> addm2(m(Input1), m(Input2))</button>	
	<button onclick="simple_display_function(JSON.stringify(mulm2(m(getInput1int()), m(getInput2int()))))"> addm2(m(Input1), m(Input2))</button>	
	</div>
	<div class="Aufgabehidden" id="a2_9">

		<h3>Modify function binarymf so that the functions it produces <br>
		can accept arguments that are either numbers or m objects.<br>
		addm = binarymf(add, "+");<br>
		JSON.stringify(addm(3, 4)) // {"value": 7, "source": "(3+4)"} <br>
		
		
		</h3>
		<pre>
			<code class="language-javascript">

	function binarymf2(f,s)
	{
	  return function(x,y)
	  {
		if(typeof(x) ==="number")
		{
		  x=m(x);
		}
		if(typeof(y) ==="number")
		{
		  y=m(y);
		}
		return {
		  value: (f(x.value,y.value)),
		  source: "(" + x.source + s + y.source+ ")" 
		}
	   };
	}
	
	addm3 = binarymf2(add, "+"); 
	mulm3 = binarymf2(mul, "*"); 
	
	</code>
	</pre>

	<button onclick="simple_display_function(JSON.stringify(addm3(3, m(4))))"> addm3(3, m(4))</button>	
	<button onclick="simple_display_function(JSON.stringify(mulm3(m(3), 4)))"> mulm3(m(3), 4)</button>
	
	<button onclick="simple_display_function(JSON.stringify(addm3(m(getInput1int()), m(getInput2int()))))"> addm3(m(Input1), m(Input2))</button>	
	<button onclick="simple_display_function(JSON.stringify(mulm3(getInput1int(), getInput2int())))"> mulm3(Input1, Input2)</button>	
	</div>
	<div class="Aufgabehidden" id="a2_10">

		<h3>Write function unarymf, which is like binarymf except that it acts on unary functions.<br>
			squarem = unarymf(square, "square");<br>
			JSON.stringify(squarem(4)) // {"value": 16, "source": "(square 4)"}  <br>
		
		
		</h3>
		<pre>
			<code class="language-javascript">

	function unarymf(f,s)
	{
	  return function(x)
	  {
		if(typeof(x) ==="number")
		{
		  x=m(x);
		}
		return {
		  value: (f(x.value)),
		  source: s+"(" + x.source+")" 
		}
	   };
	}
	
	squarem = unarymf(square, "square");
	doublem = unarymf(double, "double");
	
	</code>
	</pre>

	<button onclick="simple_display_function(JSON.stringify(squarem(3)))"> squarem(3)</button>	
	<button onclick="simple_display_function(JSON.stringify(doublem(m(3))))"> doublem(m(3))</button>
	
	<button onclick="simple_display_function(JSON.stringify(squarem(getInput1int())))"> squarem(Input1)</button>	
	<button onclick="simple_display_function(JSON.stringify(doublem(getInput1int())))"> doublem(m(Input1))</button>
	
	</div>
	<div class="Aufgabehidden" id="a2_11">

		<h3>Write a function that takes the lengths of two sides of a 
		triangle and computes the length of the hypotenuse. 
		(Hint: c2 = a2 + b2)<br>
		hyp(3, 4) // 5  <br>
		
		
		</h3>
		<pre>
			<code class="language-javascript">

	function hyp(x,y)
	{
	  return Math.sqrt((x*x) + (y*y))
	}
	
	</code>
	</pre>

	<button onclick="simple_display_function(hyp(3, 4))"> hyp(3, 4)</button>	
	<button onclick="simple_display_function(hyp(getInput1(), getInput2()))"> hyp(Input1, Input2)</button>	
	
	</div>
	<div class="Aufgabehidden" id="a2_12">

		<h3>Write a function that evaluates array expressions.<br>
			hypa = [ Math.sqrt, [ add, [mul, 3, 3], [mul, 4, 4] ] ];<br>
			exp(hypa) // 5 <br>
		
		</h3>
		<pre>
			<code class="language-javascript">

	function exp(arr)
	{
	  if(Array.isArray(arr))
	  {
		var f = arr[0];
		var x = arr[1];
		var y = arr[2];

		return f(exp(x),exp(y));
	  }
	  else
	  {
		return arr;
	  }
	}
	
	</code>
	</pre>

	<button onclick="simple_display_function(exp([ Math.sqrt, [ add, [mul, 3, 3], [mul, 4, 4] ] ]))"> exp([ Math.sqrt, [ add, [mul, 3, 3], [mul, 4, 4] ] ])</button>	
	<button onclick="simple_display_function(exp([ Math.sqrt, [ add, [square, 4], [square, 5] ] ]))"> exp([ Math.sqrt, [ add, [square, 4], [square, 5] ] ])</button>	
	
	<button onclick="simple_display_function(exp([ Math.sqrt, [ add, [square, getInput1int()], [square, getInput2int()] ] ]))"> exp([ Math.sqrt, [ add, [square, Input1], [square, Input2] ] ])</button>	
	
	</div>
	<div class="Aufgabehidden" id="a2_13">

		<h3>Make a function that stores a value in a variable. <br>
			var variable; <br>
			store(5); // variable === 5 
		
		</h3>
		<pre>
			<code class="language-javascript">

	var variable = 0;

	function store(x)
	{
	  variable = x;
	}
	
	</code>
	</pre>

	<button onclick="store(5);simple_display_function('Store('+variable+')') "> store(5)</button>	
	<button onclick="store(42);simple_display_function('Store('+variable+')') "> store(2)</button>	
	<button onclick="store(getInput1());simple_display_function('Store('+variable+')') "> store(Input1)</button>	
	
	<button onclick="simple_display_function(variable) "> show Value</button>	
	</div>
	<div class="Aufgabehidden" id="a2_14">

		<h3>Make a function that takes a binary function, two functions that provide operands, and a function that takes the result.
			quatre( add, identityf(3), identityf(4), store ); // variable === 7 
		
		</h3>
		<pre>
			<code class="language-javascript">

	function quatre(f,fx,fy,fout)
	{
	  fout(f(fx(),fy()));
	}
	
	</code>
	</pre>

	<button onclick="quatre( add, identity_function(3), identity_function(4), store );simple_display_function('variable='+variable)"> quatre( add, identityf(3), identityf(4), store )</button>	
	<button onclick="quatre( mul, identity_function(3), identity_function(4), store );simple_display_function('variable='+variable)"> quatre( mul, identityf(3), identityf(4), store )</button>	
	
	<button onclick="quatre( add, identity_function(getInput1int()), identity_function(getInput2int()), store );simple_display_function('variable='+variable)"> quatre( add, identityf(Input1), identityf(Input2), store )</button>	
	<button onclick="quatre( mul, identity_function(getInput1int()), identity_function(getInput2int()), store );simple_display_function('variable='+variable)"> quatre( mul, identityf(Input1), identityf(Input2), store )</button>	
	
	<button onclick="quatre( mul, identity_function(getInput1int()), identity_function(getInput2int()), alert );"> quatre( mul, identityf(Input1), identityf(Input2), alert )</button>	
	<button onclick="simple_display_function(variable);"> get variable</button>	
	
	
	</div>
	<div class="Aufgabehidden" id="a2_15">

		<h3>Make a function that takes a unary function, 
			and returns a function that takes an argument and a callback. <br>
			sqrtc = unaryc(Math.sqrt); sqrt(81, store) // variable === 9 
		
		</h3>
		<pre>
			<code class="language-javascript">

	function unaryc(f)
	{
	  return function(x,callback)
	  {
		callback(f(x));
	  }

	}
	var sqrtc = unaryc(Math.sqrt); 
	var doublec = unaryc(double); 
	var squarec = unaryc(square); 
	
	</code>
	</pre>

	<button onclick="sqrtc(81,store);simple_display_function('variable='+variable)"> sqrtc(81,store)</button>	
	<button onclick="doublec(21,store);simple_display_function('variable='+variable)"> doublec(21,store)</button>	
	<button onclick="squarec(4,store);simple_display_function('variable='+variable)"> squarec(4,store)</button>	
	
	<button onclick="sqrtc(getInput1int(),store);simple_display_function('variable='+variable)"> sqrtc(Input1,store)</button>	
	<button onclick="doublec(getInput1int(),store);simple_display_function('variable='+variable)"> doublec(Input1,store)</button>	
	<button onclick="squarec(getInput1int(),store);simple_display_function('variable='+variable)"> squarec(Input1,store)</button>	
	
	<button onclick="simple_display_function(variable);"> get variable</button>	
	
	
	</div>
	<div class="Aufgabehidden" id="a2_16">

		<h3>Make a function that takes a binary function, and returns a  
			function that takes two arguments and a callback.<br>
			addc = binaryc(add); addc(4, 5, store) // variable === 9 <br>
			mulc = binaryc(mul); mulc(2, 3, store) // variable === 6 <br>
		
		</h3>
		<pre>
			<code class="language-javascript">

	function binaryc(f)
	{
	  return function(x,y,callback)
	  {
		callback(f(x,y));
	  }
	}

	var addc = binaryc(add); 
	var mulc = binaryc(mul); 
	</code>
	</pre>

	<button onclick="addc(4, 5, store);simple_display_function('variable='+variable)"> addc(4, 5, store)</button>	
	<button onclick="mulc(2, 3, store);simple_display_function('variable='+variable)"> mulc(2, 3, store)</button>	
	
	<button onclick="addc(getInput1int(), getInput2int(), store);simple_display_function('variable='+variable)"> addc(Input1, Input2, store)</button>	
	<button onclick="mulc(getInput1int(), getInput2int(), store);simple_display_function('variable='+variable)"> mulc(Input1, Input2, store)</button>	
	
	
	<button onclick="simple_display_function(variable);"> get variable</button>	
	
	</div>
	
	
</div>
<div class="ConsoleContainer">
<div>
<center><button onclick="clearConsole()"> clearConsole()</button> </center><br>

<label for="Input1">Input1:</label>
<input type="number" name="Input1" id="Input1">
<br>
<label for="Input2">Input2:</label>
<input type="number" name="Input2" id="Input2">
<br>
<label for="Input3">Input3:</label>
<input type="text" name="Input3" id="Input3">
</div>
<div>
<h1> Console </h1>
<div id="Console" class="console"> </div>
</div>
</div>
</GridContainer>




`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

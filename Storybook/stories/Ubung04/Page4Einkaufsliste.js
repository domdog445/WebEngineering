export const createPage4EL = ({
}) => {
  const article = document.createElement('article');

  const section = `
  <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title> Einkaufsliste</title>
</head>

<!-- Struktur der Webseite-->
<body>
  <h1> Einkaufsliste </h1> <br>
  
  <label for="fname">Enter a new item</label>
  <input type="text" id="newEntryInput" name="newEntry" value="">
  <button id="newEntryButton">Add item</button>

<ul id="Einkaufsliste">
</ul>  




  <script>

  //Variablen

if(typeof actualEntry !== "undefined")
{
	var actualEntry = 1;

	var lastInterval;
	var map = new Map();	
	var currentElementKey;
	var currentElement;
	//Dom Elemente
	var AddEntryInput = document.getElementById('newEntryInput');
	var AddEntryButton = document.getElementById('newEntryButton');
	var Container  = document.getElementById('Einkaufsliste');
}
else
{
	actualEntry = 1;
	//Dom Elemente
	AddEntryInput = document.getElementById('newEntryInput');
	AddEntryButton = document.getElementById('newEntryButton');
	Container  = document.getElementById('Einkaufsliste');
  map = new Map();	
}

AddEntryInput.focus();

//Add Eventlistener
AddEntryButton.addEventListener ('click', addEntry, true);
AddEntryInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addEntry();
    }
});



//nötige Funktionen

function DeleteEntry(obj) {
	
  Container.removeChild(obj);
 }
 
function addEntry()
{
	
	if(AddEntryInput.value.length===0)
		return;
	
	let li = document.createElement('li');
	li.id = "Entry" + actualEntry;
	li.innerHTML =  \`
		<button id="Del\`+actualEntry+\`">
			Delete
		</button>
		<button id="Up\`+actualEntry+\`">
			&#8657;
		</button>
		<button id="Down\`+actualEntry+\`">
			&#8659;
		</button> \`+AddEntryInput.value
	;
	

	
	Container.appendChild(li);
	
	//Listener für die Button Funktionalität hinzufügen
	DelButton = document.getElementById('Del'+actualEntry);
	DelButton.addEventListener ('click', 
				function() {   DeleteEntry(li)}, true);
				
	UpButton = document.getElementById('Up'+actualEntry);
	UpButton.addEventListener ('click', 
				function() {   Up(li)}, true);
				
	DownButton = document.getElementById('Down'+actualEntry);
	DownButton.addEventListener ('click', 
				function() {   Down(li)}, true);
	
	
	
	actualEntry++;
	AddEntryInput.value = "";
}
 
 //Zusätzliche Funktionen für mehr Funktionalität
function Up(obj) {
  
  //Die Objekte beschaffen
  const frag = document.createDocumentFragment();
  var list = document.getElementById('Einkaufsliste');
  var items = list.querySelectorAll("li");
  var itemsArr = Array.from(items)
  var arrPos = itemsArr.indexOf(obj);
  
  if(arrPos <= 0)
	  return
  
  //Ändern der Reihenfolge
  let otherObj = itemsArr[arrPos-1];
  
  itemsArr[arrPos-1] = obj;
  itemsArr[arrPos] = otherObj;

  for (let item of itemsArr) {
    frag.appendChild(item);
  }
  list.appendChild(frag);
}

function Down(obj) {

  //Die Objekte beschaffen
  const frag = document.createDocumentFragment();
  var list = document.getElementById('Einkaufsliste');
  var items = list.querySelectorAll("li");
  var itemsArr = Array.from(items)
  var arrPos = itemsArr.indexOf(obj);
  

  if(arrPos >= itemsArr.length-1)
	  return
  
  //Ändern der Reihenfolge
  let otherObj = itemsArr[arrPos+1];
  
  itemsArr[arrPos+1] = obj;
  itemsArr[arrPos] = otherObj;

  
  for (let item of itemsArr) {
    frag.appendChild(item);
  }
  list.appendChild(frag);
}



  </script> 
</body>

`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

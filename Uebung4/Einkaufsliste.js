//Dom Elemente
const AddEntryInput = document.getElementById('newEntryInput');
const AddEntryButton = document.getElementById('newEntryButton');
const Container  = document.getElementById('Einkaufsliste');

//Variablen
let actualEntry = 1;

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
	li.innerHTML = AddEntryInput.value + `
		<button id="Del`+actualEntry+`">
			Delete
		</button>
		<button id="Up`+actualEntry+`">
			&#8657;
		</button>
		<button id="Down`+actualEntry+`">
			&#8659;
		</button>
	`;
	

	
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
  var list = document.querySelector("ul");
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
  var list = document.querySelector("ul");
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



var AddEntryInput = document.getElementById('newEntryInput');
var AddEntryButton = document.getElementById('newEntryButton');

AddEntryButton.addEventListener ('click', addEntry, true);
let actualEntry = 1;
var Container  = document.getElementById('Rednerliste');

AddEntryInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addEntry();
    }
});



	var lastInterval;
	
	map = new Map();
	
	var currentElementKey;
	var currentElement;
	
	function Start (ID)
	{
		currentElement = document.getElementById("Time" + ID);
		
		if(map.get(ID)=== undefined)
			map.set(ID,0);
		if(lastInterval!== 'undefined')
			clearInterval(lastInterval);
		lastInterval = setInterval(doInterval, 1000);
		
		currentElementKey = ID;
		
		
		StopButton = document.getElementById("Stop" + ID);
		MakeObjVisible(StopButton);
		
		StartButton = document.getElementById("Start" + ID);
		MakeObjHide(StartButton);
		
	}
	
	function Stop(ID)
	{
		if(lastInterval!== 'undefined')
			clearInterval(lastInterval);
		StartButton = document.getElementById("Start" + ID);
		MakeObjVisible(StartButton);
		StopButton = document.getElementById("Stop" + ID);
		MakeObjHide(StopButton);
	}
	
	function doInterval()
	{
		
		map.set(currentElementKey,map.get(currentElementKey)+1);
		console.log(map.get(currentElementKey));
		
		
		
		
		currentElement.innerHTML =  map.get(currentElementKey).toTime();
		
		
		
	}
	
	
Number.prototype.toTime = function () {
    var sec = this%60;
	var min = Math.floor(this/60);
	var hour = Math.floor(this/3600);
	
	if (hour   < 10) {hour   = "0"+hour;}
    if (min < 10) {min = "0"+min;}
    if (sec < 10) {sec = "0"+sec;}
    return hour+':'+min+':'+sec;
	
}	


function MakeObjHide(obj)
{
	obj.style.display = "none";
}

function MakeObjVisible(obj)
{
	obj.style.display = "inline";
}





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
		<button id="Start`+actualEntry+`">
			Start!
		</button>
		<button id="Stop`+actualEntry+`">
			Stop!
		</button> 
		<inline id="Time`+actualEntry+`"> 00:00:00</inline>
	`;
	

	
	
	Container.appendChild(li);
	
	
	DelButton = document.getElementById('Del'+actualEntry);
	DelButton.addEventListener ('click', 
				function() {   DeleteEntry(li)}, true);
				
	UpButton = document.getElementById('Up'+actualEntry);
	UpButton.addEventListener ('click', 
				function() {   Up(li)}, true);
				
	DownButton = document.getElementById('Down'+actualEntry);
	DownButton.addEventListener ('click', 
				function() {   Down(li)}, true);

let count = actualEntry;
	StartButton = document.getElementById('Start'+actualEntry);
	StartButton.addEventListener ('click', 
				function() {   Start(""+count)}, true);

	StopButton = document.getElementById('Stop'+actualEntry);
	StopButton.addEventListener ('click', 
				function() {   Stop(""+count)}, true);
	
	MakeObjHide(StopButton);
	
	actualEntry++;
	AddEntryInput.value = "";
}
 
 
function Up(obj) {
  const frag = document.createDocumentFragment();
  
  var list = document.querySelector("ul");
  var items = list.querySelectorAll("li");
  var itemsArr = Array.from(items)
  var arrPos = itemsArr.indexOf(obj);
  if(arrPos <= 0)
	  return
  let otherObj = itemsArr[arrPos-1];
  itemsArr[arrPos-1] = obj;
  itemsArr[arrPos] = otherObj;

  for (let item of itemsArr) {
    frag.appendChild(item);
  }
  list.appendChild(frag);
}

function Down(obj) {
  const frag = document.createDocumentFragment();
  
  var list = document.querySelector("ul");
  var items = list.querySelectorAll("li");
  var itemsArr = Array.from(items)
  var arrPos = itemsArr.indexOf(obj);
  if(arrPos >= itemsArr.length-1)
	  return
  let otherObj = itemsArr[arrPos+1];
  itemsArr[arrPos+1] = obj;
  itemsArr[arrPos] = otherObj;

  for (let item of itemsArr) {
    frag.appendChild(item);
  }
  list.appendChild(frag);
}



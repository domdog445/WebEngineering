//Make Editable
var editor = document.getElementById("Editor");
var hexdezColorInput = document.getElementById("hexdezColor");



var backColorContainer = document.getElementById("backColorContainer");
var foreColorContainer = document.getElementById("foreColorContainer");

//Make Editable
editor.contentEditable = "true"; 

//Hinzufügen von StartButtons für die Farben
addBackColor("#000000");
addBackColor("#FFFFFF");
addBackColor("#FF0000");
addBackColor("#00FF00");
addBackColor("#0000FF");

addForeColor("#000000");
addForeColor("#FFFFFF");
addForeColor("#FF0000");
addForeColor("#00FF00");
addForeColor("#0000FF");

//Hinzufügen von Farben für dynamische Farbverwaltung
function addBackColor(col=hexdezColorInput.value)
{
	//Entferne den ältesten Eintrag wenn es bereits 5 Einträge gibt
	if(backColorContainer.childElementCount >=5)
		backColorContainer.removeChild(backColorContainer.childNodes[0]); 
	
	//Erstelle einen Button
	var btn = document.createElement("BUTTON");   
	btn.innerHTML = "<i class='fas fa-font' style='background:"+col+"'></i> " + "<i class='fas fa-paint-brush' style='color:"+col+"'></i>";                  // Insert text
	
	//Füge den Listener hinzu
	btn.addEventListener("click", function()
	{
		pressButtBackColor(col);
		
	}); 
	
	backColorContainer.appendChild(btn);               
	
	
}
function addForeColor(col=hexdezColorInput.value)
{
	//Entferne den ältesten Eintrag wenn es bereits 5 Einträge gibt
	if(foreColorContainer.childElementCount >=5)
		foreColorContainer.removeChild(foreColorContainer.childNodes[0]); 
	
	//Erstelle einen Button
	var btn = document.createElement("BUTTON");   // Create a <button> element
	btn.innerHTML = "<i class='fas fa-font' style='color:"+col+"'></i> " + "<i class='fas fa-paint-brush' style='color:"+col+"'></i>";                  // Insert text
	
	//Füge den Listener hinzu
	btn.addEventListener("click", function()
	{
		pressButtColor(col);
		
	}); 
	
	foreColorContainer.appendChild(btn);               // Append <button> to <body> 
	
	
}


function pressButtWithVal(command,val)
{
	document.execCommand(command, false, val);
	
}
//Get Selects
var HeadlineSelect = document.getElementById("HeadlinesSelect");
var SizeSelect = document.getElementById("SizeSelect");

//SelectFunctions
function SelectHeadline()
{
	pressButt(HeadlineSelect.value)
	HeadlineSelect.value="h";
}
function SelectSize()
{
	pressButtWithVal("fontSize",SizeSelect.value)
	SizeSelect.value="0";
}




//PressToolButton
function pressButt(command)
{
	if (command == 'h1' || command == 'h2'|| command == 'h3'|| command == 'h4'|| command == 'h5'|| command == 'h6' || command == 'p') {
      document.execCommand('formatBlock', false, command);
    }
    if (command == 'forecolor' || command == 'backcolor') {
      document.execCommand(command, false, value);
    }
    if (command == 'createlink' || command == 'insertimage') {
      url = prompt('Enter the link here: ', 'http:\/\/');
      document.execCommand(command, false, url);
    } else document.execCommand(command, false, null);
	
}

//Press Button für Textfarbe
function pressButtColor(value= hexdezColorInput.value)
{
	document.execCommand('foreColor', false, value);
}

//Press Button für Hintergrundfarbe
function pressButtBackColor(value= hexdezColorInput.value)
{
	document.execCommand('backColor', false, value);
}
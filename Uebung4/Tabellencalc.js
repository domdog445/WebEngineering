//Create Grid
var container = document.getElementById("grid-container");
const map1 = new Map();


//Bennenung Oben
container.innerHTML += '<div class="grid-item-des"></div>';
for(i=1; i < 11;i++)
{
	container.innerHTML += '<div class="grid-item-des">'+i+'</div>';
}

for(i=0; i < 10;i++)
{
	//Bennenung links
	container.innerHTML += '<div class="grid-item-des">'+getChar(i)+'</div>';
	
	//Die Zellen
	for(j=1; j < 11;j++)
	{
		container.innerHTML += '<div class="grid-item" id="'+getChar(i)+j+'"></div>';
	}
}




//Make it Editable & Add Listener
var all = document.getElementsByClassName("grid-item");

for (let i=0, max=all.length; i < max; i++) {
     all[i].contentEditable = "true"; 
	 all[i].addEventListener('focusout', function() {
		map1.set(all[i].id,all[i].textContent);
		edited(all[i].textContent,all[i])
	});
	all[i].addEventListener('focusin', function() {
    all[i].textContent = map1.get(all[i].id);
	})
};



console.log(container);

//Hilfvariable
function getChar(val)
{
	return String.fromCharCode(65 + val);
}
String.prototype.isInt = function()
{
	return !isNaN(parseInt(this))
}



//Edit Function
function edited(newVal,obj)
{
	//Return if no '=' Symbol
	if(!newVal.startsWith('='))
		return;	
	
	var Val = newVal.substring(1);
	try {
		//SUM
		if(Val.toLowerCase().startsWith("sum"))
		{
			var allvals = Val.split("(")[1].split(")")[0];
			console.log(allvals);
			
			var arrval = allvals.split(",");
			
			var result = getIntVal(arrval[0]);
			for(i = 1;i < arrval.length;i++){
				result +=getIntVal(arrval[i]);
					
			};
			obj.textContent = result;
			
		}
		//SUB
		if(Val.toLowerCase().startsWith("sub"))
		{
			var allvals = Val.split("(")[1].split(")")[0];
			console.log(allvals);
			
			var arrval = allvals.split(",");
			
			var result = getIntVal(arrval[0]);
			for(i = 1;i < arrval.length;i++){
				result -=getIntVal(arrval[i]);
					
			};
			console.log(result);
			obj.textContent = result;
			
		}
		//mul
		if(Val.toLowerCase().startsWith("mul"))
		{
			var allvals = Val.split("(")[1].split(")")[0];
			console.log(allvals);
			
			var arrval = allvals.split(",");
			
			var result = getIntVal(arrval[0]);
			for(i = 1;i < arrval.length;i++){
				result *=getIntVal(arrval[i]);
					
			};
			console.log(result);
			obj.textContent = result;
			
		}
		//div
		if(Val.toLowerCase().startsWith("div"))
		{
			var allvals = Val.split("(")[1].split(")")[0];
			console.log(allvals);
			
			var arrval = allvals.split(",");
			
			var result = getIntVal(arrval[0]);
			
			
			for(i = 1;i < arrval.length;i++){
				result /=getIntVal(arrval[i]);
			};
			console.log(result);
			obj.textContent = result;
			
		}
		//pow
		if(Val.toLowerCase().startsWith("pow"))
		{
			var allvals = Val.split("(")[1].split(")")[0];
			console.log(allvals);
			
			var arrval = allvals.split(",");
			obj.textContent = Math.pow(getIntVal(arrval[0]),getIntVal(arrval[1]));
			
		}
		
		//sqrt
		if(Val.toLowerCase().startsWith("sqrt"))
		{
			var allvals = Val.split("(")[1].split(")")[0];
			console.log(allvals);
			
			var arrval = allvals.split(",");
			obj.textContent = Math.sqrt(getIntVal(arrval[0]));
			
		}
		
		
	} catch (e)
	{
		obj.textContent = "---Error---";
	}
	
}


function getIntVal(currentValue)
{
	if(currentValue.isInt())
		return parseInt(currentValue);
	else
	{
		field = document.getElementById(currentValue);
		if(field !== undefined && field !== null)
			if(field.textContent.isInt())
				return parseInt(field.textContent);
		throw "Error";
	}
	
}
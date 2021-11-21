var http = require( 'http');
var fs = require("fs")


/*
if(process.argv.length >= 3)
{
	var amount = process.argv[2];
	
	var filename = "output.txt"
	if(process.argv.length >= 4)
		filename = process.argv[3];
	
	genAlphaFile(amount,filename)
}
else
{
	console.log("nodess [amount] [filename]" + process.argv);
}*/

exports.gen = genAlphaFile;
function genAlphaFile(amount,filename,callback)
{
	
	console.log("Create: " + amount +" lines");
	if(filename === undefined)
		filename = "output.txt";
	
	return new Promise((resolve, reject) => {
	fs.writeFile(filename, createString(amount), function(err) {
		if (err) {
			reject(err);
			return console.error(err);
		}
		console.log("Es wurde eine Datei '" + filename + "' mit " + amount+ " Zeilen erstellt.");
		if(callback !== undefined)
			callback();
		resolve();
	})
	});
}

function createString(amount)
{
	amount = parseInt(amount);
	var result = "";
	for(var i=0; i < amount; i++)
	{
		result+= getChar(i) + "\r\n"
	}
	return result;
}

function getChar(val)
{
	if(val < 26)
	{
		return String.fromCharCode(65 + val);
	}
	else
	{
		return getChar(val/26-1) + getChar(val%26);
	}
}

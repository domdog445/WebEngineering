const http = require('http');
var fs = require("fs")
const hostname = '127.0.0.1';
const port = 3000;

console.log("Hallo " + process.argv.length);

if(process.argv.length >= 3)
{
	var amount = process.argv[2];
	console.log("Create: " + amount +" lines");
	
	var filename = "output.txt"
	if(process.argv.length >= 4)
		filename = process.argv[3];
	
	
	
	fs.writeFile(filename, createString(amount), function(err) {
	   if (err) {
		  return console.error(err);
	   }
	   console.warn("Es wurde eine Datei '" + filename + "' mit " + amount+ " Zeilen erstellt.");
	});
	
}
else
{
	console.log("node [filename] [amount] [filename]");
}


/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  res.setHeader('Content-Type', 'text/plain');
  if(process.argv.length == 3)
	  
  res.end("");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

function createString(amount)
{
	amount = parseInt(amount);
	result = "";
	for(i=0; i < amount; i++)
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

var http = require( 'http');
var fs = require("fs")



exports.gen = genNumberFile;
function genNumberFile(amount,filename,callback)
{
	console.log("Create: " + amount +" lines");
	if(filename === undefined)
		filename = "output.txt";
	
	
	
	return new Promise((resolve, reject) => {
		fs.writeFile(filename, createString(amount), function(err) {
	    if (err) {
			reject();
			return console.error(err);
		}
		console.log("Es wurde eine Datei '" + filename + "' mit " + amount+ " Zeilen erstellt.");
		if(callback !== undefined)
			callback();
		resolve();
	});
	});
}
/*
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
	console.log("node [amount] [filename]");
}*/


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
	amount = parseInt(amount)+1;
	var result = "";
	for(var i=1; i < amount; i++)
	{
		result+= i + ".\r\n"
	}
	return result;
}
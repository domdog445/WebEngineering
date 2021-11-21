import fs from "fs"
import { PassThrough } from 'stream'
import readline from 'readline';

var	arr1 = [];
var	arr2 = [];
var finished1 = false;
var finished2 = false;
/*
if(process.argv.length >= 4)
	FSReadFileStream([process.argv[2],process.argv[3],process.argv[4]])
else
{
	console.log("node [filename1] [filename2] [OutputFile]");
}*/
export function MergeFileStream(file1,file2,OutputName)
{
	const ReadStream1 = fs.createReadStream(file1);
	const ReadStream2 = fs.createReadStream(file2);
		
	const lineReader1 = readline.createInterface({
	input: ReadStream1,
	crlfDelay: Infinity
	});
	const lineReader2 = readline.createInterface({
	input: ReadStream2,
	crlfDelay: Infinity
	});
		
		
	var writeStream = fs.createWriteStream(OutputName);

		
	lineReader1.on('line', function (line) {
			
	  arr1.push(line)
	  MergeStrings(writeStream);
	});
	lineReader2.on('line', function (line) {
	  arr2.push(line)
	  MergeStrings(writeStream);
	});
		
	lineReader1.on('close', () => {
		console.log("LineReader1 closed"); 
		finished1 = true;
		MergeStrings(writeStream);
		if(finished2)
			writeStream.end();
	});
	lineReader2.on('close', () => {
		console.log("LineReader2 closed"); 
		finished2 = true;
		MergeStrings(writeStream);
		if(finished1)
			writeStream.end();
	});
	//MergeStrings(writeStream);
	
		
	/*var p1 = new Promise(
	function(resolve, reject) {
		MergeStrings(writeStream);
		writeStream.end();
	});*/
}

function getPromiseReadFile(filename)
{
	return new Promise(function(resolve, reject) {
        fs.readFile(filename, "utf8", function(err, data){
            if (err) 
                reject(err); 
            else
                resolve(data);
        });
    });
	
}

async function MergeStrings(WriteStream)
{
	
	while((arr1.length >0 || finished1) &&
		  (arr2.length >0 || finished2) 
	)
	{
		if (finished1 && finished2 && arr1.length ==0 && arr2.length == 0)
			return;

	
		var result = ""
		if(arr1.length>0)
		{
			result += arr1[0];
			arr1.splice(0, 1);
		}
		if(arr2.length>0)
		{
			result += arr2[0];
			arr2.splice(0, 1);
		}
		result += "\r\n";
			
		WriteStream.write(result);
		//console.log("A: " + result);
	}
	return result;
}

import fs from "fs"
import { PassThrough } from 'stream'
import readline from 'readline';
import {pipeline } from 'stream/promises';


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


export async function MergeFileStream(file1,file2,OutputName)
{
	return new Promise(async(resolve, reject) => {
		const ReadStream1 = fs.createReadStream(file1,"utf8");
		const ReadStream2 = fs.createReadStream(file2,"utf8");
		const WriteStream = fs.createWriteStream(OutputName);
		
		
		await pipeline(ReadStream2,
			async function(source)
			{
			source.setEncoding('utf8')
				for await (const chunk of source)
				{
					arr1 = merge2ArraysPerLine(arr1,chunk.split("\r\n"));
					MergeStrings(WriteStream);
					WriteStream.write("-AA-");
				}
			}
		);
		await pipeline(ReadStream1,
			async function(source)
			{
			source.setEncoding('utf8')
				for await (const chunk of source)
				{
					arr2 = merge2ArraysPerLine(arr2,chunk.split("\r\n"));
					await MergeStrings(WriteStream);
					WriteStream.write("-BB-");
				}
			}
		);
		
		
		console.log("End");
		WriteStream.end();
		resolve();
	
	});
	
}


function merge2ArraysPerLine(a1,a2)
{
	var result = [];
	if(a1.length >= 1)
	{
		
		var tmp = a1.at[a1.length - 1] + a1[0];
		
		var tmps = tmp.split("\r\n");
		
		result = a1.slice(0, -1)
		result.concat(tmps);
		result.concat(a2.slice(0, -1));
		return result;
	}
	else
	{
		return a2;
	}
	
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
	
	while((arr1.length >1 || finished1) &&
		  (arr2.length >1 || finished2) 
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

import fs from "fs"
import {MergeFileStream} from "./merge_streams.mjs"
import {MergeFsFile} from "./merge_files.mjs"
import {genAlphaFile} from "./alpha_file_gen.mjs"
import {genNumberFile} from "./number_file_gen.mjs"


var arr = [0,1,2,3,4]
arr[arr.length - 1]=55
console.log(arr.at(-1))
let ready1 = false;
let ready2 = false;


test();





async function genFiles()
{
	console.time("Generate Files");
	await Promise.all([genNumberFile(20000,"inputNumb20000.txt"),
						genAlphaFile(20000,"inputAlph20000.txt"),
						genNumberFile(10,"inputNumb10.txt"),
						genAlphaFile(10,"inputAlph10.txt"),
						genNumberFile(1000,"inputNumb1000.txt"),
						genAlphaFile(1000,"inputAlph1000.txt"),
						genNumberFile(123456,"inputNumb123456.txt"),
						genAlphaFile(123456,"inputAlph123456.txt")]);
	console.timeEnd("Generate Files")

}


async function test()
{
	console.time("Generate Files");
	await Promise.all([genNumberFile(20000,"input1.txt"),
						genAlphaFile(20000,"input2.txt")]);
	console.timeEnd("Generate Files")
	
	
	console.time("MergeFileStream");
	await MergeFileStream("input1.txt","input2.txt","outputstream.txt") 
	console.timeEnd("MergeFileStream")

	console.time("MergeFsFile");
	//await MergeFsFile("input1.txt","input2.txt","outputfile.txt")
	console.timeEnd("MergeFsFile")
}
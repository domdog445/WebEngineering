export const createPage6MergeFiles = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script src="/Style/prism.js"></script>
  <link rel="stylesheet" href="/Style/prism.css">
  <p>In dieser Aufgabe sollten zwei Node Kommandozeilen-Tools entwickelt werden. Beide Tools, sollen hierbei die vorhin erstellten Dateien Zeilenweise mergen können. Das eine Tool funktioniert mithilfe von FS und das andere mithilfe von Streams </p>
  

  <details>
  <summary> Source Code des Merge Files (merge_files.mjs)</summary>


  <pre>
		<code class="language-javascript">
		import fs from "fs"

		export function MergeFsFile(file1,file2,OutputName)
		{
			return new Promise((resolve, reject) => {
				Promise.all([getPromiseReadFile(file1), getPromiseReadFile(file2)])
					.then((values) => {
					fs.writeFile(OutputName, MergeStrings(values[0],values[1]), (err) => {
						if (err) 
						{
							reject(err);
							throw err;
						}
						
						console.log('Merge successfull');
						resolve();
					});
						
				});	  
			});
				
			
		}

		export function getPromiseReadFile(filename)
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

		export function MergeStrings(String1,String2)
		{
			var allA = String1.split("\r\n");
			var allB = String2.split("\r\n");
			var result = "";			
			var i = 0;	
			while(i < allA.length || i < allB.length)
			{
				if(i < allA.length)
				{
					result += allA[i];
				}
				if(i < allB.length)
				{
					result += allB[i];
				}
				result += "\r\n";
				i++;
			}
			return result;
		}

		
		</code>
	</pre>
	</details>
	<a href="/U7/outputfile.txt">Ergebnisdatei</a>
	<br>
	<br>
	<details>
	<summary> Source Code des Stream Mergers(merge_streams.mjs)</summary>
  
  
	<pre>
		  <code class="language-javascript">
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
		  
		  </code>
	  </pre>
	  </details>
	  
	  <br>
<h4>Um diese beiden Tools zu vergleichen, wurde ein weiteres Skript geschrieben. Der Quellcode für die Zeitmessung ist unter denerhalb der Ergebnisse aufgezeigt</h4>
<br>
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-7btt{border-color:inherit;font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-6ic8{border-color:inherit;font-weight:bold;text-align:right;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-7btt">Zeilenanzahl</th>
    <th class="tg-7btt">Filesystem:</th>
    <th class="tg-7btt">Mergestream:</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-6ic8">2000000</td>
    <td class="tg-0pky">1,376s</td>
    <td class="tg-0pky">0,316s</td>
  </tr>
  <tr>
    <td class="tg-6ic8">1000000</td>
    <td class="tg-0pky">0,676s</td>
    <td class="tg-0pky">0,184s</td>
  </tr>
  <tr>
    <td class="tg-6ic8">10000</td>
    <td class="tg-0pky">0,009 074s</td>
    <td class="tg-0pky">0,069 575s</td>
  </tr>
  <tr>
    <td class="tg-6ic8">100</td>
    <td class="tg-0pky">0,007 506s</td>
    <td class="tg-0pky">0,007 287s</td>
  </tr>
</tbody>
</table>
<br>

	  <details>
	  <summary> Source Code für der Zeitmessung (timeMeassure.mjs)</summary>
	
	
	  <pre>
			<code class="language-javascript">
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
				await Promise.all([genNumberFile(10000 ,"input1.txt"),
									genAlphaFile(10000 ,"input2.txt")]);
				console.timeEnd("Generate Files")
				
				
				console.time("MergeFileStream");
				await MergeFileStream("input1.txt","input2.txt","outputstream.txt") 
				console.timeEnd("MergeFileStream")
			
				console.time("MergeFsFile");
				await MergeFsFile("input1.txt","input2.txt","outputfile.txt")
				console.timeEnd("MergeFsFile")
			}
		  
  
  
			
			</code>
		</pre>
		</details>
`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

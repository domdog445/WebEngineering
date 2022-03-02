export const createPage6Express = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script src="/Style/prism.js"></script>
  <link rel="stylesheet" href="/Style/prism.css">
  <p>In dieser Aufgabe sollte ein Express-Server aufgesetzt werden, welcher die Tool der vorherigen beiden Aufgaben zur Verfügung stellt. </p>
  

  <details>
  <summary> Source Code des Express Servers (ExpressMerge.js)</summary>


  <pre>
		<code class="language-javascript">
		//Imports
		const fs = require('fs');
		const http = require('http');
		const https = require('https');

		const merge_streams = require("./Moduls/merge_streams.js");
		const merge_files = require("./Moduls/merge_files.js");
		const alpha_file_gen = require("./Moduls/alpha_file_gen.js");
		const number_file_gen = require("./Moduls/number_file_gen.js");


		const outputfolder = "Public/Output/";
		const inputfolder = "Public/Input/";

		//Express Const
		const express = require('express');
		const app = express();

		const httpServer = http.createServer(app);

		//Activate directly folder
		app.use('/static', express.static(__dirname + '/public'));

		//Body Parser
		app.use(express.urlencoded({
		extended: true
		}))



		// For http
		httpServer.listen(8080);

		//Startseite
		app.get('/', function (req, res) {
			res.header('Content-type', 'text/html');
			return res.end(	\`<h1> Willkommen beim Gen/Merge Tool </h1>
				<a href="/genFiles">Hier geht es zum generieren von Dateien</a>'
				<a href="/MergeFiles">Hier geht es zum konkatenieren der Dateien</a>'\`
				
			);
			
		});

		//GenFiles
		app.get('/genFiles', function (req, res) {
			res.header('Content-type', 'text/html');
			return res.end(\`<form method="POST" action="/createFile">
					<h1>Generate Files</h1>
					<a href="/"> back </a> <br>
				
				
				<label for="amountID"> Amount: </label> </div>
				<input id="amountID" type="text" name="amount" />
				
				
				
				</style>
				<outerBox>
				<fieldset>
				<legend>GenerateType</legend> <div>
					<input type="radio" id="numbCreate" name="GenerationType" value="numb">
					<label for="numbCreate"> Numbers</label> </div><div>
					<input type="radio" id="alphCreate" name="GenerationType" value="alph">
					<label for="alphCreate"> Alphabatic</label> </div>
				</fieldset>
				</outerBox>
				
				<input type="submit" />
				</form>
				<style>
					fieldset {
						display: flex;
						flex-direction: column;
					}
					outerBox {
						display: flex;
						flex-direction: row;
					}
				\`
			);
			
		});

		//MergeFiles
		app.get('/MergeFiles', function (req, res) {
			res.header('Content-type', 'text/html');
			
			var result = \`<form method="POST" action="/MergeFiles">
				<h1>Merge follow Files</h1>
				<a href="/"> back </a><br>
				<style>
					fieldset {
						display: flex;
						flex-direction: column;
					}
					outerBox {
						display: flex;
						flex-direction: row;
					}
				
				</style>
				<outerBox>
				<fieldset>
				<legend>File1</legend>\`
			
			
			

			fs.readdir(inputfolder, (err, files) => {
				files.forEach(file => {
					result +=\`<div><input type="radio" id="file1`+ '$' + `{file}" name="file1" value="`+ '$' + `{file}">
					<label for="file1`+ '$' + `{file}"> `+ '$' + `{file}</label> </div>\`
					
				});
				result+= "</fieldset><fieldset><legend>File2</legend>"
				
				fs.readdir(inputfolder, (err, files) => {
					files.forEach(file => {
						result +=\`<div><input type="radio" id="file2`+ '$' + `{file}" name="file2" value="`+ '$' + `{file}">
						<label for="file2`+ '$' + `{file}"> `+ '$' + `{file}</label></div> \`
						
					});
					
					
					
					
					result +=  \`</fieldset> </outerBox>
					<input type="submit" />
					</form>\`;
					return res.end(result);
					
				})
			
			
				
				
				
				
				
			})
			
		});


		//Post CreateFile
		app.post('/createFile', (req, res) => {
			const amount = req.body.amount;
			const genType = req.body.GenerationType;
			var outputPath = inputfolder+genType+amount+".txt";
			
			console.log(amount);
			console.log(genType);
			
			if(isNaN(amount))
			{
				res.end(amount + " ist keine gültige Zahl");
				return;	
			}
			
			if(genType === "numb")
				genFile(amount,outputPath,res,number_file_gen.gen);
			else if(genType === "alph")
				genFile(amount,outputPath,res,alpha_file_gen.gen);
			else
				res.end(genType + " ist nicht 'alph' oder 'numb'");
		})


		app.post('/MergeFiles', (req, res) => {
			const file1 = req.body.file1;
			const file2 = req.body.file2;
			
			console.log(file1);
			console.log(file2);
			
			const file1Path = inputfolder + file1;
			const file2Path = inputfolder + file2;
			
			var outputPath = outputfolder+"Merged-"+file1+"-"+file2+".txt"
			
			MergeFSS(file1Path,file2Path,outputPath,res);
			
			
		})

		//Get CreateNumb
		app.get('/createNumbFile/:amount', function(req, res) {
			console.log(req.params);
			
			
			var amount = req.params.amount;
			var outputPath = inputfolder+"Numb"+amount+".txt";
			
			if(isNaN(amount))
			{
				res.end(amount + " ist keine gültige Zahl");
				return;	
			}
			
			genFile(amount,outputPath,res,number_file_gen.gen);
		});

		//Get CreateAlph
		app.get('/createAlphFile/:amount', function(req, res) {
			console.log(req.params);
			var amount = req.params.amount;
			var outputPath = inputfolder+"Alph"+amount+".txt";
			
			if(isNaN(amount))
			{
				res.end(amount + " ist keine gültige Zahl");
				return;	
			}
			genFile(amount,outputPath,res,alpha_file_gen.gen);
			
			
		});

		//Get Merge
		app.get('/MergeFS/:file1/:file2', async function(req, res) {
			
		
			console.log(req.params);
			var file1 = req.params.file1;
			var file2 = req.params.file2;
			var file1Path = inputfolder + file1;
			var file2Path = inputfolder + file2;
			var outputPath = outputfolder+"Merged-"+file1+"-"+file2+".txt"
			
			MergeFSS(file1Path,file2Path,outputPath,res);
		});


		//AsyncFunctions

		async function MergeFSS(file1Path,file2Path,outputPath,res)
		{
			fs.access(file1Path, fs.constants.F_OK | fs.constants.W_OK, (err) => {
				if (err) {
					res.send(
					\` `+ '$' + `{file1Path} `+ '$' + `{err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}\`);
				} else {
					fs.access(file2Path, fs.constants.F_OK | fs.constants.W_OK, async (err) => {
						if (err) {
						res.send(
							\``+ '$' + `{file2Path} `+ '$' + `{err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}\`);
						} else {
		
		
			
							await merge_files.merge(file1Path,file2Path,outputPath);
							res.download(__dirname +"/"+ outputPath);
						}
					});
				}
			});
			
			
		}
		async function genFile(amount,outputPath,res,genMethod)
		{
			await genMethod(amount,outputPath);
			
			res.download(__dirname +"/"+ outputPath);
		}



		
		</code>
	</pre>
	</details>
	




`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

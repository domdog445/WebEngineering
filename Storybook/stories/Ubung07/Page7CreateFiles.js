export const createPage6createFiles = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <script src="/~dzens2s/Storybook/Style/prism.js"></script>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/prism.css">
  <p>In dieser Aufgabe sollten zwei Node Kommandozeilen-Tools entwickelt werden. Die erste Anwendung soll eine Datei erstellen welche mit Zahlen gefühlt ist. Die andere Erstellt eine Datei welche mit Buchstaben gefühlt ist. Die Anzahl der Zeilen können als Parameter übergeben werden </p>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/SummaryStyle.css">

  <details>
  <summary> Source Code des Buchstaben Genereator (alpha_file_gen.mjs)</summary>


  <pre>
		<code class="language-javascript">
		import fs from "fs"
		
		
		
		
		
		export function genAlphaFile(amount,filename,callback)
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
		
		</code>
	</pre>
	</details>
	<a href="/~dzens2s/Storybook/U7/Alpha.txt">Beispieldatei mit 10000 Zeilen (Buchstaben)</a>
	<br>
	<br>
	<details>
	<summary> Source Code des Zahlen Genereator (number_file_gen.mjs)</summary>
  
  
	<pre>
		  <code class="language-javascript">
		import http from 'http';
		import fs from "fs"




		export function genNumberFile(amount,filename,callback)
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
		


		  
		  </code>
	  </pre>
	  </details>
	  
	<a href="/~dzens2s/Storybook/U7/number.txt">Beispieldatei mit 10000 Zeilen (Zahlen)</a>




`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

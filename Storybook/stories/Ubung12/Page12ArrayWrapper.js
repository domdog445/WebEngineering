export const createPage12Arraywrapper = ({

}) => {
  const article = document.createElement('article');

  const section = `
 
  <script src="/~dzens2s/Storybook/Style/prism.js"></script>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/prism.css">
  <p>In dieser Aufgabe wurde auf ein Exploit eines ArrayWrapper hingewiesen, der in der Vorlesung präsentiert wurde.</p>
  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/SummaryStyle.css">
  <details>
  <summary> Ursachenanalyse und Sicherheitskonzept </summary>
    Durch das nachträgliche hinzufügen der Push Methode, kann die Aktion welche bei der Function "append" aufgerufen wird, geändert werden. <br> <br>
	Um nicht eine Funktion hinzufügen zu können, kann auf das Aufrufen von externen Funktionen verzichtet werden. Um dies zu verhindern kann eine interne versteckte Funktion geschrieben werden oder am Anfang gesetzt werden. Desweiteren können die Parameter gewhitlister werden und somit nur positive Zahlen zugelassen werden.
  </details>


  <details>
  <summary> Source Code ArrayWrapperNeu.js</summary>


  <pre>
		<code class="language-javascript">
		function demethodize(f)
		{
		return function(x,y)
		{
			return f.call(x,y);
		}
		}


		function arrayWrapper(){
		var array= ["Peter","Karl"]
		var push = demethodize(array.push);
			return {
			get:function(pos){
			return array[pos];
			},
				set:function(pos,val){
					if(typeof pos == 'number')
						if(pos>=0)
							array[pos] = val;
			},
				append:function(val){
			push(array,val)
			}
		}
		}
		  
		
		</code>
	</pre>
	</details>
  
	

 
	


`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

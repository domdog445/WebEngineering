export const createPage12A7 = ({

}) => {
  const article = document.createElement('article');

  const section = `
 
  <script src="/Style/prism.js"></script>
  <link rel="stylesheet" href="/Style/prism.css">
  <p>In dieser Aufgabe wurde auf ein Exploit eines ArrayWrapper hingewiesen, der in der Vorlesung präsentiert wurde.</p>
  <link rel="stylesheet" href="/Style/SummaryStyle.css">
  
    <details>
    <summary> Open a second tab and use the same url as this page you are currently on (or any url within this instance of WebGoat) \n Then, on that second that open the browser developer tools and open the javascript console. And type: alert(document.cookie);</summary>
    <pre>
		<code class="language-sql">
		yes </code>
	</pre>
	</details>
  
	<details>
    <summary> An easy way to find out if a field is vulnerable to an XSS attack is to use the alert() or console.log() methods. Use one of them to find out which field is vulnerable.</summary>
	<label> Enter your credit card number </label>
	<input type="text" value='&lt;script&gt;alert(\\"Hey\\")&lt;/script&gt;' disabled style="width: 200px">
	</details>

	<details>
    <summary> So, what is the route for the test code that stayed in the app during production? To answer this question, you have to check the JavaScript source.</summary>
    <pre>
		<code class="language-sql">
		start.mvc#test</code>
	</pre>
	</details>

	<details>
    <summary> Some attacks are \"blind\". Fortunately, you have the server running here so you will be able to tell if you are successful. Use the route you just found and see if you can use the fact that it reflects a parameter from the route without encoding to execute an internal function in WebGoat. The function you want to execute is …​ \n \n webgoat.customjs.phoneHome() \n \n Sure, you could just use console/debug to trigger it, but you need to trigger it via a URL in a new tab. \n Once you do trigger it, a subsequent response will come to your browser’s console with a random number. Put that random number in below.</summary>
    <pre>
		<code class="language-sql">
		http://localhost:8080/WebGoat/start.mvc#test/%3Cscript%3Econsole.log(webgoat.customjs.phoneHome())%3Cscript%3E</code>
	</pre>
	</details>


	<details>
    <summary> Quiz: Are trusted websites immune to XSS attacks?</summary>
    <pre>
		<code class="language-sql">
		Solution 4: No because the browser trusts the website if it is acknowledged trusted, then the browser does not know that the script is malicious.</code>
	</pre>
	</details>

	<details>
    <summary> Quiz: When do XSS attacks occur?</summary>
    <pre>
		<code class="language-sql">
		Solution 3: The data is included in dynamic content that is sent to a web user without being validated for malicious content </code>
	</pre>
	</details>
	
	<details>
    <summary> Quiz: What are Stored XSS attacks?</summary>
    <pre>
		<code class="language-sql">
		Solution 1: The script is permanently stored on the server and the victim gets the malicious script when requesting information from the server </code>
	</pre>
	</details>


	<details>
    <summary> Quiz: What are Reflected XSS attacks?</summary>
    <pre>
		<code class="language-sql">
		Solution 2: They reflect the injected script off the web server. That occurs when input sent to the web server is part of the request.</code>
	</pre>
	</details>

	<details>
    <summary> Quiz: Is JavaScript the only way to perform XSS attacks?</summary>
	<pre>
		<code class="language-sql">
		Solution 3: No there is ECMAScript too.</code>
	</pre>
    
	</details>
`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

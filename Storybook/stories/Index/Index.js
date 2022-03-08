export const createIndex = ({
	
}) => {
  const article = document.createElement('article');

  const section = `
  <section>
   
	<center>
	<h1>Willkommen im Storybook von Domenic Zens</h1>
	<p> In diesem Storybook sind alle Lösungen zu den Übungsaufgaben des Masterkurs Web Engineering WS21/22 dargestellt. 
	Hierbei wurde jede Aufgabe von mir bearbeitet. Eine Tabelle der Eigenleistungen sowie verwendeten 
	Fremdleistungen werden weiter unten auf dieser Seite dargestellt bzw. steht <a href= "/~dzens2s/Storybook/Index/Eigenleistungen.pdf">hier</a> zum Download zur Verfügung</p>



	<a href= "http://www2.inf.h-brs.de/~dzens2s/" class="link">Hier geht es zur Webseite</a>
	<h3>Eigenleistungen</h3>
	<embed src="/~dzens2s/Storybook/Index/Eigenleistungen.pdf" type="application/pdf" width="100%" height="600px" />
	
	</center>
	<style>

	p {
		background-color: #EEEEEE;
		border-radius: 10px;
	}

	.link {
		padding: 6px 8px;
		background-color: #4040D0;
		color: #FFF;
		border-radius: 10px;
		border: solid 1px #333;
		text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 3px rgba(0, 0, 0, 0.2);
		user-select: none;
		text-decoration: none;
	}
	
	.link:hover {
		color: #fff;
		background-color: #2020B0;
		text-decoration: none;
	}
	
	.link:active {
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
		background-color: #888;
	}
	</style>
  </section>
`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};

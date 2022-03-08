export const createPage9Overview= ({

}) => {
  const article = document.createElement('article');

  const section = `

  <link rel="stylesheet" href="/~dzens2s/Storybook/Style/SummaryStyle.css">

  <details>
  <summary> Beschreiben Sie hier Ihr Vorgehen, Ihre Libraries und Tools, die Sie einsetzen:</summary>
  <p>
 	MIthilfe von Exrpress wird eine html Datei über https und http zur verfügung gestellt.
	In dieser HTML Datei wird ein Service Worker geladen, welcher die Dateien Offline verfügbar macht.


	Libaries:
	Express: für den Online-Server
	FS:  für das lesen der Credentials
	Path: für das Verbinden von Pfaden

	<p>
  </details>


  <details>
  <summary> Beschreiben Sie hier Ihre Probleme und Lösungskonzepte:</summary>
	<p>Lighthouse in Chrome funktionierte nicht. bzw. funktionierte nur über die Kommandozeile.

	Die Http Anfragen müssen zu HTTPs weitergeleitet werden
	=> Sichergehen das jede Anfrage zu "https" weiter geleitet wird (return res.redirect('https://' + req.headers.host + req.url);)

	</p>
  </details>

  <details>
  <summary> Lighthouse-Messergebnisse</summary>
  <p>
	<style type="text/css">
	.tg  {border-collapse:collapse;border-spacing:0;}
	.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
	overflow:hidden;padding:10px 5px;word-break:normal;}
	.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
	font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
	.tg .tg-baqh{text-align:center;vertical-align:top}
	.tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}
	</style>
	<table class="tg">
	<thead>
	<tr>
		<th class="tg-amwm">Performance</th>
		<th class="tg-baqh">100</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="tg-amwm">Accessibility</td>
		<td class="tg-baqh">91</td>
	</tr>
	<tr>
		<td class="tg-amwm">Best Pracices</td>
		<td class="tg-baqh">100</td>
	</tr>
	<tr>
		<td class="tg-amwm">SEO</td>
		<td class="tg-baqh">82</td>
	</tr>
	</tbody>
	</table>
	<a href="/~dzens2s/Storybook/U9/PWAErgebnis.html"> Hier geht es zum direkten Ergebniss von Lighthouse</a>
  </p>
  
  </details>
  <a href="/~dzens2s/Storybook/U9/PWADomenicZens.zip"> Download der PWA als Zip</a>
  

`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

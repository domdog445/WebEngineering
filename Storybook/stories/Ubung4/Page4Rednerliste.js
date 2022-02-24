export const createPage4RL = ({
}) => {
  const article = document.createElement('article');

  const section = `
  <!DOCTYPE html>
<html lang="de">
<head>
    <link rel="icon" href="../Ressource/favicon.svg" sizes="any" type="image/svg+xml">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title> Rednerliste</title>
	
</head>

<body>
	<h1> Rednerliste </h1><br>
	
	<label for="fname">Neuer Redner</label>
	<input type="text" id="newEntryInput" name="newEntry" value="">
	<button id="newEntryButton">Hinzufügen</button>
	
  <ul id="Rednerliste">
  </ul>  
  
  
  

	<script src="/Rednerliste.js"></script> 
</body>


</html>
`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

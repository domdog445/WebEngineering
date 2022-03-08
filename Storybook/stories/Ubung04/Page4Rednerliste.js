export const createPage4RL = ({
}) => {
  const article = document.createElement('article');

  const section = `
  <!DOCTYPE html>
<html lang="de">


<body>
	<h1> Rednerliste </h1><br>
	
	<label for="fname">Neuer Redner</label>
	<input type="text" id="newEntryInput" name="newEntry" value="">
	<button id="newEntryButton">Hinzufügen</button>
	
  <ul id="Rednerliste">
  </ul>  
  
  
  

	<script src="/~dzens2s/Storybook/U4/Rednerliste.js"></script> 
</body>


</html>
`;

  article.insertAdjacentHTML('beforeend', section);

  return section;
};

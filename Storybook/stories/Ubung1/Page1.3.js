export const createPage3 = ({
	title = "xxx",
	subtitle = "The man who saved a billion lives",
}) => {
  const article = document.createElement('article');

  const section = `
  <section>
   
	<center background-color: grey>
	
		<h1>`+ title+`</h1>
		<p> `+ subtitle+`</p>
		<div class="imgbox">
			<img src="https://kaul.inf.h-brs.de/wem/assets/img/tribute-img.png">
		</div>
	</center>



	<style>
		center {background-color: #CCCCCC;}
		.imgbox {background-color: #FFFFFF;
				width = 100%}
		img{background-color: #FFFFFF;
			width: 100%	}
		
	</style>
  </section>
`;

  article.insertAdjacentHTML('beforeend', section);

  return article;
};

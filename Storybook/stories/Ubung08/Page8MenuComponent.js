export const createPage8MenuComp = ({

}) => {
  const article = document.createElement('article');

  const section = `
  <style>
  .collumnDiv {
    border: solid black 1px;
    max-width: 200px;
  }
  .HorizontalDiv {
    border: solid black 1px;
  }

  </style>
  <script type="module" src="/U8/WebComponentMenuComponent.js"></script>
  <div class="HorizontalDiv">
  <simple-menucomponent id="Menu1"></simple-menucomponent>
	</div>
  <br>
  <div class="collumnDiv">
  <simple-menucomponent id="Menu2"></simple-menucomponent>
	</div>
  <script> 
    menu1 = document.getElementById("Menu1")
    console.log(menu1);
    menu1.items = [];
    menu1.items.push(
      {
        link: "https://google.de",
        text: "Google"
      }
    )
    menu1.items.push(
      {
        link: "https://www.w3schools.com/",
        text: "W3Schools"
      }
    )
    menu1.items.push(
      {
        link: "https://wiki.selfhtml.org/",
        text: "SelfHTML"
      }
    )

    menu2 = document.getElementById("Menu2")
    
    menu2.items = [];
    menu2.items.push(
      {
        link: "https://www.google.com/chrome/",
        text: "Chrome"
      }
    )
    menu2.items.push(
      {
        link: "https://www.opera.com/de",
        text: "Opera"
      }
    )
    menu2.items.push(
      {
        link: "https://www.microsoft.com/de-de/edge",
        text: "Edge"
      }
    )
    menu2.items.push(
      {
        link: "https://www.mozilla.org/de/firefox/new/",
        text: "Firefox"
      }
    )
    menu2.columnMode = true;

  </script>

`;
  document.getElementById("Menu")
  article.insertAdjacentHTML('beforeend', section);

  return section;
};

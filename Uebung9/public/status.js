console.log("Status.js load");

document.addEventListener('DOMContentLoaded', init, false);
function init() {
    console.log("Status load");
    console.log("Online: " + navigator.onLine);
    const statusElem = document.querySelector('.page-status')
  if (!navigator.onLine) {
    statusElem.innerHTML = 'offline'
  }
  else
  {
    
    statusElem.innerHTML = 'online'
  }
}
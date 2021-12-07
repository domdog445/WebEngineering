document.addEventListener('DOMContentLoaded', init, false);
function init() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration){
          console.log('Service worker registered : ', registration.scope);
        })
        .catch(function(err){
          console.log("Service worker registration failed : ", err);
        });
      }
}
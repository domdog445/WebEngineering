window.onload = function () {

    let root = document.documentElement;

    window.onscroll = function() {MakeSticky()};

    var header = document.getElementById("Header");

    var sticky = header.offsetTop;

    function MakeSticky() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        
    } 

    function HeaderResize() {
        root.style.setProperty('--headerheight', header.offsetHeight + "px");
    } 

    window.onresize = HeaderResize;

}






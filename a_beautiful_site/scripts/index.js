let header = document.getElementById("header-contain");

let oldScroll = window.scrollY;
let hoverSup = window.matchMedia('(hover: none)').matches;

window.onscroll = (e) =>{
    if (((oldScroll < window.scrollY && window.scrollY > 600) || innerHeight + window.pageYOffset >= document.body.offsetHeight) && !hoverSup){
       header.classList.add("hidden");
    }
    else if ((((oldScroll - window.scrollY) >= 40) || window.scrollY <= 100) && !hoverSup){
        header.classList.remove("hidden");
    }
    oldScroll = window.scrollY;
}
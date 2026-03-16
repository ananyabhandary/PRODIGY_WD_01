// Navbar color change when scrolling

window.addEventListener("scroll", function(){

let navbar = document.getElementById("navbar");

if(window.scrollY > 50){
navbar.style.background = "#111";
}
else{
navbar.style.background = "black";
}

});
/* Developed by: Team 1: Perrault Christopher, Fried Norman, White Christopher, Banshchikov Dmitri, Decelles Anthony

/* Script Date: September 10, 2021 */

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("top");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
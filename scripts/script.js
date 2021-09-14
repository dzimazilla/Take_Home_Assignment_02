/* Developed by: Team 1: Perrault Christopher, Banshchikov Dmitri

/* Script Date: September 10, 2021 */


// sticky navbar....don't working. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_sticky
// https://codepen.io/geoffgraham/pen/ybVzeX
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

// Mobile Navigation Menu https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

// sidenav https://codepen.io/chriscoyier/pen/qyELzd

// contact form

//Sign Up for Updates

//Survey? https://codepen.io/juancjara/pen/yNQqJE

// index::   https://www.immigrationadvocates.org/



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

// Contact us form validation
function validate(){
  var name = document.getElementById("firstName").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phoneNumber").value;
  var email = document.getElementById("emailAddress").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("errorMessage");
  var text;
  phoneNumber
  
  if(name.length < 2){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 5){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

//Sign Up for Updates

//Survey? https://codepen.io/juancjara/pen/yNQqJE

// index::   https://www.immigrationadvocates.org/



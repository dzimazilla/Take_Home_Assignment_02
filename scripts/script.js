/* Developed by: Team 1: Perrault Christopher, Banshchikov Dmitri

/* Script Date: September 10, 2021 */

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


// demo
document.getElementById("demo").innerHTML = 888;



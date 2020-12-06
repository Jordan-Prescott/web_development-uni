  // MESSAGE BASED ON TIME TO EMAIL.
  // --------------------------------------------------------------------------

  // The code here finds out what time it is

var currenttime = new Date();
var currenthour = currenttime.getHours();

console.log(currenthour);

  // Below creates and adds code to the HTML

var emailmessage = "You are <strong>OK</strong> to email me now";

if (currenthour < 9 || currenthour > 22) {
  emailmessage = "I am asleep, sorry!";
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);





  // ADDS CSS CLASS FOR DIFFERENT STYLES
  // --------------------------------------------------------------------------

  // The code creates a button which when clicked adds or removes a class called 'js-modify-page' to the <html> tag, allowing you to style your page differently when the button is 'off' or 'on'.

  // This code creates a button which when clicked adds style or removes it. This allows you to style differently when off or on.

var findLocation = document.getElementById("switch");

  // Creates a button

var button = document.createElement("button");
button.setAttribute("class", "lilly-switch"); 
button.setAttribute("id", "make-something-happen"); 
button.textContent = "Dog Colour"; 

  // Add the button to the HTML

findLocation.append(button);

  // point JavaScript at the button created

var listenForInteraction = document.getElementById("make-something-happen");

function changePage() {
  document.documentElement.classList.toggle("js-modify-page");
}

listenForInteraction.addEventListener("click", changePage);
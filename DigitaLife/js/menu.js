function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}



 /* Buton go-to-shop */
 function goshop() {
  location.replace("Products.html");
}
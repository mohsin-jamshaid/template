function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav container") {
    x.className += " responsive";
  } else {
    x.className = "topnav container";
  }
}
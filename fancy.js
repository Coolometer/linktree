function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.add("show");
  console.log("Show");
  navigator.clipboard.writeText("nona+spam@oh-nona.eu");
  setTimeout(function() {
  popup.classList.remove("show");
}, 2000);
}

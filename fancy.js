function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.add("show");
  navigator.clipboard.writeText("nona+spam@oh-nona.eu");
  setTimeout(function() {
  popup.classList.remove("show");
}, 2000);
}

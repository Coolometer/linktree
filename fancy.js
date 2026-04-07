function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.add("show");
  console.log("toggle")
  setTimeout(function() {
  popup.classList.remove("show");
}, 2000);
}

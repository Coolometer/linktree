function myFunction() {
  var popup = document.getElementById("myPopup");
  var text = this.querySelector(".info")[0];
  popup.classList.add("show");
  navigator.clipboard.writeText(text);
  setTimeout(function() {
  popup.classList.remove("show");
}, 2000);
}
window.onload = function () {
  var elements = document.getElementsByClass("clickable");
  elements.foreach((element)=>element.addEventListener("click", myFunction););
  
};

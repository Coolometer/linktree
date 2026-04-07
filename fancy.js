function myFunction() {
  console.log(element);
  var popup = document.getElementById("myPopup");
  var text = this.querySelector(".info")[0];
  popup.classList.add("show");
  navigator.clipboard.writeText(text);
  setTimeout(function() {
  popup.classList.remove("show");
}, 2000);
}
window.onload = function () {
  var elements = document.getElementsByClassName("clickable");
  Array.from(elements).forEach((element)=>{console.log("Element: ");console.log(element);
    element.addEventListener("click", myFunction);
                              });
  
};

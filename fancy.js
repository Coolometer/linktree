function myFunction() {
  console.log(this);
  var popup = document.getElementById("myPopup");
  var elements = this.querySelector(".info");
  console.log(elements);
  popup.classList.add("show");
  var text = elements[0].textContent;
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

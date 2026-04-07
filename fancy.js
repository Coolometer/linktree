function myFunction(info) {
  console.log(info);
  var popup = document.getElementById("myPopup");
  info = info.querySelectorAll(".info")[0];
  popup.classList.add("show");
  
  navigator.clipboard.writeText(info.textContent);
  setTimeout(function() {
    popup.classList.remove("show");
  }, 2000);
}
window.onload = function () {
  var elements = document.getElementsByClassName("clickable");
  Array.from(elements).forEach((element)=>{console.log("Element: ");console.log(element);
    element.addEventListener("click", ()=> myFunction(element));
                              });
  
};

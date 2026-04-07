function myFunction(e) {
  console.log(e)
  var popup = document.getElementById("myPopup");
  var info = e.target
  
  if (!info.classList.contains("info")){
    info = info.querySelector(".info").target;
  }
  
  console.log(info);
  popup.classList.add("show");
  
  navigator.clipboard.writeText(info.textContent);
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

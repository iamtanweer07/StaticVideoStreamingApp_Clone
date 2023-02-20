var menuIcons = document.querySelector(".menu_icon");
var sidebar_left = document.querySelector(".sidebar_left");
var container = document.querySelector(".container");

menuIcons.onclick = function(){
  sidebar_left.classList.toggle("small_leftSidebar");
  container.classList.toggle("large_container");
}

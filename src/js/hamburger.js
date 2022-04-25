const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu(){
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  }else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  } 
}

hamburger.addEventListener("click", toggleMenu);

window.addEventListener("scroll", function(){
  let value = window.scrollY;
  //console.log("scrollY", value);
  if(value < 60){
    menuIcon.style.color = "white";
  }else{
    menuIcon.style.color = "#25509e";
  }
});








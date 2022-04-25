const divTag = document.getElementById("head-hiden");
const divColor = document.querySelector(".nav-item-block");
const divLogo = document.querySelector(".logo-img");
const divItem = document.querySelector(".item-wrap");



window.addEventListener("scroll", function(){
  let value = window.scrollY;
  //console.log("scrollY", value);

  if(value < 60){
    divTag.classList.remove("hiben-header");
  }else if(value > 61){
    divTag.classList.add("hiben-header");
  }
});

window.addEventListener("scroll", function(){
  let value = window.scrollY;
  //console.log("scrollY", value);

  if(value < 60){
    divItem.style.visibility="visible";
  }else{
    divItem.style.visibility="hidden";
  }
});


window.addEventListener("scroll", function(){
  let value = window.scrollY;
  //console.log("scrollY", value);

  if(value < 60){
    divColor.style.display="none";
    divLogo.style.display="none";
  }else if(value > 61){
    divColor.style.display="block";
    divLogo.style.display="block";
  }
});


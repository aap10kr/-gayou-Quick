let mainFirst = document.querySelector(".first-img");
let mainSecond = document.querySelector(".second-img");
let mainThird = document.querySelector(".third-img");
let mainFourth = document.querySelector(".fourth-img");

let txtFirst = document.getElementById("fist-txt");
let txtSecond = document.getElementById("second-txt");
let txtThird = document.getElementById("third-txt");
let txtFourth = document.getElementById("fourth-txt");


window.addEventListener("scroll",function(){
  let value = window.scrollY;
  //console.log("scrollY", value);

  if(value > 400){
    mainFirst.style.animation = "opacity 2s ease-out forwards";
    if(value > 900){
      mainSecond.style.animation = "opacity 2s ease-out forwards";
        if(value > 1500){
          mainThird.style.animation = "opacity 2s ease-out forwards";
            if(value > 2000){
              mainFourth.style.animation = "opacity 2s ease-out forwards";
            }
        }
    }
  }else{
  }
});

window.addEventListener("scroll",function(){
  let value = window.scrollY;
  //console.log("scrollY", value);

  if(value > 400){
    txtFirst.style.animation = "moveTop 1s ease-out forwards";
    if(value > 900){
      txtSecond.style.animation = "moveTop 1s ease-out forwards";
        if(value > 1500){
          txtThird.style.animation = "moveTop 1s ease-out forwards";
            if(value > 2000){
              txtFourth.style.animation = "moveTop 1s ease-out forwards";
            }
        }
    }
  }else{
  }
});
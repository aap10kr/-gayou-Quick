//function onDisplay(element){
//  let on = document.querySelector('#' + element.id +' > dd');
//  if(on.style.display=='none' || on.style.display == ''){
//    on.style.display = 'block';
//  }else if(on.style.display=='block'){
//    on.style.display = 'none';
//  }
//}



//function onDisplay(){
//
//  let on1 = document.getElementById('drop1');
//  let on2 = document.getElementById('drop2');
//  let on3 = document.getElementById('drop3');
//  let on4 = document.getElementById('drop4');
//  let on5 = document.getElementById('drop5');
//
//  let on = document.querySelector('.btn');
//
//  let arr = []; 
//
//  arr[0] = on1;
//  arr[1] = on2;
//  arr[2] = on3;
//  arr[3] = on4;
//  arr[4] = on5;
//
//  console.log(arr);  
//
//  arr[i].addEventListener("click", function(){
//    on.classList.toggle('dd-none');  
//  });
//}




function onDisplay(element){

  
  let on = document.querySelector('#' + element.id +' > dd');
  
  on.classList.toggle('dd-none');
  
  
};


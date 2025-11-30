let play = document.querySelectorAll(".play") ;
let down = document.querySelectorAll(".down");
let audio = document.querySelectorAll(".audio");   

let aud1 = document.querySelector("#aud1") ;      
let aud2 = document.querySelector("#aud2") ;      
let aud3 = document.querySelector("#aud3");       
let aud4 = document.querySelector("#aud4") ;      
let aud5 = document.querySelector("#aud5") ;      
let aud6 = document.querySelector("#aud6");       
let aud7 = document.querySelector("#aud7") ;      
let aud8 = document.querySelector("#aud8") ;  

let down1 = document.querySelector("#down1");       
let down2 = document.querySelector("#down2");       
let down3 = document.querySelector("#down3") ;      
let down4 = document.querySelector("#down4") ;      
let down5 = document.querySelector("#down5") ;      
let down6 = document.querySelector("#down6") ;      
let down7 = document.querySelector("#down7") ;      
let down8 = document.querySelector("#down8") ;      

let play1 = document.querySelector("#play1");       
let play2 = document.querySelector("#play2");       
let play3 = document.querySelector("#play3") ;      
let play4 = document.querySelector("#play4") ;      
let play5 = document.querySelector("#play5") ;      
let play6 = document.querySelector("#play6") ;      
let play7 = document.querySelector("#play7") ;      
let play8 = document.querySelector("#play8") ;      


    play1.addEventListener("click" , ()=>{
      
          down1.style.display="block";
          aud1.style.display="block";
        aud1.play();
    });
play2.addEventListener("click" , ()=>{
      
          down2.style.display="block";
          aud2.style.display="block";
    aud2.play();
    });
play3.addEventListener("click" , ()=>{
      
          down3.style.display="block";
          aud3.style.display="block";
    aud3.play();
    });
play4.addEventListener("click" , ()=>{
      
          down4.style.display="block";
    aud4.play();
          aud4.style.display="block";
    });
  play5.addEventListener("click" , ()=>{
      
          down5.style.display="block";
          aud5.style.display="block";
      aud5.play();
    });
play6.addEventListener("click" , ()=>{
      
          down6.style.display="block";
          aud6.style.display="block";
    aud6.play();
    });
play7.addEventListener("click" , ()=>{
      
          down7.style.display="block";
          aud7.style.display="block";
    aud7.play();
    });
play8.addEventListener("click" , ()=>{
      
          down8.style.display="block";
          aud8.style.display="block";
    aud8.play();
    });
  
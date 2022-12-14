window.onload=function(){
   $('#onload').fadeOut();
   $('body').removeClass('hidden');


}





let hideText_btn=document.getElementById("hideText_btn");

let hideText=document.getElementById("hideText");

hideText_btn.addEventListener("click",toggleText);

  
 

function toggleText(){
   
    hideText.classList.toggle("show");
   

     if(hideText.classList.contains("show")){
        hideText_btn.innerHTML="-Info";
     }
     else{
        hideText_btn.innerHTML="+Info"
     }


   
}

let hideText_btn1=document.getElementById("hideText_btn1");

let hideText1=document.getElementById("hideText1");

hideText_btn1.addEventListener("click",toggleText1);
function toggleText1(){
   hideText1.classList.toggle("show");
    if(hideText1.classList.contains("show")){
       hideText_btn1.innerHTML="-Info";
    }
    else{
       hideText_btn1.innerHTML="+Info"
    }

}

let hideText_btn2=document.getElementById("hideText_btn2");

let hideText2=document.getElementById("hideText2");

hideText_btn2.addEventListener("click",toggleText2);
function toggleText2(){
   hideText2.classList.toggle("show");
    if(hideText2.classList.contains("show")){
       hideText_btn2.innerHTML="-Info";
    }
    else{
       hideText_btn2.innerHTML="+Info"
    }

}

let hideText_btn3=document.getElementById("hideText_btn3");

let hideText3=document.getElementById("hideText3");

hideText_btn3.addEventListener("click",toggleText3);
function toggleText3(){
   hideText3.classList.toggle("show");
    if(hideText3.classList.contains("show")){
       hideText_btn3.innerHTML="-Info";
      
    }
    else{
       hideText_btn3.innerHTML="+Info"
    }

}
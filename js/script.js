/* window.onload = function () {
   $('#onload').fadeOut();
  $('body').removeClass('hidden');

}  */
'use strict'

const body = document.querySelector("body");

const overlay = document.querySelector("#overlay");
overlay.addEventListener('click', of)
function of() {
   overlay.style.display = "none";

   body.classList.remove("hidden");

};







let hideText_btn = document.getElementById("hideText_btn");

let hideText = document.getElementById("hideText");

hideText_btn.addEventListener("click", toggleText);




function toggleText() {

   hideText.classList.toggle("show");

   if (hideText.classList.contains("show")) {

      hideText_btn.innerText = "-Info";
   }
   else {
      hideText_btn.innerText = "+Info"
   }

}

let hideText_btn1 = document.getElementById("hideText_btn1");

let hideText1 = document.getElementById("hideText1");

hideText_btn1.addEventListener("click", toggleText1);

function toggleText1() {
   hideText1.classList.toggle("show");
   hideText2.classList.remove("show");
   hideText3.classList.remove("show");


   if (hideText1.classList.contains("show")) {

      hideText_btn1.innerText = "-Info";
   }
   else {
      hideText_btn1.innerText = "+Info"
   }

}

let hideText_btn2 = document.getElementById("hideText_btn2");

let hideText2 = document.getElementById("hideText2");

hideText_btn2.addEventListener("click", toggleText2);
function toggleText2() {

   hideText2.classList.toggle("show");
   hideText1.classList.remove("show");
   hideText3.classList.remove("show");




   if (hideText2.classList.contains("show")) {
      hideText_btn2.innerText = "-Info";
   }
   else {
      hideText_btn2.innerText = "+Info"
   }

}

let hideText_btn3 = document.getElementById("hideText_btn3");

let hideText3 = document.getElementById("hideText3");

hideText_btn3.addEventListener("click", toggleText3);
function toggleText3() {

   hideText3.classList.toggle("show");

   hideText1.classList.remove("show");
   hideText2.classList.remove("show");

   if (hideText3.classList.contains("show")) {
      hideText_btn3.innerText = "-Info";

   }
   else {
      hideText_btn3.innerText = "+Info"
   }

}
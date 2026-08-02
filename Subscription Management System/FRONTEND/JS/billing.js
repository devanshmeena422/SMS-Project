const planName=document.getElementById("planName");
const planPrice=document.getElementById("planPrice");

let savedPlan=localStorage.getItem("planName");
let savedPrice=localStorage.getItem("planPrice");

if(savedPlan){
planName.innerText=savedPlan;
}

if(savedPrice){
planPrice.innerText=savedPrice;
}

const downloadButtons=document.querySelectorAll(".downloadButton");

downloadButtons.forEach(function(button){

button.addEventListener("click",function(){

alert("Invoice Download Started");

});

});

document.getElementById("payNow").addEventListener("click",function(){

alert("Payment Gateway will be connected later.");

});

document.getElementById("dashboard").addEventListener("click",function(){

window.location.href="dashboard.html";

});
const planName=document.getElementById("planName");
const planPrice=document.getElementById("planPrice");

const payNow=document.getElementById("payNow");
const dashboard=document.getElementById("dashboard");

const downloadButtons=document.querySelectorAll(".downloadButton");

let savedPlan=localStorage.getItem("planName");
let savedPrice=localStorage.getItem("planPrice");

if(savedPlan){

planName.innerHTML=savedPlan;

}

else{

planName.innerHTML="Premium Plan";

}

if(savedPrice){

planPrice.innerHTML=savedPrice;

}

else{

planPrice.innerHTML="₹999 / Month";

}

downloadButtons.forEach(function(button){

button.onclick=function(){

alert("Invoice Downloaded Successfully.");

};

});

payNow.onclick=function(){

alert("Payment Gateway Integration Coming Soon.");

};

dashboard.onclick=function(){

window.location.href="dashboard.html";

};

window.onload=function(){

console.log("Billing Page Loaded Successfully.");

};
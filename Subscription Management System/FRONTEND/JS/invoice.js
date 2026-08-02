const invoiceButtons=document.querySelectorAll(".invoiceButton");

invoiceButtons.forEach(function(button){

button.addEventListener("click",function(){

alert("Invoice Download Started");

});

});

document.getElementById("billingPage").addEventListener("click",function(){

window.location.href="billing.html";

});

document.getElementById("dashboardPage").addEventListener("click",function(){

window.location.href="dashboard.html";

});
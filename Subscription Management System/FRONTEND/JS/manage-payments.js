const addPayment=document.getElementById("addPayment");

addPayment.addEventListener("click",function(){

alert("Payment Added");

});

const edit=document.querySelectorAll(".edit");

edit.forEach(function(button){

button.addEventListener("click",function(){

alert("Payment Updated");

});

});

const remove=document.querySelectorAll(".delete");

remove.forEach(function(button){

button.addEventListener("click",function(){

alert("Payment Deleted");

});

});
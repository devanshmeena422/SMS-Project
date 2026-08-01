const addSubscription=document.getElementById("addSubscription");

addSubscription.addEventListener("click",function(){

alert("Subscription Added");

});

const edit=document.querySelectorAll(".edit");

edit.forEach(function(button){

button.addEventListener("click",function(){

alert("Subscription Updated");

});

});

const remove=document.querySelectorAll(".delete");

remove.forEach(function(button){

button.addEventListener("click",function(){

alert("Subscription Deleted");

});

});
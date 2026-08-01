const addPlan=document.getElementById("addPlan");

addPlan.addEventListener("click",function(){

alert("New Plan Added");

});

const edit=document.querySelectorAll(".edit");

edit.forEach(function(button){

button.addEventListener("click",function(){

alert("Edit Plan");

});

});

const remove=document.querySelectorAll(".delete");

remove.forEach(function(button){

button.addEventListener("click",function(){

alert("Delete Plan");

});

});
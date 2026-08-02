const addUser=document.getElementById("addUser");

addUser.addEventListener("click",function(){

alert("Add User Feature Coming Soon");

});

const edit=document.querySelectorAll(".edit");

edit.forEach(function(button){

button.addEventListener("click",function(){

alert("Edit User");

});

});

const remove=document.querySelectorAll(".delete");

remove.forEach(function(button){

button.addEventListener("click",function(){

alert("Delete User");

});

});
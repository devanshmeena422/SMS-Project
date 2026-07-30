const user=document.getElementById("welcomeUser");

let name=localStorage.getItem("userName");

if(name){

user.innerHTML="Welcome, "+name;

}

else{

user.innerHTML="Welcome, User";

}
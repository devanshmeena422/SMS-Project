const user=document.getElementById("welcomeUser");

let name=localStorage.getItem("userName");

if(name){

user.innerText="Welcome, "+name;

}

else{

user.innerText="Welcome, User";

}
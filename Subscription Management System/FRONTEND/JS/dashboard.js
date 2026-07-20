const userName=document.getElementById("userName");
const userEmail=document.getElementById("userEmail");
const planName=document.getElementById("planName");
const planPrice=document.getElementById("planPrice");

const renewButton=document.getElementById("renewButton");
const cancelButton=document.getElementById("cancelButton");

let name=localStorage.getItem("userName");
let email=localStorage.getItem("userEmail");
let plan=localStorage.getItem("planName");
let price=localStorage.getItem("planPrice");

if(name){
    userName.innerText=name;
}

if(email){
    userEmail.innerText=email;
}

if(plan){
    planName.innerText=plan;
}

if(price){
    planPrice.innerText=price;
}

renewButton.addEventListener("click",function(){

    alert("Your subscription has been renewed successfully.");

});

cancelButton.addEventListener("click",function(){

    let answer=confirm("Do you want to cancel your subscription?");

    if(answer){

        localStorage.removeItem("planName");
        localStorage.removeItem("planPrice");

        planName.innerText="No Plan Selected";
        planPrice.innerText="₹0";

        alert("Subscription cancelled successfully.");

    }

});
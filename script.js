window.onload = function () {
    alert("Welcome to Subscription Management System");
};
let hour = new Date().getHours();

if (hour < 12) {
    console.log("Good Morning");
}
else if (hour < 18) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}

let today = new Date();

console.log("Today's Date : " + today.toDateString());

let totalPlans = document.getElementsByClassName("card");

console.log("Total Plans Available : " + totalPlans.length);

let buttons = document.querySelectorAll(".card button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        let plan = this.parentElement.querySelector("h2").innerText;

        let confirmPlan = confirm("Do you want to subscribe to " + plan + "?");

        if(confirmPlan){

            alert("Successfully Subscribed to " + plan);

            this.innerText = "Subscribed";

            this.style.backgroundColor = "gray";

            this.disabled = true;

        }

    });

});
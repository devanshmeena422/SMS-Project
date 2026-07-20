const buttons=document.querySelectorAll(".planButton");

buttons.forEach(function(button){

    button.addEventListener("click",function(){

        let planName=button.parentElement.querySelector("h2").innerText;
        let planPrice=button.parentElement.querySelector("h1").innerText;

        localStorage.setItem("planName",planName);
        localStorage.setItem("planPrice",planPrice);

        alert(planName+" Selected Successfully");

        window.location.href="login.html";

    });

});
document.addEventListener("DOMContentLoaded",function(){

    let buttons=document.querySelectorAll("button");

    buttons.forEach(function(button){

        button.addEventListener("click",function(){

            if(button.innerText=="Select Plan"){
                alert("Please Login or Register to continue.");
            }

            if(button.innerText=="View Plans"){
                window.location.href="plans.html";
            }

        });

    });

});
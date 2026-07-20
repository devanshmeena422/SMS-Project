const cards=document.querySelectorAll(".admin-card");

cards.forEach(function(card){

    card.addEventListener("mouseover",function(){

        card.style.background="lightgray";

    });

    card.addEventListener("mouseout",function(){

        card.style.background="white";

    });

});
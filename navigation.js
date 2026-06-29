let links = document.querySelectorAll("nav a");
links.forEach(function(link){

    link.addEventListener("click", function(){
        console.log("Opening : " + this.innerText);

    });
});
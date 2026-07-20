const loginForm=document.getElementById("loginForm");
const email=document.getElementById("email");
const password=document.getElementById("password");
const showPassword=document.getElementById("showPassword");

showPassword.addEventListener("change",function(){

    if(showPassword.checked){
        password.type="text";
    }
    else{
        password.type="password";
    }

});

loginForm.addEventListener("submit",function(event){

    event.preventDefault();

    let emailValue=email.value.trim();
    let passwordValue=password.value.trim();

    let savedEmail=localStorage.getItem("userEmail");

    if(emailValue=="" || passwordValue==""){
        alert("Please fill all the fields.");
        return;
    }

    if(!emailValue.includes("@") || !emailValue.includes(".")){
        alert("Enter a valid email.");
        return;
    }

    if(savedEmail==null){
        alert("Please register first.");
        window.location.href="register.html";
        return;
    }

    if(emailValue!==savedEmail){
        alert("Email not found.");
        return;
    }

    alert("Login Successful");

    window.location.href="dashboard.html";

});
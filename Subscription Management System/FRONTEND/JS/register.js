const registerForm=document.getElementById("registerForm");
const name=document.getElementById("name");
const email=document.getElementById("email");
const mobile=document.getElementById("mobile");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");
const showPassword=document.getElementById("showPassword");

showPassword.addEventListener("change",function(){

    if(showPassword.checked){
        password.type="text";
        confirmPassword.type="text";
    }
    else{
        password.type="password";
        confirmPassword.type="password";
    }

});

registerForm.addEventListener("submit",function(event){

    event.preventDefault();

    let nameValue=name.value.trim();
    let emailValue=email.value.trim();
    let mobileValue=mobile.value.trim();
    let passwordValue=password.value.trim();
    let confirmValue=confirmPassword.value.trim();

    if(nameValue=="" || emailValue=="" || mobileValue=="" || passwordValue=="" || confirmValue==""){
        alert("Please fill all the fields.");
        return;
    }

    if(nameValue.length<3){
        alert("Name should contain at least 3 characters.");
        return;
    }

    if(!emailValue.includes("@") || !emailValue.includes(".")){
        alert("Enter a valid email address.");
        return;
    }

    if(mobileValue.length!=10 || isNaN(mobileValue)){
        alert("Enter a valid mobile number.");
        return;
    }

    if(passwordValue.length<6){
        alert("Password should contain at least 6 characters.");
        return;
    }

    if(passwordValue!==confirmValue){
        alert("Passwords do not match.");
        return;
    }

    localStorage.setItem("userName",nameValue);
    localStorage.setItem("userEmail",emailValue);
    localStorage.setItem("userMobile",mobileValue);

    alert("Registration Successful");

    window.location.href="login.html";

});
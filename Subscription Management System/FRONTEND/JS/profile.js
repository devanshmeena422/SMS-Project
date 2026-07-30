const profileName=document.getElementById("profileName");
const profileEmail=document.getElementById("profileEmail");
const profileMobile=document.getElementById("profileMobile");
const profilePlan=document.getElementById("profilePlan");

const editProfile=document.getElementById("editProfile");
const logout=document.getElementById("logout");

profileName.innerHTML=localStorage.getItem("userName")||"Guest User";

profileEmail.innerHTML=localStorage.getItem("userEmail")||"Not Available";

profileMobile.innerHTML=localStorage.getItem("userMobile")||"+91 XXXXXXXXXX";

profilePlan.innerHTML=localStorage.getItem("planName")||"Premium";

editProfile.onclick=function(){

alert("Profile Update Feature Coming Soon");

};

logout.onclick=function(){

if(confirm("Are you sure you want to logout?")){

localStorage.clear();

window.location.href="login.html";

}

};
const profileName=document.getElementById("profileName");
const profileEmail=document.getElementById("profileEmail");
const profileMobile=document.getElementById("profileMobile");
const profilePlan=document.getElementById("profilePlan");

const editProfile=document.getElementById("editProfile");
const logout=document.getElementById("logout");

profileName.innerText=localStorage.getItem("userName") || "Guest User";

profileEmail.innerText=localStorage.getItem("userEmail") || "Not Available";

profileMobile.innerText=localStorage.getItem("userMobile") || "Not Available";

profilePlan.innerText=localStorage.getItem("planName") || "No Plan Selected";

editProfile.addEventListener("click",function(){

    alert("Profile Update Feature will be added later.");
});
logout.addEventListener("click",function(){
    localStorage.clear();
    alert("Logout Successful");
    window.location.href="login.html";

});
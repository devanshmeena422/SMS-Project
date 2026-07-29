const downloadReport=document.getElementById("downloadReport");

const adminPage=document.getElementById("adminPage");

downloadReport.onclick=function(){

alert("Report Downloaded Successfully.");

};

adminPage.onclick=function(){

window.location.href="admin.html";

};

window.onload=function(){

console.log("Reports Page Loaded Successfully.");

};


var verifiermale;
var verifierfemale;
var maleakan; 
var femaleakan;
var femname; 
var malename;


//
//
//
//


function akan(){

var femname = ("Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama");
var malename = ("Kwasi","Kwadwo","Kwabena,","Kwaku","Yaw","Kofi","kwame");
var start = new Date(document.getElementById("dob").value);
var con = start.toDateString();
var dd = start.getDay();
var mm = start.getMonth();
var yy = start.getFullYear();
//if(con === ""){
 //   alert("enter Date Of Birth");
  //}else{
  
  //}
  

  alert(yy);
  // alert(mm);
  // alert(yy);
  // -->
}
function maleclicked(){
  verifiermale = true;
}

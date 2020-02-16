

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
function verifying(){
  if(verifiermale=true){
    maleakan = malename[dd];
    alert(maleakan);
  }else if(verifiermale = false){
    verifiermale=true;
  }else if(verifierfemale = true){
    femaleakan=femname[dd];
      alert(femaleakan);
  }else {
    verifiermale=true;
    alert("enter names");
  }
}
function maleclicked(){
  verifiermale = true;
}
function femaleclicked(){
  verifierfemale = true;

}

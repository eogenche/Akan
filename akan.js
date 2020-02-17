var male;
var female;
var maleakan; 
var femaleakan;
var femname; 
var malename;
var myinput;

function noinput(){
    myinput = document.getElementById("dob").value;
    if(myinput===""){
        alert("You must enter a date!");
    }else{
        alert("Date received!");
    }
}
function akan(){
noinput();
var malename = ["Kwasi","Kwadwo","Kwabena,","Kwaku","Yaw","Kofi","kwame"];
var femname = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var list = document.getElementById("list").value;
var start = new Date(document.getElementById("dob").value);
var con = start.toDateString();
 var dd = start.getDay();
// var mm = start.getMonth();
// var yy = start.getFullYear();
    

    if(list == "male"){
        maleakan = malename[dd];
        alert(maleakan);
    // //  }else if(verifiermale = false){
    // //    verifierfemale=true;
    }else if(list == "female"){
        femaleakan=femname[dd];
          alert(femaleakan);
    }else {
        list = "male";
    }
 }
// function maleclicked(){
//   verifiermale = true;
// }
// function femaleclicked(){
//    verifierfemale = true;
// }

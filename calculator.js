//calculator tip
function calculateTip(){
    let billAmount=document.getElementById("billamt").value;
    let serviceQual=document.getElementById("serviceQual").value;
    let numberOfPeople=document.getElementById("peopeleamt").value;

    //validate input
    if(billamt==="" || serviceQual=== 0){
        alert("please enter the values");
        return;
    }
    //check to see if this is empty or less than or equal to 1
    if(numberOfPeople==="" || numberOfPeople <= 1){
        document.getElementById("each").style.display="none";
  }
  else{
      document.getElementById("each").style.display="block";
  }
  //calculate tip
 let total =(billamt*ServiceQual)/numberOfPeople;
 //round to two decimal places
 total=math.round(total*100)/100;
 //next line allow us to always have two digits after decimal point
 total=total.toFixed(2);
 //display the tip
 document.getElementById("totalTip").style.display="block";
 document.getElementById("Tip").innerHtml="total";

}
//Hide the tip amount on load
document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

//click to call a fuction
document.getElementById(calculate ).onclick=function(){
    calculateTip();
};
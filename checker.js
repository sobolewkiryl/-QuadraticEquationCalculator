

function sprawdz(){
	
var a = document.getElementById("field1").value;

var b = document.getElementById("field3").value;

var c = document.getElementById("field4").value;

var delta = b*b - 4*a*c;
	
 if(delta<0){
	 document.getElementById("result").innerHTML="Delta jest ujemna , równanie nie ma pierwiastków."
	 return;
 }else 
 {
	 var x1 = (b*(-1) - Math.sqrt(delta)) / 2*a;
	 
	 var x2 = (b*(-1) + Math.sqrt(delta)) / 2*a;
	 
	 document.getElementById("result").innerHTML= "Delta= " + delta + ", X1 = " + x1 + ", X2 = " + x2;
 }
 var select = document.getElementById("znaki");
 
 var selectedValue = select.options[select.selectedIndex].value;
 
 if(a>0 && selectedValue == ">"){
	 var img1 = "<img src=\"wieksze01.png\"/>";
	 document.getElementById("graphic").innerHTML= img1;
 }
 
   else if(selectedValue == "=") {
	return;
 }
 
 else if(a>0 && selectedValue == "≥"){
	 
	 var img2 = "<img src=\"wiekszerowne0.png\"/>";
	 document.getElementById("graphic").innerHTML= img2;
 }
  else if(a>0 && selectedValue == "<"){
	 
	 var img3 = "<img src=\"mniejsze01.png\"/>";
	 document.getElementById("graphic").innerHTML= img3;
 }
   else if(a>0 && selectedValue == "≤"){
	 
	 var img4 = "<img src=\"mniejszerowne0.png\"/>";
	 document.getElementById("graphic").innerHTML= img4;
 }
    else if(a<0 && selectedValue == ">"){
	 
	 var img5 = "<img src=\"wieksze0inv.png\"/>";
	 document.getElementById("graphic").innerHTML= img5;
 }
     else if(a<0 && selectedValue == "≥"){
	 
	 var img5 = "<img src=\"wiekszerowne0inv.png\"/>";
	 document.getElementById("graphic").innerHTML= img5;
 }
      else if(a<0 && selectedValue == "<"){
	 
	 var img6 = "<img src=\"mniejsze0inv.png\"/>";
	 document.getElementById("graphic").innerHTML= img6;
 }
       else if(a<0 && selectedValue == "≤"){
	 
	 var img7 = "<img src=\"mniejszerowne0inv.png\"/>";
	 document.getElementById("graphic").innerHTML= img7;
 } 

 
}










var name1 = "ye button";
var name2 = "YE BUTTON";
var isBig = false;
var fill = 0;
var width = 500;

function changeName(){
  if(isBig){
      document.getElementById("pressed").innerHTML=name1;
  }
  else{
      document.getElementById("pressed").innerHTML=name2;

  }
  isBig = !isBig;
}
changeMeter();
function changeMeter(){
    console.log("call method");
    document.getElementById("meter").style.borderLeft=fill + "px solid red"; 
    document.getElementById("meter").style.width=width + "px"
    fill+=2;
    width-=2;
    setTimeout(function(){changeMeter();}, 100);
}
var time=new Date().getHours();
if(time>=6 && time<=12){
   
    alert("Good Morning!");
    document.body.style.background = "White";
} 
else if(time>12 && time<=18){
    
    alert("Good Afternoon!");
    document.body.style.background="Yellow";

}
else if(time>18 || time<6){
    alert("Good Night!");
    document.body.style.background= "Black"
}

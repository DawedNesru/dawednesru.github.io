window.onload = function(){
    "use strict";
    
    
   
    
    
}


function display(){

    setInterval(checkmeup, 500);
    document.getElementById("deco").style.textAlign = "right";
   } 
function checkmeup(){
    document.getElementById("deco").style.fontSize = 2 + parseInt(document.getElementById("deco").style.fontSize) + "px";
}
   //this  function to tell change the style of the text in the text area
function dothis(){
    if(document.getElementById("ch").checked)
    {
    document.getElementById("deco").style.fontWeight = "bold";
   document.getElementById("deco").style.color = "green";
   document.getElementById("deco").style.textDecoration = "underline";    
   document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';
}

//this is the opposite of the above one
    else
    {
        document.getElementById("deco").style.fontWeight = "normal";
       document.getElementById("deco").style.color = "black";
       document.getElementById("deco").style.textDecoration = "none";    
       document.getElementById("deco").style.backgroundImage = "none";
    }
}
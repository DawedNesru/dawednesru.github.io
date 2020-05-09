/*jshint  esversion:6, globalstrict:false */
$(document).ready(function(){
  $("div.circle").hide(); 

let timer = "";
$("div.circle").click(function(){
 clearInterval(timer);
 $("div.circle").hide(); 
   });
   
$('#btn').click(function(){

   const wid = parseInt($('#width').val());
  const am = parseInt($('#amount').val());
  const rate = parseInt($('#growthrate').val());
  const nCircle = parseInt($('#numcircles').val());
  if(!wid || !am || !rate ||  !nCircle)
  alert("please fill all text box");
  else{
    let text = ""; 
   $('div.circle').html(function(i, origText){
    
    for(let i = 0; i < nCircle; i++){
       text += "<div class = 'circle'></div>";
     }
     return text;
   }); 
   $('div.circle').width(wid).height(wid).css({
   "border-radius": wid + "px",
   "margin": "auto",
   "background-color": "red",
  }).show();
  
 timer = setInterval(magnify, rate, am);
   }
});
  function magnify(am){
        const sizew = parseInt($("div.circle").css("width"));
        const sizeh = parseInt($("div.circle").css("height"));
        const sizer = parseInt($("div.circle").css("border-radius"));
        const newsizew = sizew + am + "px";
        const newsizeh = sizeh + am + "px";
        const newsizer = sizer + am + "px";
        $("div.circle").css({
        "width" : newsizew,
        "height" : newsizeh,
        "border-radius" : newsizer
        });
         
        }
});



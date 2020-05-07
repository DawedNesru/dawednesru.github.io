$(function(){

    $("#start").click(function(){
        $("#status").text("Click the \"S\" to begin.");
       $('.boundary').css("background-color", "white");
                 });
                
            
  $('.boundary').on('mouseover', (function(){
    $('.boundary').css("background-color", "red");
    $("#status").text("You Lost!");
     /* $('.boundary').addClass("changered"); */
      }));
     

      $('#end').on('mouseover', (function(){
          
        $("#status").text("You Win!");
   })); 

});
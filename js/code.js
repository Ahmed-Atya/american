$(document).ready(function(){
//<!-- Initialize the plugin -->
//<!-- Initialize with options, if needed -->
    $('#exampleSlider').multislider({
        interval:91000,
        slideAll:true
    });  
	 $(".tabs .container tab").click=function(){
        this.addClass("active").siblings.removeClass("active");
     }
         
         
});





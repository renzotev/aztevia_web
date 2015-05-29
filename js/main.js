$(function(){
    $('.carousel').carousel({
      interval: 5000
    });

    $('.percent').each( function () {
    	var currNum = parseInt($(this).text());

    	$(this).animateNumber(
    		{ 
	    		number: currNum
	    	},
	    	3000
	    );
    });

     /*$(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
            $(this).toggleClass('open');             
        });*/
});

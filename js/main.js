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

});

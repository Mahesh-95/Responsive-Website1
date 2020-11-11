  jQuery(document).ready(function(){
	  
	"use strict"
	$('.slider').ripples({
	  dropRadius: 15,
	  perturbance: 0.01,
	
	});
	
	$(".text").typed({
		strings:["<strong>Welcome to </strong><strong class='primary'>our Website.</strong>","<strong>Have a </strong><strong class='primary'>nice Day!!</strong>"],
		 typespeed:30,
		 loop:true,
	});
	
	$(window).scroll(function(){
		
		var top= $(window).scrollTop();
		if(top>=60){
		   $("nav").addClass('secondary');
		 }
		else
			if($("nav").hasClass('secondary')){
				$("nav").removeClass('secondary');
				 
			 }
	});

	$('.img-wrapper').magnificPopup({
		delegate: 'a', 
		type: 'image',
		gallery: {
			enabled: true
		  }
	  });

	  $('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
		0:{
		    items:1
		},
		600:{
		    items:2
		},
		1000:{
		    items:3
		}
	    }
	})

	

});

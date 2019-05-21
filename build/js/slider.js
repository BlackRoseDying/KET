(function($)
{
	'use strict';

	$(document).ready(function()
	{
		$('.slider').slick({
			infinite: true,
			arrows: false,
			dots: true,
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: 
			[
			    {
			      breakpoint: 480,
			      settings: 
			      {
			        autoplay: false
			      }
			    }
   			]
		});

		$('.we-are-the-one__slider').slick({
			infinite: true,
			arrows: false,
			dots: true,
			centerMode: false,
			slidesToShow: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: 
			[
			    {
			      breakpoint: 768,
			      settings: 
			      {
			      	autoplay: false,
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    }
   			]
		});
	});
})($);
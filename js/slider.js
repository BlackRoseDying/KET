(function($)
{
	'use strict';

	$(document).ready(function()
	{
		$('.slider').slick({
			infinite: true,
			arrows: true,
			dots: true,
			centerMode: true,
			slidesToShow: 1,
			responsive: 
			[
			    {
			      breakpoint: 1024,
			      settings: {
			        infinite: true,
			        dots: false,
			        arrows: false,
			        autoplay: true,
			        autoplaySpeed: 3000
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        infinite: true,
			        dots: false,
			        arrows: true,
			        autoplay: true,
			        autoplaySpeed: 3000,
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        infinite: true,
			        dots: true,
			        arrows: true,
			        autoplay: false,
			        centerMode: false
			      }
			    }
   			]
		});

		$('.we-are-the-one__slider').slick({
			infinite: true,
			arrows: true,
			dots: true,
			centerMode: true,
			slidesToShow: 1,
			responsive: 
			[
			    {
			      breakpoint: 1024,
			      settings: {
			        infinite: true,
			        dots: false,
			        arrows: false,
			        autoplay: true,
			        autoplaySpeed: 3000
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        infinite: true,
			        dots: false,
			        arrows: true,
			        autoplay: true,
			        autoplaySpeed: 3000
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        infinite: true,
			        dots: true,
			        arrows: true,
			        autoplay: false,
			        centerMode: false,
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    }
   			]
		});
	});
})($);
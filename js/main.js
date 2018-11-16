(function($)
{
	'use strict';

	var menuBtn = $('.menu__btn'),
		closeMenuBtn = $('.menu-close__btn'),
		navList = $('.nav-list'),
		layout = $('.layout');

	$('.menu__link').click(function() 
	{
		var $page = $('html, body');
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 800);

	    layout.css('display', 'none');

   		return false;
	});

	menuBtn.click(function(evt)
	{
		evt.preventDefault();

		var htmlWidth = $('body').css('width'),
			htmlHeight = $('body').css('height');
		
		navList.slideDown(350);

		menuBtn.toggleClass('visually-hidden');
		closeMenuBtn.toggleClass('visually-hidden');

		layout.css('display', 'block').css('width', htmlWidth).css('height', htmlHeight);
	});

	closeMenuBtn.click(function(evt)
	{
		evt.preventDefault();

		navList.slideUp(350);
		
		menuBtn.toggleClass('visually-hidden');
		closeMenuBtn.toggleClass('visually-hidden');
		layout.css('display', 'none');
	});

	layout.click(function(evt)
	{
		evt.preventDefault();

		navList.slideUp(350);
		
		menuBtn.toggleClass('visually-hidden');
		closeMenuBtn.toggleClass('visually-hidden');
		layout.css('display', 'none');
	});
})($);
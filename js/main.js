(function($)
{
	'use strict';

	var menuBtn = $('.menu__btn'),
		closeMenuBtn = $('.menu-close__btn'),
		navList = $('.nav-list');

	menuBtn.click(function(evt)
	{
		evt.preventDefault();
		
		navList.slideDown(350);

		menuBtn.toggleClass('visually-hidden');
		closeMenuBtn.toggleClass('visually-hidden');
	});

	closeMenuBtn.click(function(evt)
	{
		evt.preventDefault();

		navList.slideUp(350);
		
		menuBtn.toggleClass('visually-hidden');
		closeMenuBtn.toggleClass('visually-hidden');

	});
})($);
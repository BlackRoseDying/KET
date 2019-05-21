(function()
{
	'use strict';

	var mapElement = document.getElementById('map');
	var center = {lat: 49.070395, lng: 33.405456};
	var map = new google.maps.Map(mapElement, {zoom: 18, center: center});
})();
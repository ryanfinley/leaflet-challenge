// create the tile layers for the background of the map
var defaultMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// make a map object
var myMap = L.map("map", {
    center: [36.7783, -119.4179],
    zoom: 3
});

// add the default map to the map
defaultMap.addto(myMap);

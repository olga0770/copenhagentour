var bounds = null;
var watchID;
var center = {lat: 55.673361, lng: 12.590022};
var map;






function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
center: center,
//scrollwheel: false,
zoom: 16
});


var imageBounds = {
north: 55.710397055188594,
south: 55.69718182757236,
east: 12.548679597961382,
west: 12.52799440203853
};
var overlay = new google.maps.GroundOverlay('picture/map-01.svg', imageBounds);
overlay.setMap(map);

$.getJSON("jsonmap.json", buildMap);

}



function buildMap(JSONdata) {
//debugInfo("Loaded JSONdata");
JSONdata.forEach(createMarker);

positionMarker = new google.maps.Marker({
position: center,
map: map
});
}

function createMarker(sted) {
var marker = new google.maps.Marker({
position: sted.position,
title: sted.navn,
icon: sted.icon,
map: map
});



var infowindow = new google.maps.InfoWindow({
content: "overwrite with template",
position: sted.position
});

marker.addListener("click", function () {

var clone = document.querySelector("#informationmarker").content.cloneNode(true);

clone.querySelector(".data_billede").src = "img/" + sted.billede + "-sted.jpg";
clone.querySelector(".data_navn").innerHTML = sted.navn;
clone.querySelector(".data_adresse").innerHTML = sted.adresse;
clone.querySelector(".data_beskrivelse").innerHTML = sted.beskrivelse;

infowindow.setContent(clone);
infowindow.open(map, marker);

});
}




















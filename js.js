//"use strict";
//
//
//
//function modalKnapKlik(oplysningerOmEventet){
//    var produktId = oplysningerOmEventet.target.dataset.id;
//
//
//$.getJSON("http://petlatkea.dk/2017/dui/api/product?callback=?&id="+produktId, visModalIndhold);
//
//}
//
//
//function modalKnapKlik(e){
//
//document.querySelector('#myModalLabel').textContent="Loading...";
//document.querySelector('#myModal .modal-body p').textContent=".....";
//
//var produktId = e.target.dataset.id;
//
//$.getJSON("json.json"+tourId, visModalIndhold);
//}
//
//
//
//function visModalIndhold(mereInfo){
//    console.log(mereInfo);
//document.querySelector('#myModalLabel').textContent=mereInfo.navn;
//document.querySelector('#myModal .modal-body p').textContent=mereInfo.langbeskrivelse;
//}




window.addEventListener("load", sidenVises);

function sidenVises() {

    console.log("siden vises");


    $.getJSON("json.json", visTurListe);

}


function visTurListe(listen) {

    //console.table( listen );
    listen.forEach(visTur);
}




function visTur(tour) {
//    console.log( tur );


    var klon = document.querySelector("#tour_template").content.cloneNode(true);


    //indsæt data i klon
    klon.querySelector(".data_navn").innerHTML = tour.navn;
    klon.querySelector(".data_beskrivelse").innerHTML = tour.beskrivelse;
    klon.querySelector(".data_billede").src = "img/" + tour.billede + "-cph.jpg";

    document.querySelector(".turliste").appendChild(klon);



}










var bounds = null;
var watchID;
var center = {lat: 55.703790, lng: 12.538337};
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

$.getJSON("json.json", buildMap);

}




































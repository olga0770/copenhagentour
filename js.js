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



































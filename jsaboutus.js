window.addEventListener("load", sidenVises);

function sidenVises() {

    console.log("siden vises");


    $.getJSON("jsonaboutus.json", visPersonaListe);

}


function visPersonaListe(listen) {

    //console.table( listen );
    listen.forEach(visPersona);
}




function visPersona(persona) {
//    console.log( persona );


    var klon = document.querySelector("#persona_template").content.cloneNode(true);


    //indsæt data i klon
    klon.querySelector(".data_navn").innerHTML = persona.navn;
    klon.querySelector(".data_beskrivelse").innerHTML = persona.beskrivelse;
    klon.querySelector(".data_billede").src = "img/" + persona.billede + "-persona.jpg";

    document.querySelector(".personaliste").appendChild(klon);



}















































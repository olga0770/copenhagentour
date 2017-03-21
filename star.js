var stars;

window.addEventListener("load", pageLoaded);

function pageLoaded() {
    $("#evaluation").load("img/star-01.svg", loadedSVG);

}

function loadedSVG() {

	stars = $('*[id^="star"]');

	console.log(stars);
	stars = [].slice.call(stars); //Converted the HTML Collection to an array
    stars.forEach(registerStarClick);
}

function registerStarClick(star){
	star.addEventListener("click", clickedStar);
}

function clickedStar(event){
	var starClicked = event.target;
	console.log("Clicked "+ starClicked);

	var clickedIndex = starClicked.id.substring(4);

	for (var i = 0; i < stars.length; i++) {
		// for all star clicked index <= set fill to selected

		if(i <=clickedIndex){
			stars[i].setAttribute("fill", "green");
		}//Else set fill to default
		else{
			stars[i].setAttribute("fill", "white");
		}


	}


}


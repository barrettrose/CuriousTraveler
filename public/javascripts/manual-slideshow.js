/* Rewriting the manual-slideshow script provided by W3schools.com to handle the three manual slideshows on the page with one script
*/

//Slideshow id (y-value for plusSlides()): 0
var cuisineIndex = 1;
showSlides(cuisineIndex, 0);

//Slideshow id (y-value for plusSlides()): 1
var cultureIndex = 1;
showSlides(cultureIndex, 1);

//Slideshow id (y-value for plusSlides()): 2
var geographyIndex = 1;
showSlides(geographyIndex, 2);

// Next/previous controls - x=amount of slides to progress through, y=desired slideshow(see indexing above)
function plusSlides(x, y) {

	switch(y){
		case 0: 
			showSlides(cuisineIndex += x, 0);
			return;
		case 1: 
			showSlides(cultureIndex += x, 1);
			return;
		case 2:
			showSlides(geographyIndex +=x, 2);
			return;
	}

}

function showSlides(x, y) {

	switch(y){
		case 0: 
			var i;
			var slides = document.getElementsByClassName("cuisine-slide");
		
			//If next button is pressed at last index, loop back to start of slideshow
			if (x > slides.length) 
				{cuisineIndex = 1}
		
			//If back button is pressed at index 1, loop back to end of slideshow
			if (x < 1) 
				{cuisineIndex = slides.length}
		
			//Loop through each slide and set display to none
			for (i = 0; i < slides.length; i++) 
				slides[i].style.display = "none";
			
			//Set new slide to display as block
			slides[cuisineIndex-1].style.display = "block";

			return;

		case 1: 
			var i;
			var slides = document.getElementsByClassName("culture-slide");
		
			//If next button is pressed at last index, loop back to start of slideshow
			if (x > slides.length) 
				{cultureIndex = 1}
		
			//If back button is pressed at index 1, loop back to end of slideshow
			if (x < 1) 
				{cultureIndex = slides.length}
		
			//Loop through each slide and set display to none
			for (i = 0; i < slides.length; i++) 
				slides[i].style.display = "none";
			
			//Set new slide to display as block
			slides[cultureIndex-1].style.display = "block";

			return;

		case 2:
			var i;
			var slides = document.getElementsByClassName("geography-slide");
		
			//If next button is pressed at last index, loop back to start of slideshow
			if (x > slides.length) 
				{geographyIndex = 1}
		
			//If back button is pressed at index 1, loop back to end of slideshow
			if (x < 1) 
				{geographyIndex = slides.length}
		
			//Loop through each slide and set display to none
			for (i = 0; i < slides.length; i++) 
				slides[i].style.display = "none";
			
			//Set new slide to display as block
			slides[geographyIndex-1].style.display = "block";

			return;
			
	}
}
/*
Note: Since this code is only used once on the home page, it would be ideal to embed the following JavaScript
directly in the page, however, I am implementing it externally as a learning experience with Node.js/Express.js

All javascript code as well as HTML/CSS used in the creation of the manual slideshow is credited to w3schools.com
https://www.w3schools.com/howto/howto_js_slideshow.asp
*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("cuisine-slide");

  //If next button is pressed at last index, loop back to start of slideshow
  if (n > slides.length) {slideIndex = 1}

  //If back button is pressed at index 1, loop back to end of slideshow
  if (n < 1) {slideIndex = slides.length}

  //Loop through each slide and set display to none
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  //Set new slide to display as block
  slides[slideIndex-1].style.display = "block";
}



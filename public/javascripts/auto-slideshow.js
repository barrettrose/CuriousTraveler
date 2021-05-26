/*
Note: Since this code is only used once on the home page, it would be ideal to embed the following JavaScript
directly in the page, however, I am implementing it externally as a learning experience with Node.js/Express.js
*/

var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("home-slideshow-img");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}
	x[myIndex-1].style.display = "block";
	setTimeout(carousel, 4000);
}

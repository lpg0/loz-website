
window.onScroll = function() {
	flipImg();
}

function flipImg() {
	var x = document.getElementById("scrollimg2");
	if (x.scrollTop < window.innerHeight*0.8 && x.className === "aerochart-image800 scroll-img") {
		x.className += " flipped";
	}
}
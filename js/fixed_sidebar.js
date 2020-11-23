
var reference;

window.onload = function () {
	reference = document.getElementById("fixed-nav").offsetTop;
}

window.onResize = function () {
	reference = document.getElementById("fixed-nav").offsetTop;
}

window.onscroll = function () {
	fixSideNav();
}

function fixSideNav () {
	var fixedNav = document.getElementById("fixed-nav");
	if (Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) > reference - (175 + window.innerWidth*0.01)) {
		if (fixedNav.className == "fixed-sidenav") {
			fixedNav.className += " fix";
		}
	} else {
		fixedNav.className = "fixed-sidenav";
	}
}


var fixedScroll = true;

window.onload = function () {
	var b = document.getElementById("backfix");
	if (window.innerHeight >= window.innerWidth/4 && (window.innerHeight > 295 && window.innerWidth > 285)) {
		b.style.bottom = -window.innerHeight/2 + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)/2 + "px";
	} else {
		b.style.top = 0 + "px";
		b.style.position = "absolute";
	}
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		b.style.setProperty("-webkit-transition", "755ms cubic-bezier(0.04, 0.62, 0.29, 0.98)");
		b.style.setProperty("-moz-transition", "755ms cubic-bezier(0.04, 0.62, 0.29, 0.98)");
		b.style.setProperty("-o-transition", "755ms cubic-bezier(0.04, 0.62, 0.29, 0.98)");
		b.style.setProperty("transition", "755ms cubic-bezier(0.04, 0.62, 0.29, 0.98)");

		b.style.top = 0 + "px";
		b.style.position = "absolute";
	}
}

window.onscroll = function() {
	changeColor();
	var b = document.getElementById("backfix");
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {b.style.top = 0 + "px"; b.style.position = "absolute";}
	else if (window.innerHeight >= window.innerWidth/4 && (window.innerHeight > 295 && window.innerWidth > 285)) {
		b.style.bottom = -window.innerHeight/2 + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)/2 + "px";
	}

	var af = document.getElementById("arrowfade");
	af.style.transform = "translateX(" +
		-(Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)/3) + "px)";

	var au = document.getElementById("aboutus");
	var ap = document.getElementById("onep1");
	if (Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) > window.innerHeight*0.2) {
		au.className = "loz-home-header grow";
	} else {
		au.className = "loz-home-header growOnScroll";
	}
}

function resizeDelay() {
	var frame = 0;
	var id = setInterval(delay, 5);
	function delay() {
		if (frame >= 4) {
			clearInterval(id);
			fixedScroll = false;
		} else {
			frame += 1;
		}
	}
}

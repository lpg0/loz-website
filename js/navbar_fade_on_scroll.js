
function changeColor() {

	var topColor = "rgba(0, 204, 242, 0.2)";
	var scrollColor = "rgba(10, 10, 10, 0.95)";

	var c = document.querySelector("#contact");
	var x;
	var lz;
	if(document.getElementById("navmenu")) {
		return;
	} else {
		x = document.getElementById("navhome");
		lz = document.getElementById("The_Logo_Itself");
	}

	var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
	if (scrollTop > 2) {

		x.style.backgroundColor = scrollColor;
		x.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.1)";
		c.classList.add("blue");
		lz.classList.add("switch");
		c.classList.remove("white");

	} else if(x.className != "navbar responsive" && x.className != "navbar opened responsive"){

		x.style.backgroundColor = topColor;
		x.style.boxShadow = "0px 0.5px 8px 0px rgba(0, 0, 0, 0.25)";
		lz.classList.remove("switch");
		if (window.innerWidth > 945) {
			c.classList.remove("blue");
			c.classList.add("white");
		}
	}
}

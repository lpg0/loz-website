var d;
var isHomepage = false;
var topColor = "rgba(0, 204, 242, 0.2)";
var scrollColor = "rgba(10, 10, 10, 0.95)";

function SmoothVerticalScrolling(e, time, where) {
    var eTop = e.getBoundingClientRect().top;
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += time / 100;
    }
}

function SVS_B(eAmt, where) {
    if(where == "center" || where == "")
        window.scrollBy(0, eAmt / 2);
    if (where == "top")
        window.scrollBy(0, eAmt);
}

/*function smoothScrolling(element) {
  window.scrollTo(
  top: 1000px,
  behavior: 'smooth',
);
}*/

function openNav() {
  if (window.innerWidth <= 945) {
    if(document.getElementById("navmenu")) {
  		d = document.getElementById("navmenu");
  	} else {
  		d = document.getElementById("navhome");
  		isHomepage = true;
  	}
  	var h = document.getElementById("hambrgr");
  	if(d.className === "navbar" || d.className === "navbar opened") {
  		d.className += " responsive";
  		if (isHomepage) {
  			d.style.backgroundColor = scrollColor;
  			d.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.2)";
        var c = document.querySelector("#contact");
        c.classList.add("blue");
        c.classList.remove("white");
  		} else {
  			d.style.backgroundColor = "rgba(255, 255, 255, 0.97)";
  			d.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.1)";
  		}
  	} else {
  		d.className = "navbar opened";
  		h.style.display = "block";
  		var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  		if (scrollTop < 2 && isHomepage) {
  			d.style.backgroundColor = topColor;
  			d.style.boxShadow = "0px 0.5px 8px 0px rgba(0, 0, 0, 0.25)";
        var c = document.querySelector("#contact");
        c.classList.remove("blue");
        c.classList.add("white");
  		} else if (isHomepage) {
  			d.style.backgroundColor = scrollColor;
  			d.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.1)";
  		} else {
  			d.style.backgroundColor = "rgba(255, 255, 255, 0.97)";
  			d.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.1)";
  		}
  	}
  }
}

function changeToX(x) {
  x.classList.toggle("change");
}

function stayOnM(x) {
  x.classList.remove("change");
}

window.onresize = function () {
	resizedWindow();
}

function resizedWindow () {

	if(document.getElementById("navmenu")) {
		d = document.getElementById("navmenu");
	} else {
		d = document.getElementById("navhome");
		isHomepage = true;
	}

	if (isHomepage) {
		var b = document.getElementById("backfix");
    if (window.innerHeight >= window.innerWidth/4 && (window.innerHeight > 295 && window.innerWidth > 285)) {
  		b.style.bottom = -window.innerHeight/2 + Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)/2 + "px";
  	} else {
  		b.style.top = 0 + "px";
  	}
	}

	if (d.className === "navbar responsive")
	{
			d.className = "navbar";
	} else if (d.className === "navbar opened responsive") {
      d.className = "navbar opened";
  }

	if (window.innerWidth > 945) {
		document.getElementById("hambrgr").style.display = "none";
		var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
		if (scrollTop < 2 && isHomepage) {
			d.style.backgroundColor = topColor;
			d.style.boxShadow = "0px 0.5px 8px 0px rgba(0, 0, 0, 0.25)";
      var c = document.querySelector("#contact");
      c.classList.remove("blue");
      c.classList.add("white");
		} else if (isHomepage) {
			d.style.backgroundColor = scrollColor;
			d.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.1)";
		} else {
			d.style.backgroundColor = "rgba(255, 255, 255, 0.97)";
			d.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.1)";
		}
	} else {
		document.getElementById("hambrgr").style.display = "block";
		stayOnM(document.getElementById("mainhmbrgr"));
		var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
		if (scrollTop < 2 && isHomepage) {
			d.style.backgroundColor = topColor;
			d.style.boxShadow = "0px 0.5px 8px 0px rgba(0, 0, 0, 0.25)";
      var c = document.querySelector("#contact");
      c.classList.remove("blue");
      c.classList.add("white");
		} else if (isHomepage) {
			d.style.backgroundColor = scrollColor;
			d.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.1)";
		} else {
			d.style.backgroundColor = "rgba(255, 255, 255, 0.97)";
			d.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.1)";
		}
	}
}

var lastScrollTop = 0;

window.addEventListener("scroll", function(){
   if (window.innerWidth > 945) {
   if(document.getElementById("navmenu")) {
  		d = document.getElementById("navmenu");
   } else {
  		d = document.getElementById("navhome");
  		isHomepage = true;
   }
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop && scrollTop > 2){
      //scrolled down
      d.classList.add("hide");
      d.classList.remove("show");
   } else {
     //scrolled up
     d.classList.add("show");
     d.classList.remove("hide");
   }
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
}, false);

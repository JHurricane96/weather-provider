function animate(xfromt, duration, xToProperty, callback) {
	var t0 = new Date;

	var _animate = setInterval(function () {
		var t = (new Date - t0)/duration;				
		if (t>1)
			t=1;

		var x = xfromt(t);

		xToProperty(x);
		
		if (t==1) {
			clearInterval(_animate);
			callback();
		}
	}, 10);
}

function events() {
	var buttonArea = document.getElementById("buttons");
	var extraInfoContainer = document.querySelector("div#text-extra");
	var extraInfoCurrentDiv = document.querySelector("div#text-extra div#text-temp");
	var selectedButton = document.querySelector("button.pushed");
	var fadeTime = 300;

	function switchDisplay(event) {
		var button = event.target;
		if (button.tagName == "BUTTON" && !/pushed/.test(button.className)) {
			selectedButton.className = "";
			button.className = "pushed";
			selectedButton = button;
			buttonArea.removeEventListener("click", switchDisplay);
			animate(function (t) {return t;}, fadeTime, function (x) {extraInfoCurrentDiv.style.opacity = 1 - x;}, function() {
				extraInfoCurrentDiv.style.display = "none";
				extraInfoCurrentDiv = document.querySelector("div#text-extra div#text-" + button.innerHTML.toLowerCase());
				extraInfoCurrentDiv.style.display = "block";
				animate(function (t) {return t;}, fadeTime, function (x) {extraInfoCurrentDiv.style.opacity = x;}, function() {
					buttonArea.addEventListener("click", switchDisplay);
				});
			});
			/*extraInfoCurrentDiv.className = extraInfoCurrentDiv.className.replace(" current", "");
			extraInfoCurrentDiv = document.querySelector("div#text-extra div#text-" + button.innerHTML.toLowerCase());
			extraInfoCurrentDiv.className += " current";
			selectedButton.className = "";
			button.className = "pushed";
			selectedButton = button;*/
		}
	}

	buttonArea.addEventListener("click", switchDisplay);
}

window.onload = events;
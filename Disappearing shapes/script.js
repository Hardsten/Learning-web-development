var startTime = 0;
var savedTime = 0;
document.getElementById("bestTime").style.display = "none";
			
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function disappearShape() {
	startTime = new Date().getTime()
	document.getElementById("shape").onclick = function() {
		document.getElementById("shape").style.display = "none";
		var endTime = new Date().getTime();
		var time = (endTime - startTime) / 1000;
		document.getElementById("yourTime").innerHTML = time + " sec";
		document.getElementById("bestTime").style.display = "block";
		if ((savedTime > time) || (savedTime == 0)) {
			savedTime = time;
			document.getElementById("yourBest").innerHTML = savedTime + " sec";
		};
		setTimeout(displayShape, Math.random()*3000);
		}
}
				
function displayShape() {
	if (Math.random() > 0.5) {
		document.getElementById("shape").style.borderRadius = "50%";
	} else {
		document.getElementById("shape").style.borderRadius = "0%";
	}
    var widthHeight = (Math.random()*200) + 50 + "px";
	
	//Commented out js "disappear" string, and inserted jQuery fadeIn string.
		//document.getElementById("shape").style.display = "block";
		$("div").fadeIn("slow");
	
	document.getElementById("shape").style.top = Math.random()*500 + "px";
	document.getElementById("shape").style.left = Math.random()*500 + "px";
	document.getElementById("shape").style.width = widthHeight;
	document.getElementById("shape").style.height = widthHeight;
	document.getElementById("shape").style.backgroundColor = getRandomColor();
	disappearShape();
}
			
disappearShape();
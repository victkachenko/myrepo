function ControllerTimer() {

	this.init = function () {
		var clock = document.getElementById("clock"),
			timer = new Timer(),
			interval = setInterval(localTimer, 1000);
		
		function localTimer() {
			timer.render();
			clock.innerHTML = timer.getResult();
		}	
		
		clock.addEventListener("click", function (event) {
			timer.leftClick();
		}, false);
			
		clock.addEventListener("contextmenu", function (event) {
			timer.rightClick();
			event.preventDefault();
		}, false);
	
	};
	
	return this;
}
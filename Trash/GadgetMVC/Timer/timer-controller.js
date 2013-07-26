function ControllerTimer() {
	this.init = function () {
		var clock = document.getElementById("clock"),
			timer = new Timer(),
			interval = setInterval(localTimer, 1000);
		
		function localTimer() {
			timer.render();
			clock.innerHTML = timer.getResult();
		}	
		
		clock.innerHTML = "Timer";
		
		clock.addEventListener("click", function (event) {
			timer.leftClick();
		}, false);
			
		clock.addEventListener("contextmenu", function (event) {
			timer.rightClick();
			event.preventDefault();
		}, false);
		
		// window.addEventListener("blur", function () {
			// for(var i=0; i < (interval-1); i++) {
				// clearInterval(i);
			// }
			// document.title = "Таймер выключен";
		// }, false);
		
		// window.addEventListener("focus", function () {
			// interval = setInterval(timer.render, 1000);
			// document.title = "Таймер включён";
		// }, false);
		
		window.addEventListener("keypress", function (event) {
			if(event.keyCode === 27) {
				clearInterval(interval);
			} else {
			    if(event.keyCode === 13) {
				    interval = setInterval(timer.render, 1000);
				}	
			}
		}, false);
		
	};
	
	return this;
}
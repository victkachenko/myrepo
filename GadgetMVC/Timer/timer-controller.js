function ControllerTimer() {
	this.init = function () {
		var clock = document.getElementById("clock"),
			timer = new Timer(),
			interval = setInterval(myTimer,1000);
		
		function myTimer() {
			timer.render();
			clock.innerHTML = timer.getResult();
		}	
			clock.innerHTML = "Gadget MVC";
			clock.onclick = function () {
				timer.leftClick();
			};
			
			clock.oncontextmenu = function () {
				timer.rightClick();
				return false;
			};
			
			window.onkeypress = function (event) {
				if(event.keyCode === 27) {
					clearInterval(interval);
				} else {
				    if(event.keyCode === 13) {
					    interval = setInterval(timer.render,1000);
					}	
				}
			};
	};
	
	return this;
}
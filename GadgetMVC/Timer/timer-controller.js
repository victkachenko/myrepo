function Controller() {
	this.init = function () {
		var clock = document.getElementById("clock"),
			timer = new Timer(clock),
			interval = setInterval(timer.render,1000);
		
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
				} else if(event.keyCode === 13) {
					interval = setInterval(timer.render,1000);
				}
			};
	};
	return this;
}
function ControllerDrag() {
	this.init = function () {
		var clock = document.getElementById("clock"),
			drag = new Draggable();
		
		clock.onmousedown = drag.capture;
		window.onmouseup = drag.release;
		window.onmousemove = drag.move;
	};
	return this;
}
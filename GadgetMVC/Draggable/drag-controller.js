function ControllerDrag() {
	this.init = function () {
		var gadget = document.getElementById("gadget"),
			clock = document.getElementById("clock");
			drag = new Draggable();
			
		gadget.addEventListener("mousedown", drag.capture, false);
		window.addEventListener("mouseup", drag.release, false);
		window.addEventListener("mousemove", drag.move, false);
	};
	
	return this;
}
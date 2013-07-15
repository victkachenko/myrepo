function Draggable() {
	var draggable = null;
	
	this.capture = function (event) {
		if(!draggable) {
			draggable = this;
		}
	};
	
	this.release = function () {
		draggable = null;
	};
	
	this.move = function (event) {
		if(draggable) {
			draggable.style.left = event.pageX - 10 + "px"; 
			draggable.style.top = event.pageY - 10 + "px";  // Style in controller © Cap
		}
	};
}
function Draggable() {
	var draggable = null;
	
	this.capture = function () {
		if(!draggable) {
			draggable = this;
		}
		return false;
	};
	
	this.release = function () {
		draggable = null;
	};
	
	this.move = function (event) {
		if(draggable) {
			draggable.style.left = event.pageX - 25 + "px";
			draggable.style.top = event.pageY - 25 + "px";
		}
	};
}
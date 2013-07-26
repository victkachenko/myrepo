function Draggable() {
	var draggable = null,
		layX,
		layY;
	
	this.capture = function (event) {
		if(!draggable) {
			draggable = this;
			layX = event.layerX;
			layY = event.layerY;
		}
		return false;
	};
	
	this.release = function () {
		draggable = null;
	};
	
	this.move = function (event) {
		if(draggable) {
			draggable.style.left = event.pageX - layX + "px"; 
			draggable.style.top = event.pageY - layY + "px";  // Style in controller © Cap
		}
	};
	
	return this;
}
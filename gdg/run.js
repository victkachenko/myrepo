var controllerTimer = new ControllerTimer(),
	controllerDrag = new ControllerDrag(),
	controllerCalc = new ControllerCalc();
	
window.addEventListener("load", function () {

	controllerTimer.init();
	controllerDrag.init();
	controllerCalc.init();
	
}, false);
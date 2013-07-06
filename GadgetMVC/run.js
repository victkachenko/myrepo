var controllerTimer = new ControllerTimer(),
	controllerDrag = new ControllerDrag(),
	controllerCalc = new ControllerCalc();
window.onload = function () {
	controllerTimer.init();
	controllerDrag.init();
	controllerCalc.init();
};
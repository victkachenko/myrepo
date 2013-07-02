window.onload = function () {

	function Controller () {
	
		this.init = function () {
			var ar1 = document.getElementById("area1"),
				ar2 = document.getElementById("area2"),
				ar3 = document.getElementById("area3"),
				plusik = document.getElementById("plus"),
				diff = document.getElementById("difference"),
				multiply = document.getElementById("multiply"),
				decide = document.getElementById("decide"),
				calc = new Calculator();
				
			plusik.onclick = function (){
				calc.first = parseInt(ar1.value,10);
				calc.second = parseInt(ar2.value,10);
				ar3.value = calc.add();
			};
			
			diff.onclick = function () {
				calc.first = parseInt(ar1.value,10);
				calc.second = parseInt(ar2.value,10);
				ar3.value = calc.diff();
			};
			multiply.onclick = function () {
				calc.first = parseInt(ar1.value,10);
				calc.second = parseInt(ar2.value,10);
				ar3.value = calc.multiply();
			};
			decide.onclick = function () {
				calc.first = parseInt(ar1.value,10);
				calc.second = parseInt(ar2.value,10);
				ar3.value = calc.decide();
			};

		};
		
		return this;
	}
	var controller = new Controller();
	controller.init();
}

//@Victor Tkachenko
//@constructor
//@this {Controller}
//@return {Controller}

function ControllerCalc() {
	//@private
	var first,
		second,
		out,
		calc = new Calculator();
	//@return {json-object}
	//@private
	function getValues() {
		var parametrs = {};
		
			parametrs["first"] = parseFloat(first.value,10);
			parametrs["second"] = parseFloat(second.value,10);
			
		return parametrs;
	}
	//@private
	function result() {
		out.value = calc.getResult();
	}
	//@public
	this.init = function () {
		//@private
		var btnPlus = document.getElementById("button-plus"),
			btnMinus = document.getElementById("button-minus"),
			btnDecide = document.getElementById("button-decide"),
			btnMultiply = document.getElementById("button-multiply");
			
		first = document.getElementById("first-value"),
		out = document.getElementById("output-value"),
		second = document.getElementById("second-value");
		
		//@event 
		btnPlus.addEventListener("click",function () {
			calc.add(getValues());
			result();
		}, false);
		
		btnMinus.addEventListener("click", function () {
			calc.diff(getValues());
			result();
		}, false);
		
		btnDecide.addEventListener("click", function () {
			calc.decide(getValues());
			result();
		}, false);
		
		btnMultiply.addEventListener("click", function () {
			calc.multiply(getValues());
			result();
		}, false);
	};
	
	return this;
}

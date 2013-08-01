//@Victor Tkachenko
//@constructor
//@this {Controller}
//@return {Controller}

function Controller() {
	//@private
	var first,
		second,
		out,
		calc = new Calculator();
	//@return {json-object}
	//@private
	function getValues() {
		var parametrs = {};
		
			parametrs["first"] = parseFloat(first.value, 10);
			parametrs["second"] = parseFloat(second.value, 10);
			
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
		btnPlus.onclick = function () {
			calc.add(getValues());
			result();
		};
		
		btnMinus.onclick = function () {
			calc.diff(getValues());
			result();
		};
		
		btnDecide.onclick = function () {
			calc.decide(getValues());
			result();
		};
		
		btnMultiply.onclick = function () {
			calc.multiply(getValues());
			result();
		};
		
	};
	
	return this;
}

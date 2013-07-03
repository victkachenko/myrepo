//@Victor Tkachenko
//@constructor
//@this {Controller}
//@return {Controller}

function Controller () {
	//@private
	var first,
		second,
		out,
		btnPlus,
		btnMinus,
		btnDecide,
		btnMultiply,
		calc = new Calculator();
		//@return {json-object}
		//@private
	function getValues() {
		var val1 = parseInt(first.value,10),
			val2 = parseInt(second.value,10);
		return {
			first: val1,
			second: val2
		};
	}
	//@private
	function result() {
		out.value = calc.getResult();
	}
	//@public
	this.init = function () {
		first = document.getElementById("first-value"),
		second = document.getElementById("second-value"),
		out = document.getElementById("output-value"),
		btnPlus = document.getElementById("button-plus"),
		btnMinus = document.getElementById("button-minus"),
		btnDecide = document.getElementById("button-decide"),
		btnMultiply = document.getElementById("button-multiply");
		getValues();
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

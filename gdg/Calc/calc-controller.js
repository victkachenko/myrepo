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
	function getValues(operation) {
		var parametrs = {};
		
			parametrs["first"] = parseFloat(first.value, 10);
			parametrs["second"] = parseFloat(second.value, 10);
			parametrs["operation"] = operation;
			parametrs.callback = result;
		return parametrs;
	}
	//@private
	function result(responseText) {
		out.value = responseText;
	}
	
	function cleaning() {
		first.value = "";
		second.value = "";
		out.value = "";
	}
	//@public
	this.init = function () {
		//@private
		var buttons = document.getElementsByTagName("button"),
			btnPlus = document.getElementById("button-plus"),
			btnMinus = document.getElementById("button-minus"),
			btnDecide = document.getElementById("button-decide"),
			btnMultiply = document.getElementById("button-multiply"),
			bin = document.getElementById("bin"),
			radio = document.querySelectorAll("input[type='radio']"),
			reset = document.getElementById("reset"),
			back = document.getElementById("back"),
			length = buttons.length,
			flag = false,
			i;
			
		first = document.getElementById("first-value"),
		out = document.getElementById("output-value"),
		second = document.getElementById("second-value");
		//@event 
		for(i = 0; i < length; i++) {
		
			(function (number) {
				buttons[number].addEventListener("click", function () {
					if(!flag) {
						first.value += number;
					} else {
						if(flag) {
							second.value += number;
						}
					}
				}, false);
			})(i)
		}
		
		first.addEventListener("focus", function () {
			flag = false;
			first.style.border = "2px solid red";
			second.style.border = "";
		}, false);
		
		second.addEventListener("focus", function () {
			flag = true;
			second.style.border = "2px solid red";
			first.style.border = "";
		}, false);
		
		reset.addEventListener("click", function () {
			cleaning();
		}, false);
		
		bin.addEventListener("click", function () {
			if(radio[0].checked) {
				calc.toBin(getValues().first);
			} else { 
				if(radio[1].checked) {
					calc.toBin(getValues().second);
				} else {
					calc.toBin(getValues().first);
				}
			}
		}, false);
		
		btnPlus.addEventListener("click", function () {
			calc.add(getValues("plus"));
		}, false);
		
		btnMinus.addEventListener("click", function () {
			calc.diff(getValues("minus"));
		}, false);
		
		btnDecide.addEventListener("click", function () {
			calc.decide(getValues("decide"));
		}, false);
		
		btnMultiply.addEventListener("click", function () {
			calc.multiply(getValues("multiply"));
		}, false);
	};
	
	return this;
}

//@return {Calculator}
//@constructor
//@this {Calculator]

function Calculator() {
	//@private 
	var output;
		
	//@public
	//@param {Number}
	function getAjax() {
		var xhr;
		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else { 
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		return xhr;
	}
	
	function sender(source, params) {
		var parametrs = "value1=" + params.first + "&value2=" + params.second,
			ajax = getAjax();
			
		ajax.addEventListener("readystatechange", function () {
			if(this.readyState === 4 && this.status === 200) {
				params.callback(this.responseText);
			}
		}, false);
		
		ajax.open("GET", source +"?"+ parametrs, true);
		ajax.send();
	}
	
	this.add = function (params) {
		sender("add.php", params);
	}
	//@public
	//@param {Number}
	this.diff = function (params) {
		sender("diff.php", params);
	};
	//@public
	//@param {Number}
	this.multiply = function (params) {
		sender("multiply.php", params);
	};
	//@public
	//@param {Number}
	this.decide = function (params) {
		sender("decide.php", params);
	};
	
	this.toBin = function (string) { 
		var out = "",
			bit = 1;
		while(string >= bit) {
			out = (string & bit ? 1 : 0 ) + out;
			bit <<= 1;
		}
		output = out || "0";
	};
	//@public
	//@return {Number}
	this.getResult = function () {
		return output;
	};
	
	return this;
}

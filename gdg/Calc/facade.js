function Facade() {

	var source = "calculator.php";
	
	function getAjax() {
		var xhr;
		
		if(window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else { 
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		return xhr;
	}
	
	this.sender = function (params) {
	
		var parametrs = "value1=" + params.first + "&value2=" + params.second + "&value3=" + params.operation,
			ajax = getAjax();
			
		ajax.addEventListener("readystatechange", function (event) {
			if(this.readyState === 4 && this.status === 200) {
				params.callback(this.responseText);
			}
		}, false);
		
		ajax.open("GET", source +"?"+ parametrs, true);
		ajax.send();
	};
	
	return this;
}
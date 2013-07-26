//@return {Calculator}
//@constructor
//@this {Calculator]

function Calculator() {
	//@private 
	var output,
		facade = new Facade();
		
	//@public
	//@param {Number}
	
	this.add = function (params) {
		facade.sender(params);
	}
	//@public
	//@param {Number}
	this.diff = function (params) {
		facade.sender(params);
	};
	//@public
	//@param {Number}
	this.multiply = function (params) {
		facade.sender(params);
	};
	//@public
	//@param {Number}
	this.decide = function (params) {
		facade.sender(params);
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

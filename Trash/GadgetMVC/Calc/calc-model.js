//@return {Calculator}
//@constructor
//@this {Calculator]

function Calculator() {
	//@private 
	var output;
	//@public
	//@param {Number}
	this.add = function (params) {
		output = params.first + params.second;					
	};
	//@public
	//@param {Number}
	this.diff = function (params) {
		output = params.first - params.second;
	};
	//@public
	//@param {Number}
	this.multiply = function (params) {
		output = params.first * params.second;
	};
	//@public
	//@param {Number}
	this.decide = function (params) {
		output = params.first / params.second;
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

//@return {Calculator}
//@constructor
//@this {Calculator]

function Calculator ()
{
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
	//@public
	//@return {Number}
	this.getResult = function () {
		return output;
	};
	
	return this;
}

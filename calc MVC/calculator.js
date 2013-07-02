function Calculator()
{
	this.first;
	this.second;
	
	this.add = function ()
	{
		return parseInt(this.first,10) + parseInt(this.second,10);
	};	
	
	this.diff = function ()
	{
		return parseInt(this.first,10) - parseInt(this.second,10);
	};
	
	this.multiply = function ()
	{
		return parseInt(this.first,10) * parseInt(this.second,10);
	};	
	
	this.decide = function ()
	{
		return parseInt(this.first,10) / parseInt(this.second,10);
	};
	
	return this;
}

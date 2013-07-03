function Timer(clock)
{
	var flagLeft = true,
		flagRight = true;
		
	function fixFormat(number)
	{
		return number < 10 ? "0" + number : number;
	}
	
	this.leftClick = function () {
		flagLeft = flagLeft ? (flagleft = false) : (flagLeft = true);				
	};
	
	this.rightClick = function () {
		flagRight = flagRight ? (flagRight = false) : (flagRight = true);
	};
	
	this.render = function () {
		var thisDate = new Date(),
			day = thisDate.getDate(),
			hour = thisDate.getHours(),
			sec = thisDate.getSeconds(),
			minutes = thisDate.getMinutes(),
			year = thisDate.getFullYear(),
			month = thisDate.getMonth(),
			br = "<br />"
		
		if(!flagLeft)
		{
			clock.innerHTML = "Hour: "+fixFormat(hour)+br+"Minutes: "+fixFormat(minutes);
		}
		else if(flagLeft)
		{
			clock.innerHTML = "Hour: "+fixFormat(hour)+br+"Minutes: "+fixFormat(minutes)+ //
			br+"Seconds: "+fixFormat(sec);
		}
		if(flagRight)
		{
			clock.innerHTML = "Day: "+fixFormat(day)+br+"Month: "+
			fixFormat(month+1)+br+"Year: "+fixFormat(year);
		}
	};
	
	return this;
}
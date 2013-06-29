window.onload = function ()
{
	var clocks = setInterval(times,1000),
		flagLeft = true,
		flagRight = true,		
		clock = document.getElementById("clock");
	
	clock.innerHTML = "This Date";
	
	function fixFormat(number)
	{
		return number < 10 ? "0" + number : number;
	}
	
	function times()
	{
		var thisDate = new Date(),
			day = thisDate.getDate(),
			hour = thisDate.getHours(),
			sec = thisDate.getSeconds(),
			minutes = thisDate.getMinutes(),
			year = thisDate.getFullYear(),
			month = thisDate.getMonth();
			
		if(!flagLeft)
		{
			clock.innerHTML = fixFormat(hour)+":"+fixFormat(minutes);
		}
		else if(flagLeft)
		{
			clock.innerHTML = fixFormat(hour)+":"+fixFormat(minutes)+":"+fixFormat(sec);
		}
	}
	
	clock.onclick = function ()
	{
		flagLeft = flagLeft ? (flagleft = false) : (flagLeft = true);				
	}
	
	clock.oncontextmenu = function ()
	{
		flagRight = flagRight ? (flagRight = false) : (flagRight = true);
		return false;
	}
}
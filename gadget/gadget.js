window.onload = function ()
{
	// initialize
	var clocks = setInterval(times,1000),
		flagLeft = true,
		flagRight = true,		
		clock = document.getElementById("clock"),
		draggable = null;

	(function ()
	{
		clock.innerHTML = "This Date";  // initial value
	}());	
	
	function capture()
	{
		if(!draggable)
		{
			draggable = this;
		}
		return false;
	}	
	
	function leftClick()
	{
		flagLeft = flagLeft ? (flagleft = false) : (flagLeft = true);				
	}
	
	function rightClick()
	{
		flagRight = flagRight ? (flagRight = false) : (flagRight = true);
		return false;
	}
	
	function release()
	{
		draggable = null;
	}
	
	function move(event)
	{
		if(draggable)
		{
			draggable.style.left = event.pageX - 25 + "px";
			draggable.style.top = event.pageY - 25 + "px";
		}
	}
	
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
	}
	
		// handlers
	clock.onmousedown = capture;
	window.onmouseup = release;
	window.onmousemove = move;
	clock.oncontextmenu = rightClick;
	clock.onclick = leftClick;
}
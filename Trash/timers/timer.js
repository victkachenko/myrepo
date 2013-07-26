window.onload = function ()
{
	var clocks = setInterval(times,1000),
		flagLeft = true,
		flagRight = true,		
		clock = document.getElementById("clock"),
		draggable = null;
		
	clock.innerHTML = "This Date";
	
	function capture()
	{
		if(!draggable)
		{
			draggable = this;
		}
	}	
	function release()
	{
		draggable = null;
	}
	function move(event)
	{
		if(draggable)
		{
			draggable.style.left = event.pageX - 25 + 'px';
			draggable.style.top = event.pageY - 25 + 'px';
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
			month = thisDate.getMonth();
			
		if(!flagLeft)
		{
			clock.innerHTML = fixFormat(hour)+":"+fixFormat(minutes);
		}
		else if(flagLeft)
		{
			clock.innerHTML = fixFormat(hour)+":"+fixFormat(minutes)+":"+fixFormat(sec);
		}
		if(flagRight)
		{
			clock.innerHTML = fixFormat(day)+":"+fixFormat(month)+":"+fixFormat(year);
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
	clock.onmousedown = capture;
	clock.onmouseup = release;
	window.onmousemove = move;
}
window.onload = function ()
{
	var myDiv = document.getElementById("drag"),
		seconds = document.getElementById("seconds"),
		minutes = document.getElementById("minutes"),
		hours = document.getElementById("hour"),
		dot1 = document.getElementById("dot1"),
		dot2 = document.getElementById("dot2"),
		draggable = null,
		offX,
		offY,
		thisDate = new Date(),
		day = thisDate.getDate(),
		hour = thisDate.getHours(),
		sec = thisDate.getSeconds(),
		month = thisDate.getMonth(),
		year = thisDate.getFullYear(),
		min = thisDate.getMinutes();
	
	hours.innerHTML = hour;
	dot1.innerHTML = " : ";
	minutes.innerHTML = min;
	dot2.innerHTML = " : ";
	seconds.innerHTML = sec;
	
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
	myDiv.onmousedown = capture;
	myDiv.onmouseup = release;
	window.onmousemove = move;
};
window.onload = function ()
{
	var myDiv = document.getElementById("drag"),
		body = document.getElementsByTagName("body")[0],
		draggable = null,
		offX,
		offY;

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
	
	function move()
	{
		var event = arguments[0]; // 
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
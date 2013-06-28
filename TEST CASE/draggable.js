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
		var e = arguments[0];
		if(draggable)
		{
			draggable.style.left = e.pageX - 10 + 'px';
			draggable.style.top = e.pageY - 10 + 'px';
		}
	}
	myDiv.onmousedown = capture;
	myDiv.onmouseup = release;
	body.onmousemove = move;
};
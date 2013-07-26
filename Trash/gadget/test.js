window.onload = function ()
{
	var clocks = (function ()
	{
		//var clocks = setInterval(this.times,1000),
		var	flagLeft = true,
			flagRight = true,		
			clock = document.getElementById("clock"),
			draggable = null,
			thisDate = new Date(),
			self = this;
		
		(function ()
		{
			clock.innerHTML = "This Date";  // initial value
		}());
		
		alert(self);
			
		// function fixFormat(number)
		// {
			// return number < 10 ? "0" + number : number;
		// }
		
		// function times()
		// {
			// var day = thisDate.getDate(),
				// hour = thisDate.getHours(),
				// sec = thisDate.getSeconds(),
				// minutes = thisDate.getMinutes(),
				// year = thisDate.getFullYear(),
				// month = thisDate.getMonth(),
				// br = "<br />"
			// console.log("timer rabotaet");
			// if(!flagLeft)
			// {
				// clock.innerHTML = "Hour: "+fixFormat(hour)+br+"Minutes: "+fixFormat(minutes);
			// }
			// else if(flagLeft)
			// {
				// clock.innerHTML = "Hour: "+fixFormat(hour)+br+"Minutes: "+fixFormat(minutes)+ //
				// br+"Seconds: "+fixFormat(sec);
			// }
			// if(flagRight)
			// {
				// clock.innerHTML = "Day: "+fixFormat(day)+br+"Month: "+
				// fixFormat(month+1)+br+"Year: "+fixFormat(year);
			// }
		// }
		// clock.onmousedown = this.capture;
		// window.onmouseup = this.release;
		// window.onmousemove = this.move;
		// clock.onclick = this.leftclick;
		// clock.oncontextmenu = this.rightclick;
					
		// return {
			// capture:function ()
				// {
					// if(!draggable)
					// {
						// draggable = this;
					// }
				// },
			// release:function release()
				// {
					// draggable = null;
				// },
			// move:function (event)
				// {
					// if(draggable)
					// {
						// draggable.style.left = event.pageX - 25 + "px";
						// draggable.style.top = event.pageY - 25 + "px";
					// }
				// },
			// times:function times()
				// {
					// var day = thisDate.getDate(),
						// hour = thisDate.getHours(),
						// sec = thisDate.getSeconds(),
						// minutes = thisDate.getMinutes(),
						// year = thisDate.getFullYear(),
						// month = thisDate.getMonth(),
						// br = "<br />"
					
					// if(!flagLeft)
					// {
						// clock.innerHTML = "Hour: "+fixFormat(hour)+br+"Minutes: "+fixFormat(minutes);
					// }
					// else if(flagLeft)
					// {
						// clock.innerHTML = "Hour: "+fixFormat(hour)+br+"Minutes: "+fixFormat(minutes)+ //
						// br+"Seconds: "+fixFormat(sec);
					// }
					// if(flagRight)
					// {
						// clock.innerHTML = "Day: "+fixFormat(day)+br+"Month: "+
						// fixFormat(month+1)+br+"Year: "+fixFormat(year);
					// }
				// },
			// rightclick:function ()
			// {
				// flagRight = flagRight ? (flagRight = false) : (flagRight = true);
				// return false;
			// },
			// leftclick:function ()
			// {
				// flagLeft = flagLeft ? (flagleft = false) : (flagLeft = true);		
			// }
		// }
	})();
};
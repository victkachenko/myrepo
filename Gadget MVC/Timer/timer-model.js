function Timer() {

	var flagLeft = true,
		flagRight = true,
		result;
		
	function fixFormat(number) {
		return number < 10 ? "0" + number : number;
	}
	
	this.leftClick = function () {
		flagLeft = (flagLeft) ? false : true;				
	};
	
	this.rightClick = function () {
		flagRight = (flagRight) ? false : true;
	};
	
	this.render = function () {
		var thisDate = new Date(),
			day = thisDate.getDate(),
			hour = thisDate.getHours(),
			sec = thisDate.getSeconds(),
			minutes = thisDate.getMinutes(),
			year = thisDate.getFullYear(),
			month = thisDate.getMonth(),
			br = "<br />";
		
		if(!flagLeft) {
			result = "Hour: "+fixFormat(hour)+br+"Minutes: "+fixFormat(minutes);
		}
		else {
			if(flagLeft) {
				result = "Hour: "+fixFormat(hour)+br+"Minutes: "+fixFormat(minutes)+ //
				br+"Seconds: "+fixFormat(sec);
			}
		}
		if(flagRight) {
			result = "Day: "+fixFormat(day)+br+"Month: "+
			fixFormat(month+1)+br+"Year: "+fixFormat(year);
		}
	};
	
	this.getResult = function () {
		return result;
	};
	return this;
}
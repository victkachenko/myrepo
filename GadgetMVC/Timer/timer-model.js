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
			month = thisDate.getMonth();
					
		if(!flagLeft) {
			result = fixFormat(hour)+" : "+fixFormat(minutes);
		}
		else {
			if(flagLeft) {
				result = fixFormat(hour)+" : "+fixFormat(minutes)+" : "+fixFormat(sec);
			}
		}
		if(flagRight) {
			result = fixFormat(day)+"/"+fixFormat(month+1)+"/"+fixFormat(year);
		}
	};
	
	this.getResult = function () {
		return result;
	};
	return this;
}
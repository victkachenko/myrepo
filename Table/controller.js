function TableController() {

	function newRow() {
			var td = $("td", "tr:first-child"),
				row = $("<tr />");
			
			td.each(function (index, elem) {
				$("<td />").appendTo(row);
			});
			
			return row;
		}
		
		function addLeftCol() {
			$("tbody tr")
			.prepend("<td />")
			.addClass("left");
		}
		
		function addRightCol() {
			$("tbody tr")
				.append("<td />")
				.addClass("right");
		}
		
		function addDownRow() {
			newRow()
				.appendTo("tbody")
				.addClass("down");
		}
		
		function addUpRow() {
			newRow()
				.prependTo("tbody")
				.addClass("up");
		}
		
		function insertRow() {
			var half = Math.round($("tbody > tr").length / 2);
			$("tbody > tr").each(function (index, value) {
				if(index === half) {
					newRow()
						.insertBefore(this)
						.addClass("centerVertical");
				}
			});
		}
		
		function insertCol() {
			var half = Math.floor($("td", "tbody tr:first").length / 2);
			$("tbody tr").each(function(index, elem){
			$("<td />")
			.addClass("center")
			.insertBefore($(elem)
			.find("td")
			.eq(half));
			});
		}


	this.init = function () {
	
		$("#left").on("click", addLeftCol);
	
		$("#right").on("click", addRightCol);
	
		$("#up").on("click", addUpRow);
	
		$("#down").on("click", addDownRow);
	
		$("#centerVertical").on("click", insertRow);
	
		$("#center").on("click", insertCol);
	};
	
	return this;
}

$(function () {
	// $("#center").on("click", function () {
		// var half;
		// $("tbody>tr").each(function (index, elem) {
			// var td = $(this).find("td");
			// td.each(function (ind, elem) {
				// half = Math.round($(this).length/2);
				// console.log(half);
				// $("<td>huynya</td>").insertBefore(elem).eq(half);
				// //$(elem).eq(half).
			// });
		// });
	// });
	
		function addLeftCol() {
			$("tbody tr")
			.prepend("<td class = 'left'>Left</td>");
		}
		
		function addRightCol() {
			$("tbody tr")
			.append("<td class = 'right'>Right</td>");
		}
		
		function addDownRow() {
			$("tbody")
			.append("<tr><td class = 'down'>Down</td></tr>");
		}
		
		function addUpRow() {
			$("tbody")
			.prepend("<tr><td class = 'up'>Up</td></tr>");
		}
		
		function insertRow() {
			var half = Math.round($("tbody > tr").length / 2);
			$("tbody > tr").each(function (index, value) {
				if(index === half) {
					$("<tr><td class = 'centerVertical'>Center</td></tr>")
					.insertBefore(this);
				}
			});
		}
		
		function insertCol() {
			var half = Math.floor($("td", "tbody tr:first").length / 2);
			$("tbody tr").each(function(index, elem){
			$("<td class = 'center'>Center</td>")
			.insertBefore($(elem)
			.find("td")
			.eq(half));
			});
		
		}
	$("#left").on("click", addLeftCol);
	
	$("#right").on("click", addRightCol);
	
	$("#up").on("click", addUpRow);
	
	$("#down").on("click", addDownRow);
	
	$("#centerVertical").on("click", insertRow);
	
	$("#center").on("click", insertCol);
	
});
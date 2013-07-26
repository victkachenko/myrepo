$(function () {

	var	container = $("#container"),
		caching = [];

	
	function sender(index) {
		if(!caching[index]) {
			$.ajax({
			
				url: "first.php",
				
				success: function (data) {
					container.show();
					caching[index] = data;
					container.html(data);
				},
				
				data: {
					"picture": index
				}
			});
		} else {
			container.html(caching[index]);
			container.show();
		}
	}
	
	$("img").each(function (index, value) {
	
		$(this).on("mouseenter", function () {
			container.hide();
	
			$(this).animate({
						top: "-=20px"
					},
					1000, 
					function () {
						sender(index);
			});
		});
		
		$(this).on("mouseleave", function () {
			container.show();
			$("img:animated").stop();
			$(this).css({top: "10px"});
		});
		
	});
	
});
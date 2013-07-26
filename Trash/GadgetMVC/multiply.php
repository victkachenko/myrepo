<?php 
	if(isset($_GET["value1"]) & isset($_GET["value2"])) {
		$first = $_GET["value1"];
		$second = $_GET["value2"];
		echo $first * $second;
	} else {
		echo "not working";
	}
?>
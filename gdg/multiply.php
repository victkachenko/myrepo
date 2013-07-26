<?php 
	if(isset($_GET["value1"]) 
		& isset($_GET["value2"]) 
		& isset($_GET["value3"])) {
	
		$first = $_GET["value1"];
		$second = $_GET["value2"];
		$operation = $_GET["value3"]
		
		switch($operation) {
			case "plus": 
				echo $first+$second;
				break;
			case "minus":
				echo $first-$second;
				break;
			case "multiply":
				echo $first*$second;
				break;
			case "decide":
				echo $first/$second;
				break;
		}
	} else {
		echo "Not a matematical operation";
	}
?>
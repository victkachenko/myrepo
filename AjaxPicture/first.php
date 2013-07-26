<?php
	if(isset($_GET["picture"])) {
		$picture = $_GET["picture"];
		if($picture == 0) {
			echo "<a href='http://www.google.com'>Google</a>";
		} else {
			if($picture == 1) {
				echo "<a href='http://www.yandex.ru'>Yandex</a>";
			} else {
				if($picture == 2) {
					echo "<a href='http://www.bing.com'>Bing</a>";
				}
			}
		}
	}
?>
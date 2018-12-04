 
<?php
	@session_start();
	session_destroy();
	echo "<script>location.href='index.php';</script>";
	//header("Location: index.php");
 ?>
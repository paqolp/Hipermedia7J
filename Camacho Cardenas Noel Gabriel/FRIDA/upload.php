<?php
       session_start();
	   if($_SESSION["logueado"] == TRUE) {
		   $pid = $_SESSION['id'];
		   $nombre = $_SESSION['nombre'];
		   $idequipo = $_SESSION['idequipo'];

include 'config.php';
$statusMsg = '';

// File upload path
	$targetDir = "uploads/";
	$fileName = basename($_FILES["file"]["name"]);
	$targetFilePath = $targetDir . $fileName;
	$fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

	if(isset($_POST["submit"]) && !empty($_FILES["file"]["name"])){
		// Allow certain file formats
		$allowTypes = array('jpg','png','jpeg','gif','pdf');
		if(in_array($fileType, $allowTypes)){
			// Upload file to server
			if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
				// Insert image file name into database
				$insert = $db->query("INSERT into images (file_name, uploaded_on) VALUES ('".$fileName."', NOW())");
				if($insert){
					$statusMsg = "The file ".$fileName. " has been uploaded successfully.";
				}else{
					$statusMsg = "File upload failed, please try again.";
				} 
			}else{
				$statusMsg = "Sorry, there was an error uploading your file.";
			}
		}else{
			$statusMsg = 'Sorry, only JPG, JPEG, PNG, GIF, & PDF files are allowed to upload.';
		}
	}else{
		$statusMsg = 'Please select a file to upload.';
	}

	// Display status message
    echo $statusMsg;


// 	require 'conexion.php';
// $sql = "UPDATE  equipos set  medallas=medallas+1 where idequipo='$idequipo'";

// if ($mysqli->query($sql) === TRUE) {
//    echo "<script type=\"text/javascript\">alert(\"Nuevo archivo agregado.!\"); document.location =\"./frida.php\"</script>";  
// } else {
//     echo "modificado";
//     echo "<script type=\"text/javascript\">alert(\"No se pudo agregar el archivo.\"); document.location =\"./frida.php\"</script>";  
// }

// $mysqli->close();

	   }
?>
<?php
    header("Content-Type: text/html; charset=iso-8859-1 ");
require '../conexion.php';

$idequipo=$_POST["idequipo"];


$sql = "DELETE FROM equipos WHERE idequipo=$idequipo";

if ($mysqli->query($sql) === TRUE) {
    echo "<script type=\"text/javascript\">alert(\"equipo eliminado con exito.!\"); document.location =\"../liderf.php\"</script>";  
} else {
    echo "<script type=\"text/javascript\">alert(\"No se pudo eliminar el equipo.\"); document.location =\"../liderf.php\"</script>";  
}

$mysqli->close();

 ?>
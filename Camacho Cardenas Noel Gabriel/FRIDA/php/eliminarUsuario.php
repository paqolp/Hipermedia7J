<?php
    header("Content-Type: text/html; charset=iso-8859-1 ");
require '../conexion.php';

$idusuario=$_POST["idusuario"];


$sql = "DELETE FROM usuarios WHERE idusuario=$idusuario";

if ($mysqli->query($sql) === TRUE) {
    echo "<script type=\"text/javascript\">alert(\"Usuario eliminado con exito.!\"); document.location =\"../liderf.php\"</script>";  
} else {
    echo "<script type=\"text/javascript\">alert(\"No se pudo eliminar el usuario.\"); document.location =\"../liderf.php\"</script>";  
}

$mysqli->close();

 ?>
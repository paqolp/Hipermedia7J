<?php
    header("Content-Type: text/html; charset=iso-8859-1 ");
require '../conexion.php';

$idtarea=$_POST["idtarea"];


$sql = "DELETE FROM tareas WHERE idtarea=$idtarea";

if ($mysqli->query($sql) === TRUE) {
    echo "<script type=\"text/javascript\">alert(\"Tarea eliminada con exito.!\"); document.location =\"../liderf.php\"</script>";  
} else {
    echo "<script type=\"text/javascript\">alert(\"No se pudo eliminar la tarea.\"); document.location =\"../liderf.php\"</script>";  
}

$mysqli->close();

 ?>
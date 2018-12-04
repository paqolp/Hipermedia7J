
 
 <?php
    header("Content-Type: text/html; charset=iso-8859-1 ");
require '../conexion.php';

$nombre=$_POST["nombre"];
$miembros=$_POST["miembros"];
$mentor=$_POST["mentor"];
$medallas= "0";

$sql = "INSERT INTO equipos (nombre, miembros,mentor,medallas)
        VALUES ('$nombre','$miembros','$mentor',$medallas)";

if ($mysqli->query($sql) === TRUE) {
    //echo "registrado";
   echo "<script type=\"text/javascript\">alert(\"Nuevo equipo agregado.!\"); document.location =\"../registrarEquipo.php\"</script>";  
} else {
    //echo "error";
    echo "<script type=\"text/javascript\">alert(\"No se pudo agregar el equipo.\"); document.location =\"../registrarEquipo.php\"</script>";  
}

$mysqli->close();

 ?>
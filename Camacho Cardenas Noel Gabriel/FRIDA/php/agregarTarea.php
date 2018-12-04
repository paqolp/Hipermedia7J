
 
 <?php
    header("Content-Type: text/html; charset=iso-8859-1 ");
require '../conexion.php';

$titulo=$_POST["titulo"];
$numero=$_POST["numero"];
$archivo=$_POST["archivo"];
$fecha_limite_entrega=$_POST["fecha_limite_entrega"];


$sql = "INSERT INTO tareas (titulo, numero,archivo,fecha_limite_entrega)
        VALUES ('$titulo',$numero,'$archivo','$fecha_limite_entrega')";

if ($mysqli->query($sql) === TRUE) {
    //echo "registrado";
   echo "<script type=\"text/javascript\">alert(\"Nueva tarea agregada.!\"); document.location =\"../registrarTarea.php\"</script>";  
} else {
    //echo "error";
    echo "<script type=\"text/javascript\">alert(\"No se pudo agregar la tarea.\"); document.location =\"../registrarTarea.php\"</script>";  
}

$mysqli->close();

 ?>
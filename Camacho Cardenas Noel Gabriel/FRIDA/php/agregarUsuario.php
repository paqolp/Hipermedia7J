
 
 <?php
    header("Content-Type: text/html; charset=iso-8859-1 ");
require '../conexion.php';

$nombre=$_POST["nombre"];
$fecha_nac=$_POST["fecha_nac"];
$correo=$_POST["correo"];
$lugar_procedencia=$_POST["lugar_procedencia"];
$telefono=$_POST["telefono"];
$area_conocimiento=$_POST["area_conocimiento"];
$rol=$_POST["rol"];
$contrasena=$_POST["contrasena"];

$sql = "INSERT INTO usuarios (nombre, fecha_nac, correo,lugar_procedencia,telefono,area_conocimiento,rol,contrasena)
        VALUES ('$nombre','$fecha_nac','$correo','$lugar_procedencia',$telefono, '$area_conocimiento','$rol','$contrasena')";

if ($mysqli->query($sql) === TRUE) {
    //echo "registrado";
   echo "<script type=\"text/javascript\">alert(\"Nuevo usuario agregado.!\"); document.location =\"../registrarUsuario.php\"</script>";  
} else {
    //echo "error";
    echo "<script type=\"text/javascript\">alert(\"No se pudo agregar el usaurio.\"); document.location =\"../registrarUsuario.php\"</script>";  
}

$mysqli->close();

 ?>
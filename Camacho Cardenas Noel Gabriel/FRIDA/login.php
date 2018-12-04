
<?php
 
 if(isset($_POST["enviar"])) {

     require("conexion.php");

         $loginNombre = $_POST["correo"];
         $loginPassword =$_POST["contrasena"];

         $consulta = "SELECT * FROM usuarios WHERE correo='$loginNombre' AND contrasena='$loginPassword'";

         if($resultado = $mysqli->query($consulta)) {
             while($row = $resultado->fetch_array()) {

                 $userok = $row["correo"];
                 $passok = $row["contrasena"];
                 $rolok = $row["rol"];
                 $nombreok = $row["nombre"];
                 $idequipook = $row["idequipo"];



             }
             $resultado->close();
         }
         $mysqli->close();


         if(isset($loginNombre) && isset($loginPassword)) {

             if($loginNombre == $userok && $loginPassword == $passok && "frida" == $rolok) {

                 session_start();
                 $_SESSION["logueado"] = TRUE;
                 $_SESSION['id'] = $userok;
                 $_SESSION['nombre'] = $nombreok;
                 $_SESSION['idequipo'] = $idequipook;


                 echo "<script>location.href='frida.php';</script>";
                 
                 //header("Location: administrador.php");

             }
             else if($loginNombre == $userok && $loginPassword == $passok && "liderf" == $rolok){
                session_start();
                $_SESSION["logueado"] = TRUE;
                $_SESSION['id'] = $userok;
                $_SESSION['nombre'] = $nombreok;

                echo "<script>location.href='liderf.php';</script>";
                
                //header("Location: usuario.php");
             }
             else {
                echo "<script>location.href='index.php?error=login';</script>";
            
                 //header("Location: index.php?error=login");
             }
         }

     } else {
         echo "<script>location.href='index.php';</script>";
        // header("Location: index.php");
     }

?>
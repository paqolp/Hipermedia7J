<?php
 session_start();
 if($_SESSION["logueado"] == TRUE) {
    $pid = $_SESSION['id'];
     ?>
<!DOCTYPE html>
<html lang="en" class="has-navbar-fixed-top">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Usuario</title>
        <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon.png">
        <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css'>
        <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'>
        <link rel="stylesheet" href="./css/admin.css">
        <script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js"></script>
        <!-- Busqueda Ajax-->
        <script src="js/jquery-1.9.1.min.js"></script>

    </head>
    <body>
        <nav class="navbar has-shadow is-fixed-top is-light">
            <div class="container .is-widescreen .is-fullhd">
                <div class="navbar-brand"><a class="navbar-item" href="#"><img src="./img/logo.png" alt="Universidad de colima : Logo"/></a>
                <div class="navbar-burger burger" data-target="navMenu"><span></span><span></span><span></span></div>
            </div>
            <div class="navbar-menu" id="navMenu">
                <div class="navbar-end"></div>
                    <div class="navbar-item "><a href="salir.php"  class="button is-white" ><?php echo "Usuario".$pid." " ?>Cerrar Sesión</a>
                </div>
            </div>
        </div>
    </div>
</div>
</nav>
<section class="hero is-info">
<div class="hero-body">
    <div class="container .is-widescreen .is-fullhd">
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-medium" type="search" placeholder="Número de bien" name="busqueda" id="busqueda" onKeyUp="buscar();" /><span class="icon is-medium is-left"><i class="fa fa-search"></i></span><span class="icon is-medium is-right"><i class="fa fa-empire"></i></span>
                        <script>
                            $(document).ready(function() {
                                $("#resultadoBusqueda").html('<p></p>');
                            });

                            function buscar() {
                                var textoBusqueda = $("input#busqueda").val();
                            
                                if (textoBusqueda != "") {
                                    $.post("buscar.php", {valorBusqueda: textoBusqueda}, function(mensaje) {
                                        $("#tableid").detach();
                                        $("#resultadoBusqueda").html(mensaje);
                                        
                                    }); 
                                } else { 
                                    $('#tableid').load('busqueda.php #tableid');                                    };
                            };
                            </script>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<div id="resultadoBusqueda"></div>

 <section>
     <div id="tableid">
        <div class="card-content ">
            <table class="table is-responsive is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Numero de bien</th>
                    <th>Descripción</th>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Serie</th>
                    <th>Ubicación</th>
                    <th>Numero trabajador</th>
                    <th>Custodio</th>
                    <th>Clave de dependencia</th>
                    <th>Dependencia</th>
                    <th>Segundo custodio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
                <tbody >
                    <?php
                    require 'conexion.php';

                    $sql = "SELECT numero, descripcion, marca, modelo,serie, ubicacion,no_trabajador,custodio,cve_dependencia, dependencia, custodio2    FROM prestamos where no_trabajador='$pid'";
                    $result = $mysqli->query($sql);
                    
                    if ($result->num_rows > 0) {
                        // output data of each row
                        while($row = $result->fetch_assoc()) {
                          ?>
                            <tr>
                                <td><?php echo $row["numero"]?></td>
                                <td><?php echo $row["descripcion"]?></td>
                                <td><?php echo $row["marca"]?></td>
                                <td><?php echo $row["modelo"]?></td>
                                <td><?php echo $row["serie"]?></td>
                                <td><?php echo $row["ubicacion"]?></td>
                                <td><?php echo $row["no_trabajador"]?></td>
                                <td><?php echo $row["custodio"]?></td>
                                <td><?php echo $row["cve_dependencia"]?></td>
                                <td><?php echo $row["dependencia"]?></td>
                                <td><?php echo $row["custodio2"]?></td>
                                <td>
                                <?php $numero = $row["numero"]; ?>
                                    <form action="./vale_salida.php" method="POST" target="_blank">
                                        <input type="hidden" value="<?php echo $numero ?>"name="numero">
                                        <input class="button is-primary" type="submit" value="Salida" /> 
                                    </form>  <br>  
                                    <form action="./solicitud_baja.php" method="POST" target="_blank">
                                        <input type="hidden" value="<?php echo $numero ?>" name="numero">
                                        <input class="button is-primary " type="submit" value="Baja" />
                                    </form>   

                                </td>          
             
                            </tr>
                       <?php }
                    } else {
                        echo "";
                    }
                    $mysqli->close();
                    ?> 
                    <tbody>     
            </table>      
         </div>
     </div>

 </section>

    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <a href="">
                        <i class="fab fa-facebook-square fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-snapchat fa-2x"></i>
                    </a>
                </p>
                <p>
                <a class="tag is-link" href="https://www.ucol.mx/">Universidad de Colima
                        <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                    </a>
                </p>
            </div>
        </div>
    </footer>

<script src="./js/bulma.js"></script>
</body>
</html>

     <?php
 } else {
    echo "<script>location.href='index.php';</script>";
     //header("Location: index.php");
 }

?>

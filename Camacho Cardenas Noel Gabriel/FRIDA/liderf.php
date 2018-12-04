<?php
    session_start();
    if($_SESSION["logueado"] == TRUE) {
        $pid = $_SESSION['id'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bienvenido a Código Frida - Lider F</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/menuFrida.css">

    
	<link rel="stylesheet" href="css/footerGeneral.css">
	
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
</head>
<body>
    
<!-- <nav class="navbar is-white">
        <div class="nav_container container">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="listaMentores.html">
                    Mi perfil
                </a>
                <a href="salir.php" class="navbar-item brand-text">Salir</a>
                <div class="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a class="navbar-item" href="registrarUsuario.php">
                    Agregar frida
                </a>
            </div>
        </div>
    </nav> -->
     
    <!-- START NAV -->
    <nav class="navbar has-background-info">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="../">
                    <img src="./img/logo.png" alt="Inicio">
                </a>
                <a class="navbar-item brand-text" href="liderf.php">
                    <strong>Inicio</strong>
                </a>
                <div class="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navMenu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="registrarUsuario.php">
                        <strong>Agregar Usuario</strong>
                    </a>
                    <a class="navbar-item" href="registrarEquipo.php">
                        <strong>Agregar Equipo</strong>
                    </a>
                    </a>
                    <a class="navbar-item" href="registrarTarea.php">
                        <strong>Agregar Tarea</strong>
                    </a>
                    
                    <a class="navbar-item" href="salir.php">
                        <strong>Cerrar Sesión</strong>
                    </a>
                </div>
            </div>
           
    </nav>
    <!-- END NAV -->
    
    <div class="container">
        <div class="columns">
            <div class="column is-12">
                <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Bienvenido , <span> <?php echo $pid ?></span>
                            </h1>
                            <h2 class="subtitle">
                                Este es tu menú de inicio.
                            </h2>
                        </div>
                    </div>
                </section>
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                    <div class="tile is-parent is-vertical">
                            <article class="tile is-child box">
                               
                        <?php
                                require 'conexion.php';
                                $numTareas = "SELECT count(*) as numTareas FROM tareas";
                                $result = $mysqli->query($numTareas);
                                if ($result->num_rows > 0) {
                                    while($row = $result->fetch_assoc()) {   
                                    ?>
                                        <p class="title"><?php echo $row["numTareas"]?></p>
                                    
                                        <?php }
                                 } else {
                                    echo "0 resultados";
                                }
                                $mysqli->close();
                                 ?>        
                                <p class="subtitle">Tareas</p>
                            </article>
                        
                        <article class="tile is-child box">

                        <?php
                                require 'conexion.php';
                                $numEquipos = "SELECT count(*) as numEquipos FROM equipos";
                                $result = $mysqli->query($numEquipos);
                                if ($result->num_rows > 0) {
                                    while($row = $result->fetch_assoc()) {   
                                    ?>
                                        <p class="title"><?php echo $row["numEquipos"]?></p>
                                    
                                        <?php }
                                 } else {
                                    echo "0 resultados";
                                }
                                $mysqli->close();
                                 ?>        
                                <p class="subtitle">Equipos</p>
                                
                            </article>
                        </div>        
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child box">
                                 <?php
                                require 'conexion.php';
                                $numFridas = "SELECT count(*) as numFridas FROM usuarios where rol='frida'";
                                $result = $mysqli->query($numFridas);
                                if ($result->num_rows > 0) {
                                    while($row = $result->fetch_assoc()) {   
                                    ?>
                                        <p class="title"><?php echo $row["numFridas"]?></p>
                                    
                                        <?php }
                                 } else {
                                    echo "0 resultados";
                                }
                                $mysqli->close();
                                 ?>        
                                <p class="subtitle">Fridas</p>
                               
                            </article>
                      
                            <article class="tile is-child box">
                              <?php
                                require 'conexion.php';
                                $numMentores = "SELECT count(*) as numMentores FROM usuarios where rol='mentor'";
                                $result = $mysqli->query($numMentores);
                                if ($result->num_rows > 0) {
                                    while($row = $result->fetch_assoc()) {   
                                    ?>
                                        <p class="title"><?php echo $row["numMentores"]?></p>
                                    
                                        <?php }
                                 } else {
                                    echo "0 resultados";
                                }
                                $mysqli->close();
                                 ?>        
                                <p class="subtitle">Mentores</p>
                               
                            </article>
                        </div>
                    </div>
                    
                </section>
            <div>
            
            <!-- Comienza tabla mentores -->
            <div class="container">
                    <div class="columns">
                        <div class="column is-12">
                    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                            <thead>
                            <caption > <h1 class="title is-4">Mentores</h1> </caption>

                              <tr>
                                <th><abbr title="Position">Nombre</abbr></th>
                                <th><abbr title="Played">Correo Electrónico</abbr></th>
                                <th><abbr title="Won">Teléfono</abbr></th>
                                <th>Area conocimiento</th>
                                <th>Eliminar</th>
                              </tr>
                            </thead>
                            
                            <tbody>

                              <?php
                                require 'conexion.php';
                                $sql = "SELECT * FROM usuarios where rol='mentor'";
                                $result = $mysqli->query($sql);

                                if ($result->num_rows > 0) {
                                    // output data of each row
                                    while($row = $result->fetch_assoc()) {
                                    ?>
                                        <tr>
                                            <td><?php echo $row["nombre"]?></td>
                                            <td><?php echo $row["correo"]?></td>
                                            <td><?php echo $row["telefono"]?></td>
                                            <td><?php echo $row["area_conocimiento"]?></td>
                                            <td> 
                                                <form action="./php/eliminarUsuario.php" method="post" onsubmit="return confirm('¿Seguro quiere eliminar este mentor?');">         
                                                    <!-- <a class="delete is-medium" > -->
                                                    <input type="hidden"  name="idusuario"value="<?php echo $row["idusuario"]?>">
                                                    <input type="submit" class="button is-danger" value="Eliminar">
                                                    </a>
                                                </form>
                                                </td>
                                            <!-- <th>Erik Aldahir Parra Santillan</th>
                                            <td>eparra@ucol.mx</td>
                                            <td>312456237</td>
                                            <td>Muy buen mentor</td>   -->
                                        </tr>
                             
                                <?php }
                                } else {
                                    echo "0 results";
                                }
                                $mysqli->close();
                                ?>        
                            </tbody>
                          </table>
                    </div>
                    </div>
                </div>

            <!-- Termina tabla mentores -->


            <!-- Comienza tabla fridas -->
            <div class="container">
                    <div class="columns">
                        <div class="column is-12">
                    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                            <thead>
                            <caption > <h1 class="title is-4">Fridas</h1> </caption>

                              <tr>
                                <th><abbr title="Position">Nombre</abbr></th>
                                <th><abbr title="Played">Correo Electrónico</abbr></th>
                                <th><abbr title="Won">Teléfono</abbr></th>
                                <th><abbr title="Position">Lugar procedencia</abbr></th>
                                <th>Eliminar</th>

                              </tr>
                            </thead>
                            
                            <tbody>

                              <?php
                                require 'conexion.php';
                                $sql = "SELECT * FROM usuarios where rol='frida'";
                                $result = $mysqli->query($sql);

                                if ($result->num_rows > 0) {
                                    // output data of each row
                                    while($row = $result->fetch_assoc()) {
                                    ?>
                                        <tr>
                                            <td><?php echo $row["nombre"]?></td>
                                            <td><?php echo $row["correo"]?></td>
                                            <td><?php echo $row["telefono"]?></td>
                                            <td><?php echo $row["lugar_procedencia"]?></td>
                                            <td> 
                                                <form action="./php/eliminarUsuario.php" method="post"onsubmit="return confirm('¿Seguro quiere eliminar esta frida?');">
                                                   
                                                    <!-- <a class="delete is-medium" > -->
                                                    <input type="hidden"  name="idusuario"value="<?php echo $row["idusuario"]?>">
                                                    <input type="submit" class="button is-danger" value="Eliminar">
                                                    </a>
                                                </form>
                                                </td>

                                            <!-- <th>Erik Aldahir Parra Santillan</th>
                                            <td>eparra@ucol.mx</td>
                                            <td>312456237</td>
                                            <td>Muy buen mentor</td>   -->
                                        </tr>
                             
                                <?php }
                                } else {
                                    echo "0 results";
                                }
                                $mysqli->close();
                                ?>        
                            </tbody>
                          </table>
                    </div>
                    </div>
                </div>

            <!-- Termina tabla fridas -->


              <!-- Comienza tabla equipos -->
              <div class="container">
                    <div class="columns">
                        <div class="column is-12">
                    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                            <thead>
                            <caption > <h1 class="title is-4">Equipos</h1> </caption>

                              <tr>
                                <th><abbr title="Position">Nombre</abbr></th>
                                <th><abbr title="Played">Miembros</abbr></th>
                                <th><abbr title="Won">Mentor</abbr></th>
                                <th><abbr title="Won">Medallas</abbr></th>
                                <th>Eliminar</th>

                              </tr>
                            </thead>
                            
                            <tbody>

                              <?php
                                require 'conexion.php';
                                $sql = "SELECT * FROM equipos ";
                                $result = $mysqli->query($sql);

                                if ($result->num_rows > 0) {
                                    // output data of each row
                                    while($row = $result->fetch_assoc()) {
                                    ?>
                                        <tr>
                                            <td><?php echo $row["nombre"]?></td>
                                            <td><?php echo $row["miembros"]?></td>
                                            <td><?php echo $row["mentor"]?></td>
                                            <td><?php echo $row["medallas"]?></td>
                                            <td> 
                                                <form action="./php/eliminarEquipo.php" method="post" onsubmit="return confirm('¿Seguro quiere eliminar este equipo?');">
                                                   
                                                    <!-- <a class="delete is-medium" > -->
                                                    <input type="hidden"  name="idequipo"value="<?php echo $row["idequipo"]?>">
                                                    <input type="submit" class="button is-danger" value="Eliminar">
                                                    </a>
                                                </form>
                                                </td>
                                                

                                            <!-- <th>Erik Aldahir Parra Santillan</th>
                                            <td>eparra@ucol.mx</td>
                                            <td>312456237</td>
                                            <td>Muy buen mentor</td>   -->
                                        </tr>
                             
                                <?php }
                                } else {
                                    echo "0 results";
                                }
                                $mysqli->close();
                                ?>        
                            </tbody>
                          </table>
                    </div>
                    </div>
                </div>

            <!-- Termina tabla equipos -->


            
              <!-- Comienza tabla tareas -->
              <div class="container">
                    <div class="columns">
                        <div class="column is-12">
                    <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                            <thead>
                            <caption > <h1 class="title is-4">Tareas</h1> </caption>

                              <tr>
                                <th><abbr title="Position">Titulo</abbr></th>
                                <th><abbr title="Played">Numero tarea</abbr></th>
                                <th><abbr title="Won">Fecha limite</abbr></th>
                                <th>Eliminar</th>

                              </tr>
                            </thead>
                            
                            <tbody>

                              <?php
                                require 'conexion.php';
                                $sql = "SELECT * FROM tareas ";
                                $result = $mysqli->query($sql);

                                if ($result->num_rows > 0) {
                                    // output data of each row
                                    while($row = $result->fetch_assoc()) {
                                    ?>
                                        <tr>
                                            <td><?php echo $row["titulo"]?></td>
                                            <td><?php echo $row["numero"]?></td>
                                            <td><?php echo $row["fecha_limite_entrega"]?></td>
                                            <td> 
                                                <form action="./php/eliminarTarea.php" method="post" onsubmit="return confirm('¿Seguro quiere eliminar esta tarea?');">
                                                   
                                                    <!-- <a class="delete is-medium" > -->
                                                    <input type="hidden"  name="idtarea"value="<?php echo $row["idtarea"]?>">
                                                    <input type="submit" class="button is-danger" value="Eliminar">
                                                    </a>
                                                </form>
                                                </td>
                                                

                                            <!-- <th>Erik Aldahir Parra Santillan</th>
                                            <td>eparra@ucol.mx</td>
                                            <td>312456237</td>
                                            <td>Muy buen mentor</td>   -->
                                        </tr>
                             
                                <?php }
                                } else {
                                    echo "0 results";
                                }
                                $mysqli->close();
                                ?>        
                            </tbody>
                          </table>
                    </div>
                    </div>
                </div>

            <!-- Termina tabla tareas -->


            </div>
            </div>
        </div>
    </div>
</div>
        	<!-- The content of your page would go here. -->

		<footer class="footer-distributed">

<div class="footer-right">

    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-linkedin"></i></a>
    <a href="#"><i class="fab fa-github"></i></a>

</div>

<div class="footer-left">

    <p class="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">Faq</a>
        ·
        <a href="#">Contact</a>
    </p>

    <p> ProjectFrida &copy; 2018</p>
</div>

</footer>
</body>
</html>

     
<?php
    } else {
        echo "<script>location.href='index.php';</script>";
        //header("Location: index.php");
    }

?>

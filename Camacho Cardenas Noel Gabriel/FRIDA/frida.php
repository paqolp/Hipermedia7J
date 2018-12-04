<?php
    session_start();
    if($_SESSION["logueado"] == TRUE) {
        $pid = $_SESSION['id'];
        $nombre = $_SESSION['nombre'];
        $idequipo = $_SESSION['idequipo'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bienvenida a Código Frida</title>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
       
       <!-- Estilos  bootstrap, chat-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Learn how to use the Firebase platform on the Web">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="../../source/CSS/menuFrida.css">
    <link rel="stylesheet" href="./css/mainChat.css">

    
	<link rel="stylesheet" href="css/footerGeneral.css">
	
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
</head>    
<body>
    <!-- <nav class="navbar is-white">
        <div class="nav_container container">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" href="#">
                    Mi perfil
                </a>
                <a href="salir.php" class="navbar-item brand-text">Salir</a>
               
                <div class="navbar-burger burger" data-target="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a class="navbar-item" href="fridaInsignias.html">
                    Mis insignias
                </a>
            </div>
        </div>
    </nav> -->
      
    <!-- START NAV -->
    <nav class="navbar has-background-info">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item brand-text" >
                    <img src="./img/logo.png" alt="Inicio">
                </a>
                <a class="navbar-item brand-text" href="frida.php">
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
                    <a class="navbar-item" href="insignias.php">
                        <strong>Mis Insignias</strong>
                    </a>
                    <a class="navbar-item" href="cursos.php">
                        <strong>Mis Cursos</strong>
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
            <div class="column is-3 ">
                <aside class="menu is-hidden-mobile">
                    <p class="menu-label">
                        Cursos
                    </p>
                    <ul class="menu-list">
                        <li>
                            <a>Curso 1</a>
                            <ul>
                                <li><a>Clase 1</a></li>
                                <li><a>Clase 2</a></li>
                                <li><a>Clase 3</a></li>
                            </ul>
                        </li>
                    </ul> 
                    <ul class="menu-list">
                        <li>
                            <a>Curso 2</a>
                            <ul>
                                <li><a>Clase 1</a></li>
                                <li><a>Clase 2</a></li>
                                <li><a>Clase 3</a></li>
                            </ul>
                        </li>
                        <ul class="menu-list">
                            <li>
                                <a>Curso 3</a>
                                <ul>
                                    <li><a>Clase 1</a></li>
                                    <li><a>Clase 2</a></li>
                                    <li><a>Clase 3</a></li>
                                </ul>
                            </li>
                </aside>
            </div>
            <div class="column is-9">
                <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title" >
                                Hola, <span > <?php echo $pid ?> </span>
                            </h1>
                            <h2 class="subtitle">
                                Disfruta aprediendo.
                            </h2>
                        </div>
                    </div>
                </section>
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <!-- <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">3</p>
                                <p class="subtitle">Cursos</p>
                                <progress class="progress is-primary" value="15" max="100">15%</progress>
                            </article>
                        </div> -->

                        <!-- <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">9 </p>
                                <p class="subtitle">clases</p>
                                <progress class="progress is-primary" value="50" max="100">350%</progress>
                            </article>
                        </div> -->
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                        
                        <?php
                                require 'conexion.php';
                                $numMedallas = "SELECT * FROM equipos";
                                $result = $mysqli->query($numMedallas);
                                if ($result->num_rows > 0) {
                                    while($row = $result->fetch_assoc()) {   
                                    ?>
                                        <p class="title"><?php echo $row["medallas"]?></p>
                                        <p class="subtitle">Insignias</p>
                                         <progress class="progress is-primary" value="<?php echo $row["medallas"]?>" max="10"></progress>
                                        <?php }
                                 } else {
                                    echo "0 resultados";
                                }
                                $mysqli->close();
                                 ?>        
                                
                            </article>
                        </div>
                    </div>
                </section>
                
                <div class="columns">
                    <div class="column is-6">
                                <div class="card events-card">
                                    <header class="card-header">
                                        <p class="card-header-title">
                                            Entregar tareas /entregadas
                                        </p>
                                        <a href="#" class="card-header-icon" aria-label="more options">
                        <span class="icon">
                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </a>
                                    </header>
                                    <div class="card-table">
                                        <div class="content">
                                            <table class="table is-fullwidth is-striped">
                                                <tbody>
                                                    <tr>
                                                        <td width="5%"><i class="fa fa-bell-o"></i></td>
                                                            <td><form action="upload.php" method="post" enctype="multipart/form-data">
                                                                    Selecciona un archivo:
                                                                    <input class="button " type="file" name="file">
                                                                    <input type="submit" name="submit" value="Subir">
                                                                </form>
                                                                </td>
                                                        <!-- <a class="button is-small is-primary" href="#">Action</a> -->
                                                    </tr>   
                                                    <?php
                                                        // Include the database configuration file
                                                        include 'config.php';

                                                        // Get images from the database
                                                        $query = $db->query("SELECT * FROM images where status='1' ORDER BY uploaded_on DESC");
                                                        // $query = $db->query("SELECT * FROM images where idequipo='$idequipo' ORDER BY uploaded_on DESC");


                                                        if($query->num_rows > 0){
                                                            while($row = $query->fetch_assoc()){
                                                                $imageURL = 'uploads/'.$row["file_name"];
                                                                ?>
                                                                <br>
                                                                <br>
                                                                

                                                    
                                                            <!-- <img src="" alt="" /> -->
                                                            <a href="<?php  echo $imageURL; ?>"> <?php echo $row["file_name"] ?> </a>
                                                        <?php }
                                                        }else{ ?>
                                                            <p></p>
                                                        <?php } ?>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="card events-card chat-card">
                                    <div class="chat-body">
                                        <div class="panel panel-primary">
                                            <div class="panel-heading">
                                                <span class="glyphicon glyphicon-comment"></span> Chat grupal
                                                <div class="btn-group pull-right">
                                                </div>
                                            </div>
                                            <div class="panel-body">
                                                <ul class="chat"> </ul>
                                            </div>
                                            <div class="panel-footer">
                                                <div class="input-group">
                                                    <input id="Mensaje" type="text" class="form-control input-sm" placeholder="Escribe un mensaje..." onkeypress="MsnIntro(event)" />
                                                    <span class="input-group-btn">
                                                        <button class="btn btn-warning btn-sm" id="btnEnviar" onclick="Msn()">
                                                            Enviar</button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <li style="display:none" id="plantilla" class="left clearfix">
                                    <span class="chat-img pull-left">
                                      <img src="http://placehold.it/50/55C1E7/fff&text=U"class="img-circle" />
                                    </span>
                                     <div class="chat-body clearfix">
                                             <div class="header">
                                               <strong class="primary-font Nombre" >Jack Sparrow</strong> 
                                                 <small class="pull-right text-muted">
                                                 <span class="glyphicon glyphicon-asterisk Tiempo"></span>
                                                 </span></span></small>
                                             </div>
                                                 <p class="Mensaje">
                                                        Mensaje
                                                 </p>
                                         </div>
                                 </li>
                    </div>

                    <div class="column is-6">
                        <!-- Compañero  -->
                       
                                <?php
                                require 'conexion.php';
                                $equipo = "SELECT * FROM usuarios where idequipo='1'";
                                $result = $mysqli->query($equipo);
                                if ($result->num_rows > 0) {
                                    while($row = $result->fetch_assoc()) {  
                                        ?>
                                         <div class="cardTeam card">
                                         <header class="card-header">
                                        <p class="card-header-title">
                                        <?php
                                        echo $row["nombre"] . " " . $row["correo"] . " " .$row["telefono"] ;


                                    ?>
                                        
                                        </p>
                                            <a  class="card-header-icon" aria-label="more options">
                                        <span class="icon">
                                            <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </span>
                                        </a>
                                        </header>
                                        <div class="card-content">
                                            <img src="./img/userexample.png"  height="42" width="42"  alt="" class="imgTeam"> <!--  -->
                                        </div>
                                    </div>
                                        <?php }
                                 } else {
                                    echo "0 resultados";
                                }
                                $mysqli->close();
                                 ?>          
                                  
                      <!-- termina compañero -->
    
                             </div>

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

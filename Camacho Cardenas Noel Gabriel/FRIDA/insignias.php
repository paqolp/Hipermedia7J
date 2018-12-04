<?php
    session_start();
    if($_SESSION["logueado"] == TRUE) {
        $pid = $_SESSION['id'];
        $nombre = $_SESSION['nombre'];

?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Menú codigo frida</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/fridaInsignias.css">
</head>

<body>
         
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
    <br>
    <div class="container">
        <div class="columns">
            <div class="column is-12">
                <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Hola, <span > <?php echo $pid ?> </span>
                            </h1>
                            <h2 class="subtitle">
                                VAMOS A VER TUS INSIGNIAS!!
                            </h2>
                        </div>
                    </div>
                </section>
                
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                                  
                        <?php
                                require 'conexion.php';
                               // $numMedallas = "SELECT * FROM equipos where medallas='1'";
                                $numMedallas = "SELECT * FROM equipos where miembros  like '%$nombre%'";

                                $result = $mysqli->query($numMedallas);
                                if ($result->num_rows > 0) {
                                    while($row = $result->fetch_assoc()) {  
                                        ?> <p class="title"><?php echo $row["medallas"]?></p>
                                        <progress class="progress is-primary" value="<?php echo $row["medallas"]?>" max="10"></progress> 
                                         <?php    
                                        for ($i = 1; $i <=$row["medallas"] ; $i++) {
                                            echo ' <img src="./img/insignia.png" alt="Insignia" class="imgInsig">
                                            <p class="subtitle">'.$i.'</p>

                                            ';
                                        }
                                    ?>

                                       
                                        <?php }
                                 } else {
                                    echo "0 resultados";
                                }
                                $mysqli->close();
                                 ?>        


                            </article>
                        </div>

                        <!-- <div class="tile is-parent">
                            <article class="tile is-child box">
                                <img src="./img/insignia.png" alt="" class="imgInsig">
                                <p class="subtitle">Nombre Insignia</p>
                            </article>
                        </div>

                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <img src="./img/insignia.png" alt="" class="imgInsig">
                                <p class="subtitle">Nombre Insignia</p>
                            </article>
                        </div>

                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <img src="./img/insignia.png" alt="" class="imgInsig">
                                <p class="subtitle">Nombre Insignia</p>
                            </article>
                        </div> -->

                        <!-- <div class="tile is-parent">
                            <article class="tile is-child box">
                                <img src="./img/insignia.png" alt="" class="imgInsig">
                                <p class="subtitle">Nombre Insignia</p>
                            </article>
                        </div>

                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <img src="./img/insignia.png" alt="" class="imgInsig">
                                <p class="subtitle">Nombre Insignia</p>
                            </article>
                        </div>

                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <img src="./img/insignia.png" alt="" class="imgInsig">
                                <p class="subtitle">Nombre Insignia</p>
                            </article>
                        </div>
                         -->
                    </div>

                    </div>
                </section>
            </div>
        </div>
    </div>
   
</body>
</html>


     
     <?php
    } else {
        echo "<script>location.href='index.php';</script>";
        //header("Location: index.php");
    }

?>

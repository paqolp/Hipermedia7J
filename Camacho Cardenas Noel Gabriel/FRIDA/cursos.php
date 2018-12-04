<?php
    session_start();
    if($_SESSION["logueado"] == TRUE) {
        $pid = $_SESSION['id'];
        $nombre = $_SESSION['nombre'];

?>
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Cursos</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
  <link rel="stylesheet" href="./css/styles.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/menuFrida.css">

	<link rel="stylesheet" href="css/footerGeneral.css">
	
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

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
<div class="container">
        <div class="columns">
            <div class="column is-12">
                <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Selecciona una clase para mostrar la información<span id="titulo"></span>.
                            </h1>
                            </div>
    					</div>
				</div>
			</div>

  <div class="container">
      <br>
      <br>
    <h1 class="title is-4">Cursos</h1>

    <button class="accordion">Clase #1</button>
    <div class="accordion-content">
      

      <p>

       Programa desde cero, domina Javascript, entiende HTML y aprende de algoritmos.

        

      </p>
      <p>
        
        Sí, desde cero. Entenderás la lógica del código, cómo piensan los programadores y cómo programar juegos, proyectos y hasta robots y electrónica. 

      </p>
      <p>
        
        Aprender a programar no es fácil, pero Frida lo hace efectivo.
          
               
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rbuYtrNUxg4?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    <button class="accordion">Clase #2</button>
    <div class="accordion-content">
      
      
      <p>
        
        En esta clase aprenderemos más conceptos claves sobre HTML y Javascript

       
      </p>

<iframe width="560" height="315" src="https://www.youtube.com/embed/av_PL4_jz1I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>


    <button class="accordion">Clase #3</button>
    <div class="accordion-content">
      <p>   
        Primeros pasaos en el navegador con alert y conceptos avanzados de javascript
      </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CTOAwqbmAMQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
<script src="./js/scripts.js"></script>

</body>
</html>


     
     <?php
    } else {
        echo "<script>location.href='index.php';</script>";
        //header("Location: index.php");
    }

?>

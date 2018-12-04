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
    <title>Registrar tarea</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />
    

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
                    <a class="navbar-item" href="registrarTarea.php">
                        <strong>Agregar Tarea</strong>
                    </a>
                    <a class="navbar-item" href="salir.php">
                        <strong>Cerrar Sesión</strong>
                    </a>
                </div>

            </div>
        </div>
    </nav>
    <!-- END NAV -->
    <br>
    <div class="container">
        <div class="columns">
            <div class="column is-3 ">
            </div>
            <div class="column is-9">
                <div class="columns">
                    <div class="column is-6">
                            <div class="container" style="background-color:#209cee; padding:20px; width: 100%">
                                <h1 class="title">
                                    Registro de Tarea
                                </h1>
                                <h2 class="subtitle">
                                    *Recuerda revisar bien los datos antes de terminar tu registro.
                                </h2>
                            </div>
                        <form action="./php/agregarTarea.php" method="post">
                                               
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Titulo:
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large"  name="titulo"type="text" placeholder=""required>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Numero de tarea:
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input id="fridaEmail" name="numero" class="input is-large" type="text" placeholder="" required>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Archivo:
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input id="fridaEmail" name="archivo" class="input is-large" type="text" placeholder="" required>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Fecha de entrega:
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="content">
                                    <div class="control has-icons-left has-icons-right">
                                        <input class="input is-large" name="fecha_limite_entrega" type="text" placeholder="DD/MM/AAAA" required>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="card">
                                <header class="card-header">
                                    <p class="card-header-title">
                                        Área de conocimiento:
                                    </p>
                                </header>
    
                                <div class="card-content">
                                    <div class="dropdown">
                                        <div class="dropdown-trigger">
                                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                                <span>Selecciona un área</span>
                                                <span class="icon is-small">

                                                <i class="fa fa-angle-down" aria-hidden="true"></i>
                                                </span>
                                            </button>
                                        </div>
                                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                                <div class="dropdown-content">
                                                <a href="#" class="dropdown-item">
                                                    Físico Matemático y Ciencias de la Tierra  
                                                </a>
                                                <a class="dropdown-item">
                                                    Biología y Química
                                                </a>
                                                <a class="dropdown-item">
                                                    Medicina y Ciencias de la salud
                                                </a>
                                                <a class="dropdown-item">
                                                    Sociales y Económico Administrativas
                                                </a>
                                                <a class="dropdown-item">
                                                    Biotecnología y Ciencias Agropecuarias
                                                </a>
                                                <a class="dropdown-item">
                                                    Biología y Química
                                                </a>
                                                <a href="#" class="dropdown-item is-active">
                                                    Ingenierías
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

                            <!-- <div class="card">
                                    <header class="card-header">
                                        <p class="card-header-title">
                                                Contrasena lider F:
                                        </p>
                                    </header>
                                    <div class="card-content">
                                        <div class="content">
                                            <div class="control has-icons-left has-icons-right">
                                                <input id="LFPass" class="input is-large" type="tel" placeholder="">
                                                
                                            </div>
                                        </div>
                                    </div>
                            </div> -->
                        
                        <button  type="submit" class="button is-block is-info is-large is-fullwidth">Registrar</button>  
                    </form>
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
    <script>
        var dropdown = document.querySelector('.dropdown');
        dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdown.classList.toggle('is-active');
        });
    </script>
</body>
</html>

 <?php
    } else {
        echo "<script>location.href='index.php';</script>";
        //header("Location: index.php");
    }

?>

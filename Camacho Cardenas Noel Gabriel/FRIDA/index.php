<?php
 
if(isset($_GET["error"]) && $_GET["error"] != "login") {
	echo "<script>location.href='index.php';</script>";

		//header("Location: index.php");
	}
 ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Codigo Frida - Login</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <!-- Bulma Version 0.7.1-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
    <link rel="stylesheet" type="text/css" href="./css/login.css">

</head>

<body >
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-grey">Login</h3>
                    <?php
			            if(isset($_GET["error"])) {
				        echo "<p class='help is-danger has-text-danger'>Correo y / o Contraseña erroneos. Intentelo de nuevo.</p>";
			        }
		 ?>
                     <div class="box">
                     <figure class="avatar">
                            <img src="./img/logo.png">
                        </figure>
                        <form  action="login.php" method="post">
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="text" placeholder="Correo electrónico" name="correo" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large"  type="password" name="contrasena" placeholder="Contraseña">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
                            </div>
                            <button type="submit"  name="enviar" class="button is-block is-info is-large is-fullwidth">Login</button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="index.php">Sign Up</a> &nbsp;·&nbsp;
                    </p>
                </div>
            </div>
        </div>
    </section>
</body>

</html>
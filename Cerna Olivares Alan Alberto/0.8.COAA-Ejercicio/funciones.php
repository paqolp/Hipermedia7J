<?php
    function conectarBD(){
        $conn = new mysqli("localhost", "root", "alan12345", "practica");
        if($conn->connect_error){
            die("Error al conectarse a la base de datos" . $conn->connect_error);
        }
        return $conn;
    }
?>
<?php

require "funciones.php";

$name = $_POST["name"];
$comment = $_POST["comment"];

$comment_length = strlen($comment);

if ($comment_length > 100)
{
    header("location: index.php?error=1");
}
else
{
    $conn = conectarBD();
    $conn->query("Insert Into comments (name, comment) VALUES ('".$name."','".$comment."')");
    header("location: index.php");
}
?>
<?php
    header("Content-type: application/json; charset=utf-8");

    require_once "lib/error.php";
    require_once "lib/file.php";
    require_once "lib/mysql.php";
    require_once "lib/response.php";
    require_once "lib/session.php";

    $session = new Session();
    $mysql = new MySQL();
    $response = new Response(StatusCode::SUCCESS);
    $id_file = MySQL::cleanInputString($_POST["id"]);

    $query = "SELECT `files`.`path` FROM `files` WHERE `files`.`id` = $id_file";
    $result = $mysql->execute($query);
    $path = $result->fetch_assoc()["path"];

    File::removeFile("../" . $path);
    $query = "DELETE FROM `files` WHERE `files`.`id` = $id_file";
    $mysql->execute($query);

    echo $response->toJSON();
?>
<?php
    header("Content-type: application/json; charset=utf-8");

    require_once "lib/debug.php";
    require_once "lib/error.php";
    require_once "lib/file.php";
    require_once "lib/mysql.php";
    require_once "lib/response.php";
    require_once "lib/session.php";

    $session = new Session();
    $mysql = new MySQL();
    $response = new Response(StatusCode::SUCCESS);

    $id = $session->get("id");
    $query = "SELECT `users`.`name`, `users`.`last_name`, `users`.`email`, `users`.`image_path` FROM `users` WHERE `users`.`id` = $id";
    $result = $mysql->execute($query);
    $response->setData($result->fetch_assoc());

    echo $response->toJSON();
?>
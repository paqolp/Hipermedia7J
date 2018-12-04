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
    $id = $session->get("id");
    $id_activity = MySQL::cleanInputString($_POST["id_activity"]);
    $content = MySQL::cleanInputString($_POST["content"]);

    $query = "INSERT INTO `comments` (`id_user`, `id_activity`, `content`, `submitted`)
              VALUES ($id, $id_activity, '$content', NOW())";

    $result = $mysql->execute($query);

    echo $response->toJSON();
?>
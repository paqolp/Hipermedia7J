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

    $query = "SELECT `users`.`id`, `users`.`name`, `users`.`last_name`, `users`.`image_path` FROM `users`
              WHERE `users`.`type` = 'FRIDA' AND `users`.`id` != $id";

    $result = $mysql->execute($query);

    if ($result->num_rows > 0) {
        $data = array();

        while ($row = $result->fetch_assoc())
            $data[] = $row;

        $response->setData($data);
    }

    echo $response->toJSON();
?>
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
    $data = array(
        "type" => null,
        "name" => null,
        "last_name" => null,
        "birthdate" => null,
        "email" => null,
        "phone" => null,
        "institution" => null,
        "biography" => null,
        "image_path" => null,
        "area" => null,

        "id_team" => null,
        "team_name" => null,

        "badges" => null
    );

    if (isset($_POST["id"]) && MySQL::cleanInputString($_POST["id"]) !== "")
        $id = MySQL::cleanInputString($_POST["id"]);
    elseif ($session->get("id") !== null)
        $id = $session->get("id");
    else
        ; // Handle the error somehow

    $query = "SELECT `users`.`type`, `users`.`name`, `users`.`last_name`, `users`.`birthdate`, `users`.`email`,
                     `users`.`phone`, `users`.`institution`, `users`.`biography`, `users`.`image_path`, `users`.`area`
                FROM `users` WHERE `users`.`id` = $id";
    
    $result = $mysql->execute($query);
    $row = $result->fetch_assoc();
    $data["type"] = $row["type"];
    $data["name"] = $row["name"];
    $data["last_name"] = $row["last_name"];
    $data["birthdate"] = $row["birthdate"];
    $data["email"] = $row["email"];
    $data["phone"] = $row["phone"];
    $data["institution"] = $row["institution"];
    $data["biography"] = $row["biography"];
    $data["image_path"] = $row["image_path"];
    $data["area"] = $row["area"];

    $query = "SELECT `teams`.`id`, `teams`.`name` FROM `teams`, `team_members` WHERE `teams`.`id`
                IN(SELECT DISTINCT `team_members`.`id_team` FROM `team_members` WHERE `team_members`.`id_user` = $id)";

    $result = $mysql->execute($query);
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data["id_team"] = $row["id"];
        $data["team_name"] = $row["name"];
    }

    if ($data["type"] === "FRIDA") {
        $query = "SELECT `earned_badges`.`id`, `badges`.`image_path` FROM `badges`, `earned_badges`
                WHERE `badges`.`id` = `earned_badges`.`id_badge`
                AND `earned_badges`.`id_user` = $id";

        $result = $mysql->execute($query);

        if ($result->num_rows > 0) {
            $data["badges"] = array();

            while ($row = $result->fetch_assoc())
                $data["badges"][] = $row["image_path"];
        }
    }

    $response->setData($data);

    echo $response->toJSON();
?>
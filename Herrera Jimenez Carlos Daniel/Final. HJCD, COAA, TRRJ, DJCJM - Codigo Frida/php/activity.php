<?php
    header("Content-type: application/json; charset=utf-8");

    // require_once "lib/debug.php";
    require_once "lib/error.php";
    require_once "lib/file.php";
    require_once "lib/mysql.php";
    require_once "lib/response.php";
    require_once "lib/session.php";

    $session = new Session();
    $mysql = new MySQL();
    $response = new Response(StatusCode::SUCCESS);
    $id = MySQL::cleanInputString($_POST["id"]);
    $data = array(
        "id_unit" => null,
        "id_activity" => null,
        "unit_title" => null,
        "activity_title" => null,
        "deadline" => null,
        "slides_link" => null,
        "status" => null,

        "list_activities" => null,

        "list_files" => null,

        "list_comments" => null
    );

    $query = "SELECT `units`.`id` AS `id_unit`, `units`.`title` AS `unit_title`, `activities`.`title` AS `activity_title`,
              `activities`.`id` AS `id_activity`, `activities`.`deadline`, `activities`.`slides_link`, `activities`.`status`
              FROM `units`, `activities` WHERE `units`.`id` = `activities`.`id_unit` AND `activities`.`id` = $id";

    $result = $mysql->execute($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data["id_unit"] = $row["id_unit"];
        $data["id_activity"] = $row["id_activity"];
        $data["unit_title"] = $row["unit_title"];
        $data["activity_title"] = $row["activity_title"];
        $data["deadline"] = $row["deadline"];
        $data["slides_link"] = $row["slides_link"];
        $data["status"] = $row["status"];

        $query = "SELECT `activities`.`id`, `activities`.`title`, `activities`.`status` FROM `activities`
                  WHERE `activities`.`id_unit` = $row[id_unit] AND `activities`.`id` != $row[id_activity]";

        $result = $mysql->execute($query);

        if ($result->num_rows > 0) {
            $data["list_activities"] = array();

            while ($row = $result->fetch_assoc())
                $data["list_activities"][] = $row;
        }

        $query = "SELECT `files`.`id`, `files`.`filename`, `files`.`path` FROM `files` WHERE `files`.`id_activity` = $id";
        $result = $mysql->execute($query);

        if ($result->num_rows > 0) {
            $data["list_files"] = array();

            while ($row = $result->fetch_assoc())
                $data["list_files"][] = $row;
        }

        $query = "SELECT `users`.`image_path`, `comments`.`content` FROM `users`, `comments`
                  WHERE `users`.`id` = `comments`.`id_user` AND `comments`.`id_activity` = $id";

        $result = $mysql->execute($query);

        if ($result->num_rows > 0) {
            $data["list_comments"] = array();

            while ($row = $result->fetch_assoc())
                $data["list_comments"][] = $row;
        }

        $response->setData($data);
    }

    echo $response->toJSON();
?>
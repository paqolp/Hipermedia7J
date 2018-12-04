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
    $currentUnit;

    $query = "SELECT `team_members`.`id` FROM `team_members` WHERE `team_members`.`id_user` = $id";
    $results = $mysql->execute($query);

    if ($results->num_rows > 0) {
        $query = "SELECT `units`.`id`, `units`.`title`, `units`.`status` FROM `units`";
    
        $results = $mysql->execute($query);
    
        if ($results->num_rows > 0) {
            $data = array(
                "units" => array(),
                "activities" => null
            );
    
            while ($row = $results->fetch_assoc()) {
                if ($row["status"] === "ONGOING")
                    $currentUnit = $row["id"];
    
                $data["units"][] = $row;
            }
    
            $query = "SELECT `activities`.`id`, `activities`.`image_path`, `activities`.`title`, `activities`.`status`,
                             `activities`.`grade`, `activities`.`submitted`, `activities`.`deadline`,
                      (SELECT COUNT(`earned_badges`.`id`) FROM `earned_badges` WHERE `earned_badges`.`id_activity` = `activities`.`id`) AS `no_badges` 
                      FROM `activities` WHERE `activities`.`id_unit` = $currentUnit";

            $results = $mysql->execute($query);

            if ($results->num_rows > 0) {
                $data["activities"] = array();

                while ($row = $results->fetch_assoc())
                    $data["activities"][] = $row;
            }
    
            $response->setData($data);
        }
    }

    echo $response->toJSON();
?>
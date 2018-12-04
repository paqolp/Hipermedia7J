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
    $data = array(
        "id_team" => null,
        "team_name" =>null,
        "members" => null
    );

    $query = "SELECT `teams`.`id`, `teams`.`name` FROM `teams` WHERE `teams`.`id`
              IN(SELECT `team_members`.`id_team` FROM `team_members` WHERE `team_members`.`id_user` = $id)
              LIMIT 1";

    $results = $mysql->execute($query);

    if ($results->num_rows > 0) {
        $row = $results->fetch_assoc();
        $data["id_team"] = $row["id"];
        $data["team_name"] = $row["name"];
    
        $query = "SELECT `users`.`id`, `users`.`name`, `users`.`last_name`, `users`.`type`, `users`.`area`,
                 `users`.`genre`, `users`.`image_path` FROM `users` WHERE `users`.`id`
                  IN(SELECT `team_members`.`id_user` FROM `team_members` WHERE `team_members`.`id_team` = $data[id_team])";
    
        $results = $mysql->execute($query);
    
        if ($results->num_rows > 0) {
            $data["members"] = array();
    
            while ($row = $results->fetch_assoc())
                $data["members"][] = $row;
        }

        $response->setData($data);
    }

    echo $response->toJSON();
?>
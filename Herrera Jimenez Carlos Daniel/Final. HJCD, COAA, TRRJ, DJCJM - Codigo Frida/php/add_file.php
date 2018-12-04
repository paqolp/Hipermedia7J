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
    $id_activity = MySQL::cleanInputString($_POST["id_activity"]);

    if (isset($_FILES["file"])) {
        $query = "SELECT `activities`.`image_path` FROM `activities` WHERE `activities`.`id` = $id_activity";
        $result = $mysql->execute($query);
        $target_dir = "../" . substr($result->fetch_assoc()["image_path"], 0, 32);
        $filename = basename($_FILES["file"]["name"]);
        $target_file = $target_dir . $filename;
        $file_type = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
        
        if (file_exists($target_file)) {
            $response->setStatus(StatusCode::FAILURE);
            $response->setErrorNumber(4);
            $response->setErrorMessage("El archivo ya existe.");
            die($response->toJSON());
        }

        if ($_FILES["file"]["size"] > 5000000) {
            $response->setStatus(StatusCode::FAILURE);
            $response->setErrorNumber(4);
            $response->setErrorMessage("El tamaño del archivo es muy grande. Máximo 5MB.");
            die($response->toJSON());
        }

        if (!move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            $response->setStatus(StatusCode::FAILURE);
            $response->setErrorNumber(4);
            $response->setErrorMessage("Error al intentar guardar el archivo.");
            die($response->toJSON());
        }

        $target_file = substr($target_file, 3);
        $query = "INSERT INTO `files` (`id_activity`, `filename`, `path`)
                  VALUES ($id_activity, '$filename', '$target_file')";
        
        $mysql->execute($query);

        $query = "SELECT `files`.`id`, `files`.`filename` FROM `files` ORDER BY `files`.`id` DESC LIMIT 1";
        $result = $mysql->execute($query);
        $row = $result->fetch_assoc();
        $data = array("id" => $row["id"], "filename" => $row["filename"]);
        $response->setData($data);
    } else {
        $response->setStatus(StatusCode::FAILURE);
    }
    echo $response->toJSON();
?>
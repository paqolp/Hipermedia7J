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

    if (isset($_POST["email"]) === FALSE || ($email = MySQL::cleanInputString($_POST["email"])) === "")
        (new ParameterNotFound("email"))->kill();

    if (isset($_POST["password"]) === FALSE || ($password = MySQL::cleanInputString($_POST["password"])) === "")
        (new ParameterNotFound("password"))->kill();

    $query = "SELECT `id`, `type` FROM `users` WHERE `email` = '$email' AND `password` = SHA2('$password', 256) LIMIT 1";
    $result = $mysql->execute($query);

    if ($result === FALSE) {
        $response->setStatus(StatusCode::FAILURE);
        $response->setErrorNumber($mysql->getErrorNumber());
        $response->setErrorMessage($mysql->getErrorMessage());

        die($response->toJSON());
    } elseif ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data = array("id" => 0);
        $data["id"] = intval($row["id"]);
        $data["type"] = $row["type"];
        
        $response->setData($data);
        $session->set("id", $data["id"]);
        $session->set("type", $data["type"]);
    }

    echo $response->toJSON();
?>
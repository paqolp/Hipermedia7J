<?php
    header("Content-type: application/json; charset=utf-8");

    require_once "lib/session.php";
    require_once "lib/mysql.php";
    require_once "lib/response.php";
    require_once "lib/file.php";

    require_once "lib/debug.php"; /* -DEBUG- only */

    setDebugErrorsOn(); /* -DEBUG- only */

    File::createDirectory("../content/");

    // $session = new Session();
    // $response = new Response(StatusCode::FAILURE);
    // $mysql = new MySQL();
    // $query = "SELECT * FROM `users`";
    // $result = $mysql->execute($query);

    // if ($result == FALSE) {
    //     $response->setErrorNumber($mysql->getErrorNumber());
    //     $response->setErrorMessage($mysql->getErrorMessage());
    //     die($response->toJSON());
    // }

    // // Rest of the code
    // $response->setStatus(StatusCode::SUCCESS);
    // echo $response->toJSON();
?>
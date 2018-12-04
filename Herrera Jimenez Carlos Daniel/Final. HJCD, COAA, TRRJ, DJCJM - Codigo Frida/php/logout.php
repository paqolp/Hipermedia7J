<?php
    header("Content-type: application/json; charset=utf-8");

    require_once "lib/response.php";
    require_once "lib/session.php";

    $session = new Session();
    $response = new Response(StatusCode::SUCCESS);

    if ($session->existsKey("id") && $session->existsKey("type")) {
        $response->setData(array(
            "id" => $session->get("id"),
            "type" => $session->get("type")
        ));
        $session->remove("id");
        $session->remove("type");
    }

    echo $response->toJSON();
?>
<?php
    header("Content-type: application/json; charset=utf-8");

    require_once "lib/error.php";
    require_once "lib/file.php";
    require_once "lib/mysql.php";
    require_once "lib/response.php";

    function newRandomUserDirname() {
        while (TRUE) {
            $dirname = uniqid();
            $fullpath = "../content/users/" . $dirname;

            if (File::fileExists($fullpath) === FALSE &&
                File::isDirectory($fullpath) === FALSE)
                return $dirname;
        }
    }

    function createUserDirectory($dirname, &$image_path) {
        $fullpath = "../content/users/" . $dirname;
        File::createDirectory($fullpath);              /* ../content/users/${dirname} */
        File::createDirectory($fullpath . "/profile"); /* ../content/users/${dirname}/profile */
        File::copyFile("../content/default/default.jpg", $fullpath . "/profile/profile.jpg");
        $image_path = "content/users/" . $dirname . "/profile/profile.jpg";
    }

    function removeUserDirectory($dirname, $image_path) {
        File::removeFile("../" . $image_path);
        File::removeDirectory("../content/users/" . $dirname . "/profile");
        File::removeDirectory("../content/users/" . $dirname);
    }

    $mysql = new MySQL();
    $response = new Response(StatusCode::SUCCESS);

    /**
     * First of all, attempt to create the user's directory and copy to it
     * a default profile image from ../../content/default/default.jpg.
     * 
     * -TODO-: If it fails, *KILL* the process lml.
     */
    $image_path = "";
    $dirname = newRandomUserDirname();
    createUserDirectory($dirname, $image_path);

    /**
     * Get tha base information from the user.
     */
    if (isset($_POST["email"]) === FALSE || ($email = MySQL::cleanInputString($_POST["email"])) === "") {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("email"))->kill();
    }

    if (isset($_POST["password"]) === FALSE || ($password = MySQL::cleanInputString($_POST["password"])) === "") {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("password"))->kill();
    }

    if (isset($_POST["type"]) === FALSE || ($type = MySQL::cleanInputString($_POST["type"])) === ""
        || ($type !== "FRIDA" && $type !== "MENTOR")) {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("type"))->kill();
    }

    if (isset($_POST["name"]) === FALSE || ($name = MySQL::cleanInputString($_POST["name"])) === "") {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("name"))->kill();
    }

    if (isset($_POST["last_name"]) === FALSE || ($lastName = MySQL::cleanInputString($_POST["last_name"])) === "") {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("last_name"))->kill();
    }

    if (isset($_POST["birthdate"]) === FALSE || ($birthdate = MySQL::cleanInputString($_POST["birthdate"])) === "") {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("birthdate"))->kill();
    }

    if (isset($_POST["phone"]) === FALSE || ($phone = MySQL::cleanInputString($_POST["phone"])) === "") {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("phone"))->kill();
    }

    if (isset($_POST["institution"]) === FALSE || ($institution = MySQL::cleanInputString($_POST["institution"])) === "") {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("institution"))->kill();
    }

    if (isset($_POST["genre"]) === FALSE || ($genre = MySQL::cleanInputString($_POST["genre"])) === "") {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("genre"))->kill();
    }

    if (isset($_POST["area"]) === FALSE || ($area = MySQL::cleanInputString($_POST["area"])) === "") {
        removeUserDirectory($dirname, $image_path);
        (new ParameterNotFound("area"))->kill();
    }

    $query = "INSERT INTO `users` (`email`, `password`, `type`, `name`, `last_name`, `birthdate`, `genre`, `institution`,
                                   `phone`, `area`, `biography`, `image_path`)
              VALUES ('$email', SHA2('$password', 256), '$type', '$name', '$lastName', STR_TO_DATE('$birthdate', '%Y-%m-%d'),
                      '$genre', '$institution', '$phone', '$area', '', '$image_path')";

    if ($mysql->execute($query) === FALSE) {
        removeUserDirectory($dirname, $image_path);

        $response->setStatus(StatusCode::FAILURE);
        $response->setErrorNumber($mysql->getErrorNumber());
        $response->setErrorMessage($mysql->getErrorMessage());

        die($response->toJSON());
    }

    echo $response->toJSON();
?>
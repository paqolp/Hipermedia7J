<?php
    define("DEBUG_MODE", 1);

    if (defined("DEBUG_MODE") && DEBUG_MODE == 1) {
        error_reporting(E_ALL);
        ini_set('display_errors', 1);
    }
?>
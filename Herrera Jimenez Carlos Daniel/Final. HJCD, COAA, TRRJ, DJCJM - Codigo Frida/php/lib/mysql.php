<?php
    require_once "response.php";

    final class MySQL {
        private const SERVERNAME = "localhost";
        private const USERNAME = "admin_cf";
        private const PASSWORD = "fuerza=mim2d2";
        private const DATABASE = "codigo_frida";

        private $connection;

        public function __construct() {
            $this->connection = new mysqli(self::SERVERNAME, self::USERNAME,
                                           self::PASSWORD, self::DATABASE);

            if ($this->isSetConnectionErrno()) {
                $response = new Response(StatusCode::FAILURE,
                                         $this->getConnectionErrorNumber(),
                                         $this->getConnectionErrorMessage());

                die($response->toJSON());
            }
        }

        public function __destruct() {
            if ($this->isSetConnectionErrno() === FALSE)
                $this->connection->close();
        }

        private function getConnectionErrorNumber() {
            return $this->connection->connect_errno;
        }

        private function getConnectionErrorMessage() {
            return $this->connection->connect_error;
        }

        private function isSetConnectionErrno() {
            if ($this->getConnectionErrorNumber() != 0)
                return TRUE;

            return FALSE;
        }

        public function getErrorNumber() {
            return $this->connection->errno;
        }

        public function getErrorMessage() {
            return $this->connection->error;
        }

        public function execute($query) {
            return $this->connection->query($query);
        }

        public static function cleanInputString($string) {
            $string = trim($string);
            $string = stripslashes($string);
            $string = htmlspecialchars($string);
            return str_replace("'", "\'", $string);
        }
    }
?>
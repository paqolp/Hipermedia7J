<?php
    final class Response {
        private $status;
        private $errno;
        private $message;
        private $data;

        public function __construct($status, $errno = 0, $message = null, $data = null) {
            $this->status = $status;
            $this->errno = $errno;
            $this->message =  $message;
            $this->data =  $data;
        }

        public function setStatus($status) {
            $this->status =  $status;
        }

        public function setErrorNumber($errno) {
            $this->errno = $errno;
        }

        public function setErrorMessage($message) {
            $this->message = $message;
        }

        public function setData($data) {
            $this->data = $data;
        }

        public function toJSON() {
            return json_encode(array(
                "status" => $this->status,
                "error" => array(
                    "errno" =>  $this->errno,
                    "message" => $this->message
                ),
                "data" => $this->data
            ), JSON_FORCE_OBJECT);
        }
    }

    abstract class StatusCode {
        public const SUCCESS = 0;
        public const FAILURE = 1;
    }
?>
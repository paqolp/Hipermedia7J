<?php
    require_once "response.php";

    abstract class ErrorType {
        public const PARAM_NOT_FOUND = 1;
        public const DIRNAME_NOT_AVAILABLE = 2;
    }

    abstract class FatalError {
        private $type;
        private $message;

        public function __construct($type, $message) {
            $this->type = $type;
            $this->message = $message;
        }

        public function kill() {
            $response = new Response(StatusCode::FAILURE, $this->type, $this->message);
            die($response->toJSON());
        }
    }

    class ParameterNotFound extends FatalError {
        public function __construct($param) {
            parent::__construct(ErrorType::PARAM_NOT_FOUND, "Parameter '$param' not found.");
        }
    }
?>
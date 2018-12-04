<?php
    final class User {
        private $id;
        private $email;
        private $password;
        private $type;
        private $name;
        private $birthdate;
        private $institution;
        private $phone;
        private $area;
        private $biography;
        private $image_path;

        public function __construct() {}
        public function __destruct() {}
        public function toJSON() {}
    }

    /**
     * Tipos de Usuarios:
     *  - Frida => 'FRIDA'
     *  - Mentor => 'MENTOR'
     *  - Líder F => 'LIDER_F'
     */
    abstract class UserType {
        public const FRIDA = "FRIDA";
        public const MENTOR = "MENTOR";
        public const LIDER_F = "LIDER_F";
    }

    /**
     * Areas del Conocimiento:
     *  - Físico Matemático y Ciencias de la Tierra => 'FM_CT'
     *  - Biología y Química => 'B_Q'
     *  - Medicina y Ciencias de la Salud => 'M_CS'
     *  - Humanidades y Ciencias de la Conducta => 'H_CC'
     *  - Sociales y Económico Administrativas => 'S_EA'
     *  - Biotecnología y Ciencias Agropecuarias => 'B_CA'
     *  - Ingenierías => 'ING'
     *  - Ninguna => 'NONE'
     */
    abstract class UserArea {
        public const FM_CT = "FM_CT";
        public const B_Q = "B_Q";
        public const M_CS = "M_CS";
        public const H_CC = "H_CC";
        public const S_EA = "S_EA";
        public const B_CA = "B_CA";
        public const ING = "ING";
        public const NONE = "NONE";
    }
?>
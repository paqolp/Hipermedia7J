<?php
    final class File {
        public static function isFile($filename) {
            return is_file($filename);
        }

        public static function isReadable($filename) {
            return is_readable($filename);
        }

        public static function isDirectory($dirname) {
            return is_dir($dirname);
        }

        public static function fileExists($filename) {
            return file_exists($filename);
        }

        public static function createDirectory($dirname) {
            return mkdir($dirname);
        }

        public static function removeDirectory($dirname) {
            return rmdir($dirname);
        }

        public static function removeFile($filename) {
            return unlink($filename);
        }

        public static function copyFile($src, $dst) {
            return copy($src, $dst);
        }

        public static function getFileExtension($filename) {
            $ext = pathinfo($filename, PATHINFO_EXTENSION);
        }
    }
?>
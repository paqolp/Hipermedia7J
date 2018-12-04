-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-12-2018 a las 11:22:41
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vzunrnzx_frida`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `idequipo` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `miembros` varchar(500) NOT NULL,
  `mentor` varchar(100) NOT NULL,
  `medallas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`idequipo`, `nombre`, `miembros`, `mentor`, `medallas`) VALUES
(1, 'Chicas geniales', 'Alejandra, Mariana', 'Juan', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `file_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `uploaded_on` datetime NOT NULL,
  `status` enum('1','0') COLLATE utf8_unicode_ci NOT NULL DEFAULT '1',
  `idequipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `file_name`, `uploaded_on`, `status`, `idequipo`) VALUES
(1, 'AplicaciÃ³n mÃ³vil hÃ­brida con IONIC - Uso de checkbox.pdf', '2018-12-04 03:00:19', '1', 1),
(2, 'Entregables Proyecto integrador..pdf', '2018-12-04 03:41:09', '1', 1),
(8, 'IONIC - Proyecto completo para agregar productos a una base de datos MYSQLutilizando un API RES.pdf', '2018-12-04 04:15:52', '1', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `idtarea` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `numero` int(11) NOT NULL,
  `archivo` longblob NOT NULL,
  `fecha_entregado` varchar(10) NOT NULL,
  `fecha_limite_entrega` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`idtarea`, `titulo`, `numero`, `archivo`, `fecha_entregado`, `fecha_limite_entrega`) VALUES
(3, 'Conceptos programacion', 1, 0x656a656d706c6f, '', '04/12/2018');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idusuario` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha_nac` varchar(10) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `lugar_procedencia` varchar(11) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `rol` varchar(6) NOT NULL,
  `area_conocimiento` varchar(100) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `idequipo` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idusuario`, `nombre`, `fecha_nac`, `correo`, `lugar_procedencia`, `telefono`, `rol`, `area_conocimiento`, `contrasena`, `idequipo`) VALUES
(3, 'Juan', '17/06/1997', 'juan@hotmail.com', 'UdeC', '3131043433', 'liderf', 'Ingenieria', 'juan', 0),
(5, 'Alejandra', '11/11/2010', 'alejandra@hotmail.mx', 'UdeC', '3434334343', 'frida', 'ninguna', 'alejandra', 1),
(6, 'Luis', '17/06/1995', 'luis@hotmail.com', 'UdeC', '3313104593', 'mentor', 'Ingenieria', 'luis', 0),
(8, 'Mariana', '11/11/2010', 'mariana@hotmail.com', 'UdeC', '3434334343', 'frida', 'Ninguna', 'mariana', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`idequipo`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`idtarea`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idusuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `idequipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `idtarea` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

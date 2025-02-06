-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-02-2025 a las 14:08:55
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mobas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(80) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id`, `nombre`, `imagen`, `descripcion`) VALUES
(1, 'League of Legends', 'https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2022/8/1/ksfga6rlx2ugfhjd9vnk/league-of-legends', 'League of Legends (también conocido por sus siglas LoL) es un videojuego multijugador de arena de batalla en línea desarrollado y publicado por Riot Games. Inspirándose en Defense of the Ancients, un mapa personalizado para Warcraft III, los fundadores de'),
(2, 'Dota 2', 'https://i.pcmag.com/imagery/reviews/00XEmE7YBg1AOLEzZFQxhJV-3.fit_lim.size_1200x630.v1569475078.jpg', 'Dota 2 (En español Defensa de los Ancestros 2) es un videojuego perteneciente al género de Arena de batalla en línea ARTS («estrategia de acción en tiempo real»), también conocido en inglés como MOBA, fue lanzado el 9 de julio del año 2013. El juego fue d'),
(5, 'Heroes of the Storm\r\n', 'https://blz-contentstack-images.akamaized.net/v3/assets/blt0e00eb71333df64e/blt1ddae1f967bbd300/65baf21388b8ab550559bfb9/og_image.webp', 'Heroes of the Storm (en español Héroes de la tormenta) es un videojuego multijugador de arena de batalla en línea.La compañía Blizzard combina dentro en el videojuego a distintos Héroes de sus principales franquicias de videojuegos: Warcraft, Overwatch, D'),
(6, 'SMITE\r\n', 'https://cdn1.epicgames.com/offer/076207fa2b5c4803a636af606c3c28b7/SMITE-Hero-1920x1080_jan25_1920x1080-8298c71910dfb6659d18046770ac29a8', 'SMITE es un videojuego de acción MOBA en tercera persona, creado y publicado por Hi-Rez Studios para Microsoft Windows, Xbox One, PlayStation 4 y Nintendo Switch. El juego se basa en dos equipos, cada uno formado por cinco dioses, enfrentados en un campo '),
(7, 'Paragon', 'https://mmoculture.com/wp-content/uploads/2018/01/Paragon.jpg', 'Paragon es un juego de campo de batalla en línea multijugador gratuito desarrollado y publicado por Epic Games, impulsado por su propio Unreal Engine 4. El juego comenzó con acceso anticipado de compra para jugar en marzo de 2016 y luego se lanzó de forma'),
(8, 'Predecessor', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZUPPEfDFC4hYt8ehYtu97hLS7QujsUveAA&s', 'Uno de los sucesores del Paragon. Predecessor es un juego de campo de batalla en línea multijugador gratuito desarrollado y publicado por Omeda Studios. El juego comenzó su fase de acceso anticipado de compra para jugar el 1 de diciembre de 2022. Se lanzó');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

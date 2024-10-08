-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 27, 2024 lúc 03:36 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `food1`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `allcode`
--

CREATE TABLE `allcode` (
  `id` int(11) NOT NULL,
  `key` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orderdetails`
--

CREATE TABLE `orderdetails` (
  `id` int(11) NOT NULL,
  `orderId` int(11) DEFAULT NULL,
  `productId` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orderdetails`
--

INSERT INTO `orderdetails` (`id`, `orderId`, `productId`, `quantity`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 59, '2', 2, 10, '2024-09-26 15:20:36', '2024-09-26 15:20:36'),
(2, 59, '32', 3, 15, '2024-09-26 15:20:36', '2024-09-26 15:20:36'),
(3, 59, '23', 1, 10, '2024-09-26 15:20:36', '2024-09-26 15:20:36'),
(4, 60, '2', 2, 10, '2024-09-26 15:21:46', '2024-09-26 15:21:46'),
(5, 60, '32', 3, 15, '2024-09-26 15:21:46', '2024-09-26 15:21:46'),
(6, 60, '23', 1, 10, '2024-09-26 15:21:46', '2024-09-26 15:21:46'),
(7, 61, '2', 1, 10, '2024-09-26 16:00:45', '2024-09-26 16:00:45'),
(8, 61, '24', 1, 15, '2024-09-26 16:00:45', '2024-09-26 16:00:45'),
(9, 61, '22', 2, 15, '2024-09-26 16:00:45', '2024-09-26 16:00:45'),
(10, 1, '2', 1, 10, '2024-09-26 16:59:39', '2024-09-26 16:59:39'),
(11, 1, '24', 1, 15, '2024-09-26 16:59:39', '2024-09-26 16:59:39'),
(12, 1, '22', 2, 15, '2024-09-26 16:59:39', '2024-09-26 16:59:39'),
(13, 2, '2', 1, 10, '2024-09-26 17:03:12', '2024-09-26 17:03:12'),
(14, 2, '24', 1, 15, '2024-09-26 17:03:12', '2024-09-26 17:03:12'),
(15, 2, '22', 2, 15, '2024-09-26 17:03:12', '2024-09-26 17:03:12'),
(16, 3, '31', 1, 30, '2024-09-26 18:04:42', '2024-09-26 18:04:42'),
(17, 3, '29', 1, 5, '2024-09-26 18:04:42', '2024-09-26 18:04:42'),
(18, 3, '26', 1, 10, '2024-09-26 18:04:42', '2024-09-26 18:04:42'),
(19, 4, '31', 1, 30, '2024-09-26 18:06:32', '2024-09-26 18:06:32'),
(20, 4, '29', 1, 5, '2024-09-26 18:06:32', '2024-09-26 18:06:32'),
(21, 4, '26', 1, 10, '2024-09-26 18:06:32', '2024-09-26 18:06:32'),
(22, 4, '28', 1, 5, '2024-09-26 18:06:32', '2024-09-26 18:06:32'),
(23, 5, '26', 1, 10, '2024-09-26 18:30:03', '2024-09-26 18:30:03'),
(24, 5, '28', 2, 5, '2024-09-26 18:30:03', '2024-09-26 18:30:03'),
(25, 5, '2', 1, 10, '2024-09-26 18:30:03', '2024-09-26 18:30:03'),
(26, 6, '26', 1, 10, '2024-09-26 18:32:15', '2024-09-26 18:32:15'),
(27, 6, '28', 2, 5, '2024-09-26 18:32:15', '2024-09-26 18:32:15'),
(28, 6, '2', 1, 10, '2024-09-26 18:32:15', '2024-09-26 18:32:15'),
(29, 7, '26', 1, 10, '2024-09-26 18:33:15', '2024-09-26 18:33:15'),
(30, 7, '28', 2, 5, '2024-09-26 18:33:15', '2024-09-26 18:33:15'),
(31, 7, '2', 1, 10, '2024-09-26 18:33:15', '2024-09-26 18:33:15'),
(32, 8, '26', 1, 10, '2024-09-26 18:33:33', '2024-09-26 18:33:33'),
(33, 8, '28', 2, 5, '2024-09-26 18:33:33', '2024-09-26 18:33:33'),
(34, 8, '2', 1, 10, '2024-09-26 18:33:33', '2024-09-26 18:33:33'),
(35, 9, '26', 1, 10, '2024-09-26 18:34:24', '2024-09-26 18:34:24'),
(36, 9, '28', 2, 5, '2024-09-26 18:34:24', '2024-09-26 18:34:24'),
(37, 9, '2', 1, 10, '2024-09-26 18:34:24', '2024-09-26 18:34:24'),
(38, 10, '26', 1, 10, '2024-09-26 18:35:24', '2024-09-26 18:35:24'),
(39, 10, '28', 2, 5, '2024-09-26 18:35:24', '2024-09-26 18:35:24'),
(40, 10, '2', 1, 10, '2024-09-26 18:35:24', '2024-09-26 18:35:24'),
(41, 11, '26', 1, 10, '2024-09-26 18:36:20', '2024-09-26 18:36:20'),
(42, 11, '28', 2, 5, '2024-09-26 18:36:20', '2024-09-26 18:36:20'),
(43, 11, '2', 1, 10, '2024-09-26 18:36:20', '2024-09-26 18:36:20'),
(44, 12, '26', 1, 10, '2024-09-26 18:36:34', '2024-09-26 18:36:34'),
(45, 12, '28', 2, 5, '2024-09-26 18:36:34', '2024-09-26 18:36:34'),
(46, 12, '2', 1, 10, '2024-09-26 18:36:34', '2024-09-26 18:36:34'),
(47, 13, '26', 1, 10, '2024-09-26 18:38:33', '2024-09-26 18:38:33'),
(48, 13, '28', 2, 5, '2024-09-26 18:38:33', '2024-09-26 18:38:33'),
(49, 13, '2', 1, 10, '2024-09-26 18:38:33', '2024-09-26 18:38:33'),
(50, 14, '26', 1, 10, '2024-09-26 18:38:43', '2024-09-26 18:38:43'),
(51, 14, '28', 2, 5, '2024-09-26 18:38:43', '2024-09-26 18:38:43'),
(52, 14, '2', 1, 10, '2024-09-26 18:38:43', '2024-09-26 18:38:43'),
(53, 15, '26', 1, 10, '2024-09-26 18:41:13', '2024-09-26 18:41:13'),
(54, 15, '28', 2, 5, '2024-09-26 18:41:13', '2024-09-26 18:41:13'),
(55, 15, '2', 1, 10, '2024-09-26 18:41:13', '2024-09-26 18:41:13'),
(56, 16, '26', 1, 10, '2024-09-26 18:41:21', '2024-09-26 18:41:21'),
(57, 16, '28', 2, 5, '2024-09-26 18:41:21', '2024-09-26 18:41:21'),
(58, 16, '2', 1, 10, '2024-09-26 18:41:21', '2024-09-26 18:41:21'),
(59, 17, '26', 1, 10, '2024-09-26 18:41:27', '2024-09-26 18:41:27'),
(60, 17, '28', 2, 5, '2024-09-26 18:41:27', '2024-09-26 18:41:27'),
(61, 17, '2', 1, 10, '2024-09-26 18:41:27', '2024-09-26 18:41:27'),
(62, 18, '26', 1, 10, '2024-09-26 18:41:37', '2024-09-26 18:41:37'),
(63, 18, '28', 2, 5, '2024-09-26 18:41:37', '2024-09-26 18:41:37'),
(64, 18, '2', 1, 10, '2024-09-26 18:41:37', '2024-09-26 18:41:37'),
(65, 19, '26', 1, 10, '2024-09-26 18:42:51', '2024-09-26 18:42:51'),
(66, 19, '28', 2, 5, '2024-09-26 18:42:51', '2024-09-26 18:42:51'),
(67, 19, '2', 1, 10, '2024-09-26 18:42:51', '2024-09-26 18:42:51'),
(68, 20, '26', 1, 10, '2024-09-26 18:43:15', '2024-09-26 18:43:15'),
(69, 20, '28', 2, 5, '2024-09-26 18:43:15', '2024-09-26 18:43:15'),
(70, 20, '2', 1, 10, '2024-09-26 18:43:15', '2024-09-26 18:43:15'),
(71, 21, '26', 1, 10, '2024-09-26 18:43:30', '2024-09-26 18:43:30'),
(72, 21, '28', 2, 5, '2024-09-26 18:43:30', '2024-09-26 18:43:30'),
(73, 21, '2', 1, 10, '2024-09-26 18:43:30', '2024-09-26 18:43:30'),
(74, 22, '26', 1, 10, '2024-09-26 18:43:43', '2024-09-26 18:43:43'),
(75, 22, '28', 2, 5, '2024-09-26 18:43:43', '2024-09-26 18:43:43'),
(76, 22, '2', 1, 10, '2024-09-26 18:43:43', '2024-09-26 18:43:43'),
(77, 23, '26', 1, 10, '2024-09-26 18:44:03', '2024-09-26 18:44:03'),
(78, 23, '28', 2, 5, '2024-09-26 18:44:03', '2024-09-26 18:44:03'),
(79, 23, '2', 1, 10, '2024-09-26 18:44:03', '2024-09-26 18:44:03'),
(80, 24, '26', 1, 10, '2024-09-26 18:45:44', '2024-09-26 18:45:44'),
(81, 24, '28', 2, 5, '2024-09-26 18:45:44', '2024-09-26 18:45:44'),
(82, 24, '2', 1, 10, '2024-09-26 18:45:44', '2024-09-26 18:45:44'),
(83, 25, '26', 1, 10, '2024-09-26 18:45:55', '2024-09-26 18:45:55'),
(84, 25, '28', 2, 5, '2024-09-26 18:45:55', '2024-09-26 18:45:55'),
(85, 25, '2', 1, 10, '2024-09-26 18:45:55', '2024-09-26 18:45:55'),
(86, 26, '26', 1, 10, '2024-09-26 18:46:06', '2024-09-26 18:46:06'),
(87, 26, '28', 2, 5, '2024-09-26 18:46:06', '2024-09-26 18:46:06'),
(88, 26, '2', 1, 10, '2024-09-26 18:46:06', '2024-09-26 18:46:06'),
(89, 27, '26', 1, 10, '2024-09-26 18:46:19', '2024-09-26 18:46:19'),
(90, 27, '28', 2, 5, '2024-09-26 18:46:19', '2024-09-26 18:46:19'),
(91, 27, '2', 1, 10, '2024-09-26 18:46:19', '2024-09-26 18:46:19'),
(92, 28, '26', 1, 10, '2024-09-26 18:46:27', '2024-09-26 18:46:27'),
(93, 28, '28', 2, 5, '2024-09-26 18:46:27', '2024-09-26 18:46:27'),
(94, 28, '2', 1, 10, '2024-09-26 18:46:27', '2024-09-26 18:46:27'),
(95, 29, '26', 1, 10, '2024-09-26 18:46:34', '2024-09-26 18:46:34'),
(96, 29, '28', 2, 5, '2024-09-26 18:46:34', '2024-09-26 18:46:34'),
(97, 29, '2', 1, 10, '2024-09-26 18:46:34', '2024-09-26 18:46:34'),
(98, 30, '26', 1, 10, '2024-09-26 18:47:26', '2024-09-26 18:47:26'),
(99, 30, '28', 2, 5, '2024-09-26 18:47:26', '2024-09-26 18:47:26'),
(100, 30, '2', 1, 10, '2024-09-26 18:47:26', '2024-09-26 18:47:26'),
(101, 31, '26', 1, 10, '2024-09-26 18:47:33', '2024-09-26 18:47:33'),
(102, 31, '28', 2, 5, '2024-09-26 18:47:33', '2024-09-26 18:47:33'),
(103, 31, '2', 1, 10, '2024-09-26 18:47:33', '2024-09-26 18:47:33'),
(104, 32, '26', 1, 10, '2024-09-26 18:48:14', '2024-09-26 18:48:14'),
(105, 32, '28', 2, 5, '2024-09-26 18:48:14', '2024-09-26 18:48:14'),
(106, 32, '2', 1, 10, '2024-09-26 18:48:14', '2024-09-26 18:48:14'),
(107, 33, '26', 1, 10, '2024-09-26 18:48:42', '2024-09-26 18:48:42'),
(108, 33, '28', 2, 5, '2024-09-26 18:48:42', '2024-09-26 18:48:42'),
(109, 33, '2', 1, 10, '2024-09-26 18:48:42', '2024-09-26 18:48:42'),
(110, 34, '26', 1, 10, '2024-09-26 18:49:14', '2024-09-26 18:49:14'),
(111, 34, '28', 2, 5, '2024-09-26 18:49:14', '2024-09-26 18:49:14'),
(112, 34, '2', 1, 10, '2024-09-26 18:49:14', '2024-09-26 18:49:14'),
(113, 35, '26', 1, 10, '2024-09-26 18:50:10', '2024-09-26 18:50:10'),
(114, 35, '28', 2, 5, '2024-09-26 18:50:10', '2024-09-26 18:50:10'),
(115, 35, '2', 1, 10, '2024-09-26 18:50:10', '2024-09-26 18:50:10'),
(116, 36, '26', 1, 10, '2024-09-26 18:50:53', '2024-09-26 18:50:53'),
(117, 36, '28', 2, 5, '2024-09-26 18:50:53', '2024-09-26 18:50:53'),
(118, 36, '2', 1, 10, '2024-09-26 18:50:53', '2024-09-26 18:50:53'),
(119, 37, '26', 1, 10, '2024-09-26 18:50:56', '2024-09-26 18:50:56'),
(120, 37, '28', 2, 5, '2024-09-26 18:50:56', '2024-09-26 18:50:56'),
(121, 37, '2', 1, 10, '2024-09-26 18:50:56', '2024-09-26 18:50:56'),
(122, 38, '26', 1, 10, '2024-09-26 18:51:09', '2024-09-26 18:51:09'),
(123, 38, '28', 2, 5, '2024-09-26 18:51:09', '2024-09-26 18:51:09'),
(124, 38, '2', 1, 10, '2024-09-26 18:51:09', '2024-09-26 18:51:09'),
(125, 39, '26', 1, 10, '2024-09-26 18:51:16', '2024-09-26 18:51:16'),
(126, 39, '28', 2, 5, '2024-09-26 18:51:16', '2024-09-26 18:51:16'),
(127, 39, '2', 1, 10, '2024-09-26 18:51:16', '2024-09-26 18:51:16'),
(128, 40, '26', 1, 10, '2024-09-26 18:51:16', '2024-09-26 18:51:16'),
(129, 40, '28', 2, 5, '2024-09-26 18:51:16', '2024-09-26 18:51:16'),
(130, 40, '2', 1, 10, '2024-09-26 18:51:16', '2024-09-26 18:51:16'),
(131, 41, '26', 1, 10, '2024-09-26 18:51:32', '2024-09-26 18:51:32'),
(132, 41, '28', 2, 5, '2024-09-26 18:51:32', '2024-09-26 18:51:32'),
(133, 41, '2', 1, 10, '2024-09-26 18:51:32', '2024-09-26 18:51:32'),
(134, 42, '26', 1, 10, '2024-09-26 18:53:16', '2024-09-26 18:53:16'),
(135, 42, '28', 2, 5, '2024-09-26 18:53:16', '2024-09-26 18:53:16'),
(136, 42, '2', 1, 10, '2024-09-26 18:53:16', '2024-09-26 18:53:16'),
(137, 43, '26', 1, 10, '2024-09-26 18:53:25', '2024-09-26 18:53:25'),
(138, 43, '28', 2, 5, '2024-09-26 18:53:25', '2024-09-26 18:53:25'),
(139, 43, '2', 1, 10, '2024-09-26 18:53:25', '2024-09-26 18:53:25'),
(140, 44, '26', 1, 10, '2024-09-26 18:53:38', '2024-09-26 18:53:38'),
(141, 44, '28', 2, 5, '2024-09-26 18:53:38', '2024-09-26 18:53:38'),
(142, 44, '2', 1, 10, '2024-09-26 18:53:38', '2024-09-26 18:53:38'),
(143, 45, '26', 1, 10, '2024-09-26 18:55:12', '2024-09-26 18:55:12'),
(144, 45, '28', 2, 5, '2024-09-26 18:55:12', '2024-09-26 18:55:12'),
(145, 45, '2', 1, 10, '2024-09-26 18:55:12', '2024-09-26 18:55:12'),
(146, 46, '26', 1, 10, '2024-09-26 18:55:52', '2024-09-26 18:55:52'),
(147, 46, '28', 2, 5, '2024-09-26 18:55:52', '2024-09-26 18:55:52'),
(148, 46, '2', 1, 10, '2024-09-26 18:55:52', '2024-09-26 18:55:52'),
(149, 47, '26', 1, 10, '2024-09-26 18:56:04', '2024-09-26 18:56:04'),
(150, 47, '28', 2, 5, '2024-09-26 18:56:04', '2024-09-26 18:56:04'),
(151, 47, '2', 1, 10, '2024-09-26 18:56:04', '2024-09-26 18:56:04'),
(152, 48, '26', 1, 10, '2024-09-26 18:56:43', '2024-09-26 18:56:43'),
(153, 48, '28', 2, 5, '2024-09-26 18:56:43', '2024-09-26 18:56:43'),
(154, 48, '2', 1, 10, '2024-09-26 18:56:43', '2024-09-26 18:56:43'),
(155, 49, '26', 1, 10, '2024-09-26 18:56:43', '2024-09-26 18:56:43'),
(156, 49, '28', 2, 5, '2024-09-26 18:56:43', '2024-09-26 18:56:43'),
(157, 49, '2', 1, 10, '2024-09-26 18:56:43', '2024-09-26 18:56:43'),
(158, 50, '26', 1, 10, '2024-09-26 18:57:13', '2024-09-26 18:57:13'),
(159, 50, '28', 2, 5, '2024-09-26 18:57:13', '2024-09-26 18:57:13'),
(160, 50, '2', 1, 10, '2024-09-26 18:57:13', '2024-09-26 18:57:13'),
(161, 51, '26', 1, 10, '2024-09-26 18:57:29', '2024-09-26 18:57:29'),
(162, 51, '28', 2, 5, '2024-09-26 18:57:29', '2024-09-26 18:57:29'),
(163, 51, '2', 1, 10, '2024-09-26 18:57:29', '2024-09-26 18:57:29'),
(164, 52, '26', 1, 10, '2024-09-26 19:00:47', '2024-09-26 19:00:47'),
(165, 52, '28', 2, 5, '2024-09-26 19:00:47', '2024-09-26 19:00:47'),
(166, 52, '2', 1, 10, '2024-09-26 19:00:47', '2024-09-26 19:00:47'),
(167, 53, '26', 1, 10, '2024-09-26 19:03:17', '2024-09-26 19:03:17'),
(168, 53, '28', 2, 5, '2024-09-26 19:03:17', '2024-09-26 19:03:17'),
(169, 53, '2', 1, 10, '2024-09-26 19:03:17', '2024-09-26 19:03:17'),
(170, 55, '26', 1, 10, '2024-09-26 19:04:11', '2024-09-26 19:04:11'),
(171, 55, '28', 2, 5, '2024-09-26 19:04:11', '2024-09-26 19:04:11'),
(172, 55, '2', 1, 10, '2024-09-26 19:04:11', '2024-09-26 19:04:11'),
(173, 56, '26', 1, 10, '2024-09-26 19:06:22', '2024-09-26 19:06:22'),
(174, 56, '28', 2, 5, '2024-09-26 19:06:22', '2024-09-26 19:06:22'),
(175, 56, '2', 1, 10, '2024-09-26 19:06:22', '2024-09-26 19:06:22'),
(176, 57, '26', 1, 10, '2024-09-26 19:11:45', '2024-09-26 19:11:45'),
(177, 57, '28', 2, 5, '2024-09-26 19:11:45', '2024-09-26 19:11:45'),
(178, 57, '2', 1, 10, '2024-09-26 19:11:45', '2024-09-26 19:11:45'),
(179, 58, '26', 1, 10, '2024-09-26 19:33:12', '2024-09-26 19:33:12'),
(180, 58, '28', 2, 5, '2024-09-26 19:33:12', '2024-09-26 19:33:12'),
(181, 58, '2', 1, 10, '2024-09-26 19:33:12', '2024-09-26 19:33:12');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `totalPrice` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `shippingAddress` text DEFAULT NULL,
  `orderDate` datetime DEFAULT current_timestamp(),
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp(),
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `paymentMethod`, `totalPrice`, `status`, `shippingAddress`, `orderDate`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, 'COD', 55, NULL, 'Ta thanh oai', '2024-09-26 16:59:39', '2024-09-26 16:59:39', '2024-09-26 16:59:39', 1),
(4, 'Card', 50, NULL, 'Da Nang', '2024-09-26 18:06:32', '2024-09-26 18:06:32', '2024-09-26 18:06:32', 5),
(5, 'COD', 30, NULL, 'Doi  1 Ta Thanh Oai', '2024-09-26 18:30:03', '2024-09-26 18:30:03', '2024-09-26 18:30:03', 9),
(15, 'COD', 30, NULL, 'ta', '2024-09-26 18:41:13', '2024-09-26 18:41:13', '2024-09-26 18:41:13', 9),
(57, 'COD', 30, NULL, 'ta thanh oai', '2024-09-26 19:11:45', '2024-09-26 19:11:45', '2024-09-26 19:11:45', 1),
(58, 'UPI', 30, 'pending_confirmation', 'ta thanh oai 2', '2024-09-26 19:33:12', '2024-09-26 19:33:12', '2024-09-26 19:33:12', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `type`, `price`, `rating`, `time`, `description`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
(1, 'Mì tôm Hảo Hảo', 'VietNamFood', 5, '5', '10', 'Món ăn nuôi sống hàng tỉ con người !!', 'https://i.pinimg.com/564x/eb/00/c8/eb00c86f6deb2fe512b41a4e00acca34.jpg', '2024-09-19 02:38:19', '2024-09-19 02:52:15'),
(2, 'Phở bò Hà Nội', 'HaNoiFood', 10, '5', '10', 'Phở bò Việt Nam', 'https://i.pinimg.com/736x/2d/6c/72/2d6c729eefc5d137f1bde7ff1d15d43f.jpg', '2024-09-19 02:39:46', '2024-09-20 13:10:39'),
(3, 'PizzaHut', 'ItalianFood', 15, '4', '10', 'Món ăn dành cho người bận rộn', 'https://i.pinimg.com/564x/9b/cd/2b/9bcd2b2f95ed0111cd10a1bccdb767f5.jpg', '2024-09-20 13:36:53', '2024-09-20 13:36:53'),
(4, 'BurgerKing', 'American Food\'', 10, '5', '5', 'Học hành bận rộn quá thì ra làm món này vừa nhanh lại vừa rẻ :v', 'https://i.pinimg.com/564x/22/29/0d/22290dcfd246cc18d795fe19750e6e68.jpg', '2024-09-20 13:37:57', '2024-09-20 13:38:11'),
(22, 'BurgerKing3', 'American Food', 15, '5', '10', 'Hamburger Bò là một món ăn phổ biến có nguồn gốc từ phương Tây, đặc biệt là Hoa Kỳ. Đây là một loại bánh mì bánh hamburger được làm từ bánh mì hình tròn thường làm từ bột mỳ, bỏng mỳ, nước, men nở, muối, và dầu ăn. Hamburger bò là một món ăn nhanh phổ biến trên toàn thế giới, được làm từ bánh mì kẹp thịt bò xay ở giữa.', 'https://i.pinimg.com/736x/22/a3/38/22a338b4bca4b3a99053133c4000024c.jpg', '2024-09-10 16:08:55', '2024-09-20 14:05:08'),
(23, 'Bánh mì Sài Gòn', 'VietNamFood', 10, '5', '5', 'Bánh mì Việt Nam đã trở thành đặc trưng trong văn hóa ẩm thực Việt, được từ điển Oxford xác nhận là danh từ riêng “bánh mì” thay vì dịch ra ngôn ngữ nước ngoài. Chuyên trang ẩm thực Taste Atlas bình chọn vị trí số 1 trong số \"Top 100 sandwiches in the world\n\n', 'https://i.pinimg.com/564x/90/d6/62/90d662e323dd1636592db64529da5bda.jpg', '2024-09-10 16:48:01', '2024-09-20 14:03:30'),
(24, 'Bún đậu mắm tôm', 'VietNamFood', 15, '5', '15', 'Đặc sản người con Việt Nam', 'https://i.pinimg.com/736x/c7/a7/55/c7a7554051337e29db3500ffc29282c4.jpg', '2024-09-10 16:49:40', '2024-09-10 16:49:40'),
(25, 'Bento', 'JapanFood', 10, '4', '15', 'Một món ăn nổi tiếng của người Nhật', 'https://i.pinimg.com/564x/5e/58/80/5e588063a57d547d390b7f3ee57df0b0.jpg', '2024-09-10 16:51:16', '2024-09-10 16:51:16'),
(26, 'KimBap', 'KoreanFood', 10, '3', '5', 'Một món ăn nổi tiếng của người Hàn Quốc', 'https://i.pinimg.com/736x/fc/01/94/fc0194fec915c0d2c14e9004253e67c2.jpg', '2024-09-10 16:54:58', '2024-09-10 16:54:58'),
(27, 'KimBap1', 'KoreanFood1', 5, '3', '5', 'Một món ăn nổi tiếng của người Hàn Quốc', 'https://i.pinimg.com/736x/d1/95/9d/d1959dba7dc80a9c1738acefa89464b1.jpg', '2024-09-10 16:56:04', '2024-09-10 16:56:04'),
(28, 'Cua Hoàng đế', 'AlaskaFood', 5, '5', '10', 'Một con cua Khổng lồ đến từ Alaskaa', 'https://i.pinimg.com/564x/7e/a8/b6/7ea8b6ea47e2bd8d2cc46d35db99d4c1.jpg', '2024-09-10 16:58:03', '2024-09-10 16:58:03'),
(29, 'Cua Hoàng đế 2', 'AlaskaFood2', 5, '5', '10', 'Một con cua Khổng lồ đến từ Alaskaa', 'https://i.pinimg.com/564x/6e/fa/2d/6efa2d3cc9e24728fbe4961d8850a3cd.jpg', '2024-09-10 17:00:15', '2024-09-10 17:00:15'),
(30, 'Vịt Quay Bắc Kinh', 'ChineseFood', 30, '5', '10', 'Một con cua Khổng lồ đến từ Alaskaa', 'https://i.pinimg.com/736x/7e/ca/a6/7ecaa661def1509c2ca37841685d79c7.jpg', '2024-09-10 17:01:16', '2024-09-10 17:01:16'),
(31, 'Tom yum goong', 'ThaiLandFood', 30, '5', '10', 'Đồ ăn Thái Lan', 'https://i.pinimg.com/736x/e1/d4/3f/e1d43f8b3fdafeb9c2f83c1fb778f209.jpg', '2024-09-10 17:02:39', '2024-09-10 17:02:39'),
(32, 'Assam laksa ', 'MalaiFood', 15, '5', '10', 'Đồ ăn Malay', 'https://i.pinimg.com/564x/fa/ff/43/faff4386b2533a37e804d0906c28dcd8.jpg', '2024-09-10 17:04:00', '2024-09-10 17:04:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_types`
--

CREATE TABLE `product_types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20240826094644-create-user.js'),
('migration-create-allcode.js'),
('migration-updarte-birthdate.js'),
('migration-update-association-order.js'),
('migration-update-association2-order.js'),
('migration-update-blob-user.js'),
('migrations-create-order-detail.js'),
('migrations-create-order.js'),
('migrations-create-product.js'),
('migrations-create-productType.js'),
('migrations-create-user.js.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phonenumber` varchar(255) DEFAULT NULL,
  `image` longblob DEFAULT NULL,
  `birth` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

(2, 'nguoibietchoi@gmail.com', '$2a$10$F8YkwKcnWmSIMdqZ3BNykuwHVjan6w/ZEyCnT9nIqr7n/PjxpmRCO', 'Bao', 'Ngo', 'Ta Thanh Oai ', NULL, NULL, NULL, NULL, 'R2', '2024-09-09 18:23:39', '2024-09-09 18:23:39'),
(3, 'vuminhthuan1@gmail.com', '$2a$10$WLixMhPqenBbJUpttX.zeeJ0Vy0tr9TRhvi8cTEcIG4S3hAcAwfT6', 'Minh Thuận', ' Vũ', 'Ha Noi', NULL, NULL, NULL, NULL, 'R1', '2024-09-10 05:02:03', '2024-09-10 05:02:03'),
(4, 'tominh@gmail.com', '$2a$10$WLixMhPqenBbJUpttX.zeenh6H6RWfSDiivjYFUNwDWJvwrMcwD/W', 'Ngọc Minh', 'Tô', 'Ha Noi', NULL, NULL, NULL, NULL, 'R2', '2024-09-10 05:03:21', '2024-09-10 05:03:21');
INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `address`, `phonenumber`, `image`, `birth`, `gender`, `roleId`, `createdAt`, `updatedAt`) VALUES
(9, 'baongo610@gmail.com', '$2a$10$r3T7jMiuhJpMah9uyzwHRuXp4HyTMghbBr8.Mv2IdmZp2WtTO91tC', 'Bảo ', 'Ngô', 'Tả Thanh Oai, Thanh Trì ', NULL, NULL, NULL, NULL, 'R1', '2024-09-18 04:44:41', '2024-09-18 04:44:41'),

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `allcode`
--
ALTER TABLE `allcode`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Orders_userId_foreign_idx` (`userId`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product_types`
--
ALTER TABLE `product_types`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `allcode`
--
ALTER TABLE `allcode`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `product_types`
--
ALTER TABLE `product_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `Orders_userId_foreign_idx` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

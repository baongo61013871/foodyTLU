-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th9 18, 2024 lúc 06:46 AM
-- Phiên bản máy phục vụ: 10.4.32-MariaDB
-- Phiên bản PHP: 8.0.30

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
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `shipping_address` varchar(255) DEFAULT NULL,
  `orderDate` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `status`, `total`, `shipping_address`, `orderDate`, `createdAt`, `updatedAt`) VALUES
(2, 9, 'deliveried', 80, 'Ta Thanh Oai', '0000-00-00 00:00:00', '2024-09-11 03:49:20', '2024-09-11 03:49:20'),
(3, 10, 'pending', 30, 'Ta Thanh Oai', '0000-00-00 00:00:00', '2024-09-11 03:49:46', '2024-09-11 03:49:46'),
(4, 10, 'pending', 35, 'Ta Thanh Oai', '0000-00-00 00:00:00', '2024-09-11 03:50:05', '2024-09-11 03:50:05'),
(5, 12, 'pending', 35, 'Ta Thanh Oai', '0000-00-00 00:00:00', '2024-09-11 03:50:18', '2024-09-11 03:50:18'),
(6, 15, 'pending', 35, 'Ta Thanh Oai', '0000-00-00 00:00:00', '2024-09-11 03:50:29', '2024-09-11 03:50:29');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_details`
--

CREATE TABLE `order_details` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `type`, `price`, `rating`, `time`, `description`, `imageUrl`, `createdAt`, `updatedAt`) VALUES
(20, 'QuanVuNoodle', 'ChineseFood', '20', '4', '10', 'Món ăn dành cho người bận rộn', 'https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/Chow-Mein.jpg', '2024-09-10 16:02:27', '2024-09-10 16:42:32'),
(21, 'PizzaHut', 'VietNamFood', '25', '4', '10', 'Món ăn dành cho người bận rộn', 'https://i.pinimg.com/564x/9b/cd/2b/9bcd2b2f95ed0111cd10a1bccdb767f5.jpg', '2024-09-10 16:04:07', '2024-09-10 16:09:32'),
(22, 'BurgerKing3', 'American Food', '15', '5', '10', 'Học hành bận rộn quá thì ra làm món này vừa nhanh lại vừa rẻ :v', 'https://i.pinimg.com/564x/22/29/0d/22290dcfd246cc18d795fe19750e6e68.jpg', '2024-09-10 16:08:55', '2024-09-10 16:22:39'),
(23, 'Bánh mì Sài Gòn', 'VietNamFood', '10', '5', '5', 'Món ăn số 1 Việt Nam', 'https://i.pinimg.com/564x/90/d6/62/90d662e323dd1636592db64529da5bda.jpg', '2024-09-10 16:48:01', '2024-09-10 16:48:01'),
(24, 'Bún đậu mắm tôm', 'VietNamFood', '15', '5', '15', 'Đặc sản người con Việt Nam', 'https://i.pinimg.com/736x/c7/a7/55/c7a7554051337e29db3500ffc29282c4.jpg', '2024-09-10 16:49:40', '2024-09-10 16:49:40'),
(25, 'Bento', 'JapanFood', '10', '4', '15', 'Một món ăn nổi tiếng của người Nhật', 'https://i.pinimg.com/564x/5e/58/80/5e588063a57d547d390b7f3ee57df0b0.jpg', '2024-09-10 16:51:16', '2024-09-10 16:51:16'),
(26, 'KimBap', 'KoreanFood', '10', '3', '5', 'Một món ăn nổi tiếng của người Hàn Quốc', 'https://i.pinimg.com/736x/fc/01/94/fc0194fec915c0d2c14e9004253e67c2.jpg', '2024-09-10 16:54:58', '2024-09-10 16:54:58'),
(27, 'KimBap1', 'KoreanFood1', '5', '3', '5', 'Một món ăn nổi tiếng của người Hàn Quốc', 'https://i.pinimg.com/736x/d1/95/9d/d1959dba7dc80a9c1738acefa89464b1.jpg', '2024-09-10 16:56:04', '2024-09-10 16:56:04'),
(28, 'Cua Hoàng đế', 'AlaskaFood', '5', '5', '10', 'Một con cua Khổng lồ đến từ Alaskaa', 'https://i.pinimg.com/564x/7e/a8/b6/7ea8b6ea47e2bd8d2cc46d35db99d4c1.jpg', '2024-09-10 16:58:03', '2024-09-10 16:58:03'),
(29, 'Cua Hoàng đế 2', 'AlaskaFood2', '5', '5', '10', 'Một con cua Khổng lồ đến từ Alaskaa', 'https://i.pinimg.com/564x/6e/fa/2d/6efa2d3cc9e24728fbe4961d8850a3cd.jpg', '2024-09-10 17:00:15', '2024-09-10 17:00:15'),
(30, 'Vịt Quay Bắc Kinh', 'ChineseFood', '30', '5', '10', 'Một con cua Khổng lồ đến từ Alaskaa', 'https://i.pinimg.com/736x/7e/ca/a6/7ecaa661def1509c2ca37841685d79c7.jpg', '2024-09-10 17:01:16', '2024-09-10 17:01:16'),
(31, 'Tom yum goong', 'ThaiLandFood', '30', '5', '10', 'Đồ ăn Thái Lan', 'https://i.pinimg.com/736x/e1/d4/3f/e1d43f8b3fdafeb9c2f83c1fb778f209.jpg', '2024-09-10 17:02:39', '2024-09-10 17:02:39'),
(32, 'Assam laksa ', 'MalaiFood', '15', '5', '10', 'Đồ ăn Malay', 'https://i.pinimg.com/564x/fa/ff/43/faff4386b2533a37e804d0906c28dcd8.jpg', '2024-09-10 17:04:00', '2024-09-10 17:04:00');

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
  `image` varchar(255) DEFAULT NULL,
  `roleId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `lastName`, `address`, `phonenumber`, `image`, `roleId`, `createdAt`, `updatedAt`) VALUES
(7, 'phngtudam71@gmail.com', '$2a$10$lVj7RHb04ylV540sK6YQUes6DPILXDP07/3KEa5djxG8lPaBYUP7u', 'Phuong Tu', 'Dam', 'Ta Thanh Oai Thanh Tri Ha Noi', NULL, NULL, 'R1', '2024-09-09 14:10:54', '2024-09-09 14:10:54'),
(9, 'nguoibietchoi@gmail.com', '$2a$10$F8YkwKcnWmSIMdqZ3BNykuwHVjan6w/ZEyCnT9nIqr7n/PjxpmRCO', 'Bao', 'Ngo', 'Ta Thanh Oai ', NULL, NULL, 'R2', '2024-09-09 18:23:39', '2024-09-09 18:23:39'),
(10, 'vuminhthuan1@gmail.com', '$2a$10$WLixMhPqenBbJUpttX.zeeJ0Vy0tr9TRhvi8cTEcIG4S3hAcAwfT6', 'Minh Thuận', ' Vũ', 'Ha Noi', NULL, NULL, 'R1', '2024-09-10 05:02:03', '2024-09-10 05:02:03'),
(11, 'tominh@gmail.com', '$2a$10$WLixMhPqenBbJUpttX.zeenh6H6RWfSDiivjYFUNwDWJvwrMcwD/W', 'Ngọc Minh', 'Tô', 'Ha Noi', NULL, NULL, 'R2', '2024-09-10 05:03:21', '2024-09-10 05:03:21'),
(12, 'lehieu@gmail.com', '$2a$10$WLixMhPqenBbJUpttX.zeeXGr5U.IFtGu39zUwNg97UY3lpW7eGvu', 'Hiếu', 'Lê Văn', 'Ha Noi', NULL, NULL, 'R2', '2024-09-10 05:04:20', '2024-09-10 05:04:20'),
(15, 'baongo610ttttttt@gmail.com', '$2a$10$rimb4W1X45j8noEaaYWFLeR2K7AWJ/oJQxydymM/jZ6ybxqFwmUja', NULL, NULL, NULL, NULL, NULL, 'R1', '2024-09-10 18:31:56', '2024-09-10 18:31:56'),
(16, 'baongo610tttttttt@gmail.com', '$2a$10$rimb4W1X45j8noEaaYWFLeR2K7AWJ/oJQxydymM/jZ6ybxqFwmUja', NULL, NULL, NULL, NULL, NULL, 'R1', '2024-09-10 18:34:54', '2024-09-10 18:34:54'),
(17, 'tominhnghesi@gmail.com', '$2a$10$KvBH4DMS6KTitFqROss2H.4zQBdbeMH/mnhWdWkX7feW83iwKxOZC', NULL, NULL, NULL, NULL, NULL, 'R1', '2024-09-11 04:21:03', '2024-09-11 04:21:03'),
(23, 'baongo610@gmail.com', '$2a$10$r3T7jMiuhJpMah9uyzwHRuXp4HyTMghbBr8.Mv2IdmZp2WtTO91tC', 'Bảo ', 'Ngô', 'Tả Thanh Oai, Thanh Trì ', NULL, NULL, 'R1', '2024-09-18 04:44:41', '2024-09-18 04:44:41');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `allcode`
--
ALTER TABLE `allcode`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT cho bảng `product_types`
--
ALTER TABLE `product_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

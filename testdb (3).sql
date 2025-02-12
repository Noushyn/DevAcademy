-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 10, 2025 at 09:24 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(10) NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `writter` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `readingTime` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `image`, `title`, `description`, `writter`, `category`, `readingTime`) VALUES
(1, 'https://dl.next1code.ir/images/react/article1.webp', 'عنوان مقاله اول', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', 'میلاد بهرامی', 'هوش مصنوعی', 32),
(2, 'https://dl.next1code.ir/images/react/article2.webp', 'عنوان مقاله دوم', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', 'آیدا مرادی', 'طراحی گرافیک', 44),
(3, 'https://dl.next1code.ir/images/react/article3.webp', 'عنوان مقاله سوم', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', 'نوشین راد', 'بک اند', 56),
(4, 'https://dl.next1code.ir/images/react/article4.webp', 'عنوان مقاله چهارم', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', 'محمد محمدی', 'رابط کاربری', 23),
(5, 'https://dl.next1code.ir/images/react/article5.webp', 'عنوان مقاله پنجم', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', 'عباس عباسی', 'برنامه نویسی وب', 8),
(6, 'https://dl.next1code.ir/images/react/article6.webp', 'عنوان مقاله ششم', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', 'آوا راد', 'رابط کاربری', 12),
(7, 'https://dl.next1code.ir/images/react/article7.webp', 'عنوان مقاله هفتم', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', 'میلاد حسینی', 'برنامه نویسی وب', 70),
(9, 'https://dl.next1code.ir/images/react/article8.webp', 'عنوان مقاله هشتم', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است', 'سامان جلالی', 'رابط کاربری', 67);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `teacher` varchar(255) NOT NULL,
  `studentCount` int(11) NOT NULL,
  `mainPrice` int(11) NOT NULL,
  `discountPrice` int(11) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `progressPercent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `image`, `title`, `description`, `teacher`, `studentCount`, `mainPrice`, `discountPrice`, `category`, `duration`, `state`, `progressPercent`) VALUES
(1, 'https://dl.next1code.ir/images/courses/javascript.png', 'دوره پروژه محور javascript', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'سارا صبوری', 25, 1659000, NULL, 'فرانت اند', '39:23', 'completed', 100),
(2, 'https://dl.next1code.ir/images/courses/react.png', 'دوره پروژه محور react', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'کیمیا شاهرخی', 16, 2659000, NULL, 'فرانت اند', '45:12', 'completed', 100),
(3, 'https://sabzlearn.ir/wp-content/uploads/2024/02/nodejs-1536x864.webp', 'دوره پروژه محور nodejs', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'میلاد بهرامی', 300, 3659000, NULL, 'بک اند', '62:12', 'recording', 60),
(4, 'https://dl.next1code.ir/images/courses/redux.png', 'دوره پروژه محور redux\r\n', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'نبات اطمینان', 20, 1239000, NULL, 'فرانت اند', '12:30', 'recording', 80),
(5, 'https://sabzlearn.ir/wp-content/uploads/2023/12/img-20230818-183742-944-768x432-6586228fa5797_27_11zon.webp', 'دوره پروژه محور bootstrap\r\n', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'نیلوفر ترابی', 90, 399000, NULL, 'فرانت اند', '23:30', 'completed', 100),
(6, 'https://dl.next1code.ir/images/courses/next.png', 'دوره پروژه محور next\r\n', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'محمد محمدی', 100, 1399000, NULL, 'فرانت اند', '00:00', 'presell', 0),
(7, 'https://dl.next1code.ir/images/courses/api.png', 'دوره پروژه محور api نویسی\r\n', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'آوا صبوری', 36, 899000, NULL, 'بک اند', '15:28', 'recoding', 35),
(8, 'https://dl.next1code.ir/images/courses/tailwind.png', 'دوره پروژه محور tailwind\r\n', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'هادی مرادی', 36, 899000, NULL, 'فرانت اند', '32:28', 'completed', 100),
(9, 'https://dl.next1code.ir/images/courses/typescript.png', 'دوره پروژه محور typescript\r\n', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'شقایق نظری', 63, 1499000, NULL, 'فرانت اند', '00:00', 'presell', 0),
(10, 'https://dl.next1code.ir/images/courses/npm.png', 'دوره پروژه محور npm\r\n', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 'نوشین راد', 112, 799000, NULL, 'فرانت اند', '05:23', 'recording', 65);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

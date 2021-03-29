-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 28, 2020 at 11:36 PM
-- Server version: 5.7.31-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nace_fin_head_office`
--

-- --------------------------------------------------------

--
-- Table structure for table `branch_details`
--

CREATE TABLE `branch_details` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL,
  `branch_code` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `contact_no` varchar(55) NOT NULL,
  `address` varchar(200) NOT NULL,
  `incharge` varchar(55) NOT NULL,
  `cin` varchar(55) NOT NULL,
  `date_of_cin` varchar(55) NOT NULL,
  `database_name` varchar(55) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `branch_details`
--

INSERT INTO `branch_details` (`id`, `name`, `branch_code`, `email`, `contact_no`, `address`, `incharge`, `cin`, `date_of_cin`, `database_name`, `timestamp`) VALUES
(1, 'Head Branch-CODE-0001-KALADY', '1', 'headbranch@gmail.com', '1234567896', 'head branch 123', 'Akhila', '123456789', '25/07/2019', 'nace_fin_core', '2019-11-14 11:22:53'),
(2, 'Branch-CODE-0002-ANGAMALY', '2', 'branch1@gmail.com', '1234567899', 'branch1 123', 'Bhuvan', '123654789', '25/06/2019', 'nace_fin_core_1', '2019-11-14 11:23:12'),
(3, 'Branch-CODE-0003-MANJAPARA', '3', 'branch2@gmail.com', '1236547893', 'branch2 123', 'teena', '123658974', '25/06/2019', 'nace_fin_core_2', '2019-11-14 11:23:25');

-- --------------------------------------------------------

--
-- Table structure for table `intra_branch_accounts`
--

CREATE TABLE `intra_branch_accounts` (
  `id` int(11) NOT NULL,
  `account_head` varchar(55) NOT NULL,
  `account_id` int(55) NOT NULL,
  `native_branch_code` int(55) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `host_branch_code` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `intra_branch_accounts`
--

INSERT INTO `intra_branch_accounts` (`id`, `account_head`, `account_id`, `native_branch_code`, `timestamp`, `host_branch_code`) VALUES
(1, 'Angamali_LA', 1384, 2, '2019-12-27 07:31:43', 1),
(2, 'Manjapara_LA', 1385, 3, '2019-12-27 07:31:59', 1),
(3, 'Kalady_LA', 7190, 1, '2019-10-15 10:23:41', 2),
(4, 'Manjapara_LA', 7162, 3, '2020-01-03 10:04:26', 2),
(5, 'Kalady_LA', 7190, 1, '2019-12-30 04:56:58', 3),
(6, 'Angamali_LA', 7162, 2, '2019-12-30 04:56:53', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branch_details`
--
ALTER TABLE `branch_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `intra_branch_accounts`
--
ALTER TABLE `intra_branch_accounts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branch_details`
--
ALTER TABLE `branch_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `intra_branch_accounts`
--
ALTER TABLE `intra_branch_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

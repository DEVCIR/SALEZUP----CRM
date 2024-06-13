-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2024 at 03:04 AM
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
-- Database: `salez_up`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_registrations`
--

CREATE TABLE `admin_registrations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_registrations`
--

INSERT INTO `admin_registrations` (`id`, `first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(13, 'Robert', 'Smith', 'robert@gmail.com', 'U2FsdGVkX18bmXaIDrPnUfUVKbifD+ehL7EBIP0qD7U=', '2024-05-10 11:31:27', '2024-05-10 11:31:27'),
(15, 'John', 'John', 'john@gmail.com', 'U2FsdGVkX1+WOwgc5c20HioeNuDuG8BRrd+zQsqSJr0=', '2024-05-30 15:01:31', '2024-05-30 15:01:31');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(2, '2024_03_23_211446_create_admin_registrations_table', 1),
(3, '2024_06_11_205403_create_sales_agents_table', 1),
(4, '2024_06_11_210559_create_teams_table', 2),
(5, '2024_06_11_212751_create_sales_agents_table', 3),
(6, '2024_06_11_234111_add_start_date_to_sales_agents_table', 4),
(7, '2024_06_12_185757_create_teams_table', 5),
(8, '2024_06_12_193641_create_team_leaders_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales_agents`
--

CREATE TABLE `sales_agents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `teamleader` varchar(255) NOT NULL,
  `commission` varchar(255) NOT NULL,
  `target` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `campaign` varchar(255) NOT NULL,
  `start_date` datetime NOT NULL DEFAULT current_timestamp(),
  `active` enum('Yes','No') NOT NULL DEFAULT 'No',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales_agents`
--

INSERT INTO `sales_agents` (`id`, `name`, `surname`, `team_id`, `teamleader`, `commission`, `target`, `frequency`, `campaign`, `start_date`, `active`, `created_at`, `updated_at`) VALUES
(1, 'John', 'Doe', 1, 'Team Leader', '10%', '1000', 'Weekly', 'Summer Sale', '0000-00-00 00:00:00', 'Yes', '2024-06-11 16:36:01', '2024-06-11 16:36:01'),
(2, 'Tom', 'Doe', 2, 'Team Leader', '10%', '100', 'Weekly', 'Summer Sale', '0000-00-00 00:00:00', 'No', '2024-06-11 16:36:22', '2024-06-11 16:36:22'),
(3, 'john', 'Smith', 1, 'Ahsan', '1000', '2000', 'Month', 'Bronze', '2024-06-12 05:31:25', 'Yes', '2024-06-11 19:31:25', '2024-06-11 19:31:25'),
(4, 'agent', 'Doe', 4, 'Team Leader', '40%', '100', 'Weekly', 'Spring Sale', '2024-06-13 00:07:20', 'Yes', '2024-06-12 14:07:20', '2024-06-12 14:07:20'),
(5, 'agent', 'Doe', 5, 'Team Leader', '40%', '150', 'Weekly', 'Spring Sale', '2024-06-13 00:07:37', 'No', '2024-06-12 14:07:37', '2024-06-12 14:07:37'),
(6, 'mm', 'mmm', 1, 'mmm', 'mm', 'mm', 'Quarter', 'mmm', '2024-06-13 01:38:35', 'Yes', '2024-06-12 15:38:35', '2024-06-12 15:38:35'),
(7, 'John', 'Duww', 4, 'Team mm', '10%', '1000', 'Weekly', 'Summer Sale', '2024-06-13 01:40:44', 'No', '2024-06-12 15:40:44', '2024-06-12 15:40:44'),
(8, 'agenttt', 'agenttt', 9, 'manager', '111', '1000', 'Year', 'gold', '2024-06-13 01:43:49', 'Yes', '2024-06-12 15:43:49', '2024-06-12 15:43:49'),
(9, 'nnn', 'nnn', 4, 'nnn', '7777', '222', 'Month', 'nnn', '2024-06-13 01:45:12', 'Yes', '2024-06-12 15:45:12', '2024-06-12 15:45:12'),
(10, 'jjj', 'jjj', 6, 'jjj', '6666', '777', 'Year', 'jjj', '2024-06-13 01:46:52', 'No', '2024-06-12 15:46:52', '2024-06-12 15:46:52'),
(11, 'ww', 'wwww', 3, 'www', '666', '222', 'Month', 'www', '2024-06-13 04:31:44', 'No', '2024-06-12 18:31:44', '2024-06-12 18:31:44');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `team_leader_id` bigint(20) UNSIGNED NOT NULL,
  `campaign` varchar(255) NOT NULL,
  `sales_agents` int(11) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'deactivated',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `team_name`, `team_leader_id`, `campaign`, `sales_agents`, `status`, `created_at`, `updated_at`) VALUES
(4, 'Team', 5, 'Summer Campaign', 33, 'active', '2024-06-12 14:21:44', '2024-06-12 14:21:44'),
(5, 'Team 4', 7, 'Summer pipo', 33, 'active', '2024-06-12 14:26:49', '2024-06-12 14:26:49'),
(6, 'Team 5', 3, 'Summ', 3, 'deactivated', '2024-06-12 14:27:30', '2024-06-12 14:27:30'),
(7, '11', 111, 'mmm', 3, 'deactivated', '2024-06-12 17:17:59', '2024-06-12 17:17:59'),
(8, '2', 3, 'campaign', 3, 'deactivated', '2024-06-12 18:33:05', '2024-06-12 18:33:05');

-- --------------------------------------------------------

--
-- Table structure for table `team_leaders`
--

CREATE TABLE `team_leaders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `team_id` int(11) NOT NULL,
  `manager` varchar(255) NOT NULL,
  `commission` varchar(255) NOT NULL,
  `target` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `campaign` varchar(255) NOT NULL,
  `active` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `team_leaders`
--

INSERT INTO `team_leaders` (`id`, `name`, `surname`, `start_date`, `team_id`, `manager`, `commission`, `target`, `frequency`, `campaign`, `active`, `created_at`, `updated_at`) VALUES
(1, 'John', 'Doe', '2023-01-15', 1, 'Jane Smith', '10%', '50000', 'monthly', 'Campaign A', 'approved', '2024-06-12 14:40:52', '2024-06-12 14:40:52'),
(2, 'Tom', 'Due', '2023-01-15', 2, 'Jenny Smith', '10%', '5000', 'monthly', 'Campaign B', 'approved', '2024-06-12 14:41:17', '2024-06-12 14:41:17'),
(3, 'Tom', 'Due', '2023-01-15', 2, 'Jenny Smith', '10%', '5000', 'monthly', 'Campaign B', 'pending', '2024-06-12 14:41:38', '2024-06-12 14:41:38'),
(4, 'jjj', 'jjj', '2024-06-11', 2, 'jjj', '1111', '1111', 'Quarter', 'jjj', 'pending', '2024-06-12 15:53:30', '2024-06-12 15:53:30'),
(5, 'ttt', 'ttt', '2024-09-09', 5, 'ttt', '666', 'ttt', 'Quarter', 'ttt', 'pending', '2024-06-12 19:44:04', '2024-06-12 19:44:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_registrations`
--
ALTER TABLE `admin_registrations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_registrations_email_unique` (`email`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sales_agents`
--
ALTER TABLE `sales_agents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `team_leaders`
--
ALTER TABLE `team_leaders`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_registrations`
--
ALTER TABLE `admin_registrations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales_agents`
--
ALTER TABLE `sales_agents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `team_leaders`
--
ALTER TABLE `team_leaders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2024 at 08:23 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

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
-- Table structure for table `campaigns`
--

CREATE TABLE `campaigns` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `team_name` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`team_name`)),
  `team_lead` int(11) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `campaigns`
--

INSERT INTO `campaigns` (`id`, `name`, `team_name`, `team_lead`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Campaign Name', '[1,2,3]', 0, 'approved', '2024-06-14 18:15:37', '2024-06-14 18:15:37'),
(2, 'Liptopn', '[5,1,3]', 0, 'pending', '2024-06-14 18:16:03', '2024-06-14 18:16:03'),
(3, 'lipton', '[1,2,3]', 2, 'pending', '2024-06-14 19:00:56', '2024-06-14 19:00:56'),
(4, 'Lipton', '[{\"value\":18,\"label\":\"Vetting\"},{\"value\":19,\"label\":\"BDR\"}]', 9, 'pending', '2024-06-14 19:02:49', '2024-06-14 19:02:49');

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
(8, '2024_06_12_193641_create_team_leaders_table', 6),
(9, '2024_06_13_193045_create_sales_agents_table', 7),
(10, '2024_06_13_203357_create_team_leaders_table', 8),
(11, '2024_06_14_201904_create_sales_agents_table', 9),
(12, '2024_06_14_231107_create_campaigns_table', 10);

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
  `team_id` int(11) NOT NULL,
  `manager` varchar(255) NOT NULL,
  `commission` varchar(255) NOT NULL,
  `target` varchar(255) NOT NULL,
  `target_value` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `campaign` varchar(255) NOT NULL,
  `start_date` datetime NOT NULL,
  `active` varchar(255) NOT NULL DEFAULT 'No',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales_agents`
--

INSERT INTO `sales_agents` (`id`, `name`, `surname`, `team_id`, `manager`, `commission`, `target`, `target_value`, `frequency`, `campaign`, `start_date`, `active`, `created_at`, `updated_at`) VALUES
(1, 'John', 'Doe', 18, '13', '10%', 'Sales Volume', '$100000', 'Monthly', 'Summer Sale', '2023-01-15 09:00:00', 'yes', '2024-06-14 15:23:29', '2024-06-14 15:23:29'),
(2, 'Tom', 'Smith', 19, '15', '15%', 'Sales Volume', '$100000', 'Monthly', 'lipton', '2023-01-15 09:00:00', 'yes', '2024-06-14 15:24:16', '2024-06-14 15:24:16'),
(3, 'samantha', 'sam', 12, '15', '10000', 'Revenue', '1000', 'Month', 'cola', '2024-09-17 00:00:00', 'No', '2024-06-14 15:31:28', '2024-06-14 15:31:28'),
(4, 'sam', 'sam', 13, '13', '888', 'Units', '888', 'Quarter', 'lipton', '2024-08-19 00:00:00', 'No', '2024-06-14 16:44:46', '2024-06-14 16:44:46'),
(6, 'bill', 'hashn', 18, '15', '456', 'Units', '70', 'Quarter', '2', '2022-02-06 00:00:00', 'No', '2024-06-15 13:09:59', '2024-06-15 13:09:59');

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
(12, 'Inbound', 1, 'Campaign1', 3, 'deactivated', '2024-06-14 13:10:22', '2024-06-14 13:10:22'),
(13, 'Outbound', 10, 'Campaign2', 3, 'deactivated', '2024-06-14 13:10:49', '2024-06-14 13:10:49'),
(18, 'Vetting', 8, 'Campaign3', 3, 'active', '2024-06-14 13:17:00', '2024-06-14 13:17:00'),
(19, 'BDR', 7, 'Campaign4', 2, 'active', '2024-06-14 13:17:35', '2024-06-14 13:17:35'),
(21, 'Vetting', 11, 'Campaign16', 32, 'active', '2024-06-14 18:51:52', '2024-06-14 18:51:52');

-- --------------------------------------------------------

--
-- Table structure for table `team_leaders`
--

CREATE TABLE `team_leaders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `start_date` datetime NOT NULL,
  `team_id` int(11) NOT NULL,
  `manager` varchar(255) NOT NULL,
  `commission` varchar(255) NOT NULL,
  `target` varchar(255) NOT NULL,
  `target_value` varchar(255) NOT NULL,
  `frequency` varchar(255) NOT NULL,
  `campaign` varchar(255) NOT NULL,
  `active` varchar(255) NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `team_leaders`
--

INSERT INTO `team_leaders` (`id`, `name`, `surname`, `start_date`, `team_id`, `manager`, `commission`, `target`, `target_value`, `frequency`, `campaign`, `active`, `created_at`, `updated_at`) VALUES
(7, 'Stiphen', 'Smith', '2024-08-06 00:00:00', 18, '15', '425', 'Units', '425425', 'Year', 'Coca Cola', 'pending', '2024-06-14 13:31:49', '2024-06-14 13:31:49'),
(8, 'sam', 'sam', '2024-08-13 00:00:00', 12, '13', '1000', 'Revenue', '10000', 'Month', 'lipton', 'pending', '2024-06-14 17:00:21', '2024-06-14 17:00:21'),
(9, 'em', 'Doe', '2023-01-15 08:00:00', 19, 'John', '15%', 'Sales', '100000', 'Monthly', 'Winter Sale', 'approved', '2024-06-14 17:01:55', '2024-06-14 17:01:55'),
(10, 'sss', 'sss', '2024-06-20 00:00:00', 12, '13', '111', 'Revenue', '111', 'Month', 'sss', 'approved', '2024-06-14 17:29:00', '2024-06-14 17:29:00'),
(11, 'smeth', 'Smith', '2024-08-06 00:00:00', 8, 'Samantha', '425', 'Units', '425425', 'Year', 'Coca', 'active', '2024-06-14 18:49:43', '2024-06-14 18:49:43');

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
-- Indexes for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales_agents`
--
ALTER TABLE `sales_agents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `team_leaders`
--
ALTER TABLE `team_leaders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

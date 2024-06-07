-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2024 at 01:43 AM
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
-- Database: `crm_react`
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
-- Table structure for table `badges`
--

CREATE TABLE `badges` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `badge_name` varchar(255) NOT NULL,
  `image_path` longtext NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `badges`
--

INSERT INTO `badges` (`id`, `badge_name`, `image_path`, `description`, `status`, `created_at`, `updated_at`) VALUES
(11, 'Badge1', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAH3CAYAAACyxd/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALCSURBVHhe7ZYxjlsxEEP1fZMg9z9bUgUpdv8PBaRkoTFZGARtPC2wxWCG5Ei+fv398Szhc/3+81Mq8Pr/9+3Paz2oIYBT+7yu+1oKjg5ghYDewdopEIjQAFUUEjS44KXCB7hw3Q/EeB/DCBBCISFIC0oqNMqODpi3EyI0IN5OSNCA3TITmkRLB0TZCQ4X+E/YU+qCpQMoqZDgArtpJ0S48KCSQEIO2FwTIjQg6ZpQFywukLkmZOQAp0CjXA325/VgJRWag+7CxqEBTgG9gwdzKETkgFSdUBcsHeBmVWgOQnYBVRQcScQsAk2iRwOcAk1iSBJRRSHBBTbXBEcOcAoYNICSCg4N4KfAJ+QAh0KCjUyYCY4g4RRIcIGla0JCDljVCQYX4KVChAaoouDQAIUEDB3AS4UMFzCLQEIHTNkJCUlkGzahOcjYBZauCXXB0wFGEWgSm8RNO/DkAKeAQQOS7wkf4AL754RG2RNlflWdEuHCjVEEmsR2sNE7YBs2IcIF8lxNyEgi7BTI0IBXPqUdhHRAdnxCXWgHm4wO+H1/SoQGZMcnNIntYNMO0AH75wTDCGRFJ9TGjA5uVFHIcIE/26cYOiAbNiHDBV75lIQO2IZNqAshObjXUqgLITlAFQWHBvzNO6U5CMkBbhWFutBt3DhcwBsn0CQ2iRuDC7jXFD5ARBaOCQlBuhdmEUjQgFWdEJFEHAoODXAxCFQDjwZ4IASaA0cHeB9xu76PQQMMohChAQ6FalANNg4NHszyPnXB4wKf7ZQm0ZFENteEjBxo3wQNWNUJBhcuaCnQIH2EjazqhAgXLswi0CQ6NGAP5oS6YHEBV7OCwwX+0+WUhCSyqhPqQogLeF0U6oKnA37bnmLIAeZQvs1BSAfYaYW60A42FXF3QH6+TkjQ4BtVFBI6YMpOMGhw3UtB7+ALcyiIHaz1D/v3JHPjZ/9GAAAAAElFTkSuQmCC', 'This is a Badge 1', 'activated', '2024-06-05 20:36:28', '2024-06-05 20:36:56'),
(12, 'Badge 2', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAH3CAYAAACyxd/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAALCSURBVHhe7ZYxjlsxEEP1fZMg9z9bUgUpdv8PBaRkoTFZGARtPC2wxWCG5Ei+fv398Szhc/3+81Mq8Pr/9+3Paz2oIYBT+7yu+1oKjg5ghYDewdopEIjQAFUUEjS44KXCB7hw3Q/EeB/DCBBCISFIC0oqNMqODpi3EyI0IN5OSNCA3TITmkRLB0TZCQ4X+E/YU+qCpQMoqZDgArtpJ0S48KCSQEIO2FwTIjQg6ZpQFywukLkmZOQAp0CjXA325/VgJRWag+7CxqEBTgG9gwdzKETkgFSdUBcsHeBmVWgOQnYBVRQcScQsAk2iRwOcAk1iSBJRRSHBBTbXBEcOcAoYNICSCg4N4KfAJ+QAh0KCjUyYCY4g4RRIcIGla0JCDljVCQYX4KVChAaoouDQAIUEDB3AS4UMFzCLQEIHTNkJCUlkGzahOcjYBZauCXXB0wFGEWgSm8RNO/DkAKeAQQOS7wkf4AL754RG2RNlflWdEuHCjVEEmsR2sNE7YBs2IcIF8lxNyEgi7BTI0IBXPqUdhHRAdnxCXWgHm4wO+H1/SoQGZMcnNIntYNMO0AH75wTDCGRFJ9TGjA5uVFHIcIE/26cYOiAbNiHDBV75lIQO2IZNqAshObjXUqgLITlAFQWHBvzNO6U5CMkBbhWFutBt3DhcwBsn0CQ2iRuDC7jXFD5ARBaOCQlBuhdmEUjQgFWdEJFEHAoODXAxCFQDjwZ4IASaA0cHeB9xu76PQQMMohChAQ6FalANNg4NHszyPnXB4wKf7ZQm0ZFENteEjBxo3wQNWNUJBhcuaCnQIH2EjazqhAgXLswi0CQ6NGAP5oS6YHEBV7OCwwX+0+WUhCSyqhPqQogLeF0U6oKnA37bnmLIAeZQvs1BSAfYaYW60A42FXF3QH6+TkjQ4BtVFBI6YMpOMGhw3UtB7+ALcyiIHaz1D/v3JHPjZ/9GAAAAAElFTkSuQmCC', 'This is a Badge 2', 'activated', '2024-06-05 20:37:22', '2024-06-05 20:37:56');

-- --------------------------------------------------------

--
-- Table structure for table `competition_overview`
--

CREATE TABLE `competition_overview` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `prize` varchar(255) NOT NULL,
  `prize_value` varchar(255) NOT NULL,
  `point` varchar(255) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `duration` varchar(255) NOT NULL,
  `winner` varchar(255) DEFAULT NULL,
  `team_id` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `competition_overview`
--

INSERT INTO `competition_overview` (`id`, `type`, `prize`, `prize_value`, `point`, `start_time`, `end_time`, `duration`, `winner`, `team_id`, `created_at`, `updated_at`) VALUES
(17, 'Monthly', 'Gold', '30000', '3', '2024-06-18 03:00:00', '2024-06-18 03:01:00', '0 hours 1 minutes', NULL, '[37,39]', '2024-06-06 17:00:42', '2024-06-06 18:12:20'),
(18, 'Monthly', 'Silver', '30000', '3', '2024-06-19 03:28:00', '2024-06-19 03:29:00', '0 hours 1 minutes', NULL, '[37,40,39]', '2024-06-06 17:28:50', '2024-06-06 18:41:17'),
(19, 'Weekly', 'Silver', '40000', '4', '2024-08-13 04:34:00', '2024-08-16 04:35:00', '72 hours 1 minutes', NULL, NULL, '2024-06-06 18:35:05', '2024-06-06 18:35:05');

-- --------------------------------------------------------

--
-- Table structure for table `competition_team`
--

CREATE TABLE `competition_team` (
  `competition_team_id` int(10) UNSIGNED NOT NULL,
  `competition_id` int(11) NOT NULL,
  `team_id` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `competition_team`
--

INSERT INTO `competition_team` (`competition_team_id`, `competition_id`, `team_id`, `created_at`, `updated_at`) VALUES
(1, 1, '1', '2024-06-05 15:51:06', '2024-06-05 15:51:06'),
(18, 7, '[37,39]', '2024-06-05 19:51:49', '2024-06-05 19:51:49');

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
(2, '2024_03_19_174042_create_user_and_manager_registration_table', 1),
(3, '2024_03_19_175107_create_user_and_manager_registration_table', 2),
(4, '2024_03_19_175624_create_admin_registration_table', 3),
(5, '2024_03_19_220506_create_sales_agent_registration_table', 4),
(6, '2024_03_19_221625_create_sales_officer_registration_table', 5),
(7, '2024_03_21_125925_add_status_to_sales_officer_registration_table', 6),
(8, '2024_03_21_130706_add_status_to_sales_agent_registration_table', 7),
(9, '2024_03_21_164657_create_sales_officer_registration_table', 8),
(10, '2024_03_21_170208_create_sales_officer_registration_table', 9),
(11, '2024_03_21_185459_create_sales_agent_registration_table', 10),
(12, '2024_03_23_211446_create_admin_registrations_table', 11),
(13, '2024_03_27_172420_create_badges_table', 12),
(14, '2024_04_02_215927_create_spiff_competitions_table', 13),
(15, '2024_04_09_005424_create_teams_table', 14),
(16, '2024_04_13_113425_add_team_id_to_sales_agent_registration_table', 15),
(17, '2024_05_09_100003_create_spiff_competitions_table', 16),
(18, '2024_06_03_002014_add_team_id_to_sales_officer_registration_table', 17),
(19, '2024_06_05_182725_create_competition_overview_table', 18),
(20, '2024_06_05_194830_add_prize_value_to_competition_overview_table', 19),
(21, '2024_06_05_195151_add_prize_value_to_competition_overview_table', 20),
(22, '2024_06_05_204603_create_competition_team_table', 21),
(23, '2024_06_06_192254_add_team_id_to_competition_overview_table', 22);

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
-- Table structure for table `sales_agent_registration`
--

CREATE TABLE `sales_agent_registration` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` enum('pending','approved') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales_agent_registration`
--

INSERT INTO `sales_agent_registration` (`id`, `first_name`, `last_name`, `email`, `password`, `team_id`, `status`, `created_at`, `updated_at`) VALUES
(28, 'agent1', 'agent1', 'agent1@gmail.com', 'U2FsdGVkX19hkG4ty0YQxRrUWFzJlaVwrg/PZPahv04=', 37, 'approved', '2024-06-01 14:25:11', '2024-06-06 13:43:37'),
(31, 'agent2', 'agent2', 'agent2@gmail.com', 'U2FsdGVkX19QKiA2+ajdt2HvXPx9AJOmHtxZzDp05WY=', 39, 'approved', '2024-06-06 13:44:51', '2024-06-06 13:47:50');

-- --------------------------------------------------------

--
-- Table structure for table `sales_officer_registration`
--

CREATE TABLE `sales_officer_registration` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` enum('pending','approved') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales_officer_registration`
--

INSERT INTO `sales_officer_registration` (`id`, `first_name`, `last_name`, `email`, `password`, `team_id`, `status`, `created_at`, `updated_at`) VALUES
(63, 'officer1', 'officer1', 'officer1@gmailcom', 'U2FsdGVkX18McESFa4q/LcsrpvHbZ+56eGpaH48A7jM=', 37, 'approved', '2024-06-06 13:40:36', '2024-06-06 13:46:33'),
(64, 'officer2', 'officer2', 'officer2@gmail.com', 'U2FsdGVkX18nBOlVfMR8fFEveT6X/6cXGecoOVmOofM=', 40, 'approved', '2024-06-06 13:44:15', '2024-06-06 13:48:44');

-- --------------------------------------------------------

--
-- Table structure for table `spiff_competitions`
--

CREATE TABLE `spiff_competitions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `prize` varchar(255) NOT NULL,
  `team` varchar(255) NOT NULL,
  `point` varchar(255) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `duration` varchar(255) NOT NULL,
  `prize_value` varchar(255) NOT NULL,
  `winner` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `team_name`, `created_at`, `updated_at`) VALUES
(37, 'Team 2', '2024-06-04 11:31:17', '2024-06-04 11:36:42'),
(39, 'Team 3', '2024-06-04 13:08:21', '2024-06-04 13:08:21'),
(40, 'Team 4', '2024-06-04 13:13:26', '2024-06-04 13:13:26'),
(43, 'Team 5', '2024-06-05 20:50:05', '2024-06-05 20:50:05');

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
-- Indexes for table `badges`
--
ALTER TABLE `badges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `competition_overview`
--
ALTER TABLE `competition_overview`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `competition_team`
--
ALTER TABLE `competition_team`
  ADD PRIMARY KEY (`competition_team_id`);

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
-- Indexes for table `sales_agent_registration`
--
ALTER TABLE `sales_agent_registration`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sales_agent_registration_email_unique` (`email`);

--
-- Indexes for table `sales_officer_registration`
--
ALTER TABLE `sales_officer_registration`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sales_officer_registration_email_unique` (`email`);

--
-- Indexes for table `spiff_competitions`
--
ALTER TABLE `spiff_competitions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
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
-- AUTO_INCREMENT for table `badges`
--
ALTER TABLE `badges`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `competition_overview`
--
ALTER TABLE `competition_overview`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `competition_team`
--
ALTER TABLE `competition_team`
  MODIFY `competition_team_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales_agent_registration`
--
ALTER TABLE `sales_agent_registration`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `sales_officer_registration`
--
ALTER TABLE `sales_officer_registration`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `spiff_competitions`
--
ALTER TABLE `spiff_competitions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

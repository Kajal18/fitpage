Database: `node_mysql_crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `locations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employees`
--

-- INSERT INTO `employees` (`id`, `first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`, `updated_at`) VALUES
-- (1, 'John', 'Mack', 'johnmack@gmail.com', '1234567890', 'Softech Pvt Ltd', 'Full Stack Developer', '500.00', 1, 0, '2019-11-19 03:30:30', '2019-11-22 10:18:03'),
-- (2, 'Jane', 'Mack', 'janemack@gmail.com', '9876543210', 'Infotech Jaipur', 'PHP Developer', '450.00', 1, 0, '2019-11-19 03:35:30', '2019-11-22 10:18:03');

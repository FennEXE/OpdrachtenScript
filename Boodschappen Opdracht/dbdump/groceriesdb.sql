-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.5.9-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for Groceries
CREATE DATABASE IF NOT EXISTS `groceries` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `Groceries`;

-- Dumping structure for table Groceries.items
CREATE TABLE IF NOT EXISTS `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Dumping data for table Groceries.items: ~1 rows (approximately)
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` (`id`, `name`, `number`, `price`) VALUES
	(1, 'brood', 0, 1.00),
	(2, 'broccoli', 0, 0.99),
	(3, 'krentenbollen', 0, 1.20),
	(4, 'noten', 0, 1.20),
	(5, 'frikandelbroodje', 0, 2.00),
	(6, 'aardappelen', 0, 0.80),
	(7, 'pizza', 0, 3.00),
	(8, 'kroketten', 0, 2.00),
	(9, 'baguette', 0, 1.20),
	(10, 'druiven', 0, 1.15),
	(11, 'melk', 0, 1.20),
	(12, 'water', 0, 0.99),
	(13, 'tandpasta', 0, 2.79);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

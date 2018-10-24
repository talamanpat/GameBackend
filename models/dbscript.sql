 SET NAMES utf8 ;

DROP TABLE IF EXISTS `friends`;
CREATE TABLE `friends` (
  `user_id` varchar(36) NOT NULL,
  `friend_id` varchar(36) NOT NULL,
  PRIMARY KEY (`user_id`,`friend_id`)
) 

DROP TABLE IF EXISTS `states`;
CREATE TABLE `states` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `gamesPlayed` int(11) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
)

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
)

LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES ('c3901c85-f94e-4d34-80f3-767a07fb331a','TestTalaman'),('d27792de-fc62-464b-b315-4fdcb36a3dc8','TalamanX');
UNLOCK TABLES;

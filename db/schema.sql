DROP DATABASE IF EXISTS users;
CREATE DATABASE users;
USE users;

CREATE TABLE IF NOT EXISTS `Users` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `username` VARCHAR(32) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `authenticated` BOOLEAN DEFAULT false,
  `genres` VARCHAR(32),
  PRIMARY KEY ( `id` ) 
);

CREATE TABLE IF NOT EXISTS `Posts` (
  `id` Int AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `body` VARCHAR(255) NOT NULL,
  `post_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UserId` INTEGER NOT NULL,
  PRIMARY KEY ( `id` ),
  FOREIGN KEY ( `UserId` ) REFERENCES `Users` ( `id` )
);

CREATE TABLE `movie_data`
(
	`id` int NOT NULL AUTO_INCREMENT,
  `genre` varchar(32),
	PRIMARY KEY ( `id` )
);

CREATE TABLE `tvshow_data`
(
	`id` int NOT NULL AUTO_INCREMENT,
  `genre` varchar(32),
	PRIMARY KEY ( `id` )
);
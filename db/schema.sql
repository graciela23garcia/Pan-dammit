DROP DATABASE IF EXISTS users;
CREATE DATABASE users;
USE users;

SELECT * FROM users.moviesearches
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
  `actionCount` INTEGER,
  `adventureCount` INTEGER,
  `animationCount`INTEGER,
  `comedyCount`INTEGER,
  `crimeCount`INTEGER,
  `documentaryCount`INTEGER,
  `dramaCount`INTEGER,
  `familyCount`INTEGER,
  `fantasyCount`INTEGER,
  `historyCount`INTEGER,
  `horrorCount`INTEGER,
  `musicCount`INTEGER,
  `mysteryCount`INTEGER,
  `romanceCount`INTEGER,
  `scienceFictionCount`INTEGER,
  `tvMovieCount`INTEGER,
  `thrillerCount`INTEGER,
  `warCount`INTEGER,
  `westernCount` INTEGER,
	PRIMARY KEY ( `id` )
);

CREATE TABLE `tvshow_data`
(
	`id` int NOT NULL AUTO_INCREMENT,
  `genre` varchar(32),
	PRIMARY KEY ( `id` )
);

INSERT INTO `Users` (username, password) VALUES ('Adam', '1234');
INSERT INTO `Users` (username, password) VALUES ('Brianne', '1234');
INSERT INTO `Users` (username, password) VALUES ('Charles', '1234');

INSERT INTO `Posts` (title, body, userId) VALUES ('Lorem ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 1);
INSERT INTO `Posts` (title, body, userId) VALUES ('Hello world!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 1);
INSERT INTO `Posts` (title, body, userId) VALUES ('Hello world!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 2);
INSERT INTO `Posts` (title, body, userId) VALUES ('Hello world!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 3);

INSERT INTO `movie_data` (actionCount, adventureCount, animationCount, comedyCount, crimeCount, documentaryCount, dramaCount, familyCount, fantasyCount, historyCount, horrorCount, musicCount, mysteryCount, romanceCount, scienceFictionCount, tvMovieCount,thrillerCount, warCount, westernCount) VALUES (6, 6, 20, 14, 0, 3, 6, 6, 5, 0, 7, 3, 0, 15, 5, 0, 6, 0, 0);
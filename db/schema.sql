DROP DATABASE IF EXISTS petSitter;
CREATE DATABASE petSitter;

USE petSitter;

CREATE TABLE sitters (

	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
	city varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	years_of_experience int NOT NULL,
	would_sit_dog BOOLEAN NOT NULL,
	would_sit_cat BOOLEAN NOT NULL,
	would_sit_bird BOOLEAN NOT NULL,
	would_sit_snake BOOLEAN NOT NULL,
	additional_comments varchar (280),
	PRIMARY KEY (id)
);

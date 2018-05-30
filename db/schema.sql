DROP DATABASE IF EXISTS petSitter;

CREATE DATABASE petSitter;

USE petSitter;

CREATE TABLE sitters (

	id int NOT NULL AUTO_INCREMENT,
	routeName varchar(50) NOT NULL,
	full_name varchar(50) NOT NULL,
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

CREATE TABLE owners (
	full_name VARCHAR (50) NOT NULL,
	email VARCHAR (50) NOT NULL,
	city VARCHAR (50) NOT NULL,
	have_dog BOOLEAN NOT NULL,
	have_cat BOOLEAN NOT NULL,
	have_bird BOOLEAN NOT NULL,
	have_snake BOOLEAN NOT NULL,
	more_info VARCHAR (500),
	PRIMARY KEY (id)

);

CREATE TABLE users (
 id int(11) NOT NULL AUTO_INCREMENT,
 'email' varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 'password' varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 'created' datetime NOT NULL,
 `modified` datetime NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
	
);






DROP DATABASE IF EXISTS petSitter;

CREATE DATABASE petSitter;

USE petSitter;

CREATE TABLE users (
 	id int NOT NULL AUTO_INCREMENT,
	userfullname varchar (250) NOT NULL,
 	email varchar(100) NOT NULL,
 	thepassword varchar(250) NOT NULL,
	usercity ENUM (Atlanta, Chicago, Los Angeles, New York) NOT NULL,
	ownerorsitter ENUM (Owner, Sitter) NOT NULL,
 	createdAt DATETIME NOT NULL,
 	updatedAt DATETIME NOT NULL,
 	PRIMARY KEY (id)
);

CREATE TABLE pets (

	id int NOT NULL AUTO_INCREMENT,
	routeName varchar(50) NOT NULL,
	foreignkey int NOT NULL,
	name_of_pet varchar(250) NOT NULL,
	type_of_pet ENUM (Dog, Cat, Fish, Reptile, Dartaniel) NOT NULL,
	PRIMARY KEY (id)
);
)


	






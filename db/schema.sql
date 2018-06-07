DROP DATABASE IF EXISTS petSitter;

CREATE DATABASE petSitter;

USE petSitter;

CREATE TABLE allUsers (
 	id int NOT NULL AUTO_INCREMENT,
	-- routeName varchar(50) NOT NULL,
 	email varchar(100) NOT NULL,
 	thepassword varchar(250) NOT NULL,
	userfullname varchar (250) NOT NULL,
	usercity ENUM ('Boston', 'Chicago', 'Los Angeles', 'New York') NOT NULL,
	ownerorsitter ENUM ('Owner', 'Sitter') NOT NULL,
 	createdAt DATETIME NOT NULL,
 	updatedAt DATETIME NOT NULL,
 	PRIMARY KEY (id)
);

CREATE TABLE ownersPets (

	id int NOT NULL AUTO_INCREMENT,
	nameOfpet varchar(250) NOT NULL,
	typeOfpet ENUM ('Dog', 'Cat', 'Fish', 'Reptile', 'Dartaniel') NOT NULL,
	PRIMARY KEY (id)
);



	






// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Pet_sitter = sequelize.define("petsitter", {
  // the routeName gets saved as a string
  routeName: Sequelize.STRING,
  // the name of the character (a string)
  first_name: Sequelize.STRING,
  // the character's role (a string)
  last_name: Sequelize.STRING,

  city: Sequelize.STRING,

  email: Sequelize.STRING,

  years_of_experience: Sequelize.INTEGER,

  would_sit_dog: Sequelize.BOOLEAN,

  would_sit_cat: Selection.BOOLEAN,

  would_sit_bird: Selection.BOOLEAN,

  would_sit_snake: Selection.BOOLEAN,

  additional_comments: Selection.STRING,

}, {
  timestamps: false
});

// Syncs with DB
petSitter.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = petSitter;

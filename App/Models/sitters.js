var Sequelize = require("sequelize");
var sequelize  = require("./../Config/connections")

console.log("hello");

var Sitters = sequelize.define("sitters", {
  routeName: Sequelize.STRING,
  full_name: Sequelize.STRING,
  city: Sequelize.STRING,
  email: Sequelize.STRING,
  years_of_experience: Sequelize.INTEGER,
  would_sit_dog: Sequelize.BOOLEAN,
  would_sit_cat: Sequelize.BOOLEAN,
  would_sit_bird: Sequelize.BOOLEAN,
  would_sit_snake: Sequelize.BOOLEAN,
  additional_comments: Sequelize.STRING,
}, {
  timestamps: false
});

Sitters.sync();

module.exports = Sitters;

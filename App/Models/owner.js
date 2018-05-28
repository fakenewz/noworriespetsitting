var Sequelize = require("sequelize");
var sequelize = require("./../Config/connections")

console.log("hi");

var Owners = sequelize.define("owners", {
  routeName: Sequelize.STRING,
  fullname: Sequelize.STRING,
  place: Sequelize.STRING,
  emailaddress: Sequelize.STRING,
  hasDog: Sequelize.BOOLEAN,
  hasCat: Sequelize.BOOLEAN,
  hasBird: Sequelize.BOOLEAN,
  hasSnake: Sequelize.BOOLEAN,
  moreInformation: Sequelize.STRING,
}, {
  timestamps: false
});

Owners.sync();

module.exports = Owners;
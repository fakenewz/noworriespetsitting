var Sequelize = require("sequelize");
var sequelize = require("./../Config/connections")

console.log("whatup");

var Users = sequelize.define("users", {
  email: Sequelize.STRING,
  thepassword: Sequelize.STRING,
  created: Sequelize.BOOLEAN,
  modified: Sequelize.BOOLEAN,
}, {
  timestamps: false
});

Users.sync();

module.exports = Users;

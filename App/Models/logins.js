var Sequelize = require("sequelize");
var sequelize = require("./../Config/connectionsLogin")

console.log("whatup");

var Users = sequelize.define("users", {
  email: Sequelize.STRING,
  thepassword: Sequelize.INTEGER,
  created: Sequelize.BOOLEAN,
  modified: Sequelize.BOOLEAN,
}, {
  timestamps: false
});

Users.sync();

module.exports = Users;

var Sequelize = require("sequelize");

var sequelizeLogin = new Sequelize("loginDB", "petapp", "noworries", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

console.log("connectedNow");

module.exports = sequelizeLogin;


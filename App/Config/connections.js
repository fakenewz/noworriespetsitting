var Sequelize = require("sequelize");

var sequelize = new Sequelize("petSitter", "petapp", "noworries", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

console.log("connected");

module.exports = sequelize;


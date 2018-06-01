module.exports = function(sequelize, DataTypes) {

var Users = sequelize.define("users", {
  email: {
    notEmpty: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  thepassword: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created: {
    type: DataTypes.BOOLEAN
  },
  modified: {
    type: DataTypes.BOOLEAN
  },
});
 
return Users;
}
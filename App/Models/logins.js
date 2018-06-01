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
  createdAt: {
    type: DataTypes.BOOLEAN
  },
  updatedAt: {
    type: DataTypes.BOOLEAN
  },
}, {
  timestamps: false
});
 
return Users;
}
module.exports = function(sequelize, DataTypes) {

var OwnersDog = sequelize.define("ownersDog", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  routeName: {
    type: DataTypes.STRING
  },
  fullname: {
    notEmpty: true,
    type: DataTypes.STRING
  },
  place: {
    notEmpty: true,
    type: DataTypes.STRING
  },
  emailaddress: {
    notEmpty: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  hasDog: {
    type: DataTypes.BOOLEAN
  },
}, {
  timestamps: false
});

  return OwnersDog;
}
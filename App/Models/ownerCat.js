module.exports = function(sequelize, DataTypes) {

var OwnersCat = sequelize.define("ownersCat", {
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
  hasCat: {
    type: DataTypes.BOOLEAN
  },
}, {
  timestamps: false
});

  return OwnersCat;
}
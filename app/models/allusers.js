module.exports = function(sequelize, DataTypes) {

var allUsers = sequelize.define("allUsers", {
  id: { 
    autoIncrement: true, 
    primaryKey: true, 
    type: DataTypes.INTEGER
  },
  userfullname: {
    type: DataTypes.STRING,
  },
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
  usercity: {
    type: DataTypes.ENUM
},
  ownerorsitter: {
    type: DataTypes.ENUM
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
}, 
}, {
  timestamps: false
});
 
return Users;
}
module.exports = function(sequelize, DataTypes) {

const AllUsers = sequelize.define("AllUsers", {
  id: { 
    autoIncrement: true, 
    primaryKey: true, 
    type: DataTypes.INTEGER
  },
  email: {
    notEmpty: true,
    type: DataTypes.STRING,
    isEmail: {
      msg: "Email address"
   } 
  },
  thepassword: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userfullname: {
    type: DataTypes.STRING,
  },
  usercity: {
    type: DataTypes.ENUM,
    values: ['Boston', 'Chicago', 'Los Angeles', 'New York']
  },
  ownerorsitter: {
    type: DataTypes.ENUM,
    values: ['owner', 'sitter']
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

  // AllUsers.associate = function(models) {
  //   AllUsers.hasMany(models.OwnersPets, {
  //     // onDelete: "cascade"
  //     });
  //   };

  return AllUsers;
 
}

var db = require("../Models");
var passport = require("passport");

module.exports = function(sequelize, DataTypes) {

const AllUsers = sequelize.define("allUsers", {
  id: { 
    autoIncrement: true, 
    primaryKey: true, 
    type: DataTypes.INTEGER
  },
  // routeName: {
  //   type: DataTypes.STRING
  // },
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
return AllUsers;
 
//

const OwnersPets = sequelize.define("ownersPets", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    //  routeName: {
    //   type: DataTypes.STRING
    // },
    nameOfpet: {
      notEmpty: true,
      type: DataTypes.STRING
    },
    typeOfpet: {
      type: DataTypes.ENUM,
      values: ['Dog', 'Cat', 'Fish', 'Reptile', 'Dartaniel']
    },
    allusersId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'allUsers',
        key: 'key'
      }
    }
  }, {
    timestamps: false
  });
  return OwnersPets;

  AllUsers.hasMany(OwnersPets);

}
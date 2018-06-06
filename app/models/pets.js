module.exports = function(sequelize, DataTypes) {

    var ownersPets = sequelize.define("ownersPets", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
       routeName: {
        type: DataTypes.STRING
      },
      foreignKey: {
       // notEmpty: true,
       // type: DataTypes.STRING
      },
      nameOfpet: {
        notEmpty: true,
        type: DataTypes.STRING
      },
      typeOfpet: {
        type: DataTypes.ENUM
      },
      timestamps: false
    });
    
      return ownersPets;
    }
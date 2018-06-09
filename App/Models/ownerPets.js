module.exports = function(sequelize, DataTypes) {

const OwnersPets = sequelize.define("OwnersPets", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nameOfpet: {
    notEmpty: true,
    type: DataTypes.STRING
  },
  typeOfpet: {
    type: DataTypes.ENUM,
    values: ['Dog', 'Cat', 'Fish', 'Reptile', 'Dartaniel']
  },
}, {
  timestamps: false
});

  // OwnersPets.associate = function(models) {

  //   OwnersPets.belongsTo(models.AllUsers, {
  //     foreignKey: {
  //       allowNull: false
  //    }
  //   });
  // };

return OwnersPets;

}
module.exports = function(sequelize, DataTypes) {

var Appointments = sequelize.define("appointments", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  start_date: {
    notEmpty: true,
    type: DataTypes.DATE
  },
  end_date: {
    notEmpty: true,
    type: DataTypes.DATE
  },
  description: {
    type: DataTypes.STRING
  },
}, {
  timestamps: false
});

  return Appointments;
}
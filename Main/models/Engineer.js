const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Engineer extends Model {} 

Engineer.init(
  {
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }, 
    fname: { type: DataTypes.STRING },
    lname: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
    salary: { type: DataTypes.INTEGER},
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Engineer',
    tableName: 'Engineers',
  }
);
module.exports = Engineer;
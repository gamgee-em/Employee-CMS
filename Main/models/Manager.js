const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Employee = require('./Employees');

class Manager extends Model {} 

Manager.init(
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
    salary: { type: DataTypes.DECIMAL(11,2)},
    isbn: { type: DataTypes.STRING },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Manager',
    tableName: 'Managers',
  }
);
module.exports = Employee;
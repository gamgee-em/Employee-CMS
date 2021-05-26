const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    emp_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }, 
    fname: { type: DataTypes.STRING },
    lname: { type: DataTypes.STRING },
    emp_role: { type: DataTypes.STRING },
    emp_salary: { type: DataTypes.INTEGER },
    emp_department: { type: DataTypes.STRING },
    manager_name: { type: DataTypes.STRING },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Employee',
    tableName: 'Employees',
  }
);

module.exports = Employee;
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    id: {
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
    modelName: 'Employee',
    tableName: 'Employees',
  }
);

/* const Employee = sequelize.define('Employee',{
    fname: Sequelize.STRING,
    lname: Sequelize.STRING,
    department: Sequelize.STRING,
    role: Sequelize.TEXT,
    salary: Sequelize.INTEGER,
},{
    tableName: 'Employees'
}); */

//! check if code executed
console.log(Employee === sequelize.models.Employee);

module.exports = Employee;
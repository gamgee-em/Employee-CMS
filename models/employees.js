const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      author: {
        type: DataTypes.STRING,
      },
      isbn: {
        type: DataTypes.STRING,
      },
      pages: {
        type: DataTypes.INTEGER,
      },
      edition: {
        type: DataTypes.INTEGER,
      },
      is_paperback: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'employee',
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

module.exports = Employee;
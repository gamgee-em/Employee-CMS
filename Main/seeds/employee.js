const sequelize = require('../config/connection');
const Employee = require('../models/employees');
const employeeSeedData = require('./employeeSeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = () => {
    sequelize.sync({ force: true }).then(() => {
      console.log('All Seeds Planted');
      Employee.bulkCreate(employeeSeedData);
  });
  process.exit(0);
};

seedDatabase();

module.exports = seedDatabase;
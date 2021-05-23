const sequelize = require('../config/connection');
const Employee = require('../models/employees');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// TODO Use async / await to Refactor the seedDatabase function below
const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    Employee.bulkCreate(employeeSeedData);
    console.log('All Seeds Planted');
    /* .then(() => {
      Library.bulkCreate(librarySeedData).then(() => {
        console.log('All Seeds Planted');
      });
    }); */
  });

  process.exit(0);
};

seedDatabase();

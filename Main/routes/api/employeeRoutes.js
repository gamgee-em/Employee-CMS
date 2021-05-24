const router = require('express').Router();
// Import the model
const Employee = require('../../models/Employees');

// GET an employee
router.get('/', async (req,res) => {
    const employeeData = await Employee().findAll()
        .catch(err => res.json(err));
    res.json(employeeData);
});

// CREATE a employee
router.post('/', (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table
  Employee.create({
    fname: req.body.fname,
    lname: req.body.lname,
    role: true,
    salary: req.body.salary
  }) // Send the newly created row as a JSON object
    .then(newEmployee => res.json(newEmployee))
    .catch(err => res.json(err));
});

// CREATE multiple employees
router.post('/seed', (req, res) => {
  // Multiple rows can be created with `bulkCreate()` and an array
  // This could also be moved to a separate Node.js script to ensure it only happens once
  Employee.bulkCreate([
    {
      fname: 'Sam',
      lname: 'Em',
      role: 'Engineer',
      salary: 336000.03,
      isbn: 1,
    },
    {
      fname: 'Thao',
      lname: 'Em',
      role: 'Manager',
      salary: 111000.02,
      isbn: 2,
    },

  ])
    .then(() => {
      res.send('Database seeded!');
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
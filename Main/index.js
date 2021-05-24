const { questions, actionQ, empGenQ, managerQ } = require('./models/Questions');
const inquirer = require('inquirer');
const Employee = require('./models/Employees');
const sequelize = require('./config/connection');
const cTable = require('console.table');
const PORT = process.env.PORT || 3001;

// IIFE starts application when node index.js is ran 
// turn on connection to db and server
//? alter: true/false or force: true/false
(async() => await sequelize.authenticate({ force: true })
  .then(() => {
    console.log('Server listening on PORT:', PORT)
    initApp();
    //app.listen(PORT, () => console.log('Server listening on PORT:', PORT));
}))().catch(err => err);

const initApp = () => {
    inquirer.prompt(actionQ)
        .then((answers) => {
            switch(answers.action) {
                case 'Add Department':
                    renderDepartment();
                break;
                case 'Add Employee':
                    renderEmployee(answers);
                    break;
                case 'View All Employees':
                    displayEmployees();
                    break;
                case 'Quit':
                    sequelize.close();
                    break;
                default:
                    sequelize.close();
            };
        });
};

let newEmp;
const renderEmployee = (answers) => {
    inquirer.prompt(empGenQ)
    .then((answers) => {
        console.log(answers);
        newEmp = Employee.create({
            fname: answers.emp_fname,
            lname: answers.emp_lname,
            emp_role: answers.emp_role,
            manager_name: answers.manager_name
        });
    });
};

const displayEmployees = async(answers) => {
    console.log(newEmp)
    //const newEmp = await Employee.findAll();
    //console.table('Employees', ['emp_id','fname', 'lname', 'emp_role', 'manager_name']);
};

const renderEmpRole = () => {
    inquirer.prompt(empTypeQ)
}

const renderEngineer = () => {
    inquirer.prompt(engineerQ)
        .then((answers) => {

        })
};

const renderManager = () => {
    inquirer.prompt(managerQ)
        .then((answers) => {

        })
};

module.exports = initApp;
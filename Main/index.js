const { questions, actionQ, empGenQ, managerQ } = require('./models/Questions');
const inquirer = require('inquirer');
const Employee = require('./models/Employees');
const Manager = require('./models/Manager');
const Engineer = require('./models/Engineer');
const sequelize = require('./config/connection');
const cTable = require('console.table');
const { init } = require('./models/Employees');
const PORT = process.env.PORT || 3001;

// IIFE starts application when node index.js is ran 
(async() => await sequelize.sync({ force: true })
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
                    renderEmployee();
                    break;
                case 'Add Manager':
                    renderManager();
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
        newEmp = Employee.create({
            fname: answers.emp_fname,
            lname: answers.emp_lname,
            emp_role: answers.emp_role,
            emp_salary: answers.emp_salary,
            manager_name: answers.manager_name
        });
        initApp();
    });
};

const displayEmployees = async(answers) => {
    newEmp = await Employee.findAll({raw: true});
    console.table(newEmp);
    initApp();
};

const renderEngineer = () => {
    inquirer.prompt(engineerQ)
        .then((answers) => {
            newEngineer = Engineer.create({
                fname: answers.emp_fname,
                lname: answers.emp_lname,
                emp_role: answers.emp_role,
                emp_salary: answers.emp_salary,
                manager_name: answers.manager_name
            });
            initApp();
        });
};

const renderManager = () => {
    inquirer.prompt(managerQ)
        .then((answers) => {
            newManager = Manager.create({
                fname: answers.emp_fname,
                lname: answers.emp_lname,
                emp_role: answers.emp_role,
                emp_salary: answers.emp_salary,
                manager_name: answers.manager_name
            });
            initApp();
        });
};

const removeEmployee = () => {

}

module.exports = initApp;
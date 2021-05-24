const { questions, action, empType } = require('./models/Questions');
const inquirer = require('inquirer');
const Employee = require('./models/Employees');
const seedDataBase = require('./seeds/employee');

// IIFE starts application when node index.js is ran 
(init = () => {
    inquirer.prompt(action)
        .then((answers) => {
            console.log('Answers:', answers);
            switch(answers.action) {
                case 'Add Departments':
                    console.log('Add Department');
                break;
                case 'Add Employee(s)':
                    console.log('Add Employee(s)');
                    employeeType();
                    //Employee.create(answers.action)
                break;
            }
        })
    })();

/* const init = () => {

} */

const employeeType = () => {
    inquirer.prompt(empType)
    .then((answers) => {
        console.log('Answers.empType:', answers.emp_type);
        switch(answers.emp_type) {
            case 'Engineer':
                seedDataBase();
            break;
            case 'Manager':
                console.log('Answers.emptype:', answers.emp_type);
            break;
        };
    });
};
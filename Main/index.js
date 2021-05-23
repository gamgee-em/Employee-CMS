const {action, questions} = require('./models/Questions');
const inquirer = require('inquirer');
const Employee = require('./models/Employees');

(() => inquirer.prompt(action)
        .then((answers) => {
            console.log(answers);
            switch(answers.action) {
                case 'Add Departments':
                    Employee.create(answers.action)
                    console.log('Add Department');
                break;
                case 'Add Employee(s)':
                    console.log('Add Employee(s)');
                break;
            }
        })
)();
const {action, questions} = require('./models/Questions');
const inquirer = require('inquirer');

(() => inquirer.prompt(action)
            .then((answers) => {
                console.log(answers);
                switch(answers.action) {
                    case 'Add Departments':
                        console.log('Add Department');
                    break;
                    case 'Add Employee(s)':
                        console.log('Add Employee(s)');
                    break;
                }
            })
)();
/* const action = (answers) => {
    inquirer.prompt([
      {
        name: 'action',
        message: 'Please select an option',
        type: 'list',
        choices: ['Add Departments', 'Add Employee(s)'],
      },
    ]);
  }; */
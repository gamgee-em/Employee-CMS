//const inquirer = requirer('inquire');

const action = [
    {
      name: 'action',
      message: 'Please select an option',
      type: 'list',
      choices: ['Add Departments', 'Add Employee(s)'],
    },
  ];

const employee = (answers) => {
  inquirer.prompt([
    {
      name: 'emp_type',
      message: 'Which type of Employee would you like to add?',
      type: 'list',
      choices: ['Manager', 'Engineer'],
    },
  ]);
};

module.exports = {
    action, 
    employee
};

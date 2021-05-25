const actionQ = [
    {
      name: 'action',
      message: 'Please select an option',
      type: 'list',
      choices: [
        'Add Department', 
        'Add Employee',
        'Add Manager',
        'View All Employees',
        'Remove an Employee',
        'Quit',
      ],
    },
];

const empGenQ = [
  {
    name: 'emp_fname',
    message: 'Enter first name:',
    type: 'input'
  },
  {
    name: 'emp_lname',
    message: 'Enter last name:',
    type: 'input'
  },
  {
    name: 'emp_role',
    message: 'What is their role?',
    type: 'list',
    choices: ['Engineer', 'Manager'],
  },
  {
    name: 'emp_salary',
    message: 'Enter employee annual salary:',
    type: 'input',
  },
  {
    name: 'manager_name',
    message: 'Who is their manager?',
    type: 'list',
    choices: ['Jenna Smith', 'George Bunts']
  }
];

const managerQ = [
    {
      name: 'manager_fname',
      message: 'Enter the managers first name:',
      type: 'input',
    },
    {
      name: 'manager_lname',
      message: 'Enter the managers last name:',
      type: 'input',
    },
    {
      name: 'manager_salary',
      message: 'Enter the managers salary:',
      type: 'input',
    }
];

const engineerQ = [
  {
    name: 'engineer_salary',
    message: 'Enter annual salary:',
    type: 'input',
  }
]

module.exports = {
    actionQ, 
    managerQ,
    empGenQ
};

const action = [
    {
      name: 'action',
      message: 'Please select an option',
      type: 'list',
      choices: ['Add Departments', 'Add Employee(s)'],
    },
  ];

const empType = [
    {
      name: 'emp_type',
      message: 'Which type of Employee would you like to add?',
      type: 'list',
      choices: ['Engineer', 'Manager'],
    },
  ];

module.exports = {
    action, 
    empType
};

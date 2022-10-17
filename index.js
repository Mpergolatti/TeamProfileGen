const generateHTML = require('./src/generateHTML');

// employee profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const employeeArray = [];

// Manager array

const addManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter manager name: '
    },

    {
      type: 'input',
      name: 'id',
      message: 'Please enter manager ID: '

    },

    {
      type: 'input',
      name: 'email',
      message: 'Please enter manager Email: '

    },

    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter manager office number: '

    },
  ])

  .then(managerInput => {
    const {name, id, email, officeNumber} = managerInput;
    const manager = new Manager (name, id, email, officeNumber);

    employeeArray.push(manager);
      console.log(manager);
  })
};

// Add employee information
const addEmployee = () => {
  console.log(`
  |*******************|
  |    Add Employee   |
  |*******************|
  `);

  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: 'Please enter employee role: ',
      choices: ['Engineer', 'Intern']
    },

    {
      type: 'input',
      name: 'name',
      message: 'Please enter employee name: '

    },

    {
      type: 'input',
      name: 'id',
      message: 'Please enter employee ID: '

    },

    {
      type: 'input',
      name: 'email',
      message: 'Please enter employee Email: '

    },

    {
      type: 'input',
      name: 'github',
      message: 'Please enter employee gitHub username: ',
      when: (input) => input.role === 'Engineer'     

    },

    {
      type: 'input',
      name: 'school',
      message: 'Please enter intern school name: ',
      when: (input) => input.role === 'Intern'

    },

    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another employee? ',
      default: false

    }
  ])

  // Employee Data Type Information
  .then(employeeData => {
    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
    let employee;

    if (role === "Engineer") {
      employee = new Engineer (name, id, email, github);

      console.log(employee);

    } else if (role === "Intern") {
      employee = new Intern (name, id, email, school);

      console.log(employee);

    }

    employeeArray.push(employee);

    if(confirmAddEmployee) {
      return addEmployee(employeeArray);
    } else {
        return employeeArray;
    }
  })

};

// Generates HTML using fs
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {

    if (err) {
      console.log(err);
      return;
    } else {
      console.log('Your team profile has been created, check index.html');
    }
  })
};

addManager()
  .then(addEmployee)
  .then(employeeArray => {
    return generateHTML(employeeArray);
  })
  
  .then(pageHTML => {
    return writeFile(pageHTML);
  })

  .catch(err => {
    console.log(err);
  });
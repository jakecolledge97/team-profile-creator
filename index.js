const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const createEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Employees name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the employees ID',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is the employees email?',
            name: 'email'
        }
    ])
}

const createManager = () => {
    createEmployee()
    .then((answers) => {
        const manager = new Employee(answers.name, answers.id, answers.email)
        console.log(manager)
    });
}

createManager()


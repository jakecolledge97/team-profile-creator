//call all 'requires'
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Skeleton = require('./lib/skeleton.js')

//creates standard employee
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

//creates managing employee
const createManager = () => {
    //prompts the terminal
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the managers name?',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'What is the managers ID?',
            name: 'managerId'
        },
        {
            type: 'input',
            message: 'What is the managers email?',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'What is the managers running office?',
            name: 'managerOffice'
        }
    ])
    //returns prompt answers
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
        
        const skeleton = new Skeleton(manager.createHtml())
        console.log(skeleton.createDiv())
    });
}

//calls create manager function
createManager()


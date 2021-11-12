//call all 'requires'
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Skeleton = require('./lib/skeleton.js')

const employeeList = []

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
        employeeList.push(skeleton)
    });
}

//calls create manager function
async function init() {
    let addEmployee = true;
    await createManager()
    console.log(employeeList)
    while(addEmployee){
        await inquirer.prompt([
            {
                type: 'list',
                message: 'Add another employee?',
                choices: ['Engineer', 'Intern', 'None'],
                name: 'addEmployee'
            }
        ])
        .then((answers) => {
            if(answers.addEmployee === "Engineer"){

            }else if(answers.addEmployee === "Intern"){

            }else{
                addEmployee = false
            }
        })
    }
     
}

init()




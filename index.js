//call all 'requires'
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const Skeleton = require('./lib/skeleton.js')

const employeeList = []

//creates managing employee
const createManager = async () => {
    //prompts the terminal
    const answers = await inquirer.prompt([
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
    ]);
    //creates a manager
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
    //creates card info with manager details
    const skeleton = new Skeleton(manager.createHtml());
    //creates a column with card
    const newColumn = skeleton.createDiv()
    //pushed to an employee list
    employeeList.push(newColumn);
}

//starts the application
async function init() {
    //boolean for while loop
    let addEmployee = true;
    //calls create manager
    await createManager()
    
    //while loop to check whether to add more employees
    while(addEmployee){
        //logs current employee
        //console.log(employeeList)
        //prompts user to check which employee to add next
        await inquirer.prompt([
            {
                type: 'list',
                message: 'Add another employee?',
                choices: ['Engineer', 'Intern', 'None'],
                name: 'addEmployee'
            }
        ])
        //answers for employee
        .then(async (answers) => {
            //checks if adding engineer || intern || or none
            if(answers.addEmployee === "Engineer"){
                await inquirer.prompt([
                    {
                        type: 'input',
                        message: 'What is the Engineers name?',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineers id?',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineers Email?',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'What is the Engineers github page?',
                        name: 'github'
                    }
                ])
                .then((answers) => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                    const skeleton = new Skeleton(engineer.createHtml())
                    const newColumn = skeleton.createDiv()
                    employeeList.push(newColumn)
                })
                
            }else if(answers.addEmployee === "Intern"){
                await inquirer.prompt([
                    {
                        type: 'input',
                        message: 'What is the Interns name?',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'What is the Interns id?',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'What is the Interns Email?',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'What is the Interns schools name?',
                        name: 'school'
                    }
                ])
                .then((answers) => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                    const skeleton = new Skeleton(intern.createHtml())
                    const newColumn = skeleton.createDiv()
                    employeeList.push(newColumn)
                })

            }else{
                console.log(employeeList)
                const skeleton = new Skeleton(...employeeList)
                console.log(...employeeList)
                const newHtml = skeleton.createHtmlPage()
                fs.appendFile('index.html', newHtml, (err) => err ? console.error(err) : console.log('Commit logged!'))
                addEmployee = false
            }
        })
    }
     
}

//starts app
init()




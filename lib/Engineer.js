const inquirer = require('inquirer');
const Employee = require('./Employee');

//creates engineer employee
class Engineer extends Employee{
    constructor(employeeName, id, email, github){
        super(employeeName, id, email)
        this.github = github;
        
    };
    getGithub(){
        return `<p>${this.github}</p>`
    };
    getRole(){
        return '<p>Engineer</p>'
    };
};

module.exports = Engineer
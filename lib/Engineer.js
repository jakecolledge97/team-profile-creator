const inquirer = require('inquirer');
const Employee = require('./Employee');

//creates engineer employee
class Engineer extends Employee{
    constructor(employeeName, id, email, github){
        super(employeeName, id, email)
        this.github = github;
        
    };
    getGithub(){
        return `${this.github}`
    };
    getRole(){
        return 'Engineer'
    };
    createHtml() {
        return [this.getName(), this.getId(), this.getRole(), this.getEmail(), this.getGithub()] 
    }
};

module.exports = Engineer
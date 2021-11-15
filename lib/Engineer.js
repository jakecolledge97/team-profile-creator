const inquirer = require('inquirer');
const Employee = require('./Employee');

//creates engineer employee
class Engineer extends Employee{
    constructor(employeeName, id, email, github){
        super(employeeName, id, email)
        this.github = github;
        
    };
    getGithub(){
        return `<a href="https://github.com/${this.github} target="_blank">${this.employeeName}'s Github</a>.`
    };
    getRole(){
        return 'Engineer'
    };
    getAvatar(){
        return 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/toolbox_1f9f0.png'
    }
    createHtml() {
        return [this.getName(), this.getId(), this.getRole(), this.getEmail(), this.getAvatar(), this.getGithub()] 
    }
};

module.exports = Engineer
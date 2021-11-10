const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(github){
        super(employeeName, id, email)
        this.github = github;
    };
    getGithub(){

    };
    getRole(){
        return 'Engineer'
    };
};
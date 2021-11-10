const Employee = require('./Employee');

//creates engineer employee
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
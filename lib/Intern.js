const Employee = require('./Employee');

//creates intern employee
class Intern extends Employee {
    constructor(school){
        super(employeeName, id, email);
        this.school = school;
    };
    getSchool(){

    };
    getRole(){
        return 'Intern'
    };
};
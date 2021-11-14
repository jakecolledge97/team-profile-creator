const Employee = require('./Employee');

//creates intern employee
class Intern extends Employee {
    constructor(employeeName, id, email, school){
        super(employeeName, id, email);
        this.school = school;
    };
    getSchool(){
        return `${this.school}`
    };
    getRole(){
        return 'Intern'
    };
    createHtml() {
        return [this.getName(), this.getId(), this.getRole(), this.getEmail(), this.getSchool()] 
    }
};

module.exports = Intern;
const Employee = require('./Employee');

//creates intern employee
class Intern extends Employee {
    constructor(employeeName, id, email, school){
        super(employeeName, id, email);
        this.school = school;
    };
    getSchool(){
        return `<h1>${this.school}</h1>`
    };
    getRole(){
        return '<p>Intern</p>'
    };
    createHtml() {
        return this.getName() + this.getId() + this.getEmail() + this.getRole() + this.getSchool()
    }
};

module.exports = Intern;
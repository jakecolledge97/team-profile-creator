const Employee = require('./Employee');

//creates intern employee
class Intern extends Employee {
    constructor(employeeName, id, email, school){
        super(employeeName, id, email);
        this.school = school;
    };
    getSchool(){
        return `<p>School: ${this.school}</p>`
    };
    getRole(){
        return 'Intern'
    };
    getAvatar(){
        return 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/books_1f4da.png'
    }
    createHtml() {
        return [this.getName(), this.getId(), this.getRole(), this.getEmail(), this.getAvatar() ,this.getSchool()] 
    }
};

module.exports = Intern;
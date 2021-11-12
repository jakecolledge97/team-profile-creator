const inquirer = require('inquirer');

//creates base employee
class Employee {
    constructor(employeeName, id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }
    //creates standard employee
    getName() {
        return `<h1>${this.employeeName}</h1>`
    };
    getId() {
        return `<p>${this.id}</p>`
    };
    getEmail() {
        return `<p>${this.email}</p>`
    };
    getRole() {
        return '<p>Employee</p>'
    };
    createHtml() {
        return this.getName() + this.getId() + this.getEmail() + this.getRole()
    }
}

module.exports = Employee;
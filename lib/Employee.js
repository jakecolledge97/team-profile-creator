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
        return `${this.employeeName}`
    };
    getId() {
        return `${this.id}`
    };
    getEmail() {
        return `${this.email}`
    };
    getRole() {
        return 'Employee'
    };
    createHtml() {
        return [this.getName(), this.getId(), this.getRole(), this.getEmail()]
    }
}

module.exports = Employee;
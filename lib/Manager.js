const Employee = require('./Employee');

//creates managing employee
class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber){

        super(employeeName, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return '<p>Manager</p>';
    }
    createHtml() {
        return this.getName() + this.getId() + this.getEmail() + this.getRole()
    }
}

module.exports = Manager;
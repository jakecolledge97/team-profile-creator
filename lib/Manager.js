const Employee = require('./Employee');

//creates managing employee
class Manager extends Employee {
    constructor(employeeName, id, email, officeNumber){

        super(employeeName, id, email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
    createHtml() {
        return [this.getName(), this.getId(), this.getRole(),this.getEmail()]
    }
}

module.exports = Manager;
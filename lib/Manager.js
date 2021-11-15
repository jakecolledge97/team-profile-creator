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
    getAvatar(){
        return 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/office-building_1f3e2.png'
    }
    getOffice(){
        return `<p>Managing office numer: ${this.officeNumber}`
    }
    createHtml() {
        return [this.getName(), this.getId(), this.getRole(),this.getEmail(),this.getAvatar(),this.getOffice()]
    }
}

module.exports = Manager;
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officenumber) {
        super(name, id, email)
        this.officenumber = officenumber
    }

    getOfficenumber(){
        return this.officenumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
// function Manager(name, id, email, officeNumber) {
//     this.name = 'name';
//     this.id= 'id';
//     this.email = 'email';
//     this.officeNumber = 'officeNumber';
// }

// Manager.prototype.getName = function() {

// }

// Manager.prototype.getId = function() {

// }

// Manager.prototype.getEmail = function() {

// }

// Manager.prototype.getRole = function() {
//     return `The role of ${this.name} is Manager.`
// };


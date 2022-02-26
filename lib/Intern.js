const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email, "Intern")
        this.school = school
    }

    getSchool() {
        return this.school;
    }
}
module.exports = Intern;
// function Intern(name, id, email) {
//     this.name = 'name';
//     this.id= 'id';
//     this.email = 'email';
//     this.school = 'school';
// }

// Intern.prototype.getName = function() {

// }

// Intern.prototype.getId = function() {

// }

// Intern.prototype.getEmail = function() {

// }

// Intern.prototype.getRole = function() {
//     return `The role of ${this.name} is Intern.`
// };

// Intern.prototype.getSchool = function() {
//     return `The intern goes to ${this.school}.`
// }
// ;

const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer")
        this.github = github
    }
    
    getGithub() {
        return this.github;
    }
}
// var emp =[]
// var kevin = new Engineer(answers.name, "7", "KevenEleven@gmail.com", "KevenEleven")
// emp.push(patrice)
// console.table(kevin)
module.exports = Engineer;
// function Employee(name, id, email, github) {
//     this.name = name;
//     this.id= id;
//     this.email = email;
//     this.github = github;
// }

// Engineer.prototype.getName = function() {

// }

// Engineer.prototype.getId = function() {

// }

// Engineer.prototype.getEmail = function() {

// }

// Engineer.prototype.getRole = function() {
//     return `The role of ${this.name} is Engineer.`
// };

// Engineer.prototype.getGithub = function() {
//     return `The github username is ${this.github}`
// }
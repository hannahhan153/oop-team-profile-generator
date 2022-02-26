class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }
}





// function Employee(eggplant, id, email) {
//     this.name = eggplant;
//     this.id = id;
//     this.email = email;
// }

// Employee.prototype.getName = function () {

// }

// Employee.prototype.getId = function () {

// }

// Employee.prototype.getEmail = function () {

// }

// Employee.prototype.getRole = function () {
//     return `The role of ${this.name} is Employee.`
// };

var kevin = new Employee("Kevin", "7", "KevenEleven@gmail.com")
// console.table(kevin)

module.exports = Employee;
const Employee = require("./Employee");

  class Intern extends Employee{
      constructor(name, id, email, school) {
          super(name, id, email, "Intern")
          this.school = school
      }

      getSchool() {
          return this.school;
      }
      getRole() {
          return "Intern";
      }
  }

// class intern {
//     constructor(name, id, email, role) {
//         intern.name = name;
//         intern.id = id;
//         intern.email = email;
//         intern.role = role;
//     }

//     getName() {
//         return intern.name
//     }

//     getId() {
//         return intern.id
//     }

//     getEmail() {
//         return intern.email
//     }

//     getRole() {
//         return 'Intern';
//     }
// }
module.exports = Intern;

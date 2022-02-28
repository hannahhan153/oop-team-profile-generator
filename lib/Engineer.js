const Employee = require('./Employee')

class Engineer extends Employee{
      constructor(name, id, email, github) {
          super(name, id, email, "Engineer")
          this.github = github
      }
    
      getGithub() {
          return this.github;
      }

      getRole() {
          return 'Engineer';
      }
  }
//   class engineer {
//       constructor(name, id, email, role) {
//         engineer.name = name;
//         engineer.id = id;
//         engineer.email = email;
//         engineer.role = role;
//         engineer.github = github;
//     }
//     getGithub() {
//         return this.github;
//     }

//     getName() {
//         return engineer.name
//     }

//     getId() {
//         return engineer.id
//     }

//     getEmail() {
//         return engineer.email
//     }

//     getRole() {
//         return 'Engineer';
//     }
// }

module.exports = Engineer;

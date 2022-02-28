const Employee = require('./Employee');

class Manager extends Employee{
      constructor(name, id, email, officenumber) {
          super(name, id, email, "Manager")
          this.officenumber = officenumber
      }

      getOfficenumber(){
          return this.officenumber;
      }
      getRole() {
          return "Manager";
      }
  }

// class manager {
//     constructor(name, id, email, role) {
//         manager.name = name;
//         manager.id = id;
//         manager.email = email;
//         manager.role = role;
//         manager.officenumber = officenumber
//     }

//     getName() {
//         return manager.name
//     }

//     getId() {
//         return manager.id
//     }

//     getEmail() {
//         return manager.email
//     }

//     getOfficenumber(){
//         return manager.officenumber;
//     }
//     getRole() {
//         return 'Manager'
//     }
// }
module.exports = Manager;



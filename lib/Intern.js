const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, role, school, email) {
    super(name, id, email);
    this.school = school;
    this.role = role;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
module.exports = Intern;

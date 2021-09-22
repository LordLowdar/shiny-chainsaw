const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, role, github, email) {
    super(name, id, email);
    this.github = github;
    this.role = role;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;

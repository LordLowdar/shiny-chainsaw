const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, github, email) {
    super(name, id, email);
    this.github = github;
    this.role = 'Engineer';
  }
  getGithub() {
    return this.github;
  }
}
module.exports = Engineer;

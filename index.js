const iq = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/templateLanding");
const generateAllMembers = require("./src/card");
const newHtml = require("./src/newGenerate");

const managerPrompt = [
  {
    type: "input",
    message: "What is your team Managers name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is the Managers ID number?",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is the Managers Email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is the Managers office number?",
    name: "office",
  },
];

const continuePrompt = [
  {
    type: "confirm",
    name: "team",
    message: "Do you have more members?",
  },
];

const teamPrompt = [
  {
    type: "list",
    name: "team",
    message: "What other members do you need?",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    message: "What is your employees name?",
    name: "employeeName",
  },
  {
    type: "input",
    message: "What is the employee ID number?",
    name: "employeeId",
  },
  {
    type: "input",
    message: "What is the employee Email?",
    name: "employeeEmail",
  },
  {
    type: "input",
    message: "What is their Github Username?",
    name: "github",
    when(status) {
      let validate = "Engineer";
      return status.team && status.team.includes(validate);
    },
  },
  {
    type: "input",
    message: "What is their School name?",
    name: "school",
    when(status) {
      let validate = "Intern";
      return status.team && status.team.includes(validate);
    },
  },
  {
    type: "confirm",
    message: "Are you done adding memembers?",
    name: "done",
    // when(status) {
    //   let validate = "Done";
    //   return status.team && status.team.includes(validate);
    // },
  },
];

var teamMembers = [];

const init = async () => {
  const res = await iq.prompt(managerPrompt);

  const manager = new Manager(
    res.managerName,
    res.managerId,
    res.managerEmail,
    "Manager",
    res.office
  );
  teamMembers.push(manager);
  carryOn();
};

const carryOn = async () => {
  const res = await iq.prompt(continuePrompt);

  if (res.team) {
    teamInfo();
  } else {
    newHtml(teamMembers);
  }
};

const teamInfo = async () => {
  const res = await iq.prompt(teamPrompt);
  console.log(res);
  if (res.team === "Engineer") {
    console.log(res);
    console.log("LOOK");
    const engi = new Engineer(
      res.employeeName,
      res.employeeId,
      res.team,
      res.github,
      res.employeeEmail
    );
    teamMembers.push(engi);
  }
  if (res.team === "Intern") {
    const intern = new Intern(
      res.employeeName,
      res.employeeId,
      res.team,
      res.school,
      res.employeeEmail
    );
    teamMembers.push(intern);
  }

  if (res.done) {
    newHtml(teamMembers);
  } else {
    teamInfo();
  }
};

init();

const iq = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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

const teamPrompt = [
  {
    type: "list",
    name: "team",
    message: "What other members do you need?",
    choices: ["Engineer", "Intern", "Done"],
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
    when(status) {
      let validate = "Done";
      return status.team && status.team.includes(validate);
    },
  },
];

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<title>Team Builder</title>
</head>
<body>
<div class="card" style="width: 18rem;">
<div class="card-body">
<h1 class="display-2">${answers.name}</h1>
<p class="card-text">Get a snapshot about me!</p>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">I am from ${response.managerName}</li>
<li class="list-group-item">In my spare time I ${response.name}</li>
<li class="list-group-item">My Favorite animal is ${response.animal}</li>
</ul>
<div class="card-body">
<a href="${response.gitHub}" class="card-link" target="_blank">Here's my GitHub!</a>
<a href="${response.linkedIn}" class="card-link" target="_blank">And my LinkedIn!</a>
</div>
</div>
</body>
</html>`;

var teamMembers = [];

const init = async () => {
  const res = await iq.prompt(managerPrompt);
  console.log(res);
  const manager = new Manager(
    res.managerName,
    res.managerId,
    res.managerEmail,
    res.office
  );
  teamMembers.push(manager);

  teamInfo();
};

const teamInfo = async () => {
  const res = await iq.prompt(teamPrompt);
  console.log(res);
  if (res.team === "Engineer") {
    const engineer = new Engineer(
      res.employeeName,
      res.employeeId,
      res.employeeEmail,
      res.team,
      res.git
    );
    teamMembers.push(engineer);
  }
  if (res.team === "Intern") {
    const intern = new Intern(
      res.employeeName,
      res.employeeId,
      res.employeeEmail,
      res.team,
      res.school
    );
    teamMembers.push(intern);
  }

  if (res.team == "Done") {
    console.log("Done");
    //Write file here
  } else {
    console.log("broken");
  }
};

init();
// iq.prompt(managerPrompt)
//   .then(
//     iq.prompt(teamPrompt).then((response) => {
//       console.log(response);
//     })
//   );

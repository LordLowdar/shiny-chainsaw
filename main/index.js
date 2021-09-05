const inq = require("inquirer");
const fs = require("fs");

inq
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username",
    },
    {
      type: "input",
      message: "Where are you from?",
      name: "location",
    },
    {
      type: "input",
      message: "What do you do in your spare time?",
      name: "whatDo",
    },
    {
      type: "input",
      message: "Whats your favorite animal?",
      name: "animal",
    },
    {
      type: "input",
      message: "LinkedIn URL?",
      name: "linkedIn",
    },
    {
      type: "input",
      message: "GitHub URL?",
      name: "gitHub",
    },
  ])
  .then(function (response) {
    var html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<title>Document</title>
</head>
<body>
<div class="card" style="width: 18rem;">
<div class="card-body">
<h1 class="display-2">${response.username}</h1>
    <p class="card-text">Get a snapshot about me!</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">I am from ${response.location}</li>
    <li class="list-group-item">In my spare time I ${response.whatDo}</li>
    <li class="list-group-item">My Favorite animal is ${response.animal}</li>
  </ul>
  <div class="card-body">
    <a href="${response.gitHub}" class="card-link" target="_blank">Here's my GitHub!</a>
    <a href="${response.linkedIn}" class="card-link" target="_blank">And my LinkedIn!</a>
  </div>
</div>
</body>
</html>`;

    fs.writeFile("index.html", html, (err) => {
      if (err) throw err;
    });
  });

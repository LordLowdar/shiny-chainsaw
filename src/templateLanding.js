const generateMembers = require("./card");
const fs = require("fs");
const generateHTML = (answers) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<title>Team Builder</title>
</head>
<body>
${generateMembers(answers)}

</body>
</html>`;

  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) throw err;
  });
};
module.exports = generateHTML;

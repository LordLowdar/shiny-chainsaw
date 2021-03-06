const generateAllMembers = require("./card");

function newHtml(data) {
  var dochead = `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<title>Team Builder</title>
</head>
<body>
<header>
${generateAllMembers(data)}
</body>
</html>`;
  var closing = ``;
  console.log(data);
  console.log("new data here");
  data.forEach((element) => {
    const { name, id, email, office } = element;
    console.log(name);

  });
}

module.exports = newHtml;

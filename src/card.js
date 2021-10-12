const generateMembers = function (employee) {
  return `<div class="card">
  <div class="card-body">
  <h2>${employee.name}</h2>
  <h1>${employee.id}</h1>
  <h1>Email: <a href="mailto:${employee.email}">${employee.email}</a></h1>
  <h2>${employee.role}</h2>
  <h3 style="margin-bottom:${employee.office ? 0.5 : 0}">${
    employee.office ? employee.office : ''
  }</h3>
  <h3 style="margin-bottom:${
    employee.github ? 0.5 : 0
  }"><a href="https://github.com/${employee.github}" target="_blank">${
    employee.github ? employee.github : ''
  }</a></h3>
  <h3 style="margin-bottom:${employee.school ? 0.5 : 0}">${
    employee.school ? employee.school : ''
  }</h3>
  </div>
  </div>`;
};
function generateAllMembers(employees) {
  var cardsArray = employees.map((element) => {
   return generateMembers(element);
  });
  console.log(cardsArray)
  return cardsArray.join("");
}

module.exports = generateAllMembers;

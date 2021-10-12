const generateMembers = function (employee) {
  return `<div>
  <h2>${employee.name}</h2>
  <h1>${employee.id}</h1>
  <h1>${employee.email}</h1>
  <h2>${employee.role}</h2>
  <h3 style="margin-bottom:${employee.office ? .5 : 0}">${employee.office ? employee.office : ""}</h3>
  <h3 style="margin-bottom:${employee.github ? .5 : 0}">${employee.github ? employee.github : ""}</h3>
  <h3 style="margin-bottom:${employee.school ? .5 : 0}">${employee.school ? employee.school : ""}</h3>
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

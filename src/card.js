const generateMembers = function (employee) {
  return `<div>
  <h2>${employee.name}</h2>
  <h3>${employee.id}</h3>
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

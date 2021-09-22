const generateMembers = function (employee) {
  const empName = JSON.stringify(employee.name);
  `<div>
  <h2>${empName}</h2>
  </div>`;
};
function generateAllMembers(employees) {
  employees.forEach((element) => {
    generateMembers(element);
  });
  return employees.join("");
}

module.exports = generateAllMembers;

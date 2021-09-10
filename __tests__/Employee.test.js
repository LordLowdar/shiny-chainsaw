const Employee = require("../lib/Employee");

describe("Employee Init", function () {
  it("Checking for property accuracy", function () {
    const testEmp = new Employee("Thomas", 2, "Tdog@gmail.com");
    expect(testEmp.name).toEqual("Thomas");
    expect(testEmp.id).toEqual(2);
    expect(testEmp.email).toEqual("Tdog@gmail.com");
  });
  it("Checking for getName method", function () {
    const testEmp = new Employee("Thomas", 2, "Tdog@gmail.com");
    expect(testEmp.getName()).toEqual("Thomas");
  });
  it("Checking for getRole method", function () {
    const testEmp = new Employee("Thomas", 2, "Tdog@gmail.com");
    expect(testEmp.getRole()).toEqual("Employee");
  });
});

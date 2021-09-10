const Manager = require("../lib/Manager");

describe("Validate Manager", function () {
  it("Check to see if employee is also manager", function () {
    const testManager = new Manager("Vic", 1, "Vic@gmail.com", 121);
    expect(testManager.office).toEqual(121);
  });
  it("Checking for manager role override", function () {
    const testManager = new Manager("Vic", 1, "Vic@gmail.com", 121);
    expect(testManager.getRole()).toEqual("Manager");
  });
});

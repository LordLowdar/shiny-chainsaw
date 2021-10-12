const Engineer = require("../lib/Engineer");

describe("Validate Engineer", function () {
  it("Check to see if employee is an engineer", function () {
    const testEngineer = new Engineer(
      "John",
      7,
      "Githubby",
      "Yaboyjohn@gmail.com"
    );
    expect(testEngineer.github).toEqual("Githubby");
  });
  it("Check for engineer role override", function () {
    const testEngineer = new Engineer(
      "John",
      7,
      "Githubby",
      "Yaboyjohn@gmail.com"
    );
    expect(testEngineer.getRole()).toEqual("Engineer");
  });
});

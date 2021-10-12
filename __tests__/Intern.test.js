const Intern = require("../lib/Intern");

describe("Validate Intern", function () {
  it("Check to see if employee is an intern", function () {
    const testIntern = new Intern('Julian', 27, 'UC Davis', 'Jay@gmail.com');
    expect(testIntern.school).toEqual("UC Davis");
  });
  it("Check for intern role override", function () {
    const testIntern = new Intern("Julian", 27, "UC Davis", "Jay@gmail.com");
    expect(testIntern.getRole()).toEqual("Intern");
  });
});

const Intern = require('../lib/Intern');

test("Can set school via constructor", () => {
  const testValue = "UNC";
  const test = new Intern("mike", 1, "test@test.com", testValue);
  expect(test.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const test = new Intern("mike", 1, "test@test.com", "UNC");
  expect(test.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UNC";
  const test = new Intern("mike", 1, "test@test.com", testValue);
  expect(test.getSchool()).toBe(testValue);
});


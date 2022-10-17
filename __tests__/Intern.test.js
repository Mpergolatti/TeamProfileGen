const Intern = require('../lib/Intern');

test("school constructor", () => {
  const testValue = "UNC";
  const test = new Intern("mike", 1, "test@test.com", testValue);
  expect(test.school).toBe(testValue);
});

test("getRole()returns intern", () => {
  const testValue = "Intern";
  const test = new Intern("mike", 1, "test@test.com", "UNC");
  expect(test.getRole()).toBe(testValue);
});

test("school gets getSchool()", () => {
  const testValue = "UNC";
  const test = new Intern("mike", 1, "test@test.com", testValue);
  expect(test.getSchool()).toBe(testValue);
});


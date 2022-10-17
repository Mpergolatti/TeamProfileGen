const Manager = require("../lib/Manager");
// const Employee = require("../lib/Employee");

test("office number constructor", () => {
  const testValue = 100;
  const test = new Manager("mike", 1, "test@test.com", testValue);
  expect(test.officeNumber).toBe(testValue);
});

test('getRole() returns manager', () => {
  const testValue = "Manager";
  const test = new Manager("mike", 1, "test@test.com", 100);
  expect(test.getRole()).toBe(testValue);
});

test("office gets getOffice()", () => {
  const testValue = 100;
  const test = new Manager("mike", 1, "test@test.com", testValue);
  expect(test.getOfficeNumber()).toBe(testValue);
});
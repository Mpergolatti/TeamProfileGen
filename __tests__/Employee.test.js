const Employee = require("../lib/Employee");

  test("Start employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

  test("name constructor argument", () => {
    const name = "Greg";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  test("id constructor argument", () => {
    const test = 100;
    const employee = new Employee("mike", test);
    expect(employee.id).toBe(test);
  });

  test("email constructor argument", () => {
    const test = "test@test.com";
    const employee = new Employee("mike", 1, test);
    expect(employee.email).toBe(test);
  });

  test("name from getName()", () => {
    const test = "Greg";
    const employee = new Employee(test);
    expect(employee.getName()).toBe(test);
  });

  test("id from getId()", () => {
    const test = 100;
    const employee = new Employee("mike", test);
    expect(employee.getId()).toBe(test);
  });

  test("email from getEmail()", () => {
    const test = "test@test.com";
    const employee = new Employee("mike", 1, test);
    expect(employee.getEmail()).toBe(test);
  });

  test("getRole() returns Employee", () => {
    const test = "Employee";
    const employee = new Employee("Greg", 1, "test@test.com");
    expect(employee.getRole()).toBe(test);
  });
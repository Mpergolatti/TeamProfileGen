const Employee = require("../lib/Employee");

  test("Start employee", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

  test("name constructor argument", () => {
    const name = "Alice";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  test("id constructor argument", () => {
    const empTest = 100;
    const employee = new Employee("mike", empTest);
    expect(employee.id).toBe(empTest);
  });

  test("email constructor argument", () => {
    const empTest = "test@test.com";
    const employee = new Employee("mike", 1, empTest);
    expect(employee.email).toBe(empTest);
  });

  test("name from getName()", () => {
    const empTest = "Alice";
    const employee = new Employee(empTest);
    expect(employee.getName()).toBe(empTest);
  });

  test("id from getId()", () => {
    const empTest = 100;
    const employee = new Employee("mike", empTest);
    expect(employee.getId()).toBe(empTest);
  });

  test("email from getEmail()", () => {
    const empTest = "test@test.com";
    const employee = new Employee("mike", 1, empTest);
    expect(employee.getEmail()).toBe(empTest);
  });

  test("getRole() returns Employee", () => {
    const empTest = "Employee";
    const employee = new Employee("Alice", 1, "test@test.com");
    expect(employee.getRole()).toBe(empTest);
  });
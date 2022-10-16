const Engineer = require("../lib/Engineer");

test("gitHub constructor argument", () => {
  const testValue = "GitHubUser";
  const test = new Engineer("mike", 1, "test@test.com", testValue);
  expect(test.github).toBe(testValue);
});

test("getRole() returns engineer", () => {
  const testValue = "Engineer";
  const test = new Engineer("mike", 1, "test@test.com", "GitHubUser");
  expect(test.getRole()).toBe(testValue);
});

test("gitHub retrieves getGitHub", () => {
  const testValue = "GitHubUser";
  const test = new Engineer("mike", 1, "test@test.com", testValue);
  expect(test.getGithub()).toBe(testValue);
});
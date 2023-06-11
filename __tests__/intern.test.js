const Intern = require("../lib/intern");

describe("Intern class", () => {
  it("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");
  });

  it("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Intern(name);
    expect(e.name).toBe(name);
  });

  it("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.id).toBe(testValue);
  });

  it("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });

  it("Can set school name via constructor argument", () => {
    const testValue = "SchoolName";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
  });

  it("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Intern(testValue);
    expect(e.getName()).toBe(testValue);
  });

  it("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });

  it("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  it("Can get school name via getSchool()", () => {
    const testValue = "SchoolName";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });

  it("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Alice", 1, "test@test.com", "School");
    expect(e.getRole()).toBe(testValue);
  });
});
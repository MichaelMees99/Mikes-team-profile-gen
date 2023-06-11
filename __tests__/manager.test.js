const Manager = require("../lib/manager");

describe("Manager class", () => {
  it("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");
  });

  it("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Manager(name);
    expect(e.name).toBe(name);
  });

  it("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.id).toBe(testValue);
  });

  it("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });

  it("Can set office number via constructor argument", () => {
    const testValue = 123;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });

  it("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Manager(testValue);
    expect(e.getName()).toBe(testValue);
  });

  it("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });

  it("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  it("Can get office number directly", () => {
    const testValue = 123;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });

  it("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Alice", 1, "test@test.com", 123);
    expect(e.getRole()).toBe(testValue);
  });
});







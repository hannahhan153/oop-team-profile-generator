const Employee = require("../lib/Employee")

test("test employee data type", () => {
    const employee = new Employee('Kevin');

    expect(employee.name).toBe('Kevin')
})


test("test employee id", () => {
    const test = 100;
    const kevin = new Employee('kevin', test);
    expect(kevin.id).toBe((test))
})

test("test employee email", () => {
    const test = 'employee@gmail.com'
    const kevin = new Employee('kevin', 1, test);
    expect(kevin.email).toBe(test)
})

test('get employee as role', () => {
    const test = 'Employee'
    const kevin = new Employee('kevin', 1, 'employee@gmail.com', test);
    expect(kevin.getRole()).toBe(test);
})

const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test('creates intern object', () => {
    const intern = new Intern('joseph')

    expect(intern.name).toBe('joseph');
})

test('tests school name', () => {
    const test = 'Columbia'
    const joseph = new Intern('joseph', 1, 'intern@gmail.com', test)
    expect(joseph.school).toBe(test);
})

test('get school', () => {
    const test = 'Columbia'
    const joseph = new Intern('joseph', 1, 'intern@gmail.com', test)
    expect(joseph.getSchool()).toBe(test);
})

test('get intern as role', () => {
    const test = 'Intern'
    const joseph = new Intern('joseph', 1, 'intern@gmail.com', 'Columbia', test)
    expect(joseph.getRole()).toBe(test)
})
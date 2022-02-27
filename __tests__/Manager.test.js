

const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('creates manager object', () => {
    const manager = new Manager('Esther');

    expect(manager.name).toBe('Esther');
})

test('test office number', () => {
    const test = 100
    
    const esther = new Manager('esther', 1, 'manager@gmail.com', test)
    expect(esther.officenumber).toBe(test)
})

test('get office number', () => {
    const test = 100

    const esther = new Manager('esther', 1, 'manager@gmail.com', test)
    expect(esther.getOfficenumber()).toBe(test)
})

test('get manager as role', () => {
    const test = "Manager"

    const esther = new Manager('esther', 1, 'manager@gmail.com', 100, test)
    expect(esther.getRole()).toBe(test)
})
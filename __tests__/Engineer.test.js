
const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('James');

    expect(engineer.name).toBe('James');
})

test('test github account', () => {
    const test = 'github account'
    const james = new Engineer('james', 1, 'engineer@gmail.com', test)
    expect(james.github).toBe(test)
})

test ('get github account', () => {
    const test = 'github account'
    const james = new Engineer('james', 1, 'engineer@gmail.com', test)
    expect(james.getGithub()).toBe(test)
})

test('get engineer as role', () => {
    const test = 'Engineer'
    const james = new Engineer('james', 1, 'engineer@gmail.com', 'github account', test)
    expect(james.getRole()).toBe(test)
})
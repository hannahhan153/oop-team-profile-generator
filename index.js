const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const path1 = path.resolve(__dirname, 'dist');
const path2 = path.join(path1, 'index.html');

const template = require('./src/page-template');
const {
    name
} = require('ci-info');
const {
    listenerCount
} = require('process');

var profilesArray = [];
var idArray = [];

// emptyArray.push
// function initPage() {

//     function profileManager() {

inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "What is the manager's name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the team's manager's name.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID? (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the ID of the manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the email address of the manager? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter the email address of the manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOfficenumber',
        message: 'What is the office number of the manager? (Required)',
        validate: officenumberInput => {
            if (officenumberInput) {
                return true;
            } else {
                console.log('Please enter the office number of the manager.');
                return false;
            }
        }
    }
]).then(input => {
    const manager = new Manager(input.name, input.id, input.email, input.officenumber);
    profilesArray.push(manager);
    idArray.push(input.id)
    generateProfile();
});

function generateProfile() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'chooseEmployee',
            message: 'Who would you like to add next to your team?',
            choices: ['Engineer', 'Intern',"None"
        ]
    }
    ]).then(teamChoose => {
    switch (teamChoose.memberChoose) {
        case 'Engineer':
            addEngineer();
            break;
        case 'Intern':
            addIntern();
            break;
        default:
            generateHTML();
    }
})
}
//     }
// }


// initPage();
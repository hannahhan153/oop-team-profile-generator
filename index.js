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

var profileArray = [];
var idArray = [];

// emptyArray.push
function initPage() {

// manager
function addManager() {

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

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficenumber);
        profileArray.push(manager);
        idArray.push(answers.managerId)
        generateProfile();

    });
}
// add to team 
function generateProfile() {
    inquirer.prompt([{
        type: 'list',
        name: 'chooseEmployee',
        message: 'Who would you like to add next to your team?',
        choices: ['Engineer', 'Intern', "None"]
    }]).then(teamChoose => {
        switch (teamChoose.chooseEmployee) {
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
// engineer
function addEngineer() {
    inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name? (Required)",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the team's engineer's name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's ID? (Required)",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log('Please enter the ID of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email address of the engineer? (Required)',
            validate: engineerEmailInput => {
                if (engineerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the email address of the engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the github account name of the engineer? (Required)',
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log('Please enter the git hub account of the engineer.');
                    return false;
                }
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        profileArray.push(engineer);
        idArray.push(answers.engineerId)
        generateProfile();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name? (Required)",
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log("Please enter the team's intern's name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's ID? (Required)",
            validate: internId => {
                if (internId) {
                    return true;
                } else {
                    console.log('Please enter the ID of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the email address of the intern? (Required)',
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log('Please enter the email address of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What is the name of the school that the intern attended? (Required)',
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log('Please enter the school name of the intern.');
                    return false;
                }
            }
        }

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        profileArray.push(intern)
        idArray.push(answers.internId);
        generateProfile();
    });
}

function generateHTML() {
    if (!fs.existsSync(path1)) {
        fs.mkdirSync(path1)
    }
    console.log("Team Profile is Loading...");
    fs.writeFileSync(path2, template(profileArray), "utf-8");

    }

addManager();

}


initPage();


const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const render = require('./src/template');

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const teamMembers = [];
const idArray = [];

function appMenu() {
    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([
            //Name, ID, email address, and office number.
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }, {
                type: "input",
                name: "managerID",
                message: "What is the manager's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }, {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }, {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is manager's office number?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerID);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            //Name, ID, email, and GitHub username.
            {
                type: "input",
                name: "engineerName",
                message: "What is engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }, {
                type: "input",
                name: "engineerID",
                message: "What is the engineer's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }, {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineer's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }, {
                type: "input",
                name: "engineerGithub",
                message: "What is the Github username of the engineer?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerID);
            createTeam();
        });
    }

    function addIntern() {
        inquirer.prompt([
            //Name, ID, Email, School
            {
                type: "input",
                name: "internName",
                message: "What's the name of the intern?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }, 
            {
                type: "input",
                name: "internId",
                message: "What's the ID of the intern?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }, 
            {
                type: "input",
                name: "internEmail",
                message: "What is the email address of the intern?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }, 
            {
                type: "input",
                name: "internSchool",
                message: "What school is the intern from?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        });
    }

    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    createManager();
}

appMenu();
// TODO: Include packages needed for this application
//installed inquirer
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is your Project's Title",
  "Provide the Steps to Install Your Project",
  "Provide instructions and examples for use.",
  "List your collaborators",
  "Choose the type of license you are using",
];

function description(question, motivation, problem, learn) {
  this.question = question;
  this.motivation = motivation;
  this.problem = problem;
  this.learn = learn;
}

const userDescription = new description(
  "Write a description of your project",
  "Include motivation",
  "Include any problems",
  "& what you learned"
);

const generateREADME = ({
  projectTitle,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  questions,
}) => `
# ${projectTitle}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage

${usage}

## Credits

${contributing}

## License

${license}

## Tests

${tests}

## Questions

${questions}
`;

// TODO: Create a function to write README file
function writeToFile(READ, answers) {
  fs.writeFile(READ, answers, (err) => {
    err ? console.log(err) : console.log("Successfully created README!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "projectTitle",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: JSON.stringify(userDescription),
      },
      {
        type: "input",
        name: "installation",
        message: questions[1],
      },
      {
        type: "input",
        name: "usage",
        message: questions[2],
      },
      {
        type: "input",
        name: "usage",
        message: questions[2],
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
      },
      {
        type: "list",
        name: "license",
        choices: ["MIT License", "GNU GPLv3"],
        message: questions[4],
      },
    ])
    .then((answers) => {
      const readmePageContent = generateREADME(answers);
      writeToFile("README.md", readmePageContent);
    });
}

// Function call to initialize app
init();

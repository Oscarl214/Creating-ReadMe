// TODO: Include packages needed for this application
//installed inquirer
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "What is your Project's Title",
  "Provide the Steps to Install Your Project",
  "Provide instructions and examples for use.",
  "List your collaborators",
  "Choose the type of license you are using",
  "What is your email",
  "What is your Github",
  "Describe your project",
];


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
        message: questions[7],
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
        name: "contributing",
        message: questions[3],
      },
      {
        type: "list",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "Apache 2", "BSD", "None"],
        message: questions[4],
      },
      {
        type: "input",
        name: "email",
        message: questions[5],
      },
      {
        type: "input",
        name: "github",
        message: questions[6],
      },
    ])
    .then((answers) => {
      const readmePageContent = generateMarkdown(answers);
      writeToFile("README.md", readmePageContent);
    });

    // markDown.generateMarkdown;
}

// Function call to initialize app
init();

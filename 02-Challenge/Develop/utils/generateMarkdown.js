// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs=require('fs');



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  Project Created By: ${data.github}
## License:
![badge](https://img.shields.io/badge/license-${data.license}-green)
* This application is covered by the ${data.icense} license.  
## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage

${data.usage}

## Credits

${data.contributing}

## Contact
If there are any additional questions regarding the application, you can reach me through the following methods:
- GitHub Profile: ${data.github} (https://github.com/${data.github})
- Email: ${data.mail}

`;
}

module.exports = generateMarkdown;

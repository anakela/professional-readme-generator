// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': 
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'APACHE 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GPL 3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD 3':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license)\n`
  }
  // If there is no license, return an empty string
  return '';
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License  
${renderLicenseBadge(license)}

This project is licensed under the ${license}.`;
  }
  // If there is no license, return an empty string
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projName}

## Description
${data.projDesc}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.licenseList)}
- [Contribution Guidelines](#contribution-guidelines)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.projInstall}

## Usage
${data.projUse}

${renderLicenseSection(data.licenseList)}

## Contribution Guidelines
${data.contGuide}

## Tests
${data.projTest}

## Questions
${data.contact}\n
GitHub: ${data.gitHub}\n
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
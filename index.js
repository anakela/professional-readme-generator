// TODO: Include packages needed for this application
const inquirer = require('Inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your project title?',
        name: 'projName',
        type: 'input',
        default: 'Project Title'
    },
    {
        message: 'Please enter a project description.',
        name: 'projDesc',
        type: 'input',
        default: 'This is a description of my project.'
    },
    {
        message: 'Please provide installation instructions for your project.',
        name: 'projInstall',
        type: 'input',
        default: 'These are instructions for my project installation.'
    },
    {
        message: 'Please provide usage information for your project.',
        name: 'projUse',
        type: 'input',
        default: 'This project is used to...'
    },
    {
        message: 'Please provide contributation guidelines.',
        name: 'contGuide',
        type: 'input',
        default: 'Contribution guidelines should be formatted as ...'
    },
    {
        message: 'How does one test your project?',
        name: 'projTest',
        type: 'input',
        default: 'This is how I would test the project...'
    },
    {
        message: 'Please select a license for your application.',
        name: 'licenseList',
        type: 'list',
        choices: [
            'MIT',
            'APACHE 2.0',
            'GPL 3.0',
            'BSD 3',
            'None'
        ]
    },
    {
        message: 'How should users reach you with questions?',
        name: 'contact',
        type: 'input',
        default: 'Got questions?  The best way to contact me is through GitHub and email.'
    },
    {
        message: 'What is your GitHub username?',
        name: 'gitHub',
        type: 'input',
        default: 'GitHub Username'
    },
    {
        message: 'What is your email address?',
        name: 'email',
        type: 'input',
        default: 'example@example.com'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, markdown) {
    fs.writeFile(fileName, markdown, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Success!');
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
          const markdown = generateMarkdown(answers);
          writeToFile(`generated_readme/README.md`, markdown);
        });
};

// Function call to initialize app
init();

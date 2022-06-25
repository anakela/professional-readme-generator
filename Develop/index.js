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
        default: 'This is how we do iiiiit.'
    },
    {
        message: 'Please provide contributation guidelines.',
        name: 'contGuide',
        type: 'input',
        default: 'You must be this tall to contribute.'
    },
    {
        message: 'How does one test your project?',
        name: 'projTest',
        type: 'input',
        default: 'This is the real test.'
    },
    {
        message: 'Please select a license for your application.',
        name: 'licenseList',
        type: 'list',
        choices: [
            'IBM',
            'ISC',
            'MIT',
            'Mozilla'
        ]
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
function writeToFile(fileName, data) {
    fs.writeFile('README.md', `${data.name}.json`, JSON.stringify(data, null, 2), err => {
        if (err) {
            console.log(err);
        } else {
            
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            
        });
};

// Function call to initialize app
init();

const fs = require('fs');
const shape = require('./Lib/shapes');
const inquirer = require('inquirer');
const questions = [{
    type: 'input',
    name: 'text',
    message: 'Please enter up to 3 characters for a logo:'

}, { type: 'input',
    name: 'textColor',
    message: 'Please enter a color for the letters:',
    choices: ['']
}, {
    type: 'list',
    name: 'shape',
    message:'Please a shape for the logo:',
    choices: ['circle', 'triangle','square']
}, {
    type: 'input',
    name: 'logoColor',
    message:'Please enter a color for the logo:'
}];

function application () {
    inquirer.prompt(questions).then(answers => {
        try {
            fs.writeFileSync("examples/logo.svg", shape(answers))
            console.log("Success! Generated logo.svg")
        } catch (error) {
            console.log(error.message);
        }
    })
}

application();
const fs = require('fs');
const shape = require('./Lib/shapes');
const inquirer = require('inquirer');
const questions = [{
    type: 'input',
    name: 'text',
    message: 'Please enter up to 3 characters for a logo:'

}, { type: 'input',
    name: 'textColor',
    message: 'Please enter a color for the letters:'
}, {
    type: 'list',
    name: 'shape',
    message:'Please a shape for the logo:',
    choice: ['circle', 'triangle','square']
}, {
    type: 'input',
    name: 'logoColor',
    message:'Please enter a color for the logo:'
}]
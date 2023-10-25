const fs = require('fs');
const {Shapes, Circle, Square, Triangle} = require('./Lib/shapes');
const inquirer = require('inquirer');
const Svg = require('./Lib/svg')


const questions = [{
    type: 'input',
    name: 'text',
    message: 'Please enter up to 3 characters for a logo:'

}, { type: 'input',
    name: 'textColor',
    message: 'Please enter a color for the letters:',
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
        
            let shape;
            if (answers.shape === 'triangle') {
                shape = new Triangle()
            } else if (answers.shape === 'square') {
                shape = new Square();
            } else {
                shape = new Circle()
            }
            shape.setColor(answers.logoColor)
            const svg = new Svg;
            svg.setText(answers.textColor, answers.text)
            svg.setShape(shape)
            const logo = svg.render()
            fs.writeFileSync("examples/logo.svg",logo)
            if (err) throw err;
            console.log("Success! Generated logo.svg")
        }) 
    }


application();
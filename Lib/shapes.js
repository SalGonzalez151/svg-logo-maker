const Svg = require("./svg")

//a shapes class with basic parameters to use to extend
class Shapes {
    constructor() {
        this.color = "";
        this.text = "";
        this.textColor = '';
    }
    setColor(color) {
        this.color = color;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(color) {
        this.textColor = color
    }
}

//extends shapes and creates a cirlce if chosen
class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}


//extends shapes and creates a square if chosen
class Square extends Shapes {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}


//extends shapes and creates a triangle if chosen
class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

module.exports = {Shapes, Circle, Square, Triangle};

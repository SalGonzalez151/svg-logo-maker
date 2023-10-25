const {Circle, Square, Triangle} = require('./shapes');

describe('shapes', function () {
    it('should pass when triangle is chosen', function () {
        const shapes = new Triangle()
        
        expect(shapes.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="" />')
    })
    it('should pass when circle is chosen', function () {
        const shapes = new Circle()
        expect(shapes.render()).toEqual('<circle cx="150" cy="100" r="80" fill="" />')
    })
    it('should pass when triangle is chosen', function () {
        const shapes = new Square()
        expect(shapes.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="" />')
    })
})
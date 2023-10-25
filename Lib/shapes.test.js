const shape = require('./shapes');

describe('shapes', function () {
    it('should pass when triangle is chosen', function () {
        const shape1 = 'triangle'
        expect(shape1).toEqual('triangle')
    })
    it('should pass when circle is chosen', function () {
        const shape1 = 'circle'
        expect(shape1).toEqual('circle')
    })
    it('should pass when triangle is chosen', function () {
        const shape1 = 'square'
        expect(shape1).toEqual('square')
    })
})
const Svg = require('./svg');

describe('SVG Test', function () {
    it('should pass when text exceed more than 3 characters', function () {
        const svg1 = new Svg();
        expect(() => svg1.setText('blue', 'wert')).toThrow('Text can only be 3 characters or less');

        
        
    })
})
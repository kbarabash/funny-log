(function() {
    var expect = require('chai').expect;
    var isFunction = require('../../src/utils/is-function');

    describe('is-function.js', function() {
        it('isFunction []', function() {
            expect(isFunction([])).to.be.false;
        });

        it('isFunction {}', function() {
            expect(isFunction({})).to.be.false;
        });

        it('isFunction "test"', function() {
            expect(isFunction('test')).to.be.false;
        });

        it('isFunction function() {}', function() {
            expect(isFunction(function() {})).to.be.true;
        });

        it('isFunction 1', function() {
            expect(isFunction(1)).to.be.false;
        });

        it('isFunction null', function() {
            expect(isFunction(null)).to.be.false;
        });

        it('isFunction undefined', function() {
            expect(isFunction(undefined)).to.be.false;
        });

        it('isFunction true', function() {
            expect(isFunction(true)).to.be.false;
        });

        it('isFunction false', function() {
            expect(isFunction(false)).to.be.false;
        });
    });
})();

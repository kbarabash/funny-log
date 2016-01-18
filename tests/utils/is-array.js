(function() {
    var expect = require('chai').expect;
    var isArray = require('../../src/utils/is-array');

    describe('is-array.js', function() {
        it('isArray []', function() {
            expect(isArray([])).to.be.true;
        });

        it('isArray {}', function() {
            expect(isArray({})).to.be.false;
        });

        it('isArray "test"', function() {
            expect(isArray('test')).to.be.false;
        });

        it('isArray function() {}', function() {
            expect(isArray(function() {})).to.be.false;
        });

        it('isArray 1', function() {
            expect(isArray(1)).to.be.false;
        });

        it('isArray null', function() {
            expect(isArray(null)).to.be.false;
        });

        it('isArray undefined', function() {
            expect(isArray(undefined)).to.be.false;
        });

        it('isArray true', function() {
            expect(isArray(true)).to.be.false;
        });

        it('isArray false', function() {
            expect(isArray(false)).to.be.false;
        });
    });
})();

(function() {
    var expect = require('chai').expect;
    var isUndefined = require('../../src/utils/is-undefined');

    describe('is-undefined.js', function() {
        it('isUndefined []', function() {
            expect(isUndefined([])).to.be.false;
        });

        it('isUndefined {}', function() {
            expect(isUndefined({})).to.be.false;
        });

        it('isUndefined "test"', function() {
            expect(isUndefined('test')).to.be.false;
        });

        it('isUndefined function() {}', function() {
            expect(isUndefined(function() {})).to.be.false;
        });

        it('isUndefined 1', function() {
            expect(isUndefined(1)).to.be.false;
        });

        it('isUndefined null', function() {
            expect(isUndefined(null)).to.be.false;
        });

        it('isUndefined undefined', function() {
            expect(isUndefined(undefined)).to.be.true;
        });

        it('isUndefined true', function() {
            expect(isUndefined(true)).to.be.false;
        });

        it('isUndefined false', function() {
            expect(isUndefined(false)).to.be.false;
        });
    });
})();

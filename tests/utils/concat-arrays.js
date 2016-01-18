(function() {
    var expect = require('chai').expect;
    var concatArrays = require('../../src/utils/concat-arrays');

    describe('concat-arrays.js', function() {
        it('test [] + []', function() {
            expect(concatArrays([], [])).to.be.eql([]);
        });

        it('test [1] + []', function() {
            expect(concatArrays([1], [])).to.be.eql([1]);
        });

        it('test [] + [2]', function() {
            expect(concatArrays([], [2])).to.be.eql([2]);
        });

        it('test [1] + [2]', function() {
            expect(concatArrays([1], [2])).to.be.eql([1, 2]);
        });
    });
})();

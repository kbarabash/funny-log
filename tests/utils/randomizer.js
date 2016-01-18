(function() {
    var expect = require('chai').expect;
    var randomizer = require('../../src/utils/randomizer');

    describe('randomizer.js', function() {
        it('randomizer(0, 0)', function() {
            expect(randomizer(0, 0)).to.be.eql(0);
        });

        it('randomizer(1, 1)', function() {
            expect(randomizer(1, 1)).to.be.eql(1);
        });

        it('randomizer(0, 100)', function() {
            var result = randomizer(0, 100);
            expect(result).to.be.a('number');
            expect(result >= 0).to.be.true;
            expect(result <= 100).to.be.true;
            expect(result).to.be.eql(parseInt(result, 10));
        });

        it('randomizer(9.9, 100)', function() {
            var result = randomizer(9.9, 100);
            expect(result).to.be.a('number');
            expect(result >= 9).to.be.true;
            expect(result <= 100).to.be.true;
            expect(result).to.be.eql(parseInt(result, 10));
        });

        it('randomizer(0, 100.2)', function() {
            var result = randomizer(0, 100.2);
            expect(result).to.be.a('number');
            expect(result >= 0).to.be.true;
            expect(result <= 100.2).to.be.true;
            expect(result).to.be.eql(parseInt(result, 10));
        });

        it('randomizer(1.2, 3.2)', function() {
            var result = randomizer(1.2, 3.2);
            expect(result).to.be.a('number');
            expect(result >= 1).to.be.true;
            expect(result <= 3.2).to.be.true;
            expect(result).to.be.eql(parseInt(result, 10));
        });

        it('randomizer(1.2, 1.2)', function() {
            var result = randomizer(1.2, 1.2);
            expect(result).to.be.a('number');
            expect(result).to.be.eql(1);
        });
    });
})();

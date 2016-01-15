(function() {
    var expect = require('chai').expect;

    describe('init funny-log', function() {
        it('require', function() {
            expect(function() {
                require('../.dist/funny-log');
            }).to.not.throw(Error)
        });

        it('create new instance', function() {
            var FunnyLog = require('../.dist/funny-log');
            expect(FunnyLog).to.be.a('function');

            var funnyLogger = new FunnyLog();
            expect(funnyLogger).to.be.an('object');
        });
    });
})();

(function() {
    var expect = require('chai').expect;
    var sinon = require('sinon');
    var FunnyLog = require('../../.dist/funny-log');

    describe('functions', function() {
        var funnyLogger = null;
        var loggerSpy = null;

        beforeEach(function() {
            loggerSpy = sinon.spy();
            funnyLogger = new FunnyLog();
            funnyLogger.setProvider(loggerSpy);
        });

        afterEach(function() {
            funnyLogger = null;
            loggerSpy = null;
        });

        it('omg',function(){
            funnyLogger.setRandomizer(function() {
                return 0;
            });
            expect(funnyLogger.omg('omg message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('┌༼ ⊘ _ ⊘ ༽┐ omg message');

            funnyLogger.setRandomizer(function() {
                return 1;
            });
            expect(funnyLogger.omg('omg message2')).to.be.eql(funnyLogger);
            expect(loggerSpy.callCount).to.be.eql(2);
            expect(loggerSpy.args[1][0]).to.be.eql('༼ᶿ᷇ཫᶿ᷆༽ omg message2');

        });
    });
})();

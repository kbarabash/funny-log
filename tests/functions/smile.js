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

        it('smile', function() {
            funnyLogger.setRandomizer(function() {
                return 0;
            });
            expect(funnyLogger.smile('smile message2')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('(ツ) smile message2');

            funnyLogger.setRandomizer(function() {
                return 1;
            });
            expect(funnyLogger.smile('smile message2')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledTwice).to.be.true;
            expect(loggerSpy.args[1][0]).to.be.eql('(ღ˘⌣˘ღ) smile message2');

            funnyLogger.setRandomizer(function() {
                return 2;
            });
            expect(funnyLogger.smile('smile message3')).to.be.eql(funnyLogger);
            expect(loggerSpy.callCount).to.be.eql(3);
            expect(loggerSpy.args[2][0]).to.be.eql('( ͡° ͜ʖ ͡°) smile message3');

            funnyLogger.setRandomizer(function() {
                return 3;
            });
            expect(funnyLogger.smile('smile message4')).to.be.eql(funnyLogger);
            expect(loggerSpy.callCount).to.be.eql(4);
            expect(loggerSpy.args[3][0]).to.be.eql('༼ຈل͜ຈ༽ smile message4');
        });
    });
})();

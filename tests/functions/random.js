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

        it('random', function() {
            funnyLogger.setRandomizer(function() {
                return 0;
            });
            expect(funnyLogger.random('random message2')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('☜(ﾟヮﾟ☜) random message2');

            funnyLogger.setRandomizer(function() {
                return 1;
            });
            expect(funnyLogger.random('random message2')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledTwice).to.be.true;
            expect(loggerSpy.args[1][0]).to.be.eql('( ¬‿¬) random message2');

            funnyLogger.setRandomizer(function() {
                return 3;
            });
            expect(funnyLogger.random('random message3')).to.be.eql(funnyLogger);
            expect(loggerSpy.callCount).to.be.eql(3);
            expect(loggerSpy.args[2][0]).to.be.eql('(ノಠ益ಠ)ノ彡┻━┻ random message3');

            funnyLogger.setRandomizer(function() {
                return 9;
            });
            expect(funnyLogger.random('random message4')).to.be.eql(funnyLogger);
            expect(loggerSpy.callCount).to.be.eql(4);
            expect(loggerSpy.args[3][0]).to.be.eql('(ಠ_ಠ) random message4');
        });
    });
})();

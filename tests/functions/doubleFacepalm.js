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

        it('doubleFacepalm',function(){
            expect(funnyLogger.doubleFacepalm('doubleFacepalm message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('(ლ_－)(－_ლ) doubleFacepalm message');
        });
    });
})();

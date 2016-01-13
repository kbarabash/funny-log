var expect = require('chai').expect;

describe('init funny-log', function() {
    it('require', function() {
        expect(function() {
            return require('../.dist/funny-log.js');
        }).to.not.throw(Error)
    });

    it('create new instance', function() {
        var FunnyLog = require('../.dist/funny-log.js');
        expect(FunnyLog).to.be.a('function');

        var funnyLogger = new FunnyLog();
        expect(funnyLogger).to.be.an('object');
    });
});
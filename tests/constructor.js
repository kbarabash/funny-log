(function() {
    var expect = require('chai').expect;
    var sinon = require('sinon');
    var FunnyLog = require('../src/constructor');
    var randomizer = require('../src/utils/randomizer');

    describe('FunnyLog constructor', function() {
        it('on off isOff isOn', function() {
            var fl = new FunnyLog();
            var logger = sinon.spy();
            fl.setProvider(logger);
            fl.haha('test');

            logger = sinon.spy();
            fl.setProvider(logger);
            fl.off();
            fl.haha('test');
            expect(logger.calledOnce).to.be.false;
            expect(fl.isOn()).to.be.false;
            expect(fl.isOff()).to.be.true;

            fl.on();
            fl.haha('test');
            expect(logger.calledOnce).to.be.true;
            expect(fl.isOn()).to.be.true;
            expect(fl.isOff()).to.be.false;
        });

        it('setRandomizer', function() {
            //region throw
            expect(function() {
                return new FunnyLog().setRandomizer(function() {});
            }).to.not.throw(Error);
            expect(function() {
                return new FunnyLog().setRandomizer(undefined);
            }).to.throw(Error);
            expect(function() {
                return new FunnyLog().setRandomizer();
            }).to.throw(Error);
            expect(function() {
                return new FunnyLog().setRandomizer(null);
            }).to.throw(Error);
            expect(function() {
                return new FunnyLog().setRandomizer(1);
            }).to.throw(Error);
            expect(function() {
                return new FunnyLog().setRandomizer('str');
            }).to.throw(Error);
            expect(function() {
                return new FunnyLog().setRandomizer([]);
            }).to.throw(Error);
            expect(function() {
                return new FunnyLog().setRandomizer({});
            }).to.throw(Error);
            expect(function() {
                return new FunnyLog().setRandomizer(true);
            }).to.throw(Error);
            expect(function() {
                return new FunnyLog().setRandomizer(false);
            }).to.throw(Error);
            //endregion

            //region check change
            var chckChange = new FunnyLog();
            var chckChangeTest = function() {
                return 0.1;
            };
            chckChange.setRandomizer(chckChangeTest);
            expect(chckChange.getRandomizer()()).to.be.eql(0.1);
            expect(chckChange.getRandomizer()()).to.be.eql(0.1);
            //endregion

            //region check side-effect
            var fl1 = new FunnyLog();
            var testRandomizer = function() {
                return 0.5;
            };
            fl1.setRandomizer(testRandomizer);
            var newRandom = fl1.getRandomizer();
            expect(newRandom === testRandomizer).to.be.true;
            expect(newRandom === randomizer).to.be.false;
            expect(newRandom()).to.be.eql(0.5);
            expect(newRandom()).to.be.eql(0.5);

            var fl2 = new FunnyLog();
            var newRandom2 = fl2.getRandomizer();
            expect(newRandom2()).to.be.not.eql(0.5);
            expect(newRandom2()).to.be.not.eql(0.5);
            //endregion
        });
    });
})();

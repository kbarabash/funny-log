(function() {
    var expect = require('chai').expect;
    var sinon = require('sinon');
    var FunnyLog = require('../.dist/funny-log');

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

        it('haha', function() {
            expect(funnyLogger.haha('haha message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('☜(ﾟヮﾟ☜) haha message');
        });

        it('goToYourDaddy', function() {
            expect(funnyLogger.goToYourDaddy('goToYourDaddy message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('┌∩┐(◣_◢)┌∩┐ goToYourDaddy message');
        });

        it('angry', function() {
            funnyLogger.setRandomizer(function() {
                return 0;
            });
            expect(funnyLogger.angry('angry message1')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('(ノಠ益ಠ)ノ彡┻━┻ angry message1');

            funnyLogger.setRandomizer(function() {
                return 1;
            });
            expect(funnyLogger.angry('angry message2')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledTwice).to.be.true;
            expect(loggerSpy.args[1][0]).to.be.eql('(ಠ益ಠ) angry message2');

            funnyLogger.setRandomizer(function() {
                return 2;
            });
            expect(funnyLogger.angry('angry message3')).to.be.eql(funnyLogger);
            expect(loggerSpy.callCount).to.be.eql(3);
            expect(loggerSpy.args[2][0]).to.be.eql('(っ-●益●)っ ~~ angry message3');
        });

        it('why', function() {
            expect(funnyLogger.why('why message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('(`◉◞౪◟◉‵) why message');
        });

        it('partyTime', function() {
            expect(funnyLogger.partyTime('partyTime message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('┏(-_-)┛┗(-_-﻿ )┓┗(-_-)┛┏(-_-)┓ partyTime message');
        });

        it('wtf', function() {
            expect(funnyLogger.wtf('wtf message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('(ಠ_ಠ) wtf message');
        });

        it('iAmChampion', function() {
            expect(funnyLogger.iAmChampion('iAmChampion message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('ᕦ(ò_ó*)ᕤ iAmChampion message');
        });

        it('youSoMean', function() {
            expect(funnyLogger.youSoMean('youSoMean message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('(づ｡◕‿‿◕｡)づ youSoMean message');
        });

        it('iDontCare', function() {
            expect(funnyLogger.iDontCare('iDontCare message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('╭∩╮（︶︿︶）╭∩╮ iDontCare message');
        });

        it('hehehe', function() {
            expect(funnyLogger.hehehe('hehehe message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('( ¬‿¬) hehehe message');
        });

        it('allPraiseToHim', function() {
            expect(funnyLogger.allPraiseToHim('allPraiseToHim message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('し(*･∀･)／♡＼(･∀･*)ノ allPraiseToHim message');
        });

        it('mmmOkay', function() {
            expect(funnyLogger.mmmOkay('mmmOkay message')).to.be.eql(funnyLogger);
            expect(loggerSpy.calledOnce).to.be.true;
            expect(loggerSpy.args[0][0]).to.be.eql('༼ ºل͟º ༽ mmmOkay message');
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

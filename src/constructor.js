var FunnyLog = function() {
    var provider = null;
    if (typeof console !== 'undefined') {
        provider = function() {
            return console.log.apply(console, arguments);
        };
    }

    var randomizer = function(min, max) {
        return Math.random() * (max - min) + min;
    };

    this.setRandomizer = function(usrRandomizer) {
        if ('function' !== typeof usrRandomizer) {
            throw new Error('Randomizer has to be a function');
        }
        randomizer = usrRandomizer;
        return this;
    };

    this.setProvider = function(usrProvider) {
        if ('function' !== typeof usrProvider) {
            throw new Error('Provider has to be a function');
        }
        provider = usrProvider;
        return this;
    };

    this.getProvider = function(usrProvider) {
        provider = usrProvider;
        return provider;
    };

    var createLogFunction = function(item, cntx) {
        return function logger(message) {
            if (!provider) {
                return cntx;
            }

            var prefix = item;
            //check isArray
            if (Object.prototype.toString.call(item) === '[object Array]') {
                var index = randomizer(0, item.length - 1);
                prefix = item[index];
            }

            provider(prefix + ' ' + message);
            return cntx;
        };
    };

    (function initLogMethods(cntx) {
        for(var key in CONFIG) {
            cntx[key] = createLogFunction(CONFIG[key], cntx);
        }
    })(this);
};

var FunnyLog = function() {
    var allPrefixes = [];
    var isEnable = true;
    var provider = null;
    if (!isUndefined(console)) {
        provider = function() {
            return console.log.apply(console, arguments);
        };
    }
    var logRandmizer = randomizer;

    //region utils
    var getRandomPrefix = function(prefixes) {
        if (!prefixes.length) {
            return '';
        }
         if (1 === prefixes.length) {
             return prefixes[0];
         }

        var index = logRandmizer(0, prefixes.length - 1);

        return prefixes[index];
    };

    var createLogFunction = function(item, cntx) {
        return function logger(message) {
            if (cntx.isOff()) {
                return this;
            }


            if (!provider) {
                return cntx;
            }

            var prefix = item;
            if (isArray(item)) {
                prefix = getRandomPrefix(item);
            }

            provider(prefix + ' ' + message);
            return cntx;
        };
    };

    var getAllPrefixes = function(CONFIG) {
        var prefixes = [];
        for(var key in CONFIG) {
            if (isArray(CONFIG[key])) {
                prefixes = concatArrays(prefixes, CONFIG[key]);
            } else {
                prefixes.push(CONFIG[key]);
            }
        }
        return prefixes;
    };
    //endregion

    //region randomizer
    this.setRandomizer = function(usrRandomizer) {
        if (!isFunction(usrRandomizer)) {
            throw new Error('Randomizer has to be a function');
        }
        logRandmizer = usrRandomizer;
        return this;
    };

    this.getRandomizer = function() {
        return logRandmizer;
    };
    //endregion

    //region on-off
    this.on = function() {
        isEnable = true;
        return this;
    };

    this.off = function() {
        isEnable = false;
        return this;
    };

    this.isOff = function() {
        return !isEnable;
    };

    this.isOn = function() {
        return isEnable;
    };
    //endregion

    //region provider
    this.setProvider = function(usrProvider) {
        if (!isFunction(usrProvider)) {
            throw new Error('Provider has to be a function');
        }
        provider = usrProvider;
        return this;
    };

    this.getProvider = function(usrProvider) {
        provider = usrProvider;
        return provider;
    };
    //endregion

    this.random = function(message) {
        if (this.isOff()) {
            return this;
        }

        if (!allPrefixes.length) {
            allPrefixes = getAllPrefixes(CONFIG);
        }

        if (!provider) {
            return this;
        }

        var prefix = getRandomPrefix(allPrefixes);
        provider(prefix + ' ' + message);
        return this;
    };

    //init
    (function initLogMethods(cntx) {
        for(var key in CONFIG) {
            cntx[key] = createLogFunction(CONFIG[key], cntx);
        }
    })(this);
};

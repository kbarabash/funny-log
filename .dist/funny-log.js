(function() {
var CONFIG = {
    'haha': "☜(ﾟヮﾟ☜)",
    'hehehe': ["( ¬‿¬)"],
    'goToYourDaddy': "┌∩┐(◣_◢)┌∩┐",
    'angry': ["(ノಠ益ಠ)ノ彡┻━┻", "(ಠ益ಠ)", "(っ-●益●)っ ~~", "(╬ ಠ益ಠ)"],
    'why': "(`◉◞౪◟◉‵)",
    'partyTime': "┏(-_-)┛┗(-_-﻿ )┓┗(-_-)┛┏(-_-)┓",
    'wtf': ["(ಠ_ಠ)","(ง •̀_•́)ง"],
    'iAmChampion': "ᕦ(ò_ó*)ᕤ",
    'youSoMean': "(づ｡◕‿‿◕｡)づ",
    'iDontCare': "╭∩╮（︶︿︶）╭∩╮",
    'allPraiseToHim': "し(*･∀･)／♡＼(･∀･*)ノ",
    'mmmOkay': "༼ ºل͟º ༽",
    'smile': ["(ツ)", "(ღ˘⌣˘ღ)", "( ͡° ͜ʖ ͡°)", "༼ຈل͜ຈ༽"],
    'homer':"(_8(l)",
    'really':"﴾͡๏̯͡๏﴿ O'RLY?",
    'soWhat':["¯\_(ツ)_/¯", "ʅ(｡◔‸◔｡)ʃ"],
    'omg':["┌༼ ⊘ _ ⊘ ༽┐", "༼ᶿ᷇ཫᶿ᷆༽"],
    'noWay':["༼ ಥل͟ಥ ༽"],
    'facepalm':"(－_ლ)",
    'doubleFacepalm':"(ლ_－)(－_ლ)",
    'bender':"|==(̢└͇̅┘͇̅(▤8כ−◦"
};










var _FunnyLog = FunnyLogConstructor = function() {
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



var concatArrays = function(arr1, arr2) {
    for(var i = 0, l = arr2.length; i < l; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
};



var isArray = function(a) {
    return Object.prototype.toString.call(a) === '[object Array]'
};




var isFunction = function(a) {
    return 'function' === typeof a;
};



var isNode = function() {
    return typeof module !== 'undefined'
        && module.exports
        && typeof require === 'function';
};



var isUndefined = function(a) {
    return typeof a === 'undefined';
};



var randomizer = function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};



if (isNode()) {
    module.exports = FunnyLogConstructor;
} else {
    window.FunnyLog = FunnyLogConstructor;
}
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyIsImNvbnN0cnVjdG9yLmpzIiwidXRpbHMvY29uY2F0LWFycmF5cy5qcyIsInV0aWxzL2lzLWFycmF5LmpzIiwidXRpbHMvaXMtZnVuY3Rpb24uanMiLCJ1dGlscy9pcy1ub2RlLmpzIiwidXRpbHMvaXMtdW5kZWZpbmVkLmpzIiwidXRpbHMvcmFuZG9taXplci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJmdW5ueS1sb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ09ORklHID0ge1xuICAgICdoYWhhJzogXCLimJwo776f44Ou776f4picKVwiLFxuICAgICdoZWhlaGUnOiBbXCIoIMKs4oC/wqwpXCJdLFxuICAgICdnb1RvWW91ckRhZGR5JzogXCLilIziiKnilJAo4pejX+KXoinilIziiKnilJBcIixcbiAgICAnYW5ncnknOiBbXCIo44OO4LKg55uK4LKgKeODjuW9oeKUu+KUgeKUu1wiLCBcIijgsqDnm4rgsqApXCIsIFwiKOOBoy3il4/nm4ril48p44GjIH5+XCIsIFwiKOKVrCDgsqDnm4rgsqApXCJdLFxuICAgICd3aHknOiBcIihg4peJ4pee4LGq4pef4peJ4oC1KVwiLFxuICAgICdwYXJ0eVRpbWUnOiBcIuKUjygtXy0p4pSb4pSXKC1fLe+7vyAp4pST4pSXKC1fLSnilJvilI8oLV8tKeKUk1wiLFxuICAgICd3dGYnOiBbXCIo4LKgX+CyoClcIixcIijguIcg4oCizIBf4oCizIEp4LiHXCJdLFxuICAgICdpQW1DaGFtcGlvbic6IFwi4ZWmKMOyX8OzKinhlaRcIixcbiAgICAneW91U29NZWFuJzogXCIo44Gl772h4peV4oC/4oC/4peV772hKeOBpVwiLFxuICAgICdpRG9udENhcmUnOiBcIuKVreKIqeKVru+8iO+4tu+4v++4tu+8ieKVreKIqeKVrlwiLFxuICAgICdhbGxQcmFpc2VUb0hpbSc6IFwi44GXKCrvvaXiiIDvvaUp77yP4pmh77y8KO+9peKIgO+9pSop44OOXCIsXG4gICAgJ21tbU9rYXknOiBcIuC8vCDCutmEzZ/CuiDgvL1cIixcbiAgICAnc21pbGUnOiBbXCIo44OEKVwiLCBcIijhg6bLmOKMo8uY4YOmKVwiLCBcIiggzaHCsCDNnMqWIM2hwrApXCIsIFwi4Ly84LqI2YTNnOC6iOC8vVwiXSxcbiAgICAnaG9tZXInOlwiKF84KGwpXCIsXG4gICAgJ3JlYWxseSc6XCLvtL7NoeC5j8yvzaHguY/vtL8gTydSTFk/XCIsXG4gICAgJ3NvV2hhdCc6W1wiwq9cXF8o44OEKV8vwq9cIiwgXCLKhSjvvaHil5TigLjil5TvvaEpyoNcIl0sXG4gICAgJ29tZyc6W1wi4pSM4Ly8IOKKmCBfIOKKmCDgvL3ilJBcIiwgXCLgvLzhtr/ht4fgvavhtr/ht4bgvL1cIl0sXG4gICAgJ25vV2F5JzpbXCLgvLwg4LKl2YTNn+CypSDgvL1cIl0sXG4gICAgJ2ZhY2VwYWxtJzpcIijvvI1f4YOaKVwiLFxuICAgICdkb3VibGVGYWNlcGFsbSc6XCIo4YOaX++8jSko77yNX+GDmilcIixcbiAgICAnYmVuZGVyJzpcInw9PSjMouKUlMyFzYfilJjNh8yFKOKWpDjXm+KIkuKXplwiXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENPTkZJRztcbiIsInZhciByYW5kb21pemVyID0gcmVxdWlyZSgnLi91dGlscy9yYW5kb21pemVyJyk7XG52YXIgY29uY2F0QXJyYXlzID0gcmVxdWlyZSgnLi91dGlscy9jb25jYXQtYXJyYXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vdXRpbHMvaXMtYXJyYXknKTtcbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi91dGlscy9pcy1mdW5jdGlvbicpO1xudmFyIGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnLi91dGlscy9pcy11bmRlZmluZWQnKTtcbnZhciBDT05GSUcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xuXG52YXIgX0Z1bm55TG9nID0gRnVubnlMb2dDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbGxQcmVmaXhlcyA9IFtdO1xuICAgIHZhciBpc0VuYWJsZSA9IHRydWU7XG4gICAgdmFyIHByb3ZpZGVyID0gbnVsbDtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKGNvbnNvbGUpKSB7XG4gICAgICAgIHByb3ZpZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGxvZ1JhbmRtaXplciA9IHJhbmRvbWl6ZXI7XG5cbiAgICAvL3JlZ2lvbiB1dGlsc1xuICAgIHZhciBnZXRSYW5kb21QcmVmaXggPSBmdW5jdGlvbihwcmVmaXhlcykge1xuICAgICAgICBpZiAoIXByZWZpeGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgICBpZiAoMSA9PT0gcHJlZml4ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgcmV0dXJuIHByZWZpeGVzWzBdO1xuICAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmRleCA9IGxvZ1JhbmRtaXplcigwLCBwcmVmaXhlcy5sZW5ndGggLSAxKTtcblxuICAgICAgICByZXR1cm4gcHJlZml4ZXNbaW5kZXhdO1xuICAgIH07XG5cbiAgICB2YXIgY3JlYXRlTG9nRnVuY3Rpb24gPSBmdW5jdGlvbihpdGVtLCBjbnR4KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBsb2dnZXIobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKGNudHguaXNPZmYoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGlmICghcHJvdmlkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY250eDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGl0ZW07XG4gICAgICAgICAgICBpZiAoaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IGdldFJhbmRvbVByZWZpeChpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvdmlkZXIocHJlZml4ICsgJyAnICsgbWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gY250eDtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgdmFyIGdldEFsbFByZWZpeGVzID0gZnVuY3Rpb24oQ09ORklHKSB7XG4gICAgICAgIHZhciBwcmVmaXhlcyA9IFtdO1xuICAgICAgICBmb3IodmFyIGtleSBpbiBDT05GSUcpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KENPTkZJR1trZXldKSkge1xuICAgICAgICAgICAgICAgIHByZWZpeGVzID0gY29uY2F0QXJyYXlzKHByZWZpeGVzLCBDT05GSUdba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZWZpeGVzLnB1c2goQ09ORklHW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmVmaXhlcztcbiAgICB9O1xuICAgIC8vZW5kcmVnaW9uXG5cbiAgICAvL3JlZ2lvbiByYW5kb21pemVyXG4gICAgdGhpcy5zZXRSYW5kb21pemVyID0gZnVuY3Rpb24odXNyUmFuZG9taXplcikge1xuICAgICAgICBpZiAoIWlzRnVuY3Rpb24odXNyUmFuZG9taXplcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmFuZG9taXplciBoYXMgdG8gYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGxvZ1JhbmRtaXplciA9IHVzclJhbmRvbWl6ZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFJhbmRvbWl6ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGxvZ1JhbmRtaXplcjtcbiAgICB9O1xuICAgIC8vZW5kcmVnaW9uXG5cbiAgICAvL3JlZ2lvbiBvbi1vZmZcbiAgICB0aGlzLm9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIHRoaXMub2ZmID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlzRW5hYmxlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICB0aGlzLmlzT2ZmID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAhaXNFbmFibGU7XG4gICAgfTtcblxuICAgIHRoaXMuaXNPbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXNFbmFibGU7XG4gICAgfTtcbiAgICAvL2VuZHJlZ2lvblxuXG4gICAgLy9yZWdpb24gcHJvdmlkZXJcbiAgICB0aGlzLnNldFByb3ZpZGVyID0gZnVuY3Rpb24odXNyUHJvdmlkZXIpIHtcbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHVzclByb3ZpZGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm92aWRlciBoYXMgdG8gYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHByb3ZpZGVyID0gdXNyUHJvdmlkZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICB0aGlzLmdldFByb3ZpZGVyID0gZnVuY3Rpb24odXNyUHJvdmlkZXIpIHtcbiAgICAgICAgcHJvdmlkZXIgPSB1c3JQcm92aWRlcjtcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyO1xuICAgIH07XG4gICAgLy9lbmRyZWdpb25cblxuICAgIHRoaXMucmFuZG9tID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICBpZiAodGhpcy5pc09mZigpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYWxsUHJlZml4ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBhbGxQcmVmaXhlcyA9IGdldEFsbFByZWZpeGVzKENPTkZJRyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXByb3ZpZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcmVmaXggPSBnZXRSYW5kb21QcmVmaXgoYWxsUHJlZml4ZXMpO1xuICAgICAgICBwcm92aWRlcihwcmVmaXggKyAnICcgKyBtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8vaW5pdFxuICAgIChmdW5jdGlvbiBpbml0TG9nTWV0aG9kcyhjbnR4KSB7XG4gICAgICAgIGZvcih2YXIga2V5IGluIENPTkZJRykge1xuICAgICAgICAgICAgY250eFtrZXldID0gY3JlYXRlTG9nRnVuY3Rpb24oQ09ORklHW2tleV0sIGNudHgpO1xuICAgICAgICB9XG4gICAgfSkodGhpcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9GdW5ueUxvZztcbiIsInZhciBjb25jYXRBcnJheXMgPSBmdW5jdGlvbihhcnIxLCBhcnIyKSB7XG4gICAgZm9yKHZhciBpID0gMCwgbCA9IGFycjIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGFycjEucHVzaChhcnIyW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbmNhdEFycmF5cztcbiIsInZhciBpc0FycmF5ID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPT09ICdbb2JqZWN0IEFycmF5XSdcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuIiwidmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuICdmdW5jdGlvbicgPT09IHR5cGVvZiBhO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwidmFyIGlzTm9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAmJiBtb2R1bGUuZXhwb3J0c1xuICAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOb2RlO1xuIiwidmFyIGlzVW5kZWZpbmVkID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xuIiwidmFyIHJhbmRvbWl6ZXIgPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJhbmRvbWl6ZXI7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

var isNode = function() {
    return typeof module !== 'undefined'
        && module.exports
        && typeof require === 'function';
};

module.exports = isNode;

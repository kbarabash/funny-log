var concatArrays = function(arr1, arr2) {
    for(var i = 0, l = arr2.length; i < l; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
};

module.exports = concatArrays;

const removeFromArray = function(arr, ...items) {
    return arr.filter((i) => !items.includes(i))
};

// Do not edit below this line
module.exports = removeFromArray;

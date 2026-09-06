const reverseString = function(str) {
let res = '';
for (let i = str.length - 1; i >= 0; i--){
    res += str[i]
}
return res
};

// Do not edit below this line
module.exports = reverseString;

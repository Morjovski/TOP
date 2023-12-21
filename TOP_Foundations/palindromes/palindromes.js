const palindromes = function (word) {

    let str = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    console.log(str);

    for (let i = 0; i <= Math.ceil(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    };

    return true;
};

// Do not edit below this line
module.exports = palindromes;
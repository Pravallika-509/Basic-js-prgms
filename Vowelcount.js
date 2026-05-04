//vowel count using function expression
var countVowels = function(str) {
    const vowels = "aeiouAEIOU";
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
};
console.log(countVowels("Hello World"));
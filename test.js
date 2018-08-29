const transliteration = require('transliteration');

console.log(transliteration);
console.log(transliteration.transliterate('你好, world'));
console.log(transliteration.slugify("你好， world"));


function foo(a) {
    var b = a * 2;
    function bar(c) {
        console.log(a, b, c);
    }
    bar(b * 3);
}

foo(2);


for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000)
}

for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000)
    })(i)
}
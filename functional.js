let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
}

// URL生成：命令型バージョン
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// URL生成：関数型バージョン
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// 1単語の文字列抽出；命令型バージョン
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach(function(element) {
        if (element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// 1単語の文字列抽出；関数型バージョン
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum：命令型バージョン
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function(n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum：関数型バージョン
function functionalSum(elements) {
    return elements.reduce((total, n) => { return total += n ; });
}
console.log(functionalSum(numbers));

// lengths：命令型バージョン
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function(element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

// lengths：関数型バージョン
function functionalLengths(elements) {
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));
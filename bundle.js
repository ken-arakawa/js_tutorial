(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("ken-palindrome");

function palindromeTester(event) {
    event.preventDefault();

    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if  (phrase.palindrome()) {
        palindromeResult.innerHTML = `"${phrase.content}"はパリンドロームです！`;
    } else {
        palindromeResult.innerHTML = `"${phrase.content}"はパリンドロームではありません`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function(event) {
        palindromeTester(event);
    });
});
},{"ken-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// reverse()メソッドを定義して全てのStringで使えるようにする
String.prototype.reverse = function () {
    return Array.from(this).reverse().join("");
}

// Phraseオブジェクトを定義する
function Phrase(content) {
    this.content = content;

    // パリンドロームのテスト用に変換したcontentを返す
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    }

    // コンテンツの文字だけを返す
    this.letters = function letters() {
        const lettersRegEx = /[a-z]/gi;
        return (this.content.match(lettersRegEx) || []).join("");
    }

    // パリンドロームならtrueを、違うならfalseを返す
    this.palindrome = function palindrome() {
        if (this.processedContent()) {
            return this.processedContent() === this.processedContent().reverse();
        } else {
            return false;
        }
    }
}
},{}]},{},[1]);

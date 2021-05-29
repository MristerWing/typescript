"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("./range");
var numberArray = [1, 2, 3];
var stringArray = ['a', 'b', 'c'];
var personArray = [{ name: 'Jack' }, { name: 'Bill', age: 33 }];
var arrayLength = function (array) { return array.length; };
var isEmpty = function (array) { return arrayLength(array) === 0; };
console.log(arrayLength(numberArray), arrayLength(stringArray), arrayLength(personArray), isEmpty([]), isEmpty(__spreadArray([], personArray)));
var numbers = range_1.range(1, 100 + 1);
console.log(numbers);
var evenSum = numbers
    .filter(function (x) { return x % 2 === 0; })
    .reduce(function (a, x) { return (a += x); }, 0);
console.log(evenSum);
var squareSum = numbers
    .map(function (x) { return x * x; })
    .reduce(function (a, x) { return a + x; }, 0);
console.log(squareSum);
//# sourceMappingURL=index.js.map
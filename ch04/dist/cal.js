"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cal = void 0;
var cal = function (num, callBack) {
    var add = function (a, b) { return a + b; };
    function multiply(a, b) {
        return a * b;
    }
    var result = multiply(add(1, 2), num);
    callBack(result);
};
exports.cal = cal;
//# sourceMappingURL=cal.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cal_1 = require("./cal");
var high_order_1 = require("./high-order");
var init_1 = require("./init");
var thisIsFunction = function (s, n) {
    console.log(s, n);
};
thisIsFunction('test', 11);
var getAge = function (o) {
    return o.age !== undefined && o.age ? o.age : 0;
};
console.log(getAge({ age: 32 }));
var expression = function (a, b) { return a + b; };
console.log(expression(5, 7));
cal_1.cal(30, function (result) { return console.log(result); });
var fn = high_order_1.add(1);
var result = fn(2);
console.log(result);
console.log(high_order_1.add(1)(2));
init_1.init(function () { return console.log('custom initialzation finished.'); });
var B = /** @class */ (function () {
    function B(value) {
        if (value === void 0) { value = 1; }
        this.value = value;
    }
    B.prototype.method = function () {
        console.log("value is " + this.value);
    };
    return B;
}());
var b = new B(55);
b.method();
//# sourceMappingURL=index.js.map
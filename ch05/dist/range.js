"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
var range = function (from, to) {
    return from < to ? __spreadArray([from], exports.range(from + 1, to)) : [];
};
exports.range = range;
//# sourceMappingURL=range.js.map
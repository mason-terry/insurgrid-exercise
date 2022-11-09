"use strict";
exports.__esModule = true;
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.info = function (logText) {
        console.log("".concat(new Date(), " INFO ").concat(logText));
    };
    Logger.prototype.debug = function (logText) {
        console.log("".concat(new Date(), " DEBUG ").concat(logText));
    };
    Logger.prototype.error = function (logText) {
        console.log("".concat(new Date(), " ERROR ").concat(logText));
    };
    return Logger;
}());
exports.Logger = Logger;

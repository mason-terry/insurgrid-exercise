"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var express = require("express");
var carriers_1 = require("./carriers");
var Routes = /** @class */ (function () {
    function Routes() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    Routes.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    Routes.prototype.routes = function () {
        this.express.use("/carriers", carriers_1["default"]);
    };
    return Routes;
}());
exports["default"] = new Routes().express;

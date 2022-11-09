"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var express = require("express");
var logger_1 = require("../logger/logger");
var Carriers = /** @class */ (function () {
    function Carriers() {
        this.express = express();
        this.middleware();
        this.routes();
        this.carriers = [{ name: "Progressive" }];
        this.logger = new logger_1.Logger();
    }
    // Configure Express middleware.
    Carriers.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    Carriers.prototype.routes = function () {
        var _this = this;
        this.express.get("/carriers", function (req, res, next) {
            _this.logger.info(req.url);
            res.json(_this.carriers);
        });
    };
    return Carriers;
}());
exports["default"] = new Carriers().express;

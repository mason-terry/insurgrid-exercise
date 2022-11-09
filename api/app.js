"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var logger_1 = require("./logger/logger");
var progressive_1 = require("./scripts/progressive");
var App = /** @class */ (function () {
    function App() {
        this.corsOptions = {
            origin: "http://localhost:8080"
        };
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new logger_1.Logger();
    }
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors(this.corsOptions));
    };
    App.prototype.routes = function () {
        var _this = this;
        this.express.get("/healthcheck", function (req, res, next) {
            _this.logger.info(req.url);
            res.send("I'm healthy!");
        });
        // this.express.use("/api", Routes);
        this.express.get("/api/carriers", function (req, res, next) {
            _this.logger.info(req.url);
            res.send([{ id: 1, name: "Progressive" }]);
        });
        this.express.post("/api/carriers/:id/login", function (req, res, next) {
            var _a = req.body, username = _a.username, password = _a.password, url = _a.url;
            _this.logger.info(req.url);
            (0, progressive_1["default"])(url, username, password);
            res.send("Success!");
        });
    };
    return App;
}());
exports["default"] = new App().express;

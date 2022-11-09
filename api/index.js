"use strict";
exports.__esModule = true;
var http = require("http");
var app_1 = require("./app");
var logger_1 = require("./logger/logger");
var PORT = 3000;
app_1["default"].set("port", PORT);
var server = http.createServer(app_1["default"]);
server.listen(PORT);
var logger = new logger_1.Logger();
server.on("listening", function () {
    var addr = server.address();
    var port = typeof addr === "string" ? "pipe ".concat(addr) : "port ".concat(addr.port);
    logger.info("Listening on ".concat(port));
});
module.exports = app_1["default"];

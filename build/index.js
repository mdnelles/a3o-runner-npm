"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var port = process.env.NODE_PORT || 5026;
var server = app_1.default.listen(function () {
    console.log("App is running at http://localhost:".concat(port, " in %s mode"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;

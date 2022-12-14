"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pause = exports.moveNewFiles = exports.bumpNpmVersion = void 0;
//import fs from "fs-extra"
var fs = require('fs-extra');
var shell = require('shelljs');
var bumpNpmVersion = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        fs.readFile("../tmp/anim-3d-obj-npm-publisher/package.json", "utf8", function (err, data) {
                            if (err)
                                throw err;
                            //console.log(data);
                            var newFile = "";
                            var lines = data.split("\n");
                            lines.map(function (d) {
                                if (d.toString().includes("\"version\":")) {
                                    var tmp1 = d.split("\"");
                                    console.log(tmp1[3]);
                                    var tmp2 = tmp1[3].split(".");
                                    var num = parseInt(tmp2[2]) + 1;
                                    var version = "    \"version\": \"".concat(tmp2[0], ".").concat(tmp2[1], ".").concat(num, "\",");
                                    newFile += "\n" + version;
                                }
                                else {
                                    newFile += "\n" + d;
                                }
                            });
                        });
                        resolve(true);
                    }
                    catch (error) {
                        console.log(error);
                        resolve(false);
                    }
                    return [2 /*return*/];
                });
            }); })];
    });
}); };
exports.bumpNpmVersion = bumpNpmVersion;
var moveNewFiles = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
                var error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, shell.exec('rm -rf ../tmp/anim-3d-obj-npm-publisher/src/components')];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, fs.copy('../tmp/anim-3d-obj/src/components', '../tmp/anim-3d-obj-npm-publisher/src/components', function (err) {
                                    if (err) {
                                        console.log("folders move error");
                                        console.log(err);
                                        resolve(false);
                                    }
                                    else {
                                        console.log("folders move success");
                                        resolve(true);
                                    }
                                })];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            resolve(true);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
exports.moveNewFiles = moveNewFiles;
var pause = function (seconds) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    setTimeout(function () {
                        resolve(true);
                    }, seconds * 1000);
                    return [2 /*return*/];
                });
            }); })];
    });
}); };
exports.pause = pause;

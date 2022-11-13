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
exports.hook = void 0;
var shell = require('shelljs');
var env = require("dotenv").config().parsed;
var git_1 = require("../utils/git");
var hook = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 14, , 15]);
                return [4 /*yield*/, shell.exec('rm -rf ../tmp')];
            case 1:
                _a.sent();
                return [4 /*yield*/, shell.exec('mkdir ../tmp')];
            case 2:
                _a.sent();
                return [4 /*yield*/, shell.exec('cd ../tmp && git clone https://github.com/mdnelles/anim-3d-obj.git')];
            case 3:
                _a.sent();
                //await shell.exec('mv anim-3d-obj ../tmp/anim-3d-obj');
                return [4 /*yield*/, shell.exec('cd ../tmp && git clone https://github.com/mdnelles/anim-3d-obj-npm-publisher.git')];
            case 4:
                //await shell.exec('mv anim-3d-obj ../tmp/anim-3d-obj');
                _a.sent();
                //await shell.exec('mv anim-3d-obj-npm-publisher ../tmp/anim-3d-obj-npm-publisher');
                return [4 /*yield*/, (0, git_1.bumpNpmVersion)()];
            case 5:
                //await shell.exec('mv anim-3d-obj-npm-publisher ../tmp/anim-3d-obj-npm-publisher');
                _a.sent();
                return [4 /*yield*/, (0, git_1.moveNewFiles)()];
            case 6:
                _a.sent();
                return [4 /*yield*/, (0, git_1.pause)(1)];
            case 7:
                _a.sent(); // pause 1 second for files to register
                return [4 /*yield*/, shell.exec('npm --prefix ../tmp/anim-3d-obj-npm-publisher/ install')];
            case 8:
                _a.sent();
                return [4 /*yield*/, (0, git_1.pause)(1)];
            case 9:
                _a.sent(); // pause 1 second for files to register
                return [4 /*yield*/, shell.exec('npm --prefix ../tmp/anim-3d-obj-npm-publisher/ run build')];
            case 10:
                _a.sent();
                //await shell.exec(`git --prefix ../tmp/anim-3d-obj push https://mdnelles:${process.env.ACCESS_TOKEN}@github.com/mdnelles/anim-3d-obj.git`);
                return [4 /*yield*/, shell.exec("cd ../tmp/anim-3d-obj-npm-publisher && git add .")];
            case 11:
                //await shell.exec(`git --prefix ../tmp/anim-3d-obj push https://mdnelles:${process.env.ACCESS_TOKEN}@github.com/mdnelles/anim-3d-obj.git`);
                _a.sent();
                return [4 /*yield*/, shell.exec("cd ../tmp/anim-3d-obj-npm-publisher && git commit -m \"auto - update\"")];
            case 12:
                _a.sent();
                return [4 /*yield*/, shell.exec("cd ../tmp/anim-3d-obj-npm-publisher && git push https://mdnelles:".concat(process.env.ACCESS_TOKEN, "@github.com/mdnelles/anim-3d-obj-npm-publisher.git"))];
            case 13:
                _a.sent();
                //await shell.exec('cd ../tmp/anim-3d-obj && ls');
                //git push https://mdnelles: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@github.com/mdnelles/anim-3d-obj.git
                res.json({ status: 201, err: false, msg: "basic api" });
                return [3 /*break*/, 15];
            case 14:
                error_1 = _a.sent();
                res.json({ status: 201, err: true, msg: "basic api", error: error_1 });
                return [3 /*break*/, 15];
            case 15: return [2 /*return*/];
        }
    });
}); };
exports.hook = hook;

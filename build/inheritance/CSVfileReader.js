"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVfileReader = /** @class */ (function () {
    function CSVfileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CSVfileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: "utf-8"
        })
            .split("\n")
            .map(function (row) { return row.split(','); })
            .map(this.parseRow);
    };
    return CSVfileReader;
}());
exports.CSVfileReader = CSVfileReader;

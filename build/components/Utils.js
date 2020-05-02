"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dateStringToDate(dateString) {
    var dateParts = dateString.split('/').map(function (datePart) { return parseInt(datePart); });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
exports.dateStringToDate = dateStringToDate;

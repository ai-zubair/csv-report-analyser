"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./components/MatchReader");
var AppContants_1 = require("./components/AppContants");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
var matchesWon = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if ((match[AppContants_1.MATCH_STATS.HOME_TEAM] === "Man United" && match[AppContants_1.MATCH_STATS.MATCH_RESULT] === AppContants_1.RESULT.HOME_WIN) ||
        (match[AppContants_1.MATCH_STATS.AWAY_TEAM] === "Man United" && match[AppContants_1.MATCH_STATS.MATCH_RESULT] === AppContants_1.RESULT.AWAY_WIN)) {
        matchesWon++;
    }
}
console.log("Man United Won:  ", matchesWon, " matches");

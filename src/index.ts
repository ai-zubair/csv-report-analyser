import { MatchReader } from "./components/MatchReader";
import { MATCH_STATS, RESULT } from "./components/AppContants";

const reader = new MatchReader("football.csv");
reader.read(); 

let matchesWon = 0;
for (const match of reader.data) {
  if((match[MATCH_STATS.HOME_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.HOME_WIN)||
     (match[MATCH_STATS.AWAY_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.AWAY_WIN))
  {
    matchesWon++;
  }
}

console.log("Man United Won:  ",matchesWon," matches");
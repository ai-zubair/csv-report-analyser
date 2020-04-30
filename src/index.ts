import { CSVfileReader } from "./components/CSVfileReader";
import { MATCH_STATS, RESULT } from "./components/AppContants";

const reader = new CSVfileReader("football.csv");
reader.read(); 

let matchesWon = 0;
for (const match of reader.data) {
  if((match[MATCH_STATS.HOME_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.HOME_WIN)||
     (match[MATCH_STATS.AWAY_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.AWAY_WIN))
  {
    matchesWon++;
  }
}

console.log("Man United Won:  ",matchesWon);
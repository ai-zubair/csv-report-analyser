import { CSVfileReader } from "./components/CSVfileReader";
import { MatchReader } from "./components/MatchReader";
import { MATCH_STATS, RESULT } from "./components/AppContants";

const genericReader = new CSVfileReader("football.csv");
const matchReader = new MatchReader(genericReader);
matchReader.load();

let matchesWon = 0;
for (const match of matchReader.parsedData) {
  if((match[MATCH_STATS.HOME_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.HOME_WIN)||
     (match[MATCH_STATS.AWAY_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.AWAY_WIN))
  {
    matchesWon++;
  }
}

console.log("Man United has Won",matchesWon,"matches ");
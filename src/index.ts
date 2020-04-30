import { CSVfileReader } from "./components/CSVfileReader";

const reader = new CSVfileReader("football.csv");
reader.read(); 

enum MATCH_STATS {
  HOME_TEAM     =  1,
  AWAY_TEAM     =  2,
  MATCH_RESULT  =  5
}

enum RESULT{
  HOME_WIN = "H",
  AWAY_WIN = "A",
  DRAW     = "D",
}

let matchesWon = 0;
for (const match of reader.data) {
  if((match[MATCH_STATS.HOME_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.HOME_WIN)||
     (match[MATCH_STATS.AWAY_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.AWAY_WIN))
  {
    matchesWon++;
  }
}

console.log("Man United Won:  ",matchesWon);
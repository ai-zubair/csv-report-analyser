import fs from "fs";

//load and parse
const matches = fs.readFileSync("football.csv",{
  encoding: "utf-8"
})
.split("\n")
.map( matchString => matchString.split(','));

//analyse and report
let matchesWon = 0;

//constants_mapping
// const HOME_TEAM     =  1;
// const AWAY_TEAM     =  2;
// const MATCH_RESULT  =  5;

// const RESULT = {
//   HOME_WIN: "H",
//   AWAY_WIN: "A",
//   DRAW    : "D",
// }

//using enums instead
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

for (const match of matches) {
  if((match[MATCH_STATS.HOME_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.HOME_WIN)||
     (match[MATCH_STATS.AWAY_TEAM] === "Man United" && match[MATCH_STATS.MATCH_RESULT] === RESULT.AWAY_WIN))
  {
    matchesWon++;
  }
}

console.log(matchesWon);
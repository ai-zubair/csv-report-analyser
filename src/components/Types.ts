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

type MatchTuple = [
  Date,
  string,
  string,
  number,
  number,
  RESULT,
  string
];

export { MatchTuple, MATCH_STATS, RESULT };
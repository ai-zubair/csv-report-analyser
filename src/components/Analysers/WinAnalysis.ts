import { Analyser } from "../Summary";
import { MatchTuple, MATCH_STATS, RESULT } from "../Types";

class WinAnalysis implements Analyser{

  constructor(public teamName: string){}

  runAnalysis(matchData: MatchTuple[]): string{
    let teamMatchesWon = 0;
    for (const match of matchData) {
      if((match[MATCH_STATS.HOME_TEAM] === this.teamName && match[MATCH_STATS.MATCH_RESULT] === RESULT.HOME_WIN)||
         (match[MATCH_STATS.AWAY_TEAM] === this.teamName && match[MATCH_STATS.MATCH_RESULT] === RESULT.AWAY_WIN))
      {
        teamMatchesWon++;
      }
    }
    return `Team ${this.teamName} has won ${teamMatchesWon} matches this season.`
  }

}

export { WinAnalysis }
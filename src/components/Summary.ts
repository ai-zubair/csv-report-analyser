import { MatchTuple } from "./Types";
import { ConsoleReport } from "./Reporters/ConsoleReport";
import { WinAnalysis } from "./Analysers/WinAnalysis";

interface Analyser{
  runAnalysis(matchData: MatchTuple[]): string;
}

interface Reporter{
  printReport(analysis: string): void;
}

class Summary{
  matchAnalysis: string = "";

  static createWinConsoleReport(teamname: string): Summary{
    return new Summary(
      new WinAnalysis(teamname),
      new ConsoleReport()
    );
  }

  constructor(
    public analyser: Analyser,
    public reporter: Reporter){}

  analyseAndReport(matchData: MatchTuple[]): void{
    this.matchAnalysis = this.analyser.runAnalysis(matchData);
    this.reporter.printReport(this.matchAnalysis);
  }

}

export { Summary, Analyser, Reporter }
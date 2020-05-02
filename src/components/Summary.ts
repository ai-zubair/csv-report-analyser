import { MatchTuple } from "./Types";

interface Analyser{
  runAnalysis(matchData: MatchTuple[]): string;
}

interface Reporter{
  printReport(analysis: string): void;
}

class Summary{
  matchAnalysis: string = "";

  constructor(
    public analyser: Analyser,
    public reporter: Reporter){}

  analyseAndReport(matchData: MatchTuple[]): void{
    this.matchAnalysis = this.analyser.runAnalysis(matchData);
    this.reporter.printReport(this.matchAnalysis);
  }

}

export { Summary, Analyser, Reporter }
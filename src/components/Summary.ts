import { MatchTuple } from "./Types";

interface Analyser{
  runAnalysis(matchData: MatchTuple[]): string;
}

interface Reporter{
  printReport(analysis: string): void;
}

class Summary{

  constructor(
    public analyser: Analyser,
    public reporter: Reporter){}

}

export { Summary, Analyser, Reporter }
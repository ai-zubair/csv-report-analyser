import { CSVfileReader } from "./components/CSVfileReader";
import { MatchReader } from "./components/MatchReader";
import { Summary } from "./components/Summary";
import { WinAnalysis } from "./components/Analysers/WinAnalysis";
import { ConsoleReport } from "./components/Reporters/ConsoleReport";

const genericReader = new CSVfileReader("football.csv");
const matchReader = new MatchReader(genericReader);
matchReader.load();

const matchAnalyser = new WinAnalysis("Newcastle");
const reporter = new ConsoleReport();
const matchSummary = new Summary(matchAnalyser,reporter);
matchSummary.analyseAndReport(matchReader.parsedData);
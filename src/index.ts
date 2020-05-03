import { CSVfileReader } from "./components/CSVfileReader";
import { MatchReader } from "./components/MatchReader";
import { Summary } from "./components/Summary";
import { WinAnalysis } from "./components/Analysers/WinAnalysis";
import { ConsoleReport } from "./components/Reporters/ConsoleReport";

/* Generically read the data from a csv files into a string[][] */
const dataReader = new CSVfileReader("football.csv");

/* Read the generic csv string[][] into mathc tuples */
const matchReader = new MatchReader(dataReader);
matchReader.load();

/* Create a new analyser */
const matchAnalyser = new WinAnalysis("Newcastle");

/* Create a new reporter */
const matchReporter = new ConsoleReport();

/* Create a new summariser */
const matchSummary = new Summary(matchAnalyser,matchReporter);
matchSummary.analyseAndReport(matchReader.parsedData);